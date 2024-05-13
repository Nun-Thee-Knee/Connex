import React from 'react'
import JobForm from '~/components/JobForm';
import { getServerAuthSession } from '~/server/auth'

const page = async() => {
  const session = await getServerAuthSession();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const id = session?.user.id as string;
  return (
    <div className="flex flex-col gap-10 items-center w-full px-20 justify-center h-[100vh]">
      <h1 className='text-2xl text-white font-bold'>Create a Job</h1>
      <JobForm id={id}/>
    </div>
  )
}

export default page