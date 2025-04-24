import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  image: string
  title: string
  date: string
  location: string
  description: string
}

export function EventCard({ image, title, date, location, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        <Button className="w-full">En savoir plus</Button>
      </div>
    </div>
  )
}
