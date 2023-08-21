import { Inject, Injectable } from '@nestjs/common';
import { dataSourceConstants } from 'src/helpers/constants';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoriesService {
    constructor(@Inject(dataSourceConstants.categoryRepository) private categoryRepository: Repository<Category>) {}

    public async getCategories() {
        return await this.categoryRepository.find();
    }

    public async getCategoryById(id: number) {
        return await this.categoryRepository.findOne({where: {id: id}});
    }
}
