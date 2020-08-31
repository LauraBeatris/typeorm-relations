import { inject, injectable } from 'tsyringe';

import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import Class from '@modules/classes/infra/typeorm/entities/Class';
import AppError from '@shared/errors/AppError';

interface IRequest {
  subject: string;
  teacher_id: string;
}

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,

    @inject('TeachersRepository')
    private teachersRepository: ITeachersRepository,
  ) {}

  public async execute({ subject, teacher_id }: IRequest): Promise<Class> {
    const findTeacher = await this.teachersRepository.findById(teacher_id);

    if (!findTeacher) {
      throw new AppError('Teacher not found');
    }

    const findClassWithSameSubject = await this.classesRepository.findBySubject(
      subject,
    );

    if (findClassWithSameSubject) {
      throw new AppError(
        "There's already a class with the same subject. Please, try it again with another subject",
      );
    }

    const createClass = await this.classesRepository.create({
      subject,
      teacher: findTeacher,
    });

    return createClass;
  }
}

export default CreateClassService;
