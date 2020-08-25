import { celebrate, Segments, Joi } from 'celebrate';

const createProductValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    quantity: Joi.number().positive().required(),
  },
});

export default createProductValidator;
