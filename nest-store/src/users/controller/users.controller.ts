import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('limit') limit = 20,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'fa',
  ) {
    return { asfsaf: 'fsafdsa', limit, offset, brand };
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return { id, name: 'afasd', age: 12 };
  }
}
