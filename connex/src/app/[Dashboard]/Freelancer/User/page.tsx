'use client'
import React from "react";
import AvatarUploadPage from "~/components/VercelBlob";
import { usePathname } from "next/navigation";

const User = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const id = usePathname().split("/")[1] as string;
  return (
    <div className="text-white">
      <AvatarUploadPage id={id}/>
    </div>
  );
};

export default User;
