import { Controller, Get } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  @Get()
  function() {
    return 'Un cliente';
  }
}
