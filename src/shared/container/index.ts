import { container } from 'tsyringe';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import OrdersRepository from '@modules/orders/infra/typeorm/repositories/OrdersRepository';

import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import StudentsRepository from '@modules/students/infra/typeorm/repositories/StudentsRepository';

import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import TeachersRepository from '@modules/teachers/infra/typeorm/repositories/TeachersRepository';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import ClassesRepository from '@modules/classes/infra/typeorm/repositories/ClassesRepository';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository,
);

container.registerSingleton<ITeachersRepository>(
  'TeachersRepository',
  TeachersRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);
