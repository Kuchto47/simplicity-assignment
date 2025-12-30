import { Module } from '@nestjs/common';
import { TrpcModule } from '../trpc/trpc.module';
import { ExampleModule } from '../example/example.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../../db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      autoLoadEntities: true,
    }),
    TrpcModule,
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
