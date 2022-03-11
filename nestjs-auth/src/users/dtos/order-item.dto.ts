import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly orderId: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly productId: number;
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderItemDto) {}
