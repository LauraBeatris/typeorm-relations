import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateClassService from '@modules/classes/services/CreateClassService';
import Class from '@modules/classes/infra/typeorm/entities/Class';

class ClassesController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<Class>> {
    const { subject, teacher_id, students } = request.body;

    const createClass = container.resolve(CreateClassService);

    const classRegister = await createClass.execute({
      subject,
      students,
      teacher_id,
    });

    return response.json(classRegister);
  }
}

export default ClassesController;
