import { getRepository, Repository } from 'typeorm';

import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';
import IStudentsRepository from '@modules/students/repositories/IStudentsRepository';
import Student from '@modules/students/infra/typeorm/entities/Student';

class StudentsRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  public async create({
    age,
    name,
    email,
  }: ICreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create({ name, email, age });

    await this.ormRepository.save(student);

    return student;
  }

  public async findByEmail(email: string): Promise<Student | undefined> {
    const student = this.ormRepository.findOne({ where: { email } });

    return student;
  }
}

export default StudentsRepository;
