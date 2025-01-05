"use client"

import { Button } from "./button"
import { signOut } from "next-auth/react"


export default function LogoutButton(){
    return (
        <Button variant={"outline"} onClick={()=> signOut()} className="absolute z-10 top-5 right-5">Log Out</Button>
    )
}

