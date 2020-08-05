import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulesService } from './schedules.service';
import { Schedule } from './schedules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  providers: [SchedulesService],
  exports: [TypeOrmModule, SchedulesService],
})
export class SchedulesModule {}
