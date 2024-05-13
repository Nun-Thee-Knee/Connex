"use client";
import { api } from "~/trpc/react";
import { usePathname } from "next/navigation";
import JobComponent from "~/components/JobComponent";

const Jobs = () => {
  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
  const id = usePathname().split("/Client")[0]?.slice(1) as string;
  const { data: jobData, isLoading } = api.job.userCreated.useQuery({ id });
  return (
    <div className="grid grid-cols-2 gap-10">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {jobData?.map((job) => {
            return (
              <JobComponent
                key={job.id}
                name={job.name}
                jobRoles={job.workRoles}
                description={job.work}
                salary={job.stipend}
                date={job.createdAt}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Jobs;
