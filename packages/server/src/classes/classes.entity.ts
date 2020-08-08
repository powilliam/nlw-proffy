import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Teacher } from '../teachers/teachers.entity';
import { Schedule } from '../schedules/schedules.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: false })
  public subject: string;

  @Column({ nullable: false })
  public cost: number;

  @OneToMany(
    () => Schedule,
    schedule => schedule.class,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true },
  )
  public schedules: Schedule[];

  @ManyToOne(() => Teacher, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  public teacher: Teacher;
}
