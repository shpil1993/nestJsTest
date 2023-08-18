import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    userName: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 500 })
    password: string;
}