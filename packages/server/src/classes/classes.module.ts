import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesService } from './classes.service';
import { Class } from './classes.entity';
import { ClassesController } from './classes.controller';
import { TeachersModule } from '../teachers/teachers.module';
import { SchedulesModule } from '../schedules/schedules.module';

@Module({
  imports: [TypeOrmModule.forFeature([Class]), TeachersModule, SchedulesModule],
  providers: [ClassesService],
  controllers: [ClassesController],
})
export class ClassesModule {}
