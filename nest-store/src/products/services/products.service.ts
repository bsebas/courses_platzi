import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import * as crypto from 'crypto';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product One',
      description: 'una descripcion',
      price: 122,
      stock: 12,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    const newProduct = {
      id: crypto.randomUUID(),
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, body: UpdateProductDto) {
    const item = this.findOne(id);
    if (item) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...item, ...body };
      return this.products[index];
    }
    return null;
  }
  delete(id: number): string {
    const item = this.findOne(id);
    const itemProduc = this.products.indexOf(item);
    this.products.splice(itemProduc, 1);
    return 'se elimino';
  }
}
