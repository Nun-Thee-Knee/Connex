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
  Applications: string[];
};

const Jobs = ({ jobList }: { jobList: jobType[] }) => {
  const path = usePathname();
  const id = path?.substring(1) as string;
  const { data: userData, isLoading } = api.user.getRole.useQuery({ id });
  const { data: resume, isLoading: resumeLoading } =
    api.resume.getResume.useQuery({ id });

  const {
    mutate: applyJob,
    isError,
    isPending,
  } = api.apply.applyJob.useMutation({
    // onMutate: async ({ id, jobId }) => {
    //   applyJob({ id, jobId });
    // },
    onSuccess: () => {
      console.log("Applied");
    },
    onError: () => {
      console.log("Error");
    },
  });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {

  };
  return (
    <div className="grid flex-col gap-5 md:grid-cols-2 lg:grid-cols-3">
      {jobList.map((job) => {
        return (
          <AlertDialog key={job.id}>
            <AlertDialogTrigger>
              <JobComponent
                name={job.name}
                jobRoles={job.workRoles}
                applicants={job.Applications.length}
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
                <AlertDialogAction onClick={(e) => handleSubmit(e)}>
                  Apply Now
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        );
      })}
    </div>
  );
};

export default Jobs;
