import { Router } from 'express';

import TeachersController from '@modules/teachers/infra/http/controllers/TeachersController';
import createTeacherValidator from '@modules/teachers/validators/createTeacher';

const teachersRouter = Router();
const teachersController = new TeachersController();

teachersRouter.post('/', createTeacherValidator, teachersController.create);

export default teachersRouter;
