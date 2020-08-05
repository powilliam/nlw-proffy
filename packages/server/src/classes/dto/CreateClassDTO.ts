export class CreateClassDTO {
  public name: string;
  public avatar: string;
  public whatsapp: string;
  public bio: string;
  public subject: string;
  public cost: number;
  public schedules: {
    weekDay: number;
    from: string;
    to: string;
  }[];
}
