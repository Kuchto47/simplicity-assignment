import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../simplicity-backend/src/trpc/@generated/server.ts';

// after installing @trpc/server, for some reason, AppRouter is erroring as a type T_T
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3030/trpc', // TODO ENV
    }),
  ],
});
