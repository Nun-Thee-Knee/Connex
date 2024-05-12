'use client'
import React from "react";
import AvatarUploadPage from "~/components/VercelBlob";
import { usePathname } from "next/navigation";

const User = async () => {
  const id = usePathname().split("/")[1]!;
  return (
    <div className="text-white">
      <AvatarUploadPage id={id}/>
      <h1>Hello</h1>
    </div>
  );
};

export default User;
