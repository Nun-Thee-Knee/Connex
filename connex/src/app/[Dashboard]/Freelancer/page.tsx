"use client";
import Link from "next/link";
import React from "react";
import Jobs from "~/components/Jobs";
import { api } from "~/trpc/react";
import { usePathname } from "next/navigation";

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

const Page = () => {
  const { data: jobs, isLoading } = api.job.fetchAllJobs.useQuery();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const userId = usePathname().split("/")[1] as string
  return (
    <div className="flex h-auto flex-col items-center justify-center gap-10 px-10 py-20">
      <h1 className="text-6xl text-white">Click on the job to Apply</h1>
      <Link href="/api/auth/signout">
        <button className="rounded-xl bg-red-900 p-3 hover:bg-red-700">
          Sign Out
        </button>
      </Link>
      {/* // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */}
      {isLoading ? <h1>Loading</h1> : <Jobs jobList={jobs as jobType[]} userId={userId}/>}
    </div>
  );
};

export default Page;
