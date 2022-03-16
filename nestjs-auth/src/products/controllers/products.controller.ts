import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  UseGuards,
  // ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../../common/parse-int.pipe';
import {
  CreateProductDto,
  FiltreProductDto,
  UpdateProductDto,
} from '../dtos/products.dto';

import { ProductsService } from './../services/products.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { PasswordJwtGuard } from 'src/auth/guards/password-jwt.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@UseGuards(PasswordJwtGuard, RolesGuard)
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @Public()
  @ApiOperation({
    summary: 'List of products',
    description: 'Return all products',
  })
  @Roles(Role.ADMIN, Role.CUSTOMER)
  getProducts(@Query() params: FiltreProductDto) {
    return this.productsService.findAll(params);
  }
  @Roles(Role.ADMIN, Role.CUSTOMER)
  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  @Roles(Role.ADMIN, Role.CUSTOMER)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(productId);
  }

  @Post()
  @Roles(Role.ADMIN)
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }

  @Delete(':id/category/:categoryId')
  deleteProduct(
    @Param('id') id: number,
    @Param('category', ParseIntPipe) category,
  ) {
    return this.productsService.removeCategoryByProduct(id, category);
  }
}
