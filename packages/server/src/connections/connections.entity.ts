import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Teacher } from '../teachers/teachers.entity';

@Entity()
export class Connection {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ManyToOne(() => Teacher, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  public teacher: Teacher;

  @CreateDateColumn({ nullable: false })
  public createdAt: Date;
}
