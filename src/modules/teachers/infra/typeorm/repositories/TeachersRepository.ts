import { getRepository, Repository } from 'typeorm';

import ICreateTeacherDTO from '@modules/teachers/dtos/ICreateTeacherDTO';
import ITeachersRepository from '@modules/teachers/repositories/ITeachersRepository';
import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';

class TeachersRepository implements ITeachersRepository {
  private ormRepository: Repository<Teacher>;

  constructor() {
    this.ormRepository = getRepository(Teacher);
  }

  public async create({
    age,
    name,
    email,
  }: ICreateTeacherDTO): Promise<Teacher> {
    const teacher = this.ormRepository.create({ name, email, age });

    await this.ormRepository.save(teacher);

    return teacher;
  }

  public async findByEmail(email: string): Promise<Teacher | undefined> {
    const teacher = await this.ormRepository.findOne({ where: { email } });

    return teacher;
  }

  public async findById(id: string): Promise<Teacher | undefined> {
    const teacher = await this.ormRepository.findOne(id);

    return teacher;
  }
}

export default TeachersRepository;
