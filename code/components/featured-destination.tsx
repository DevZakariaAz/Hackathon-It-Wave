import Image from "next/image"
import { Star } from "lucide-react"

interface FeaturedDestinationProps {
  image: string
  city: string
  country: string
  rating: number
}

export function FeaturedDestination({ image, city, country, rating }: FeaturedDestinationProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-64 rounded-xl overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${city}, ${country}`}
          fill
          className="object-cover transition-transform group-hover:scale-110 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-bold text-xl">{city}</h3>
          <p className="text-sm text-gray-200">{country}</p>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center">
          <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
    </div>
  )
}
