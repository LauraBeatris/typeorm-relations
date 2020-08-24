import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

class Customer {
  id: string;

  name: string;

  email: string;

  created_at: Date;

  updated_at: Date;
}

export default Customer;
