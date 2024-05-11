"use client";
import React, { FC, use } from "react";
import { redirect, usePathname } from "next/navigation";
import { api } from "~/trpc/react";
import RoleAuth from "~/components/RoleAuth";

interface dashboardProps {
  id: string;
}

const Dashboard: FC<dashboardProps> = () => {
  const path = usePathname();
  const id = path?.substring(1);
  if (id) {
    const { data: userData, isLoading } = api.user.getRole.useQuery({ id });
  
  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <p>
          {userData?.role === "None" ? (
            <RoleAuth id={id} />
          ) : (
            <>{redirect(`/${id}/${userData?.role}`)}</>
          )}
        </p>
      )}
    </div>
  );
}
};

export default Dashboard;
