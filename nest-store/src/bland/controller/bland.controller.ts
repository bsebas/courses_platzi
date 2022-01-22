import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bland')
export class BlandController {
  @Get(':id')
  function(@Param('id') id: number) {
    return { id, name: 'Nombre cualquiera' };
  }
  @Post()
  create(@Body() body) {
    return {
      message: 'Marca registrada',
      body,
    };
  }
}
