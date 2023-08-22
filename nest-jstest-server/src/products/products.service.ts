import { Inject, Injectable } from '@nestjs/common';
import { dataSourceConstants } from 'src/helpers/constants';
import { Like, Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(@Inject(dataSourceConstants.productRepository) private productRepository: Repository<Product>) {}

    public async getProducts(query: any) {
        let search = query?.search || "";
        let skip = query?.skip || 0;
        let take = query?.take || 10;

        return await this.productRepository.findAndCount({
            where: [
                { title: Like(`%${search}%`) },
                { category: { name: Like(`%${search}%`) } }
            ],
            order: { 
                title: 'DESC' 
            },
            relations: {
                category: true
            },
            skip: skip,
            take: take
        });
    }

    public async getProductById(id: number) {
        return await this.productRepository.findOne({where: {id: id}});
    }
}
