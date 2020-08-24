import { Router } from 'express';

import ProductsController from '@modules/products/infra/http/controller/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create);

export default productsRouter;
