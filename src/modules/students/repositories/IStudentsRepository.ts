import Student from '@modules/students/infra/typeorm/entities/Student';
import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';

export default interface IStudentsRepository {
  create(data: ICreateStudentDTO): Promise<Student>;
  findByIds(data: string[]): Promise<Student[]>;
  findOneOrFail(id: string): Promise<Student | undefined>;
  findByEmail(email: string): Promise<Student | undefined>;
}
