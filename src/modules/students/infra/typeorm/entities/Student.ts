import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import StudentClasses from './StudentClasses';

@Entity('students')
class Student {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('integer')
  age: number;

  @OneToMany(() => StudentClasses, studentClasses => studentClasses.student)
  student_classes: StudentClasses[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Student;
