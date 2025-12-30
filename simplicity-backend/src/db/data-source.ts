import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '15432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: ['src/**/*.entity{.ts,.js}'],

  migrationsTableName: 'migration',

  migrations: ['src/migrations/*.ts'],

  ssl: process.env.ENV === 'production',
};

export const AppDataSource = new DataSource({
  ...typeOrmConfig,
} as DataSourceOptions);
