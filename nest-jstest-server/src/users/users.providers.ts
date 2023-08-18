import { dataSourceConstants } from "src/helpers/constants";
import { User } from "./users.entity";
import { DataSource } from "typeorm";

export const userProviders = [
    {
        provide: dataSourceConstants.userRepository,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [dataSourceConstants.dataSource]
    }
]