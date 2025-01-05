/* eslint-disable @typescript-eslint/no-explicit-any */

"use server"
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";


const examples: CategoryCard[] = [
    {
        id: 0,
        "title": "Albums",
        "description": "Explore your top albums",
        "img": "../After-Hours.jpg",
        "buttontitle": "Albums",
        "alt": "after-hours album cover"
    },
    {
        id: 1,
        "title": "Tracks",
        "description": "Explore your top tracks",
        "img": "/asap-rocky.jpg",
        "buttontitle": "Tracks",
        "alt": "tailor-swif song cover"
    },
    {
        id: 2,
        "title": "Artists",
        "description": "Explore your top artists",
        "img": "/frankocean.png",
        "buttontitle": "Artists",
        "alt": "frank-ocean singing"
    }
]

// Get the top artist, track, album  that'll be used to display category options
export async function GetTop3(): Promise<CategoryCard[]> {

    try {
        const session = await getServerSession(options) // Session

        const topArtistsResponse = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10', {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });

        const topArtists = await topArtistsResponse.json();
        let randomIndex = Math.floor(Math.random() * topArtists.items.length);
        const ArtistCover = topArtists.items?.[randomIndex].images?.[0]?.url

        const topTracksResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=short_term', {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });
        const topTracks = await topTracksResponse.json();
        randomIndex = Math.floor(Math.random() * topTracks.items.length) // New Random
        const TrackCover = topTracks.items?.[randomIndex]?.album?.images?.[0]?.url

        randomIndex = Math.floor(Math.random() * topTracks.items.length) // New Random
        const AlbumCover = topTracks.items?.[randomIndex]?.album?.images?.[0]?.url

        // Falls back on default cover values if fetched covers are not defined
        examples[0].img = AlbumCover ?? examples[0].img
        examples[1].img = TrackCover ?? examples[1].img
        examples[2].img = ArtistCover ?? examples[2].img


    } catch (error) {
        console.log(error)

    } finally {
        return examples
    }


}