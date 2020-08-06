import { Class } from '../../classes/classes.entity';

export class CreateScheduleDTO {
  public week_day: number;
  public from: string;
  public to: string;
  public class: Class;
}
