import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import AppError from '@shared/errors/AppError';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';

export default class CustomersController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<Customer>> {
    const { name, email } = request.body;

    const hasInvalidData = !name || !email;

    if (hasInvalidData) {
      throw new AppError(
        'Please, provide valid data in order to create a customer',
      );
    }

    const createCustomer = container.resolve(CreateCustomerService);

    const customer = await createCustomer.execute({ name, email });

    return response.json(customer);
  }
}
