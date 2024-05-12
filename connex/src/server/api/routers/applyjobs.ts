import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const jobApplyRouter = createTRPCRouter({
  applyJob: protectedProcedure
    .input(
      z.object({
        jobId: z.number(),
        userId: z.string(),
        status: z.string(),
        resume: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.applications.create({
        data: {
          jobId: input.jobId,
          userId: input.userId,
          status: input.status,
          resume: input.resume,
        },
      });
    }),
});
