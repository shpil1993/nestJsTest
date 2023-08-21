import { Category } from "src/categories/categories.entity";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from "typeorm";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column("double")
    price: number;

    @Column({ length: 500 })
    description: string;

    @Column()
    categoryId: number;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
}