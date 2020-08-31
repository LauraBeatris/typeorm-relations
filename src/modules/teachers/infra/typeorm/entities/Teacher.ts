import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Class from '@modules/classes/infra/typeorm/entities/Class';

@Entity('teachers')
class Teacher {
  @PrimaryGeneratedColumn('uuid')
  name: string;

  @Column('uuid')
  email: string;

  @Column('uuid')
  age: number;

  @OneToMany(() => Class, classRegister => classRegister.teacher)
  classes: Class[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Teacher;
