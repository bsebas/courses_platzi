import {
  Controller,
  Get,
  Param,
  Post,
  // Query,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dtos';

// import { Response } from 'express';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('filter')
  getProductFiltrer() {
    return 'soy un filtro';
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Get()
  getProducts() {
    // @Query('brand') brand = 'fa', // @Query('offset') offset = 0, // @Query('limit') limit = 20,
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id, @Body() body: UpdateProductDto) {
    this.productsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
