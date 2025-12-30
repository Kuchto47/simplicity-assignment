import { Query, Router } from 'nestjs-trpc';
import { z } from 'zod';
import { ExampleService } from './example.service';

const exampleOutputSchema = z.object({
  message: z.string(),
});

type ExampleOutput = z.infer<typeof exampleOutputSchema>;

@Router()
export class ExampleRouter {
  constructor(private readonly exampleService: ExampleService) {}

  @Query({ output: exampleOutputSchema })
  getHello(): ExampleOutput {
    return { message: this.exampleService.getHello() };
  }
}
