import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  migrationsTableName: 'migration',

  migrations: [__dirname + '/../migrations/*{.ts,.js}'],

  synchronize: false,

  migrationsRun: process.env.RUN_MIGRATIONS === 'true',

  logging: true,

  ssl: process.env.ENV === 'production',
};

export const AppDataSource = new DataSource({
  ...typeOrmConfig,
} as DataSourceOptions);
