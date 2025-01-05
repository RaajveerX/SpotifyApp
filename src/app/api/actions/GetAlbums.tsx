/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";


// Used to fetch top tracks and artists
export async function fetchTopAlbums(limit = 50, time_range: number): Promise<SpotifyAlbum[]> {

    try {
        let time_frame = "medium_term"

        if (time_range == 100) {
            time_frame = "short_term"
        } else if (time_range == 0) {
            time_frame = "long_term"
        }

        const session = await getServerSession(options);

        const response = await fetch(
            `https://api.spotify.com/v1/me/top/tracks?time_range=${time_frame}&limit=${limit}`,
            {
                headers: {
                    Authorization: `Bearer ${session?.accessToken}`
                }
            });
        const data = await response.json();

        // Use a Set to track unique album IDs
        const uniqueAlbums = new Set();

        // Transform Spotify API response to simplified track structure and apply filters
        return data.items
            ?.map((track: any) => ({
                id: track.album.id,
                maintitle: track.album.name,
                artists: track.album.artists.map((artist: any) => artist.name as string),
                img: track.album.images[0]?.url,
                totalTracks: track.album.total_tracks,
            }))
            .filter((album: SpotifyAlbum) => {
                // Exclude singles and duplicate albums
                if (album.totalTracks > 1 && !uniqueAlbums.has(album.maintitle)) {
                    uniqueAlbums.add(album.maintitle); // Add to the set of unique album IDs
                    return true;
                }
                return false;
            });


    } catch (error) {
        console.log(error)
        return []
    }

}