import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export default class Teacher1598874390567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'teachers',
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
    await queryRunner.dropTable('teachers');
  }
}
