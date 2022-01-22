import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/controller/categories.controller';
import { ProductsController } from './products/controller/products.controller';
import { OrderController } from './order/controller/order.controller';
import { UsersController } from './users/controller/users.controller';
import { CustomerController } from './customer/controller/customer.controller';
import { BlandController } from './bland/controller/bland.controller';
import { ProductsService } from './products/services/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrderController,
    UsersController,
    CustomerController,
    BlandController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
