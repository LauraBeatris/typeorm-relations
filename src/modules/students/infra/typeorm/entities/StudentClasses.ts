import Class from '@modules/classes/infra/typeorm/entities/Class';
import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Student from './Student';

@Entity('student_classes')
class StudentClasses {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student, student => student.student_classes)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Class, classEntity => classEntity.student_classes)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @Column('uuid')
  student_id: string;

  @Column('uuid')
  class_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default StudentClasses;
