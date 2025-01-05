"use client"
import Link from "next/link"
import { CardItem } from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"


export default function CategoryButton({ buttontitle }: { buttontitle: string }) {
    return (
        <Link href={`/${buttontitle.toLowerCase()}`}>
            <CardItem
                translateZ={20}>
                    <Button variant={"secondary"} className="px-4 py-2 rounded-xl text-xs font-bold">Explore {buttontitle}</Button>
            </CardItem>
        </Link>
    )
}
