import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';
import { ICreateTeacherDTO } from '@modules/teachers/dtos/ICreateTeacherDTO';

export default interface ITeachersRepository {
  create(data: ICreateTeacherDTO): Promise<Teacher>;
  findByEmail(email: string): Promise<Teacher | undefined>;
}
