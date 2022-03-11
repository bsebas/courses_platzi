import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index,
  JoinColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Category } from './category.entity';

@Entity()
@Index(['price', 'stock'])
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 55, unique: true })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'int' })
  price: number;
  @Column({ type: 'int' })
  stock: number;
  @Column({ type: 'varchar' })
  image: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'update_at', type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.products)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;
  @ManyToMany(() => Category, (category) => category.product)
  @JoinTable({
    name: 'products_categories',
    joinColumn: { name: 'product_id' },
    inverseJoinColumn: { name: 'categories_id' },
  })
  categories: Category[];
}
