import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('students')
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('integer')
  age: number;

  @CreateDateColumn('timestamp')
  created_at: Date;

  @UpdateDateColumn('timestamp')
  updated_at: Date;
}

export default Student;
