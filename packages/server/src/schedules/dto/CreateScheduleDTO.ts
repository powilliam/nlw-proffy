import { Class } from '../../classes/classes.entity';

export class CreateScheduleDTO {
  public weekDay: number;
  public from: string;
  public to: string;
  public class: Class;
}
