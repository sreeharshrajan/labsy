import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { withRLSContext, extractRLSContextFromSession } from "@/server/rls";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const rlsContext = extractRLSContextFromSession(ctx.session);
      if (!rlsContext) {
        throw new Error("Invalid session context");
      }

      return withRLSContext(rlsContext, async () => {
        return ctx.db.post.create({
          data: {
            title: input.name,
            slug: input.name.toLowerCase().replace(/\s+/g, '-'),
            content: {},
            userId: ctx.session.user.id,
          },
        });
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const rlsContext = extractRLSContextFromSession(ctx.session);
    if (!rlsContext) {
      throw new Error("Invalid session context");
    }

    return withRLSContext(rlsContext, async () => {
      const post = await ctx.db.post.findFirst({
        orderBy: { createdAt: "desc" },
        where: { userId: ctx.session.user.id },
      });

      return post ?? null;
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
