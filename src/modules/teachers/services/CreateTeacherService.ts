import { inject, injectable } from 'tsyringe';

import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';
import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  age: number;
  name: string;
  email: string;
}

@injectable()
class CreateTeacherService {
  constructor(
    @inject('TeachersRepository')
    private teachersRepository: ITeachersRepository,
  ) {}

  public async execute({ age, name, email }: IRequest): Promise<Teacher> {
    const findTeacherWithSameEmail = await this.teachersRepository.findByEmail(
      email,
    );

    if (findTeacherWithSameEmail) {
      throw new AppError(
        "There's already a teacher registered with that email. Please, try it again with another email.",
      );
    }

    const teacher = await this.teachersRepository.create({ age, name, email });

    return teacher;
  }
}

export default CreateTeacherService;
