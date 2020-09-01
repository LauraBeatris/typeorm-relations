import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export default class StudentClasses1598885739547 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'student_classes',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
            generationStrategy: 'uuid',
          }),
          new TableColumn({
            name: 'student_id',
            type: 'uuid',
          }),
          new TableColumn({
            name: 'class_id',
            type: 'uuid',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          }),
        ],
        foreignKeys: [
          {
            name: 'student_classes_students_fk',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            columnNames: ['student_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'students',
          },
          {
            name: 'student_classes_classes_fk',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            columnNames: ['class_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'classes',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('student_classes');
  }
}
