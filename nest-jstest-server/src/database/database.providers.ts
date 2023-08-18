import { ConfigModule, ConfigService } from '@nestjs/config';
import { dataSourceConstants, dbEnvVariables } from 'src/helpers/constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: dataSourceConstants.dataSource,
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {

      let host = configService.get<string>(dbEnvVariables.dbHost);
      let port = configService.get<number>(dbEnvVariables.dbPort);
      let username = configService.get<string>(dbEnvVariables.dbUser);
      let password = configService.get<string>(dbEnvVariables.dbPass);
      let database = configService.get<string>(dbEnvVariables.dbName);

      const dataSource = new DataSource({
        type: 'mysql',
        host: host,
        port: port,
        username: username,
        password: password,
        database: database,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },    
    inject: [ConfigService]
  },
];