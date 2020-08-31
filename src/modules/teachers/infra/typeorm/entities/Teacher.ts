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
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('integer')
  age: number;

  @OneToMany(() => Class, classRegister => classRegister.teacher)
  classes: Class[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Teacher;
