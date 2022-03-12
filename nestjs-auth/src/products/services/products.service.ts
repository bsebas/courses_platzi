import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindConditions, Repository } from 'typeorm';

import { Products } from './../entities/product.entity';
import {
  CreateProductDto,
  FiltreProductDto,
  UpdateProductDto,
} from '../dtos/products.dto';
import { BrandsService } from './brands.service';
import { Category } from '../entities/category.entity';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productsRepo: Repository<Products>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    @InjectRepository(Brand) private brandRepo: Repository<Brand>,
    private brandService: BrandsService,
  ) {}
  async findAll(params?: FiltreProductDto) {
    if (params) {
      const where: FindConditions<Products> = {};
      const { limit, offset, maxPrice, minPrice } = params;

      if (minPrice && maxPrice) {
        where.price = Between(minPrice, maxPrice);
      }
      return await this.productsRepo.find({
        relations: ['brand'],
        where: where,
        take: limit,
        skip: offset,
      });
    }
    return await this.productsRepo.find({
      relations: ['brand'],
    });
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne(id, {
      relations: ['brand', 'categories'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductDto) {
    // const newProduct = new Products();
    // newProduct.image = data.image;
    // newProduct.description = data.description;
    // newProduct.name = data.name;
    // newProduct.price = data.price;
    const newProduct = this.productsRepo.create(data);
    if (data.brandId) {
      const brand = await this.brandRepo.findOne(data.brandId);
      newProduct.brand = brand;
    }
    if (data.categoriesIds) {
      const categories = await this.categoryRepo.findByIds(data.categoriesIds);
      newProduct.categories = categories;
    }
    return this.productsRepo.save(newProduct);
  }

  async update(id: number, changes: UpdateProductDto) {
    const product = await this.productsRepo.findOne(id);
    if (changes.brandId) {
      const brand = await this.brandRepo.findOne(changes.brandId);
      product.brand = brand;
    }
    this.productsRepo.merge(product, changes);
    return this.productsRepo.save(product);
  }

  async removeCategoryByProduct(productId, categoryId) {
    const product = await this.productsRepo.findOne(productId, {
      relations: ['categories'],
    });
    product.categories = product.categories.filter(
      (item) => item.id !== categoryId,
    );
    return this.productsRepo.save(product);
  }

  async addCategoryByProduct(productId, categoryId) {
    const product = await this.productsRepo.findOne(productId, {
      relations: ['categories'],
    });
    const category = await this.categoryRepo.findOne(categoryId);

    product.categories.push(category);
    return this.productsRepo.save(product);
  }

  remove(id: number) {
    return this.productsRepo.delete(id);
  }
}
