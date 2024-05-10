import { createTRPCRouter, protectedProcedure } from "../trpc";
import {z} from "zod"


export const userRouter = createTRPCRouter(
    {getRole: protectedProcedure
    .input(z.object({id:z.string()}))
    .query(async({ctx, input})=>{
        return ctx.db.user.findFirst({
            where: {
                id: input.id
            }
        })
    })}
)