"use client";
import React from "react";
import { redirect, usePathname } from "next/navigation";
import { api } from "~/trpc/react";
import { Role } from "@prisma/client";
import RoleAuth from "~/components/RoleAuth";

const Dashboard = () => {
  const path = usePathname();
  // @typescript-eslint/no-unnecessary-type-assertion
  const id = path?.substring(1) as string;
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
};

export default Dashboard;
