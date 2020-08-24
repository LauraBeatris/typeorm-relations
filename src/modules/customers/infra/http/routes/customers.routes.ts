import { Router } from 'express';

import CustomersController from '../controller/CustomersController';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.post('/', customersController.create);

export default customersRouter;
