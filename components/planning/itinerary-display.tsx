"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Clock,
  Euro,
  Users,
  Calendar,
  Star,
  Download,
  Share2,
  Heart,
  Utensils,
  Bed,
  Car,
  Plane,
  Info,
  CheckCircle,
} from "lucide-react"

interface ItineraryDisplayProps {
  itinerary: any
  formData: any
}

export default function ItineraryDisplay({ itinerary, formData }: ItineraryDisplayProps) {
  const [activeDay, setActiveDay] = useState(0)

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([JSON.stringify(itinerary, null, 2)], { type: "application/json" })
    element.href = URL.createObjectURL(file)
    element.download = `itinerary-${formData.destination}.json`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Mon itinéraire pour ${formData.destination}`,
          text: `Découvrez mon itinéraire personnalisé pour ${formData.destination}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Erreur lors du partage:", error)
      }
    } else {
      // Fallback: copier l'URL dans le presse-papiers
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papiers!")
    }
  }

  if (!itinerary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucun itinéraire disponible</h2>
          <p className="text-gray-600">Veuillez générer un nouvel itinéraire.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Votre Itinéraire pour {formData.destination}</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formData.startDate} - {formData.endDate}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {formData.groupSize === "1" ? "Solo" : formData.groupSize}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Euro className="h-4 w-4" />
              {formData.budget}
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Télécharger
            </Button>
            <Button onClick={handleShare} variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Partager
            </Button>
          </div>
        </div>

        {/* Résumé du voyage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Résumé du Voyage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Durée</h3>
                <p className="text-gray-600">{itinerary.days?.length || 0} jours</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg">Activités</h3>
                <p className="text-gray-600">
                  {itinerary.days?.reduce((total: number, day: any) => total + (day.activities?.length || 0), 0) || 0}{" "}
                  expériences
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg">Style</h3>
                <p className="text-gray-600 capitalize">{formData.travelStyle}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Itinéraire détaillé */}
        <Tabs value={activeDay.toString()} onValueChange={(value) => setActiveDay(Number.parseInt(value))}>
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-7 mb-8">
            {itinerary.days?.map((day: any, index: number) => (
              <TabsTrigger key={index} value={index.toString()} className="flex flex-col">
                <span className="font-semibold">Jour {index + 1}</span>
                <span className="text-xs text-gray-500">{day.date}</span>
              </TabsTrigger>
            )) || []}
          </TabsList>

          {itinerary.days?.map((day: any, dayIndex: number) => (
            <TabsContent key={dayIndex} value={dayIndex.toString()}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Jour {dayIndex + 1} - {day.date}
                  </CardTitle>
                  <CardDescription>{day.theme}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {day.activities?.map((activity: any, actIndex: number) => (
                      <div key={actIndex} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
                            <Clock className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-lg">{activity.name}</h3>
                            <Badge variant="outline">{activity.time}</Badge>
                          </div>
                          <p className="text-gray-600 mb-3">{activity.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {activity.type && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {activity.type}
                              </Badge>
                            )}
                            {activity.duration && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {activity.duration}
                              </Badge>
                            )}
                            {activity.cost && (
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Euro className="h-3 w-3" />
                                {activity.cost}
                              </Badge>
                            )}
                          </div>
                          {activity.tips && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <p className="text-blue-800 text-sm">
                                <strong>💡 Conseil:</strong> {activity.tips}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )) || []}

                    {/* Recommandations pour le jour */}
                    {day.recommendations && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Recommandations du jour
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {day.recommendations.restaurant && (
                            <div className="flex items-center gap-2">
                              <Utensils className="h-4 w-4 text-green-600" />
                              <span className="text-sm">
                                <strong>Restaurant:</strong> {day.recommendations.restaurant}
                              </span>
                            </div>
                          )}
                          {day.recommendations.accommodation && (
                            <div className="flex items-center gap-2">
                              <Bed className="h-4 w-4 text-green-600" />
                              <span className="text-sm">
                                <strong>Hébergement:</strong> {day.recommendations.accommodation}
                              </span>
                            </div>
                          )}
                          {day.recommendations.transport && (
                            <div className="flex items-center gap-2">
                              <Car className="h-4 w-4 text-green-600" />
                              <span className="text-sm">
                                <strong>Transport:</strong> {day.recommendations.transport}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )) || []}
        </Tabs>

        {/* Informations pratiques */}
        {itinerary.practicalInfo && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Informations Pratiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {itinerary.practicalInfo.budget && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Euro className="h-4 w-4" />
                      Budget Estimé
                    </h4>
                    <p className="text-gray-600">{itinerary.practicalInfo.budget}</p>
                  </div>
                )}
                {itinerary.practicalInfo.transport && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Plane className="h-4 w-4" />
                      Transport
                    </h4>
                    <p className="text-gray-600">{itinerary.practicalInfo.transport}</p>
                  </div>
                )}
                {itinerary.practicalInfo.accommodation && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Bed className="h-4 w-4" />
                      Hébergement
                    </h4>
                    <p className="text-gray-600">{itinerary.practicalInfo.accommodation}</p>
                  </div>
                )}
                {itinerary.practicalInfo.tips && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Conseils Généraux
                    </h4>
                    <p className="text-gray-600">{itinerary.practicalInfo.tips}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Bouton de retour */}
        <div className="text-center mt-8">
          <Button onClick={() => (window.location.href = "/plan")} variant="outline" size="lg">
            Créer un Nouvel Itinéraire
          </Button>
        </div>
      </div>
    </div>
  )
}
