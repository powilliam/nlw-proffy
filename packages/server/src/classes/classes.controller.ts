import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDTO } from './dto/CreateClassDTO';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  async getClasses(
    @Query('week_day') weekDay: number,
    @Query('subject') subject: string,
    @Query('time') time: string,
  ) {
    return await this.classesService.get({
      weekDay,
      subject,
      time,
    });
  }

  @Post()
  async createClass(@Body() dto: CreateClassDTO) {
    return await this.classesService.create(dto);
  }
}
