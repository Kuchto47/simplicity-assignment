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
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getAllAnnouncements: publicProcedure.output(z.array(z.object({
      title: z.string({ message: 'Title is required' }),
      id: z.string().uuid({ message: 'Id as uuid is required' }),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      categoryIds: z.array(z.object({
        name: z.string({ message: 'Name is required' }),
        id: z.string().uuid({ message: 'Id as uuid is required' }),
      }).pick({ id: true })),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    createAnnouncement: publicProcedure.input(z.object({
      title: z.string({ message: 'Title is required' }),
      id: z.string().uuid({ message: 'Id as uuid is required' }),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      categoryIds: z.array(z.object({
        name: z.string({ message: 'Name is required' }),
        id: z.string().uuid({ message: 'Id as uuid is required' }),
      }).pick({ id: true })),
    }).pick({
      title: true,
    }).extend({
      categoryIds: z
        .array(
          z.object({
            id: z.string().uuid({ message: 'Each category id must be a uuid' }),
          }),
        )
        .min(1, 'At least one category is required'),
    })).output(z.object({
      title: z.string({ message: 'Title is required' }),
      id: z.string().uuid({ message: 'Id as uuid is required' }),
      createdAt: z.string().datetime(),
      updatedAt: z.string().datetime(),
      categoryIds: z.array(z.object({
        name: z.string({ message: 'Name is required' }),
        id: z.string().uuid({ message: 'Id as uuid is required' }),
      }).pick({ id: true })),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

