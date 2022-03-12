import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';

import { Order } from '../entities/order.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from 'src/products/services/products.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CustomersService } from './customers.service';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private customersService: CustomersService,

    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find({
      relations: ['customer'],
    });
  }

  async findOne(id: number) {
    // const apiKey = this.config.get('API_KEY');
    // const apiData = this.config.get('DATABASE_NAME');
    // console.log({ apiKey, apiData });
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    if (data.customerId) {
      const customer = await this.customersService.findOne(data.customerId);
      newUser.customer = customer;
    }
    const isUser = this.userRepo.save(newUser);
    return isUser;
  }

  findEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async update(id: number, changes: UpdateUserDto) {
    const isUser = await this.userRepo.findOne(id);
    this.userRepo.merge(isUser, changes);
    return this.userRepo.save(isUser).catch((e) => e);
  }

  async remove(id: number) {
    return this.userRepo.delete(id).catch((e) => e);
  }

  async getOrdersByUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
  getTaks() {
    // return new Promise((resolve, reject) => {
    //   this.client.query('SELECT * FROM task', (err, res) => {
    //     if (err) reject(err);
    //     resolve(res.rows);
    //   });
    // });
    return '';
  }
}
