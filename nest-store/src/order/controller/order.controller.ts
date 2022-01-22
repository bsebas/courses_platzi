import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get(':id')
  function(@Param('id') id: number) {
    return {
      id,
      description: `Order #${id}`,
      product: 'sdsafas',
      user: 'asfas',
    };
  }

  @Post()
  create(@Body() body) {
    return {
      message: 'Producto creado',
      body,
    };
  }
}
