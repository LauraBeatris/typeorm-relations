import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class UpdatePricePrecisions1598364937210
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'orders_products',
      'price',
      new TableColumn({
        name: 'price',
        type: 'decimal',
        precision: 10,
        scale: 2,
      }),
    );

    await queryRunner.changeColumn(
      'products',
      'price',
      new TableColumn({
        name: 'price',
        type: 'decimal',
        precision: 10,
        scale: 2,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'orders_products',
      'price',
      new TableColumn({
        name: 'price',
        type: 'decimal',
        precision: 5,
        scale: 2,
      }),
    );

    await queryRunner.changeColumn(
      'products',
      'price',
      new TableColumn({
        name: 'price',
        type: 'decimal',
        precision: 5,
        scale: 2,
      }),
    );
  }
}
