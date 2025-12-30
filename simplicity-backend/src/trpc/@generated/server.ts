import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  exampleRouter: t.router({
    getHello: publicProcedure.output(z.object({
      message: z.string(),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  }),
  announcementsRouter: t.router({
    getAllCategories: publicProcedure.output(z.array(z.object({
      name: z.string({ message: 'Name is required' }),
      id: z.string().uuid({ message: 'Id as uuid is required' }),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

