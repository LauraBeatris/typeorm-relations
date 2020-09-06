import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class UpdateOrdersProductsIdColumn1598359381489
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'orders_products',
      'id',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        default: 'uuid_generate_v4()',
        isPrimary: true,
        generationStrategy: 'uuid',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'orders_products',
      'id',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
      }),
    );
  }
}
