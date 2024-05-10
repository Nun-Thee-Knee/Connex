'use client'
import React, { use } from 'react'
import { usePathname} from 'next/navigation'
import { api } from '~/trpc/react'

const Dashboard = () => {
    const id = usePathname().split("/")[1]!;
    const {data:userData, isLoading} = api.user.getRole.useQuery({id})
  return (
    <div>Dashboard
        {!isLoading?<h1>Loading</h1>:<p>{JSON.stringify(userData)}</p>}
    </div>
  )
}

export default Dashboard