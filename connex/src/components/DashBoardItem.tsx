'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DashBoardItem = ({id}:{id:string}) => {
  return (
    <div className="flex w-full flex-col gap-1">
            <Link href={`/${id}/Client/`}>
              <h1 className="w-full cursor-pointer rounded-xl p-5 text-lg font-bold hover:bg-black">
                Dashboard
              </h1>
            </Link>
            <Link href={`/${id}/Client/User`}>
              <h1 className="w-full cursor-pointer rounded-xl p-5 text-lg font-bold hover:bg-black">
                User Profile
              </h1>
            </Link>
            <Link href={`/${id}/Client/Jobs`}>
            <h1 className="w-full cursor-pointer rounded-xl p-5 text-lg font-bold hover:bg-black">
              Jobs Created
            </h1>
            </Link>
            <Link href={`/${id}/Client/Applications`}>
            <h1 className="w-full cursor-pointer rounded-xl p-5 text-lg font-bold hover:bg-black">
              Applications
            </h1>
            </Link>
          </div>
  )
}

export default DashBoardItem