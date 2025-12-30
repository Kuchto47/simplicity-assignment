import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: ['**/*.entity{.ts,.js}'],

  migrationsTableName: 'migration',

  migrations: ['src/migration/*.ts'],

  ssl: process.env.ENV === 'production',
};
