'use client'
import React, { use } from 'react'
import { usePathname} from 'next/navigation'
import { api } from '~/trpc/react'

const Dashboard = () => {
    const id = usePathname().split("/")[1] as string;
    const {data:userData, isLoading} = api.user.getRole.useQuery({id})
  return (
    <div>Dashboard
        {JSON.stringify(userData)}
    </div>
  )
}

export default Dashboard