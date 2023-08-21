import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get()
    public get() {
        return this.productService.getProducts();
    }

    @Get(':id')
    public getById(@Param('id') id: number) {
        return this.productService.getProductById(id);
    } 
}
