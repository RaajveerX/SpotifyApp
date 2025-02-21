"use client"

import React from "react";
import { Spotlight } from "../components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import SpotifyLogo from "@/components/ui/SpotifyLogo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

function SpotlightLogin() {

    const session = useSession()


    return (

        
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-auto">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col items-center justify-center" >
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Explore your <br /> Spotify.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto ">
                    Dive deep into your listening history
                </p>

                {
                    session.data? 

                    <Link href={"/categories"}>
                        <Button variant={"outline"} className="mt-8 max-w-full" size={"lg"}>Explore Categories</Button>
                    </Link>
                
                    :
                    <Button variant={"outline"} className="mt-8 max-w-full" size={"lg"} onClick={() => signIn('spotify', { callbackUrl: "/categories" })}>
                        Login with
                        {/* <Image className="m-2" src={"/Spotify_Full_Logo_RGB_Green.png"} alt="Spotify Logo" width={"100"} height={"100"}/> */}
                        <SpotifyLogo/>
                        Spotify
                    </Button>
                }

                <p className="mt-8 font-thin text-base text-neutral-300 text-center justify-item">
                    Powered by OAuth 2.0
                </p>
            </div>
            <Alert className="fixed bottom-5 left-5 z-10 h-50 w-1/2">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Hi there!</AlertTitle>
                    <AlertDescription>
                    This app is currently in dev mode and is limited to 25 registered Spotify users, due to constraints of the Spotify API. <br></br>
                    If you would like to try this out, please shoot me an email at raajveersokhi@gmail.com :)
                    </AlertDescription>
            </Alert>
        </div>
    );
}


export default function Home() {
    return (
        <SpotlightLogin></SpotlightLogin>
    )
}
