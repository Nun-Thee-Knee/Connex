'use client'

import JobComponent from "./JobComponent";
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
} from "~/components/ui/alert-dialog"


type jobType = {
    id: number,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    workRoles: string[],
    work: string,
    createdById: string,
    stipend: string,
    Applications: string[]
}

// name: string,
// jobRoles: string[],
// applicants: number,
// description: string,
// salary: string,
// date: Date

const Jobs = ({jobList}:{jobList:jobType[]}) => {
  return <div className="grid lg:grid-cols-3 md:grid-cols-2 flex-col gap-5">
    {jobList.map((job)=>{
      return <AlertDialog key={job.id}>
      <AlertDialogTrigger><JobComponent
      name={job.name}
      jobRoles={job.workRoles}
      applicants={job.Applications.length}
      description={job.work}
      salary={job.stipend}
      date={job.createdAt}
      /></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog> 
    })}
  </div>;
};

export default Jobs;
