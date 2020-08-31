import Student from '@modules/students/infra/typeorm/entities/Student';
import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';
import {
  Entity,
  Column,
  JoinTable,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('classes')
class Class {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  subject: string;

  @ManyToOne(() => Teacher, teacher => teacher.classes)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => Student)
  @JoinTable()
  students: Student[];

  @UpdateDateColumn()
  updated_at: Date;
}

export default Class;
