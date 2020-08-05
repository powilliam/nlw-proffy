import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './teachers.entity';
import { CreateTeacherDTO } from './dto/CreateTeacherDTO';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  async findById(id: string): Promise<Teacher> {
    return await this.teacherRepository.findOne(id);
  }

  async create(dto: CreateTeacherDTO): Promise<Teacher> {
    const teacher = this.teacherRepository.create(dto);
    await this.teacherRepository.save(teacher);

    return teacher;
  }
}
