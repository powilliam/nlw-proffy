import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../teachers/teachers.entity';
import { Class } from '../classes/classes.entity';
import { Schedule } from '../schedules/schedules.entity';
import { Connection } from '../connections/connections.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/database/database.sqlite',
      entities: [Teacher, Class, Schedule, Connection],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class DatabaseModule {}
