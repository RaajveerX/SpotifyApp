import type { NextAuthOptions} from "next-auth";
import SpotifyProvider from 'next-auth/providers/spotify'
import type { JWT } from "next-auth/jwt";

interface ExtendedJWT extends JWT {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
}


declare module "next-auth" {
    interface Session {
        accessToken: string;
    }
}

// Function to Refresh Access Tokens
async function refreshAccessToken(token: ExtendedJWT): Promise<ExtendedJWT> {

    const params = new URLSearchParams()
    params.append("grant_type", "refresh_token")
    params.append("refresh_token", token.refreshToken)

    const response = await fetch("https://accounts.spotify.com/api/token",{
        method: "POST",
        headers: {
            Authorization : 
            'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
    })
    const data = await response.json()

    return {
        ...token,
        accessToken: data.access_token,
        refreshToken: data.refresh_token ?? token.refreshToken,
        accesTokenExpires: Date.now() + data.expires_in * 1000
    }
}


// Variables for authorization
const scopes = [
    "user-top-read",
    "user-read-private",
    "user-read-email",
].join(",")

const params = {
    scope: scopes
}

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams(params).toString();


// Auth Optionns
export const options: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: LOGIN_URL
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/"
    },
    callbacks: {
        async jwt({ token, account }){
            if (account) {
                token.accessToken = account.access_token
                token.refreshToken = account.refresh_token
                token.accessTokenExpires = account.expires_at
                return token
            }

            // un-expired token
            if (token.accessTokenExpires && Date.now() < (token.accessTokenExpire as number) * 1000) {
                return token
            }

            // expired token
            return await refreshAccessToken(token as ExtendedJWT)
        },
        async session({ session, token }) {
            session.accessToken = (token as ExtendedJWT).accessToken;
            return session;
        }    
    }
}