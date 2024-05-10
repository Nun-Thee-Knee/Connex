import Image from "next/image";
import React from "react";
import {NavBarItemType} from "utils/type";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Link from "next/link";

const NavBarItem: NavBarItemType[] = [
  {
    id: 1,
    title: "Home",
    color: "text-lime-500",
    link: "#Home"
  },
  {
    id: 2,
    title: "About",
    color: "text-pink-500",
    link: "#About"
  },
  {
    id: 3,
    title: "Features",
    color: "text-blue-500",
    link: "#Features"
  },
  {
    id: 4,
    title: "Contact",
    color: "text-purple-500",
    link: "#Contact"
  },
];

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Image src="/image.jpg" height={50} width={50} alt="logo"></Image>
        <h1 className="text-xl font-bold">Connex</h1>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-center gap-10">
          {NavBarItem.map((item) => {
            return (
              <Link href={item.link as string}>
              <h1
                key={JSON.stringify(item.id)}
                className={`cursor-pointer font-bold hover:${item.color}`}
              >
                {item.title}
              </h1>
              </Link>
            );
          })}
          <button className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 font-bold hover:scale-95">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer hover:text-lime-500">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            {NavBarItem.map((item) => {
              return (
                <DropdownMenuItem
                  key={JSON.stringify(item.id)}
                  className={`cursor-pointer font-bold hover:text-purple-500`}
                >
                  {item.title}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
