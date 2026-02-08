import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../simplicity-backend/src/trpc/@generated/server.ts';

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3030/trpc', // TODO ENV
    }),
  ],
});
