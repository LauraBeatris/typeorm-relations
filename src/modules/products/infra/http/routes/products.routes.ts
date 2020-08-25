import { Router } from 'express';

import ProductsController from '@modules/products/infra/http/controller/ProductsController';
import createProductValidator from '../../validators/createProduct';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', createProductValidator, productsController.create);

export default productsRouter;
