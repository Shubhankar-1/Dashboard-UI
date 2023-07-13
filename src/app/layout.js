
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import SidePanel from "@/components/SidePanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dashboard UI",
    description: "app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                <br />
                <br />
                <br />
                <div className="flex">
                    <SideBar />
                    <SidePanel />
                    {children}
                </div>
            </body>
        </html>
    );
}
