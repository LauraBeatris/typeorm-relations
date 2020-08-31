import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export default class Classes1598879822720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
            generationStrategy: 'uuid',
          }),
          new TableColumn({
            name: 'subject',
            type: 'text',
          }),
          new TableColumn({
            name: 'teacher_id',
            type: 'uuid',
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamp',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
          }),
        ],
        foreignKeys: [
          {
            name: 'class_teachers_fk',
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            columnNames: ['teacher_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'teachers',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classes');
  }
}
