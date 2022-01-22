import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFiltrer() {
    return 'soy un filtro';
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('id') id: string) {
    response.send({ id });
    //return {
    //      id,
    //};
  }

  @Get()
  getProducts(
    @Query('limit') limit = 20,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'fa',
  ) {
    return {
      limit,
      offset,
      brand,
    };
  }

  @Post()
  create(@Body('price') payload) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    return { id, body };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
