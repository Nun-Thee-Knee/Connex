import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

const applicationType = {
    jobId: z.number(),
    userId: z.string(),
    status: z.string(),
    resume: z.string()
}

export const applicationRouter = createTRPCRouter({
    create: protectedProcedure
    .input(z.object(applicationType))
    .mutation(async({ctx, input})=>{
        return await ctx.db.applications.create({
            data: {
                jobId: input.jobId,
                userId: input.userId,
                status: input.status,
                resume: input.resume
            }
        })
    })
});



  