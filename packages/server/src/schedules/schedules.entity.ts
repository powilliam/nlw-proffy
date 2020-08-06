import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Class } from '../classes/classes.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: false })
  public week_day: number;

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
