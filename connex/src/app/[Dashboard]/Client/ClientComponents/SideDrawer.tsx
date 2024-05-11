import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getServerAuthSession } from "~/server/auth";

const SideDrawer = async () => {
  const session = await getServerAuthSession();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const image = session?.user.image as string | undefined;
  const name = session?.user.name;
  return (
    <div className="flex h-[95vh] w-80 items-start justify-center rounded-xl bg-neutral-950 p-16">
      <div>
        <center className="flex flex-col items-center justify-center gap-3">
          <Avatar className="scale-125">
            <AvatarImage src={image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-bold">{name}</h1>
          <h1 className="text-xl text-lime-500 font-bold">Client</h1>
        </center>
      </div>
      <div></div>
    </div>
  );
};

export default SideDrawer;
