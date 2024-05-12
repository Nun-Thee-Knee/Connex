import React from 'react'
import { getServerAuthSession } from '~/server/auth'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Link from 'next/link';

const UserProfile = async() => {
  const session = await getServerAuthSession();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const id = session?.user.id as string
  const image = session?.user.image;
  const name = session?.user.name;
  const email = session?.user.email;
  return (
    <div className='w-full h-[100vh] flex flex-col gap-5 items-center justify-center'>
<Avatar className="scale-125">
            <AvatarImage src={image!} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className='text-2xl font-bold'>{name}</h1>
          <h1 className='text-xl font-bold'>{email}</h1>
          <h1 className='text-2xl text-lime-500 font-bold'>Client</h1>
          <Link href="/api/auth/signout"><button className='bg-red-900 font-bold p-3 rounded-xl hover:bg-red-700'>Sign Out</button></Link>
    </div>
  )
}

export default UserProfile