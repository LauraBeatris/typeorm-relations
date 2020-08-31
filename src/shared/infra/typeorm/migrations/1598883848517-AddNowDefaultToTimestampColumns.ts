import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddNowDefaultToTimestampColumns1598883848517
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'classes',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
      }),
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );

    await queryRunner.changeColumn(
      'classes',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
      }),
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'classes',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
      }),
    );

    await queryRunner.changeColumn(
      'classes',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
      }),
    );
  }
}
