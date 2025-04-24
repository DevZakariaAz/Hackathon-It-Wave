import Link from "next/link"
import type { ReactNode } from "react"

interface CategoryCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  color: string
}

export function CategoryCard({ icon, title, description, href, color }: CategoryCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className={`${color} p-6 flex justify-center`}>
          <div className="bg-white/20 rounded-full p-4">{icon}</div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}
