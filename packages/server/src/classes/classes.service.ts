import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, LessThanOrEqual, MoreThan } from 'typeorm';
import { Class } from './classes.entity';
import { Schedule } from '../schedules/schedules.entity';
import { TeachersService } from '../teachers/teachers.service';
import { SchedulesService } from '../schedules/schedules.service';
import { GetClassesDTO } from './dto/GetClassesDTO';
import { CreateClassDTO } from './dto/CreateClassDTO';
import { convertHourToMinutes } from '../utils';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
    private readonly connection: Connection,
    private readonly teachersService: TeachersService,
    private readonly schedulesService: SchedulesService,
  ) {}

  async get(dto: GetClassesDTO): Promise<Class[]> {
    const formatedDtoTime = convertHourToMinutes(dto.time);

    const availableSchedules = await this.schedulesService.find({
      relations: ['class'],
      where: {
        week_day: Number(dto.week_day),
        from: LessThanOrEqual(formatedDtoTime),
        to: MoreThan(formatedDtoTime),
      },
    });

    const schedulesFilteredBySubject = availableSchedules.filter(
      schedule => schedule.class.subject === dto.subject,
    );

    return schedulesFilteredBySubject.map(schedule => ({
      ...schedule.class,
    }));
  }

  async create(dto: CreateClassDTO): Promise<Class> {
    const { name, bio, avatar, whatsapp, cost, subject, schedules } = dto;

    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const teacher = await this.teachersService.create({
        name,
        bio,
        avatar,
        whatsapp,
      });

      const teacherClass = this.classRepository.create({
        teacher,
        cost,
        subject,
      });
      await this.classRepository.save(teacherClass);

      const formatedSchedules = schedules.map(schedule => ({
        ...schedule,
        class: teacherClass,
      }));
      await this.schedulesService.createMany(formatedSchedules);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException();
    } finally {
      await queryRunner.release();
    }

    return;
  }
}
