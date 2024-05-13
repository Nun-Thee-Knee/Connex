import React from "react";
import { getServerAuthSession } from "~/server/auth";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Link from "next/link";

const UserProfile = async () => {
  const session = await getServerAuthSession();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const image = session?.user.image;
  const name = session?.user.name;
  const email = session?.user.email;
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-5">
      <Avatar className="scale-125">
        <AvatarImage src={image!} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-xl font-bold">{email}</h1>
      <h1 className="text-2xl font-bold text-lime-500">Client</h1>
      <Link href="/api/auth/signout">
        <button className="rounded-xl bg-red-900 p-3 font-bold hover:bg-red-700">
          Sign Out
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;
