'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type DashBoardItemType = {
  title: string,
  link: string|null
}

const DashboardComponents:DashBoardItemType[]=[
  {title: "Dashboard", link:""},
  {title: "User Profile", link:"User"},
  {title: "Jobs Created", link:"Jobs"},
  {title: "Applications", link:"Applications"},
]

const DashBoardItem = ({id}:{id:string}) => {
  let path = usePathname().split("/")[3];
  path = (path===null)?" ":path;
  return (
    <div className="flex w-full flex-col gap-1">
            {DashboardComponents.map((item)=>{
              return <Link key={item.title} href={`/${id}/Client/${item.link}`}>
              <h1 className={`w-full cursor-pointer rounded-xl p-5 text-lg font-bold ${item.link===path?"bg-black":""} hover:bg-black`}>
                {item.title}
              </h1>
            </Link>
            })}       
          </div>
  )
}

export default DashBoardItem