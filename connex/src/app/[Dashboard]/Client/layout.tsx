import "~/styles/globals.css";
import { Inter } from "next/font/google";
import SideDrawer from "./ClientComponents/SideDrawer";
import { usePathname } from "next/navigation";

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
        <div className="flex gap-20 p-5">
          <SideDrawer />
          <div className="flex items-center justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
