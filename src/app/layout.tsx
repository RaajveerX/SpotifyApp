import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from '../components/ui/SessionProvider'
import LogoutButton from "@/components/ui/LogoutButton";
import { Button } from "@/components/ui/button";


const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    const session = await getServerSession();

    return (
        <html lang="en" className="dark">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full dark`} >
                <div className="mobile-warning">
                    This site is currently optimized for desktop. Please switch to a desktop view for the best experience.
                </div>

                {
                    session && <LogoutButton />
                }
                {
                    session && <Button variant={"ghost"} className="absolute text-white top-5 left-5 z-10 pointer-events-none cursor-default">Logged in as {session?.user?.name}</Button>

                }
                <SessionProvider session={session}>
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
