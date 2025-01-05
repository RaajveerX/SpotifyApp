/* eslint-disable @typescript-eslint/no-unused-vars */

interface OptionsProps{
    title: string;
    description: string;
    img: string;
    buttontitle:string;
    alt:string;
}

// Interface for Spotify Track
interface SpotifyTrack {
    img: string,
    maintitle: string,
    popularity?:string,
    artists:string[],
    album: string
}

// Interface for Spotify Artist
interface SpotifyArtist {
    img: string,
    maintitle: string,
    genres: string[],
    popularity?: string,
}

// Interface for Spotify Album
interface SpotifyAlbum {
    img: string,
    maintitle: string,
    artists: string[],
    totalTracks: number
}

// Used to Display Category Options Tracks, Albums, Artists
interface CategoryCard {
    id: number,
    title: string,
    description: string,
    img: string,
    buttontitle: string,
    alt: string
}


