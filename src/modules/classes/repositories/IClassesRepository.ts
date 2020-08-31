import Class from '@modules/classes/infra/typeorm/entities/Class';
import ICreateClassDTO from '@modules/classes/dtos/ICreateClassDTO';

export default interface IClassesRepository {
  create(data: ICreateClassDTO): Promise<Class>;
  findBySubject(subject: string): Promise<Class | undefined>;
}
