import HomePage from "~/components/HomePage";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession();

  const id = session?.user.id;
  return (<>
  {session?(redirect("/"+id)):(<HomePage/>)}
  </>)
}
