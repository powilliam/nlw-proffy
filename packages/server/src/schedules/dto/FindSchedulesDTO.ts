import { FindManyOptions } from 'typeorm';
import { Schedule } from '../schedules.entity';

export interface FindSchedulesDTO extends FindManyOptions<Schedule> {}
