import { dataSourceConstants } from "src/helpers/constants";
import { Category } from "./categories.entity";
import { DataSource } from "typeorm";

export const categoryProviders = [
    {
        provide: dataSourceConstants.categoryRepository,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
        inject: [dataSourceConstants.dataSource]
    }
]