import { Request, Response } from 'express';

import CreateStudentService from '@modules/students/services/CreateStudentService';
import { container } from 'tsyringe';
import Student from '../../typeorm/entities/Student';

class StudentsController {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response<Student>> {
    const { age, name, email } = request.body;

    const createStudent = container.resolve(CreateStudentService);

    const student = await createStudent.execute({ age, name, email });

    return response.json(student);
  }
}

export default StudentsController;
