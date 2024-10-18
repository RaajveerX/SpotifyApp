import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DisplayCard({img,imgalt,maintitle,popularity,genres,totaltracks,artistname}:{
  img: string,
  imgalt: string,
  maintitle: string,
  popularity?:string,
  genres?:string[],
  totaltracks:string,
  artistname:string

}) {
  return (
    <Card className="w-1/6 h-1/7 bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-1 border text-white flex-shrink-0">
      <img 
        src={img}
        alt={imgalt}
        className="w-full h-1/2 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{maintitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Popularity:</span>
            <span className="text-sm">{popularity}</span>
          </div>
          <div>
            <span className="text-sm font-medium">Genres:</span>
            <div className="flex flex-wrap gap-2 my-1">
              {
                genres?.map((genre)=>(
                  <Badge variant={"outline"} className="text-white">{genre}</Badge>
                ))
              }
            </div>
          </div>
          <div className="flex items-center justify-between">
            {totaltracks && (
              <div>
                <span className="text-sm font-medium">Total Tracks:</span>
                <span className="text-sm">{totaltracks}</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Artist:</span>
            <span className="text-sm font-semibold">{artistname}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}