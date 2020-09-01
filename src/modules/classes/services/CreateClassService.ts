import { inject, injectable } from 'tsyringe';

import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import Class from '@modules/classes/infra/typeorm/entities/Class';
import AppError from '@shared/errors/AppError';
import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';

interface IStudent {
  id: string;
}

interface IRequest {
  subject: string;
  teacher_id: string;
  students: IStudent[];
}

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,

    @inject('TeachersRepository')
    private teachersRepository: ITeachersRepository,

    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  public async execute({
    subject,
    teacher_id,
    students,
  }: IRequest): Promise<Class> {
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

    try {
      const findStudents = students.map(student =>
        this.studentsRepository.findOneOrFail(student.id),
      );

      await Promise.all(findStudents);
    } catch (error) {
      throw new AppError('Student not found');
    }

    const studentsIds = students.map(student => ({ student_id: student.id }));

    const createClass = await this.classesRepository.create({
      subject,
      teacher: findTeacher,
      students: studentsIds,
    });

    return createClass;
  }
}

export default CreateClassService;
