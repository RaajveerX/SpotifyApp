"use client";
import DisplayCard from './displaycard';
import React, { useState, useEffect } from "react";
import { LampContainer } from "../../components/ui/lamp";
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Link from 'next/link';
import { fetchTopArtists } from '../api/actions/GetArtists';


function SliderWithMarks() {

    return (
        <div className="flex justify-around text-white font-light w-full">
            <span>1 year</span>
            <span>6 months</span>
            <span>1 month</span>
        </div>
    );
}


export default function Page() {
    const [lampFinished, setLampFinished] = useState(false);
    const [artists, setArtists] = useState<SpotifyArtist[]>([])
    const [sliderValue, setSliderValue] = useState([50]);

    // Fetch tracks based on the value of the slider
    useEffect(() => {
        const fetchArtists = async () => {
            const response = await fetchTopArtists(20, sliderValue[0]);
            setArtists(response)
        };
        fetchArtists();

    }, [sliderValue])

    // Trigger the tracks to display after lamp animation finishes
    useEffect(() => {
        const timer = setTimeout(() => {
            setLampFinished(true);
        }, 1200);

        return () => clearTimeout(timer);
    },[]);

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 pointer-events-none">
                <LampContainer title='Your Top Artists' fromColor='from-red-500' toColor='to-red-500'/>
            </div>
            <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-5">
                <div className="w-full overflow-x-scroll scrollbar-width-none">
                    <div
                        className="flex flex-nowrap gap-5 p-0 mb-10">
                        {lampFinished && artists.map((artist) => (
                            <DisplayCard
                                key={artist.maintitle}
                                img={artist.img}
                                maintitle={artist.maintitle}
                                genres={artist.genres}
                                popularity={artist.popularity}
                            />
                        ))}
                    </div>
                </div>
                <div className="fixed bottom-5 flex flex-col pt-5 w-full items-center justify-center bg-">
                    <Slider value={sliderValue} max={100} step={50} min={0} className="w-4/6 mb-4" onValueChange={(value) => setSliderValue(value)} />
                    <SliderWithMarks />
                    <p className="text-white text-center mt-2 font-light">Move Slider To Change Timeframe</p>
                    <Link href="/categories" className="flex justify-center">
                        <Button variant="link" className="mt-2 w-1/6 text-white" size="lg">Explore a different area</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
