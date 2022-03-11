import { Controller, Post, Body } from '@nestjs/common';

import { CreateOrderItemDto } from './../dtos/order-item.dto';
import { OrdersItemsService } from './../services/orders-items.service';

@Controller('orders-items')
export class OrdersItemsController {
  constructor(private itemsService: OrdersItemsService) {}

  @Post()
  create(@Body() payload: CreateOrderItemDto) {
    return this.itemsService.create(payload);
  }
}
