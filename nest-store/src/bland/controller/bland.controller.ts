import { Controller, Get, Param } from '@nestjs/common';

@Controller('bland')
export class BlandController {
  @Get(':id')
  function(@Param('id') id: number) {
    return { id, name: 'Nombre cualquiera' };
  }
}
