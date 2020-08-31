import { Router } from 'express';

import customersRouter from '@modules/customers/infra/http/routes/customers.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import ordersRouter from '@modules/orders/infra/http/routes/orders.routes';

import studentsRouter from '@modules/students/infra/http/routes/students.routes';
import teachersRouter from '@modules/teachers/infra/http/routes/teachers.routes';
import classesRouter from '@modules/classes/infra/http/routes/classes.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);

routes.use('/students', studentsRouter);
routes.use('/teachers', teachersRouter);
routes.use('/classes', classesRouter);

export default routes;
