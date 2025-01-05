/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

// Used to fetch top artists
export async function fetchTopArtists(limit = 20, time_range: number): Promise<SpotifyArtist[]> {

    try {
        let time_frame = "medium_term"

        if (time_range == 100) {
            time_frame = "short_term"
        } else if (time_range == 0) {
            time_frame = "long_term"
        }


        const session = await getServerSession(options);

        const response = await fetch(
            `https://api.spotify.com/v1/me/top/artists?time_range=${time_frame}&limit=${limit}`,
            {
                headers: {
                    Authorization: `Bearer ${session?.accessToken}`
                }
            });
        const data = await response.json();


        // Transform Spotify API response to simplified artist object structure
        return data.items?.map((artist: any) => ({
            id: artist.id,
            maintitle: artist.name,
            popularity: artist.popularity,
            genres: artist.genres,
            img: artist.images[0].url
        }));

    } catch (error) {
        console.log(error)
        return []
    }

}