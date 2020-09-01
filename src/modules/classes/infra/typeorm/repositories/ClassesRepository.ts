import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import { Repository, getRepository } from 'typeorm';

import Class from '@modules/classes/infra/typeorm/entities/Class';
import ICreateClassDTO from '@modules/classes/dtos/ICreateClassDTO';

class ClassesRepository implements IClassesRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async create({
    subject,
    teacher,
    students,
  }: ICreateClassDTO): Promise<Class> {
    const createClass = this.ormRepository.create({
      subject,
      teacher,
      student_classes: students,
    });

    await this.ormRepository.save(createClass);

    return createClass;
  }

  public async findBySubject(subject: string): Promise<Class | undefined> {
    const findClassBySubject = await this.ormRepository.findOne({
      where: { subject },
    });

    return findClassBySubject;
  }
}

export default ClassesRepository;
