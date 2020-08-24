import Product from '@modules/products/infra/typeorm/entities/Product';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO';

interface IFindProducts {
  id: string;
}

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product | undefined>;
  findAllById(productsIds: IFindProducts[]): Promise<Product[]>;
  updateQuantity(
    updateQuantityData: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]>;
}
