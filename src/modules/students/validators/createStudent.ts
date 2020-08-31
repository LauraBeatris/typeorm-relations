import { celebrate, Joi, Segments } from 'celebrate';

const createStudentValidator = celebrate({
  [Segments.BODY]: {
    age: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  },
});

export default createStudentValidator;
