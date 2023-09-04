import { Inject, Injectable } from '@nestjs/common';
import { dataSourceConstants } from 'src/helpers/constants';
import { Between, FindOptionsWhere, In, LessThanOrEqual, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { Product } from './products.entity';
import { QueryDto } from 'src/helpers/query.dto';

@Injectable()
export class ProductsService {
    constructor(@Inject(dataSourceConstants.productRepository) private productRepository: Repository<Product>) {}

    public async getProducts(query: QueryDto) {
        let search = query?.search || "";
        let skip = query?.skip || 0;
        let take = query?.take || 10;

        let options = this.setOptions(query);

        return await this.productRepository.findAndCount({
            where: [
                { 
                    title: Like(`%${search}%`),
                    ...options
                },
                { 
                    category: { name: Like(`%${search}%`) },
                    ...options
                }
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

    private setOptions(query: QueryDto) : FindOptionsWhere<Product> {
        let categoryIds: number[] = query?.categoryIds || undefined;
        let less = query?.less || undefined;
        let more = query?.more || undefined;

        let options: FindOptionsWhere<Product> = {};

        if(categoryIds) {
            options.categoryId = In(categoryIds);
        }
        
        if(more && less) {
            options.price = Between(more, less);
        }

        if(more && !less) {
            options.price = MoreThanOrEqual(more);
        }

        if(!more && less) {
            options.price = LessThanOrEqual(less);
        }

        return options;
    }
}
