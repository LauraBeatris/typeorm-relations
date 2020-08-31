import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';

export default interface ICreateClassDTO {
  subject: string;
  teacher: Teacher;
}
