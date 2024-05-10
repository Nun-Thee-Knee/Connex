import Image from 'next/image'
import React from 'react'
import Heading from '~/components/Heading'
import NavBar from '~/components/NavBar'

const page = () => {
  return (
    <div className='p-10'>
        <NavBar/>
        <div className='flex mt-14 lg:mt-5 gap-10 flex-col lg:flex-row items-center justify-between'>
            <div className='flex items-center h-full w-full justify-center'>
            <center>
            <Heading/>    
            </center>
            </div>
            <div className='flex items-center h-full w-full justify-center'>
                <Image unoptimized src="/rubbber.gif" height={700} width={700} alt='Image'></Image>
            </div>
        </div>
    </div>
  )
}

export default page