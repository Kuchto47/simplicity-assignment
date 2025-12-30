import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../simplicity-backend/src/trpc/@generated/server.ts';

// after installing @trpc/server, for some reason, AppRouter is erroring as a type T_T
// Unfortunately, because of nestjs-trpc and trpc-panel in the backend,
// which are outdated and only support tRPC v10, I had to downgrade tRPC from v11 to v10 both in frontend and backend
export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3030/trpc', // TODO ENV
    }),
  ],
});
