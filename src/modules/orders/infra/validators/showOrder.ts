import { celebrate, Segments, Joi } from 'celebrate';

const showOrderValidator = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export default showOrderValidator;
