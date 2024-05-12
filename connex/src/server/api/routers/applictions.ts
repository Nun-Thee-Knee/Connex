import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const applicationRouter = createTRPCRouter({
    create: protectedProcedure
    .mutation(async({ctx})=>{
        setTimeout(()=>(5000))
        return await ctx.db.applications.create({
            data: {
                jobId: 7,
                userId: "clw377haq0001vrywbh7455ur",
                status: "Applied",
                resume: "https://vhufx3gzojnedlwp.public.blob.vercel-storage.com/Global%20Hot%20Dog%20Delights_%20A%20Culinary%20Adventure-uAIo19UfESybY8r0RTOFzf62zRjZYn.pdf" 
            }
        })
    })
});



  