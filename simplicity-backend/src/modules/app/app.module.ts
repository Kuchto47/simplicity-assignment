import { Module } from '@nestjs/common';
import { TrpcModule } from '../trpc/trpc.module';
import { ExampleModule } from '../example/example.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TrpcModule,
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
