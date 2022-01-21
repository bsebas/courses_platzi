import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') product: string) {
    return `product ${product} and ${id}`;
  }
}
