import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Briefcase, Users, ShoppingBag, Hotel, Calendar, ChevronRight } from "lucide-react"
import { AIAssistant } from "@/components/ai-assistant"
import { EventCard } from "@/components/event-card"
import { CategoryCard } from "@/components/category-card"
import { FeaturedDestination } from "@/components/featured-destination"
import { MobileAppBanner } from "@/components/mobile-app-banner"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10" />
        <Image
          src="/images/world-cup-stadium.jpg"
          alt="Événement sportif mondial"
          fill
          className="object-cover"
          priority
        />
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">GloboFun</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Votre compagnon tout-en-un pour les événements sportifs mondiaux
          </p>
          <div className="relative w-full max-w-2xl">
            <div className="flex items-center bg-white rounded-full overflow-hidden p-1">
              <input
                type="text"
                placeholder="Que recherchez-vous ?"
                className="flex-1 px-4 py-3 text-gray-800 outline-none"
              />
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
                <Search className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Rechercher</span>
              </Button>
            </div>
            <AIAssistant />
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard
              icon={<Briefcase className="h-8 w-8" />}
              title="Recrutement & Emploi"
              description="Trouvez des opportunités de travail liées aux événements sportifs"
              href="/emplois"
              color="bg-blue-500"
            />
            <CategoryCard
              icon={<Users className="h-8 w-8" />}
              title="Guides & Tours"
              description="Réservez des guides locaux pour découvrir les villes hôtes"
              href="/guides"
              color="bg-green-500"
            />
            <CategoryCard
              icon={<ShoppingBag className="h-8 w-8" />}
              title="Marché de Produits"
              description="Achetez des produits officiels et souvenirs"
              href="/marche"
              color="bg-red-500"
            />
            <CategoryCard
              icon={<Hotel className="h-8 w-8" />}
              title="Hébergement"
              description="Trouvez les meilleurs hôtels et restaurants"
              href="/hebergement"
              color="bg-yellow-500"
            />
            <CategoryCard
              icon={<MapPin className="h-8 w-8" />}
              title="Destinations"
              description="Découvrez les meilleures attractions touristiques"
              href="/destinations"
              color="bg-purple-500"
            />
            <CategoryCard
              icon={<Calendar className="h-8 w-8" />}
              title="Événements"
              description="Calendrier des matchs et événements à ne pas manquer"
              href="/evenements"
              color="bg-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Événements à Venir</h2>
            <Link href="/evenements" className="text-blue-600 hover:text-blue-800 flex items-center">
              Voir tous <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              image="/images/world-cup-2030.jpg"
              title="Coupe du Monde 2030"
              date="10 Juin - 10 Juillet 2030"
              location="Multiple Pays"
              description="Le plus grand événement de football au monde revient avec une édition spéciale."
            />
            <EventCard
              image="/images/olympics-2028.jpg"
              title="Jeux Olympiques 2028"
              date="21 Juillet - 6 Août 2028"
              location="Los Angeles, USA"
              description="Les meilleurs athlètes du monde s'affrontent dans la ville des anges."
            />
            <EventCard
              image="/images/euro-2028.jpg"
              title="UEFA Euro 2028"
              date="Juin - Juillet 2028"
              location="Royaume-Uni et Irlande"
              description="Le championnat européen de football dans les îles britanniques."
            />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Destinations Populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeaturedDestination image="/images/madrid.jpg" city="Madrid" country="Espagne" rating={4.8} />
            <FeaturedDestination image="/images/lisbon.jpg" city="Lisbonne" country="Portugal" rating={4.7} />
            <FeaturedDestination image="/images/casablanca.jpg" city="Casablanca" country="Maroc" rating={4.6} />
            <FeaturedDestination
              image="/images/buenos-aires.jpg"
              city="Buenos Aires"
              country="Argentine"
              rating={4.9}
            />
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" className="rounded-full px-8">
              Découvrir plus de destinations
            </Button>
          </div>
        </div>
      </section>

      {/* AI Assistant Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Assistant IA GloboFun</h2>
              <p className="text-xl mb-6">
                Notre assistant intelligent vous aide à trouver rapidement ce que vous cherchez. Posez simplement vos
                questions et obtenez des réponses personnalisées.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Essayer l'Assistant IA</Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-96 bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-blue-600 p-4 text-white">
                  <p className="font-medium">Assistant GloboFun</p>
                </div>
                <div className="p-4 h-full">
                  <div className="bg-gray-100 rounded-lg p-3 mb-3">
                    <p className="text-sm text-gray-800">
                      Bonjour ! Comment puis-je vous aider pour la Coupe du Monde 2030 ?
                    </p>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3 mb-3 ml-auto max-w-[80%]">
                    <p className="text-sm text-gray-800">Je cherche un hébergement à Madrid pendant les matchs.</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm text-gray-800">
                      Je peux vous montrer les meilleurs hôtels à Madrid pour cette période. Quel est votre budget ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Banner */}
      <MobileAppBanner />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GloboFun</h3>
              <p className="text-gray-400">Votre compagnon tout-en-un pour les événements sportifs mondiaux.</p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Emplois
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guides & Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Marché
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hébergement
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Destinations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Événements</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Coupe du Monde 2030
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Jeux Olympiques 2028
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    UEFA Euro 2028
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Copa America 2028
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tous les événements
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">123 Avenue Globale, Paris</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">contact@globofun.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+33 1 23 45 67 89</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} GloboFun. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
