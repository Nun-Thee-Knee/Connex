import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  getRole: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.user.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
  updateRole: protectedProcedure
    .input(z.object({ id: z.string(), role: z.enum(["Client", "Freelancer"]) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: {
          id: input.id,
        },
        data: {
          role: input.role,
        },
      });
    }),
  uploadResume: protectedProcedure
    .input(z.object({ id: z.string(), file: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.resume.create({
        data: {
          user: {
            connect: {
              id: input.id,
            },
          },
          file: input.file,
        },
      });
    }),
});
