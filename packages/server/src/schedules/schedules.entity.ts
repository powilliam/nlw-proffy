import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Class } from '../classes/classes.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: false, name: 'week_day' })
  public weekDay: number;

  @Column({ nullable: false })
  public from: number;

  @Column({ nullable: false })
  public to: number;

  @ManyToOne(() => Class, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  public class: Class;
}
