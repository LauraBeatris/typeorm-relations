import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

class Product {
  id: string;

  name: string;

  price: number;

  quantity: number;

  order_products: OrdersProducts[];

  created_at: Date;

  updated_at: Date;
}

export default Product;
