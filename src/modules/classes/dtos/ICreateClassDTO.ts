import Teacher from '@modules/teachers/infra/typeorm/entities/Teacher';

export interface IStudent {
  student_id: string;
}

export default interface ICreateClassDTO {
  subject: string;
  teacher: Teacher;
  students: IStudent[];
}
