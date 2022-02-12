import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}
  async findAll() {
    return await this.productsRepo.find();
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    // const newProduct = new Product();
    // newProduct.image = data.image;
    // newProduct.description = data.description;
    // newProduct.name = data.name;
    // newProduct.price = data.price;
    const newProduct = this.productsRepo.create(data);
    const isProduct = this.productsRepo.save(newProduct).catch(() => {
      throw new NotAcceptableException('No se acepta');
    });
    return isProduct;
  }

  async update(id: number, changes: UpdateProductDto) {
    const product = await this.productsRepo.findOne(id);
    this.productsRepo.merge(product, changes);
    return this.productsRepo.save(product);
  }

  remove(id: number) {
    return this.productsRepo.delete(id);
  }
}
