import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { QueryDto } from 'src/helpers/query.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get()
    public get(@Query() query: QueryDto) {
        return this.productService.getProducts(query);
    }

    @Get(':id')
    public getById(@Param('id') id: number) {
        return this.productService.getProductById(id);
    } 
}
