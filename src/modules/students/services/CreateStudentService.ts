import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import Student from '@modules/students/infra/typeorm/entities/Student';
import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';

interface IRequest {
  age: number;
  name: string;
  email: string;
}

@injectable()
class CreateStudentService {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({ age, name, email }: IRequest): Promise<Student> {
    const findStudentWithSameEmail = await this.studentsRepository.findByEmail(
      email,
    );

    if (findStudentWithSameEmail) {
      throw new AppError(
        "There's already a student registered with that email. Please, try it again with another email.",
      );
    }

    const student = await this.studentsRepository.create({ name, email, age });

    return student;
  }
}

export default CreateStudentService;
