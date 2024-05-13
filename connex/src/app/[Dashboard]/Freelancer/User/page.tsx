"use client";
import React from "react";
import AvatarUploadPage from "~/components/VercelBlob";
import { usePathname } from "next/navigation";

const User = () => {
  const id: string | undefined = usePathname().split("/")[1];
  return (
    <div className="text-white">
      {id !== undefined && <AvatarUploadPage id={id} />}
      <h1>Hello</h1>
    </div>
  );
};

export default User;
