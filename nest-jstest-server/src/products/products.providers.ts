import { dataSourceConstants } from "src/helpers/constants";
import { Product } from "./products.entity";
import { DataSource } from "typeorm";

export const productProviders = [
    {
        provide: dataSourceConstants.productRepository,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
        inject: [dataSourceConstants.dataSource]
    }
]