import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MobileAppBanner() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Téléchargez l'Application GloboFun</h2>
            <p className="text-lg mb-6">
              Accédez à toutes les fonctionnalités de GloboFun où que vous soyez. Disponible sur iOS et Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5575 12.0518C17.5543 10.2199 18.5419 8.74389 20.5275 7.76822C19.4613 6.24787 17.8419 5.42865 16.0172 5.32178C14.2893 5.21756 12.4342 6.33982 11.7438 6.33982C11.0246 6.33982 9.4084 5.36414 8.04998 5.36414C5.39248 5.40385 2.5 7.55016 2.5 11.9212C2.5 13.1164 2.69316 14.3513 3.07949 15.6226C3.60791 17.3219 5.63115 21.6585 7.74209 21.5873C8.88428 21.5543 9.65791 20.7681 11.1479 20.7681C12.6006 20.7681 13.3215 21.5873 14.5826 21.5873C16.7201 21.5543 18.5451 17.6526 19.0471 15.9501C15.9074 14.4166 17.5575 12.0914 17.5575 12.0518ZM14.7889 3.75C16.0797 2.22965 15.9404 0.82178 15.9074 0.5C14.7553 0.566082 13.4447 1.25428 12.6842 2.12016C11.8543 3.05016 11.3887 4.18564 11.4877 5.31822C12.7256 5.41822 13.8678 4.76822 14.7889 3.75Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Télécharger sur</span>
                  <span className="font-medium">App Store</span>
                </div>
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.60951 20.7885C3.39688 21.1105 3 21.0105 3 20.6445V3.35547C3 2.98947 3.39688 2.88947 3.60951 3.21147L12.5315 12.0005L3.60951 20.7885Z" />
                  <path d="M14.5315 13.9995L5.99951 21.9995C5.59951 22.3995 5.09951 22.1995 5.09951 21.6995V21.3995L12.5315 13.9995H14.5315Z" />
                  <path d="M5.09951 2.5995V2.2995C5.09951 1.7995 5.59951 1.5995 5.99951 1.9995L14.5315 9.9995H12.5315L5.09951 2.5995Z" />
                  <path d="M19.5 11.9995L15.5 9.9995L13.5 11.9995L15.5 13.9995L19.5 11.9995Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Télécharger sur</span>
                  <span className="font-medium">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-600 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <Image
                  src="/images/app-mockup.png"
                  alt="Application GloboFun"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
