import "~/styles/globals.css";
import { Inter } from "next/font/google";
import SideDrawer from "./ClientComponents/SideDrawer";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Connex - Finding Freelancer made easy by our webapp",
  description: "Finding Freelancer made easy by our webapp",
  icons: [{ rel: "icon", url: "/image.jpg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black font-sans text-white ${inter.variable}`}>
        <div className="flex gap-10 p-5">
          <div className="hidden lg:block">
            <SideDrawer />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="cursor-pointer hover:text-lime-500 lg:hidden">
                <GiHamburgerMenu className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex w-full items-center justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
