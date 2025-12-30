import { Module } from '@nestjs/common';
import { ExampleRouter } from './example.router';
import { ExampleService } from './example.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ExampleRouter, ExampleService],
})
export class ExampleModule {}
