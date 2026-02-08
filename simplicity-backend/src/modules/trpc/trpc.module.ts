import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc-v2';
import { TrpcUiController } from './trpc-ui.controller';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/trpc/@generated',
      basePath: '/trpc',
    }),
  ],
  controllers: [TrpcUiController],
  providers: [],
})
export class TrpcModule {}
