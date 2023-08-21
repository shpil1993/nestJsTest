import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from './products.providers';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders, ProductsService],
  exports: [],
  controllers: [ProductsController]
})
export class ProductsModule {}
