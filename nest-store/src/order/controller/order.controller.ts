import { Controller, Get, Param } from '@nestjs/common';

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
}
