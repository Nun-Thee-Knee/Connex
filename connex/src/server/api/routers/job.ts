import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod"



export const jobRouter = createTRPCRouter({
    create: protectedProcedure
        .input(z.object({ name: z.string(), workRoles: z.array(z.string()), work: z.string(), stipend: z.string(), createdById: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.jobs.create({
                data: {
                    name: input.name,
                    workRoles: input.workRoles,
                    work: input.work,
                    createdById: input.createdById,
                    stipend: input.stipend
                }
            })
        })
})