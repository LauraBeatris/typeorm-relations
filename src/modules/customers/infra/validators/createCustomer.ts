import { celebrate, Segments, Joi } from 'celebrate';

const createCustomerValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
});

export default createCustomerValidator;
