import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const resumeRouter = createTRPCRouter({
    uploadResume: protectedProcedure
      .input(z.object({ id: z.string(), file: z.string() }))
      .mutation(async ({ ctx, input }) => {
        return ctx.db.resume.create({
          data: {
            userId: input.id,
            file: input.file,
          },
        });
      }),
  });



  