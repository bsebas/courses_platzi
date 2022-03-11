import { Exclude } from 'class-transformer';
import { Products } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int' })
  quantity: number;
  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
  @ManyToOne(() => Products)
  product: Products;
  @ManyToOne(() => Order, (order) => order.items)
  order: Order;
}
