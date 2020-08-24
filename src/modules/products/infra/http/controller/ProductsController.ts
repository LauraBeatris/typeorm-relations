import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductService';
import AppError from '@shared/errors/AppError';
import Product from '@modules/products/infra/typeorm/entities/Product';

export default class ProductsController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<Product>> {
    const { name, price, quantity } = request.body;

    const hasInvalidData = !name || !price || !quantity;

    if (hasInvalidData) {
      throw new AppError(
        'Please, provide valid data in order to create a product',
      );
    }

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({ name, price, quantity });

    return response.json(product);
  }
}
