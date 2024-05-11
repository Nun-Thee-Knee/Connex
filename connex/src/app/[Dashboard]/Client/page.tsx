import React from 'react'
import JobForm from '~/components/JobForm';
import { getServerAuthSession } from '~/server/auth'

const page = async() => {
  const session = await getServerAuthSession();
  // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
  const id = session?.user.id as string;
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <JobForm id={id}/>
    </div>
  )
}

export default page