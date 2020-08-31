import { celebrate, Segments, Joi } from 'celebrate';

const createClassValidator = celebrate({
  [Segments.BODY]: {
    subject: Joi.string().required(),
    teacher_id: Joi.number().integer().positive().required(),
  },
});

export default createClassValidator;
