import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './schedules.entity';
import { CreateScheduleDTO } from './dto/CreateScheduleDTO';
import { FindSchedulesDTO } from './dto/FindSchedulesDTO';
import { convertHourToMinutes } from '../utils';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async find(options?: FindSchedulesDTO): Promise<Schedule[]> {
    return await this.scheduleRepository.find(options);
  }

  async create(dto: CreateScheduleDTO): Promise<Schedule> {
    const schedule = this.scheduleRepository.create({
      ...dto,
      to: convertHourToMinutes(dto.to),
      from: convertHourToMinutes(dto.from),
    });
    await this.scheduleRepository.save(schedule);

    return schedule;
  }

  async createMany(dtos: CreateScheduleDTO[]): Promise<Schedule[]> {
    const formatedDtos = dtos.map(dto => ({
      ...dto,
      to: convertHourToMinutes(dto.to),
      from: convertHourToMinutes(dto.from),
    }));
    const schedules = this.scheduleRepository.create(formatedDtos);
    await this.scheduleRepository.save(schedules);

    return schedules;
  }
}
