import Image from 'next/image'
import React from 'react'
import NavBarItemType from 'utils/type'
import {Menu} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "~/components/ui/dropdown-menu"
  

const NavBarItem:NavBarItemType[] = [
    {
        id: 1,
        title: "Home",
        color:"text-lime-500"
    },
    {
        id: 2,
        title: "About",
        color:"text-pink-500"
    },
    {
        id: 3,
        title: "Features",
        color:"text-blue-500"
    },
    {
        id: 4,
        title: "Contact",
        color:"text-purple-500"
    },
]


const NavBar = () => {
  return (
    <div className="flex justify-between">
        <div className='flex items-center'>
            <Image src="/image.jpg" height={50} width={50} alt='logo'></Image>
            <h1 className='font-bold text-xl'>Connex</h1>
        </div>
        <div className='hidden lg:block'>
        <div className='flex gap-10 items-center justify-center'>
            {NavBarItem.map((item)=>{
                return <h1 key={JSON.stringify(item.id)} className={`font-bold cursor-pointer hover:${item.color}`}>{item.title}</h1>
            })}
        <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-xl hover:scale-95 font-bold'>Get Started</button>
</div>
        </div>
        <div className='lg:hidden flex items-center justify-center'>
    <DropdownMenu>
  <DropdownMenuTrigger className='hover:text-lime-500 cursor-pointer'><Menu/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />
    {NavBarItem.map((item)=>{
        return <DropdownMenuItem key={JSON.stringify(item.id)} className={`cursor-pointer font-bold hover:text-purple-500`}>{item.title}</DropdownMenuItem>
    })}
  </DropdownMenuContent>
</DropdownMenu>
</div>
    </div>
  ) 
}

export default NavBar