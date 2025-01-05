import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"


export default function DisplayCard({ img, maintitle, artists, totalTracks }: SpotifyAlbum) {
    const defaultImg = "/Donda.png"

    return (
        <Card className="w-1/6 bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-1 border text-white flex-shrink-0">
            <Image
                src={img || defaultImg}
                className="w-full h-1/2 object-cover rounded-t-xl p-1"
                alt=""
                width="1000"
                height="1000"
            />
            <CardHeader className="flex-row justify-between">
                <CardTitle className="text-2xl font-bold text-center truncate">{maintitle}</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Tracks:</span>
                        <span className="text-sm">{totalTracks}</span>
                    </div>
                    <div>
                        <span className="text-sm font-medium">Artists:</span>
                        <div className="flex flex-wrap gap-2 my-1">

                            {
                                artists?.map((artist) => (
                                    <Badge variant={"outline"} className="text-white" key={artist}>{artist}</Badge>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}