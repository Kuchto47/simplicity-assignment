import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/trpc/@generated',
      basePath: '/trpc',
    }),
  ],
  controllers: [],
  providers: [],
})
export class TrpcModule {}
