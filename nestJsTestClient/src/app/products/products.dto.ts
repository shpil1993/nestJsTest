import { CategoryDto } from "../categories/categories.dto";

export class ProductDto {
    id?: number;
    title?: string;
    price?: number;
    description?: string;
    categoryId?: number;
    category?: CategoryDto;
}