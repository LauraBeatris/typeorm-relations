import StudentClasses from '@modules/students/infra/typeorm/entities/StudentClasses';
import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => StudentClasses, studentClasses => studentClasses.class, {
    cascade: ['insert'],
  })
  student_classes: StudentClasses[];

  @UpdateDateColumn()
  updated_at: Date;
}

export default Class;
