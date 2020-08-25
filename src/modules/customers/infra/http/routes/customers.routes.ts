import { Router } from 'express';

import createCustomerValidator from '@modules/customers/infra/validators/createCustomer';
import CustomersController from '@modules/customers/infra/http/controller/CustomersController';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.post('/', createCustomerValidator, customersController.create);

export default customersRouter;
