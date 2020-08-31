import { celebrate, Segments, Joi } from 'celebrate';

const createTeacherValidator = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().positive().required(),
  },
});

export default createTeacherValidator;
