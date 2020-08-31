import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('teachers')
class Teacher {
  @PrimaryGeneratedColumn('uuid')
  name: string;

  @Column('uuid')
  email: string;

  @Column('uuid')
  age: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Teacher;
