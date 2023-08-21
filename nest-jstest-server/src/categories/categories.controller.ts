import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoryService: CategoriesService) {}

    @Get()
    public get() {
        return this.categoryService.getCategories();
    }

    @Get(':id')
    public getById(@Param('id') id: number) {
        return this.categoryService.getCategoryById(id);
    }
}
