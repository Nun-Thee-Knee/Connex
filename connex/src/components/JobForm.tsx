'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { api } from "~/trpc/react"
import { useRouter, redirect } from "next/navigation"
 
const formSchema = z.object({
  name: z.string().min(2).max(50),
  work:z.string(),
  stipend:z.string(),
  roles:z.string()
})

export function JobForm({id}:{id:string}) {
  const router = useRouter();
  const jobCreate = api.job.create.useMutation({
    onSuccess: ()=>{
      router.refresh();
    },
    onError: ()=>{
      throw new Error("Could not complete the operation")
    }
  })
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
      },
    })
   
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
      const name = values.name;
      const work = values.work;
      const stipend = values.stipend
      const createdById = id;
      const roles = values.roles
      const workRoles = values.roles.split(",")
      jobCreate.mutate({name, workRoles, work, stipend, createdById})
    }
    return (
        <div className="w-full">
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8 flex items-center justify-center flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full items-center justify-center">
                  <FormControl>
                    <input className="rounded-xl p-3 w-full bg-black border-[1px] border-zinc-700" placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-200"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full items-center justify-center">
                  <FormControl>
                  <input className="w-full rounded-xl p-3 bg-black border-[1px] border-zinc-700" placeholder="Type the Roles or Skill in Role1,Role2,etc." {...field} />
                  </FormControl>
                  <FormMessage className="text-red-200"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="work"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full items-center justify-center">
                  <FormControl>
                  <textarea className="rounded-xl p-3 h-48 w-full bg-black border-[1px] border-zinc-700" placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-200"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stipend"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full items-center justify-center">
                  <FormControl>
                  <input className="w-full rounded-xl p-3 bg-black border-[1px] border-zinc-700" placeholder="amount" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-200"/>
                </FormItem>
              )}
            />
            <Button className="bg-lime-950 rounded-xl" type="submit">Submit</Button>
          </form>
        </Form>
        </div>
      )
  }

export default JobForm