import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { categoryProviders } from './categories.providers';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
    imports: [DatabaseModule],
    providers: [...categoryProviders, CategoriesService],
    exports: [],
    controllers: [CategoriesController]
})
export class CategoriesModule {}
