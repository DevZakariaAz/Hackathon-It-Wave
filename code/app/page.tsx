import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, Users, ShoppingBag, Hotel, Calendar, ChevronRight } from "lucide-react";
import { AIAssistant } from "@/components/ai-assistant";
import { EventCard } from "@/components/event-card";
import { CategoryCard } from "@/components/category-card";
import { FeaturedDestination } from "@/components/featured-destination";
import { MobileAppBanner } from "@/components/mobile-app-banner";

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
              <h3 className="font-bold text-lg mb-4">GloboFun</h3>
              <p>Votre partenaire pour des événements mondiaux inoubliables. Trouvez, réservez et explorez avec facilité.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Liens Utiles</h3>
              <ul>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/evenements" className="text-gray-400 hover:text-white">
                    Événements
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-gray-400 hover:text-white">
                    Guides & Tours
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
              <ul>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Téléchargez l'application</h3>
              <div className="flex space-x-4">
                <Link href="#">
                  <Image
                    src="/images/app-store-badge.png"
                    alt="App Store"
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Google Play"
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
