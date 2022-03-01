import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from './../entities/order.entity';
import { OrderProduct } from './../entities/orderProduct.entity';
import { Products } from './../../products/entities/product.entity';
import { CreateOrderItemDto, UpdateOrderDto } from './../dtos/order-item.dto';

@Injectable()
export class OrdersItemsService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(OrderProduct) private itemRepo: Repository<OrderProduct>,
    @InjectRepository(Products) private productRepo: Repository<Products>,
  ) {}

  async create(data: CreateOrderItemDto) {
    const order = await this.orderRepo.findOne(data.orderId);
    const product = await this.productRepo.findOne(data.productId);
    const item = new OrderProduct();
    item.order = order;
    item.product = product;
    item.quantity = data.quantity;
    return this.itemRepo.save(item);
  }
}
