import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export default class Student1598871336598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
            generationStrategy: 'uuid',
          }),
          new TableColumn({
            name: 'name',
            type: 'text',
          }),
          new TableColumn({
            name: 'email',
            type: 'text',
          }),
          new TableColumn({
            name: 'age',
            type: 'integer',
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students');
  }
}
