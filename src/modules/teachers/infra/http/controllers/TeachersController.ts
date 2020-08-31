import { Request, Response } from 'express';

import { container } from 'tsyringe';

import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';
import CreateTeacherService from '@modules/teachers/services/CreateTeacherService';

class TeachersController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<Teacher>> {
    const { age, name, email } = request.body;

    const createTeacher = container.resolve(CreateTeacherService);

    const teacher = await createTeacher.execute({ age, name, email });

    return response.json(teacher);
  }
}

export default TeachersController;
