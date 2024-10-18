"use client";
import DisplayCard from './displaycard';
import React from "react";
import { LampContainer } from "../../components/ui/lamp";
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const albumexamples = [
    {
      "img": "/After-Hours.jpg",
      "imgalt": "After Hours album cover",
      "maintitle": "After Hours",
      "popularity": "95%",
      "genres": ["Rnb", "Pop"],
      "totaltracks": "14",
      "artistname": "The Weeknd"
    },
    {
      "img": "/SZA-SOS.png",
      "imgalt": "SOS album cover",
      "maintitle": "SOS",
      "popularity": "98%",
      "genres": ["Rnb"],
      "totaltracks": "23",
      "artistname": "SZA"
    },
    {
      "img": "/Drake-Certified-Lover-Boy.png",
      "imgalt": "Certified Lover Boy album cover",
      "maintitle": "Certified Lover Boy",
      "popularity": "92%",
      "genres": ["Hip-Hop", "Rnb"],
      "totaltracks": "21",
      "artistname": "Drake"
    },
    {
      "img": "/Donda.png",
      "imgalt": "Donda album cover",
      "maintitle": "Donda",
      "popularity": "88%",
      "genres": ["Hip-Hop", "Gospel"],
      "totaltracks": "27",
      "artistname": "Kanye West"
    },
    {
      "img": "/planet-her.jpg",
      "imgalt": "Planet Her album cover",
      "maintitle": "Planet Her",
      "popularity": "89%",
      "genres": ["Hip-Hop", "Rnb", "Pop"],
      "totaltracks": "19",
      "artistname": "Doja Cat"
    },
    {
      "img": "/igor.jpeg",
      "imgalt": "Igor album cover",
      "maintitle": "Igor",
      "popularity": "86%",
      "genres": ["Hip-Hop", "Alternative"],
      "totaltracks": "12",
      "artistname": "Tyler, the Creator"
    }
  ]

export default function Albums() {
    return (
        <div className="relative min-h-screen">
            {/* LampContainer as a background */}
            <div className="absolute inset-0 pointer-events-none">
                <LampContainer title='Your Top Albums' />
            </div>
            {/* Scrollable horizontal flex container */}
            <div className="relative min-h-screen flex flex-col items-center justify-center p-5">
                {/* Wrapper to make the flex container scroll horizontally */}
                <div className="w-full overflow-x-scroll ">  {/* Hides default scrollbar */}
                    <div className="flex flex-nowrap gap-5 p-4 mt-20">
                        {albumexamples.map((album)=>(
                            <DisplayCard
                            img={album.img}
                            imgalt={album.imgalt}
                            maintitle={album.maintitle}
                            artistname={album.artistname}
                            totaltracks={album.totaltracks}
                            genres={album.genres}
                            popularity={album.popularity}
                            className="flex-shrink-0"
                        />

                        ))}
                    </div>
                </div>
                {/* Add spacing before the slider */}
                <div className="flex flex-col pt-5 w-full items-center justify-center">
                    <Slider defaultValue={[50]} max={100} step={1} className="w-3/4 mx-auto justify-end" />
                    <p className='text-white text-center mt-10 font-light'>Slide to move the timeframe</p>
                    <p className='text-white text-center mt-2 font-thin'>1 year - 6 months - 1 month</p>
                    <Button variant={"link"} className="mt- w-1/6 border-dotted text-white" size={"lg"}>Explore a different area</Button>
                </div>
            </div>
        </div>
    );
}