import { Router } from 'express';

import createStudentValidator from '@modules/students/validators/createStudent';
import StudentsController from '@modules/students/infra/http/controllers/StudentsController';

const studentsRouter = Router();
const studentsController = new StudentsController();

studentsRouter.post('/', createStudentValidator, studentsController.create);

export default studentsRouter;
