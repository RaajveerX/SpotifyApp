
"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { cn } from "@/lib/utils"
import Link from "next/link";

interface OptionsProps{
  title: string;
  description: string;
  img: string;
  buttontitle:string;
  alt:string;
}

const examples = [
  {"title":"Albums",
    "description":"Explore your top albums",
    "img":"/After-Hours.jpg",
    "buttontitle":"Explore Albums",
    "alt":"after-hours album cover"},
  {"title":"Tracks", 
    "description":"Explore your top tracks",
    "img":"/asap-rocky.jpg",
    "buttontitle":"Explore Tracks",
    "alt":"tailor-swif song cover"},
  {"title":"Artists", 
    "description":"Explore your top artists",
    "img":"/frankocean.png",
    "buttontitle":"Explore Artists",
    "alt":"frank-ocean singing"}
]


export default function Categories(){
  return(
        <div className=" grid grid-cols-3 gap-3 justify-center content-center m-10">
          {examples.map((example)=>(
            <Options title={example.title} description={example.description} img={example.img} buttontitle={example.buttontitle} alt={example.alt} ></Options> 
          ))}
        </div>
  
  );
}

const Options: React.FC<OptionsProps> = ({title,description,img,buttontitle,alt}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-2/3  h-2/3 rounded-xl p-6 m-6 border  ">
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
        <CardItem translateZ="100" className="w-full mt-0">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt={alt}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {buttontitle}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}



