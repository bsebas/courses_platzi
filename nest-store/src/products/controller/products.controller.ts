import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFiltrer() {
    return 'soy un filtro';
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return id;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 20,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'fa',
  ) {
    return `products ${limit} ${offset} ${brand}`;
  }
}
