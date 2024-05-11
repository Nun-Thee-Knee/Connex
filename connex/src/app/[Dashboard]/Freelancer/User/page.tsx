import React from "react";
import AvatarUploadPage from "~/components/VercelBlob";
import { getServerAuthSession } from "~/server/auth";

const User = async () => {
  const session = await getServerAuthSession();
  // @typescript-eslint/non-nullable-type-assertion-style
  const id = session?.user?.id as string;
  return (
    <div>
      <AvatarUploadPage id={id} />
    </div>
  );
};

export default User;
