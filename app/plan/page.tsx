"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import PlanningForm from "@/components/planning/planning-form"
import ItineraryDisplay from "@/components/planning/itinerary-display"
import LoadingSpinner from "@/components/ui/loading-spinner"
import ErrorBoundary from "@/components/ui/error-boundary"
import { AlertTriangle, RefreshCw, Sparkles, Brain } from "lucide-react"

export default function PlanPage() {
  const [formData, setFormData] = useState({})
  const [itinerary, setItinerary] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const searchParams = useSearchParams()

  // Initialize form data from URL params only once
  useEffect(() => {
    if (!isInitialized) {
      const destination = searchParams.get("destination")
      if (destination) {
        setFormData({ destination })
      }
      setIsInitialized(true)
    }
  }, [searchParams, isInitialized])

  const handleFormComplete = useCallback(async (data: any) => {
    setFormData(data)
    setIsGenerating(true)
    setError(null)
    setGenerationProgress(0)

    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 90) return 90
        return prev + Math.random() * 10
      })
    }, 500)

    try {
      console.log("Sending request to generate itinerary with data:", data)

      const response = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Erreur HTTP: ${response.status}`)
      }

      const result = await response.json()
      console.log("Received itinerary result:", result)

      setGenerationProgress(100)
      setTimeout(() => {
        setItinerary(result)
        setIsGenerating(false)
      }, 1000)
    } catch (error) {
      console.error("Erreur lors de la génération de l'itinéraire:", error)
      setError(error.message || "Échec de la génération de l'itinéraire. Veuillez réessayer.")
      setIsGenerating(false)
    } finally {
      clearInterval(progressInterval)
    }
  }, [])

  const handleRetry = useCallback(() => {
    setError(null)
    setItinerary(null)
    setGenerationProgress(0)
  }, [])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-100 rounded-full p-6 w-20 h-20 mx-auto mb-8 animate-bounce-in">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Oups ! Une erreur s'est produite</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <p className="text-red-700 text-lg font-medium mb-2">Détails de l'erreur :</p>
            <p className="text-red-600 text-sm leading-relaxed">{error}</p>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleRetry}
              className="w-full bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Réessayer</span>
            </button>
            <p className="text-gray-500 text-sm">
              Si le problème persiste, veuillez contacter notre support technique.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (isGenerating) {
    const aiMessage = formData.aiMode
      ? "🤖 L'IA Gemini crée votre itinéraire personnalisé..."
      : "📋 Génération de votre itinéraire standard..."

    const aiSubmessage = formData.aiMode
      ? "Notre intelligence artificielle analyse vos préférences et trouve les meilleures expériences pour vous"
      : "Création d'un itinéraire basé sur les attractions populaires et les recommandations standard"

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <LoadingSpinner message={aiMessage} submessage={aiSubmessage} />

          {/* Informations sur le voyage en cours de génération */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              {formData.aiMode ? (
                <Brain className="w-8 h-8 text-purple-500 mr-3 animate-pulse" />
              ) : (
                <Sparkles className="w-8 h-8 text-blue-500 mr-3 animate-pulse" />
              )}
              <h3 className="text-2xl font-bold text-gray-900">
                {formData.aiMode ? "Mode IA Activé" : "Mode Standard"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">🌍 Destination:</span>
                  <span className="text-gray-900 font-medium">{formData.destination}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">👥 Groupe:</span>
                  <span className="text-gray-900 font-medium">
                    {formData.groupSize === "1" ? "Solo" : formData.groupSize}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">💰 Budget:</span>
                  <span className="text-gray-900 font-medium">{formData.budget}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">🎨 Style:</span>
                  <span className="text-gray-900 font-medium">{formData.travelStyle}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">❤️ Intérêts:</span>
                  <span className="text-gray-900 font-medium">{formData.interests?.length || 0} sélectionnés</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 w-24">📅 Durée:</span>
                  <span className="text-gray-900 font-medium">
                    {formData.startDate && formData.endDate
                      ? `${Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24))} jours`
                      : "Non spécifiée"}
                  </span>
                </div>
              </div>
            </div>

            {formData.aiMode && (
              <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-2xl p-4">
                <div className="flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-600 mr-2 animate-spin" />
                  <span className="text-purple-800 font-semibold text-sm">
                    L'IA Gemini personnalise chaque détail selon vos préférences
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (itinerary) {
    return (
      <ErrorBoundary>
        <ItineraryDisplay itinerary={itinerary} formData={formData} />
      </ErrorBoundary>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <ErrorBoundary>
        <PlanningForm onComplete={handleFormComplete} initialData={formData} />
      </ErrorBoundary>
    </div>
  )
}
