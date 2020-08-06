export class CreateClassDTO {
  public name: string;
  public avatar: string;
  public whatsapp: string;
  public bio: string;
  public subject: string;
  public cost: number;
  public schedules: {
    week_day: number;
    from: string;
    to: string;
  }[];
}
