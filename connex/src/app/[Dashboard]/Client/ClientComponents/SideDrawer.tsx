import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import DashBoardItem from "~/components/DashBoardItem";

const SideDrawer = async () => {
  const session = await getServerAuthSession();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const id = session?.user.id!
  const image = session?.user.image!;
  const name = session?.user.name!;
  const email = session?.user.email!;
  return (
    <div className="flex h-[95vh] w-80 items-start justify-center rounded-xl bg-neutral-950 px-5 py-10">
      <div className="w-full">
        <center className="flex w-full flex-col items-center justify-center gap-3">
          <Avatar className="scale-125">
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">{name}</h1>
          <h1 className="text-xl font-bold text-lime-500">Client</h1>
          <p className="text-purple-500">{email}</p>
          <DashBoardItem id={id}/>
        </center>
      </div>
    </div>
  );
};

export default SideDrawer;
