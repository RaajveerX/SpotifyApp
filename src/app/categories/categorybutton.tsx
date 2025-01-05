"use client"
import Link from "next/link"
import { CardItem } from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"


export default function CategoryButton({ buttontitle }: { buttontitle: string }) {
    return (
        <Link href={`/${buttontitle.toLowerCase()}`}>
            <CardItem
                translateZ={20}>
                    <Button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover::bg-black hover:text-white">Explore {buttontitle}</Button>
            </CardItem>
        </Link>
    )
}
