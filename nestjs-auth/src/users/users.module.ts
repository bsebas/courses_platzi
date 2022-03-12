import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';
import { Customer } from './entities/customer.entity';

import { ProductsModule } from '../products/products.module';
import { Order } from './entities/order.entity';
import { OrderProduct } from './entities/orderProduct.entity';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';
import { OrdersItemsController } from './controllers/orders-items.controller';
import { OrdersItemsService } from './services/orders-items.service';
@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([User, Customer, Order, OrderProduct]),
  ],
  controllers: [
    CustomerController,
    UsersController,
    OrdersController,
    OrdersItemsController,
  ],
  providers: [
    CustomersService,
    UsersService,
    OrdersService,
    OrdersItemsService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
