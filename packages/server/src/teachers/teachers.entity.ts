import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Class } from '../classes/classes.entity';
import { Connection } from '../connections/connections.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: false })
  public name: string;

  @Column({ nullable: false })
  public bio: string;

  @Column({ nullable: false })
  public avatar: string;

  @Column({ nullable: false })
  public whatsapp: string;

  @OneToMany(
    () => Class,
    Class => Class.teacher,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  public classes: Class[];

  @OneToMany(
    () => Connection,
    connection => connection.teacher,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  public connections: Connection[];
}
