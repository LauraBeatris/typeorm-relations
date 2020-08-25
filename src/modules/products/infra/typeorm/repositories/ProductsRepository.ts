import { getRepository, Repository } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO';
import Product from '@modules/products/infra/typeorm/entities/Product';
import AppError from '@shared/errors/AppError';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      price,
      quantity,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const findProduct = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return findProduct;
  }

  public async findAllById(productsIds: IFindProducts[]): Promise<Product[]> {
    const products = await this.ormRepository.findByIds(productsIds);

    return products;
  }

  public async updateQuantity(
    updateProductsData: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]> {
    const productsIds = updateProductsData.map(product => product.id);

    const findProducts = await this.ormRepository.findByIds(productsIds);

    const updateProductsQuantity = findProducts.map(product => {
      const findUpdateProduct = updateProductsData.find(
        updateProduct => product.id === updateProduct.id,
      );

      if (!findUpdateProduct) {
        throw new AppError('Product not found');
      }

      return this.ormRepository.save({
        ...product,
        quantity: product.quantity - findUpdateProduct?.quantity,
      });
    });

    const products = await Promise.all(updateProductsQuantity);

    return products;
  }
}

export default ProductsRepository;
