import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { TrpcPanelController } from './trpc-panel.controller';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/trpc/@generated',
      basePath: '/trpc',
    }),
  ],
  controllers: [TrpcPanelController],
  providers: [],
})
export class TrpcModule {}
