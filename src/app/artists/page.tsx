"use client";
import DisplayCard from './displaycard';
import React from "react";
import { LampContainer } from "../../components/ui/lamp";
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const artistexamples = [
    {
      "img": "/After-Hours.jpg",
      "imgalt": "After Hours album cover",
      "maintitle": "Snowchild",
      "popularity": "90%",
      "genres": ["Rnb", "Pop"],
      "artistname": "The Weeknd"
    },
    {
      "img": "/SZA-SOS.png",
      "imgalt": "SOS album cover",
      "maintitle": "Low",
      "popularity": "98%",
      "genres": ["Rnb"],
      "artistname": "SZA"
    },
    {
      "img": "/Drake-Certified-Lover-Boy.png",
      "imgalt": "Certified Lover Boy album cover",
      "maintitle": "Fair Trade",
      "popularity": "92%",
      "genres": ["Hip-Hop", "Rnb"],
      "artistname": "Drake"
    },
    {
      "img": "/Donda.png",
      "imgalt": "Donda album cover",
      "maintitle": "Off the Grid",
      "popularity": "88%",
      "genres": ["Hip-Hop"],
      "artistname": "Kanye West"
    },
    {
      "img": "/planet-her.jpg",
      "imgalt": "Planet Her album cover",
      "maintitle": "Woman",
      "popularity": "89%",
      "genres": ["Hip-Hop", "Rnb", "Pop"],
      "artistname": "Doja Cat"
    },
    {
      "img": "/igor.jpeg",
      "imgalt": "Igor album cover",
      "maintitle": "New Magic Wand",
      "popularity": "86%",
      "genres": ["Hip-Hop", "Alternative"],
      "artistname": "Tyler, the Creator"
    }
  ]

export default function Artists() {
    return (
        <div className="relative min-h-screen">
            {/* LampContainer as a background */}
            <div className="absolute inset-0 pointer-events-none">
                <LampContainer title='Your Top Artists' />
            </div>
            {/* Scrollable horizontal flex container */}
            <div className="relative min-h-screen flex flex-col items-center justify-center p-5">
                {/* Wrapper to make the flex container scroll horizontally */}
                <div className="w-full overflow-x-scroll ">  {/* Hides default scrollbar */}
                    <div className="flex flex-nowrap gap-5 p-4 mt-20">
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
                        <DisplayCard
                            img='/After-Hours.jpg'
                            imgalt='theweeknd'
                            maintitle='After Hours'
                            artistname='The Weeknd'
                            totaltracks='12'
                            genres={["Rnb", "Pop"]}
                            popularity='95%'
                            className="flex-shrink-0"
                        />
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