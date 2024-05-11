import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href="/api/auth/signout">
        <button className='bg-red-900 hover:bg-red-700 p-3 rounded-xl'>Sign Out</button>
      </Link>
    </div>
  )
}

export default page