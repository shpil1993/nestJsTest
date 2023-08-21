import { Inject, Injectable } from '@nestjs/common';
import { dataSourceConstants } from 'src/helpers/constants';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(@Inject(dataSourceConstants.productRepository) private productRepository: Repository<Product>) {}

    public async getProducts() {
        return await this.productRepository.find();
    }

    public async getProductById(id: number) {
        return await this.productRepository.findOne({where: {id: id}});
    }
}
