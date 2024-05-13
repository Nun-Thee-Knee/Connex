"use client";
import React from "react";
import Card from "./Card";
import { CardType, Role } from "utils/type";
import { api } from "~/trpc/react";
import { redirect, useRouter } from "next/navigation";

const CardItems: CardType[] = [
  {
    img: "freelancer.jpg",
    title: "Freelancer",
    text: "A freelancer platform typically offers profile creation, job search, messaging, portfolio showcase, payment integration, review system, job notifications, skills assessment, contract management, invoice generation, support, and community networking.",
    role: Role.Freelancer,
  },
  {
    img: "client.jpg",
    title: "Client",
    text: "A client platform typically includes job posting, freelancer search, messaging, project management, payment integration, review system, job notifications, support, contract management, invoice generation, and community networking features.",
    role: Role.Client,
  },
];

const RoleAuth = ({ id }: { id: string }) => {
  const router = useRouter();
  const {
    mutate: updateRole,
  } = api.user.updateRole.useMutation({
    onMutate: async ({ id, role }) => {
      updateRole({ id, role });
    },
    onSuccess: () => {
      router.refresh();
    },
    onError: () => {
      router.refresh();
    },
  });
  const handleClick = (choice: string) => {
    const role = choice === "Freelancer" ? "Freelancer" : "Client";
    updateRole({ id, role });
  };
  return (
    <>
      <div className="flex h-[auto] flex-col items-center justify-center gap-10 p-10 lg:h-[100vh]">
        <h1 className="text-4xl">Select Your Role</h1>
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          {CardItems.map((item) => {
            return (
              <button
                onClick={() => {
                  handleClick(item.title);
                }}
                key={item.role}
              >
                <div className="hover:scale-95">
                  <Card img={item.img} title={item.title} text={item.text} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoleAuth;
