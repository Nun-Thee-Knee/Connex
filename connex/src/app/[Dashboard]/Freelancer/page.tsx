'use client'
import Link from 'next/link'
import React from 'react'
import Jobs from '~/components/Jobs'
import { api } from '~/trpc/react'

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

const page = () => {
  const {data:jobs, isLoading, error} = api.job.fetchAllJobs.useQuery();
  return (
    <div>
      <Link href="/api/auth/signout">
        <button className='bg-red-900 hover:bg-red-700 p-3 rounded-xl'>Sign Out</button>
      </Link>
      {/* // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */}
      {isLoading?(<h1>Loading</h1>):(<Jobs jobList={jobs as jobType[]}/>)}
    </div>
  )
}

export default page