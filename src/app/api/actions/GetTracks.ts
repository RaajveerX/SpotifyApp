/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

// Used to fetch top tracks and artists
export async function fetchTopTracks(limit = 20, time_range: number): Promise<SpotifyTrack[]> {

    try {
        let time_frame = "medium_term"

        if (time_range == 100) {
            time_frame = "short_term"
        } else if (time_range == 0) {
            time_frame = "long_term"
        }

        console.log(time_frame)

        const session = await getServerSession(options);

        const response = await fetch(
            `https://api.spotify.com/v1/me/top/tracks?time_range=${time_frame}&limit=${limit}`,
            {
                headers: {
                    Authorization: `Bearer ${session?.accessToken}`
                }
            });
        const data = await response.json();

        // Transform Spotify API response to simplified track structure
        return data.items?.map((track: any) => ({
            id: track.id,
            maintitle: track.name,
            popularity: track.popularity,
            artists: track.artists.map((artist: any) => artist.name as string),
            img: track.album.images[0].url,
            album: track.album.name
        }));

    } catch (error) {
        console.log(error)
        return []
    }

}