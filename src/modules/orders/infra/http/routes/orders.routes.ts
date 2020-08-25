import { Router } from 'express';

import OrdersController from '@modules/orders/infra/http/controller/OrdersController';
import createOrderValidator from '@modules/orders/infra/validators/createOrder';
import showOrderValidator from '@modules/orders/infra/validators/showOrder';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.post('/', createOrderValidator, ordersController.create);
ordersRouter.get('/:id', showOrderValidator, ordersController.show);

export default ordersRouter;
