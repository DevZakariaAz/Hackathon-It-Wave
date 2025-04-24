"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, X } from "lucide-react"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className="absolute right-2 top-2 rounded-full bg-blue-600 hover:bg-blue-700 h-10 w-10 p-0"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-5 w-5" />
        <span className="sr-only">Assistant IA</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between bg-blue-600 text-white p-4">
              <h3 className="font-medium">Assistant GloboFun</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4 max-h-[500px] overflow-y-auto">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm">
                  Bonjour ! Je suis l'assistant GloboFun. Comment puis-je vous aider pour votre expérience lors des
                  événements sportifs mondiaux ?
                </p>
              </div>
              <div className="bg-blue-100 rounded-lg p-3 mb-3 ml-auto max-w-[80%]">
                <p className="text-sm">Je cherche un emploi pendant la Coupe du Monde 2030</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm">
                  Je peux vous aider à trouver des opportunités d'emploi pour la Coupe du Monde 2030. Quels types de
                  postes vous intéressent et dans quelles villes souhaitez-vous travailler ?
                </p>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Posez votre question..."
                  className="flex-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Envoyer</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
