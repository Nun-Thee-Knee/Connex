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

 
const formSchema = z.object({
  name: z.string().min(2).max(50),
  work:z.string(),
  stipend:z.string()
})

export function JobForm({id}:{id:string}) {
  const jobCreate = api.job.create.useMutation({
    onSuccess: ()=>{
      console.log("Success")
    },
    onError: ()=>{
      console.log("There was an error while doing so.")
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
      const workRoles = ["Content Writer", "UI/UX", "Artist"]
      const work = values.work;
      const stipend = values.stipend
      const createdById = id;
      jobCreate.mutate({name, workRoles, work, stipend, createdById})
    }
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name: </FormLabel>
                  <FormControl>
                    <input className="text-black" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="work"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Description: </FormLabel>
                  <FormControl>
                    <input className="text-black" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stipend"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stipend: </FormLabel>
                  <FormControl>
                    <input className="text-black" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
  }

export default JobForm