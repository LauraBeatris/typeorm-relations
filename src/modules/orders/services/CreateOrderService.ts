import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    const productsIds = products.map(product => ({ id: product.id }));

    const originalProducts = await this.productsRepository.findAllById(
      productsIds,
    );

    if (!customer) {
      throw new AppError('Customer not found');
    }

    if (products.length <= 0) {
      throw new AppError('You must provide products to create an order');
    }

    const hasInvalidProducts =
      originalProducts.length <= 0 ||
      originalProducts.length !== products.length;

    if (hasInvalidProducts) {
      throw new AppError('Product(s) not found');
    }

    products.forEach(product => {
      const originalProduct = originalProducts.find(
        findProduct => findProduct.id === product.id,
      );

      const hasInsufficientQuantity =
        originalProduct && product.quantity > originalProduct.quantity;

      if (hasInsufficientQuantity) {
        throw new AppError(
          `The product ${originalProduct?.name} has insufficient quantity on the stock.`,
        );
      }
    });

    const orderProducts = products.map(product => {
      const originalProduct = originalProducts.find(
        findProduct => findProduct.id === product.id,
      );

      if (!originalProduct) {
        throw new AppError('Product not found');
      }

      return {
        product_id: originalProduct.id,
        quantity: product.quantity,
        price: originalProduct.price,
      };
    });

    const order = await this.ordersRepository.create({
      customer,
      products: orderProducts,
    });

    await this.productsRepository.updateQuantity(products);

    return order;
  }
}

export default CreateOrderService;
