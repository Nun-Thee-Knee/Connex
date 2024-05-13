"use client";

import JobComponent from "./JobComponent";
import { usePathname } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { api } from "~/trpc/react";

type jobType = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  workRoles: string[];
  work: string;
  createdById: string;
  stipend: string;
};

const Jobs = ({ jobList }: { jobList: jobType[] }) => {
  const path = usePathname();
  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style

  // const { data: resume, isLoading: resumeLoading } =
  //   api.resume.getResume.useQuery({ id });

  const applyJob = api.applications.create.useMutation({
    onSuccess: ()=>{
      console.log("Success")
    },
    onError: () => {
      console.log("Error")
    }
  })

  return (
    <div className="grid flex-col gap-5 md:grid-cols-2 lg:grid-cols-3">
      {jobList?.map((job) => {
        return (
          <AlertDialog key={job.id}>
            <AlertDialogTrigger>
              <JobComponent
                name={job.name}
                jobRoles={job.workRoles}
                description={job.work}
                salary={job.stipend}
                date={job.createdAt}
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Wanted to apply?</AlertDialogTitle>
                <AlertDialogDescription>
                  Join our dynamic team and experience the best of the best
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Miss out</AlertDialogCancel>
                <AlertDialogAction onClick={()=>{applyJob.mutate()}} >
                  Apply Now
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        );
      })}
      {!jobList && <h1 className="text-4xl text-white">No Jobs Available</h1>}
    </div>
  );
};

export default Jobs;
