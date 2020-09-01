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
    const student = await this.ormRepository.findOne({ where: { email } });

    return student;
  }

  public async findOneOrFail(id: string): Promise<Student | undefined> {
    const student = await this.ormRepository.findOneOrFail(id);

    return student;
  }

  public async findByIds(data: string[]): Promise<Student[]> {
    const students = await this.ormRepository.findByIds(data);

    return students;
  }
}

export default StudentsRepository;
