"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl">GloboFun</span>
          </Link>
          <nav className="hidden md:flex ml-10 space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Emplois <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/emplois/chercher" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                  Chercher un emploi
                </Link>
                <Link href="/emplois/poster" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                  Poster une offre
                </Link>
                <Link href="/emplois/conseils" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                  Conseils
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Guides <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/guides/trouver" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                  Trouver un guide
                </Link>
                <Link href="/guides/devenir" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                  Devenir guide
                </Link>
              </div>
            </div>
            <Link href="/marche" className="text-gray-700 hover:text-blue-600 transition-colors">
              Marché
            </Link>
            <Link href="/hebergement" className="text-gray-700 hover:text-blue-600 transition-colors">
              Hébergement
            </Link>
            <Link href="/evenements" className="text-gray-700 hover:text-blue-600 transition-colors">
              Événements
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm">
              Se connecter
            </Button>
            <Button size="sm">S'inscrire</Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container px-4 py-4 space-y-4">
            <Link href="/emplois" className="block py-2 text-gray-700">
              Emplois
            </Link>
            <Link href="/guides" className="block py-2 text-gray-700">
              Guides
            </Link>
            <Link href="/marche" className="block py-2 text-gray-700">
              Marché
            </Link>
            <Link href="/hebergement" className="block py-2 text-gray-700">
              Hébergement
            </Link>
            <Link href="/evenements" className="block py-2 text-gray-700">
              Événements
            </Link>
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button variant="outline" className="w-full">
                Se connecter
              </Button>
              <Button className="w-full">S'inscrire</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
