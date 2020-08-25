import { celebrate, Segments, Joi } from 'celebrate';

const createOrderValidator = celebrate({
  [Segments.BODY]: {
    customer_id: Joi.string().uuid().required(),
    products: Joi.array()
      .items(
        Joi.object({
          id: Joi.string().uuid().required(),
          quantity: Joi.number().integer().positive().required(),
        }),
      )
      .required(),
  },
});

export default createOrderValidator;
