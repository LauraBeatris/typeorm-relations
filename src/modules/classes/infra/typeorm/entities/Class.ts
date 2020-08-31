import Student from '@modules/students/infra/typeorm/entities/Student';
import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';
import {
  Entity,
  Column,
  JoinTable,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('classes')
class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  subject: string;

  @ManyToOne(() => Teacher, teacher => teacher.classes)
  teacher: Teacher;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => Student)
  @JoinTable()
  student: Student;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Class;
