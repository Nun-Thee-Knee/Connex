import Link from "next/link";
import React from "react";
import ResumeUpload from "~/components/ResumeUpload";

const page = () => {
  return (
    <div>
      <ResumeUpload />
      <Link href="/api/auth/signout">
        <button className="rounded-xl bg-red-900 p-3 hover:bg-red-700">
          Sign Out
        </button>
      </Link>
    </div>
  );
};

export default page;
