import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import CategoryButton from "./categorybutton";


export default function CategoryCard({ title, description, img, buttontitle, alt }: OptionsProps) {
    return (
        <CardContainer >
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-2/3  h-2/3 rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-2">
                    <Image
                        src={img}
                        height="1000"
                        width="1000"
                        className="object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={alt}
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CategoryButton buttontitle={buttontitle} />
                </div>
            </CardBody>
        </CardContainer>
    )
}