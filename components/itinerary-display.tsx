"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Calendar,
  Clock,
  Euro,
  Star,
  Utensils,
  Car,
  Phone,
  Building2,
  AlertCircle,
  Download,
  Share2,
  Heart,
  Sparkles,
} from "lucide-react"

interface ItineraryDisplayProps {
  itinerary: any
  onSave?: () => void
  onShare?: () => void
  onDownload?: () => void
}

export function ItineraryDisplay({ itinerary, onSave, onShare, onDownload }: ItineraryDisplayProps) {
  if (!itinerary) {
    return (
      <div className="text-center py-12">
        <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun itinéraire à afficher</h3>
        <p className="text-gray-600">Créez votre premier itinéraire pour le voir apparaître ici.</p>
      </div>
    )
  }

  const getDifficultyColor = (activity: any) => {
    switch (activity.difficulty) {
      case "Facile":
        return "bg-green-100 text-green-800"
      case "Modéré":
        return "bg-yellow-100 text-yellow-800"
      case "Difficile":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              {itinerary.aiGenerated && (
                <Badge className="bg-white/20 text-white border-white/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Généré par IA
                </Badge>
              )}
              <Badge className="bg-white/20 text-white border-white/30">{itinerary.currency}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{itinerary.destination}</h1>
            <p className="text-xl opacity-90 mb-4">
              {itinerary.totalDays} jours • {itinerary.estimatedCost}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {itinerary.totalDays} jours
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                {itinerary.freeActivities} activités gratuites
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {onSave && (
              <Button
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={onSave}
              >
                <Heart className="w-4 h-4 mr-2" />
                Sauvegarder
              </Button>
            )}
            {onShare && (
              <Button
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={onShare}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Partager
              </Button>
            )}
            {onDownload && (
              <Button
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={onDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="itinerary" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="itinerary">Itinéraire</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="recommendations">Conseils</TabsTrigger>
          <TabsTrigger value="practical">Infos Pratiques</TabsTrigger>
          <TabsTrigger value="emergency">Urgences</TabsTrigger>
        </TabsList>

        {/* Itinerary Tab */}
        <TabsContent value="itinerary" className="space-y-6">
          {itinerary.dailySchedule?.map((day: any, index: number) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Jour {day.day} - {day.date}
                    </CardTitle>
                    <CardDescription className="mt-1">{day.theme}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-white">
                    <Euro className="h-3 w-3 mr-1" />
                    {day.estimatedCost}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Morning */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">Matin</span>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{day.activities.morning.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{day.activities.morning.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="outline">{day.activities.morning.time}</Badge>
                        <Badge variant="outline">{day.activities.morning.cost}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {day.activities.morning.rating}
                        </Badge>
                        <Badge className={getDifficultyColor(day.activities.morning)}>
                          {day.activities.morning.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Afternoon */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">Après-midi</span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{day.activities.afternoon.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{day.activities.afternoon.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="outline">{day.activities.afternoon.time}</Badge>
                        <Badge variant="outline">{day.activities.afternoon.cost}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {day.activities.afternoon.rating}
                        </Badge>
                        <Badge className={getDifficultyColor(day.activities.afternoon)}>
                          {day.activities.afternoon.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Evening */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-purple-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">Soir</span>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{day.activities.evening.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{day.activities.evening.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <Badge variant="outline">{day.activities.evening.time}</Badge>
                        <Badge variant="outline">{day.activities.evening.cost}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {day.activities.evening.rating}
                        </Badge>
                        <Badge className={getDifficultyColor(day.activities.evening)}>
                          {day.activities.evening.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meals & Transport */}
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      Repas
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Petit-déjeuner:</span>
                        <span>
                          {day.meals.breakfast.name} ({day.meals.breakfast.cost})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Déjeuner:</span>
                        <span>
                          {day.meals.lunch.name} ({day.meals.lunch.cost})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dîner:</span>
                        <span>
                          {day.meals.dinner.name} ({day.meals.dinner.cost})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Car className="h-4 w-4" />
                      Transport
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Moyen:</span>
                        <span>{day.transportation.method}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coût estimé:</span>
                        <span>{day.transportation.estimatedCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Durée totale:</span>
                        <span>{day.transportation.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Budget Tab */}
        <TabsContent value="budget">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                Répartition du Budget
              </CardTitle>
              <CardDescription>Détail des coûts pour votre voyage de {itinerary.totalDays} jours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium">Hébergement</span>
                    <span className="font-bold text-blue-600">{itinerary.budgetBreakdown?.accommodation}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium">Restauration</span>
                    <span className="font-bold text-green-600">{itinerary.budgetBreakdown?.food}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium">Activités</span>
                    <span className="font-bold text-purple-600">{itinerary.budgetBreakdown?.activities}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-medium">Transport</span>
                    <span className="font-bold text-orange-600">{itinerary.budgetBreakdown?.transportation}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Total</h3>
                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {itinerary.budgetBreakdown?.total}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">pour votre voyage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5" />
                  Restaurants Recommandés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {itinerary.recommendations?.restaurants?.map((restaurant: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{restaurant}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Attractions Incontournables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {itinerary.recommendations?.attractions?.map((attraction: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span>{attraction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conseils de Voyage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {itinerary.recommendations?.tips?.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {itinerary.recommendations?.shopping?.map((shop: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-lg">🛍️</span>
                      <span>{shop}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Practical Info Tab */}
        <TabsContent value="practical">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Informations Météo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Conditions Attendues</h4>
                  <p className="text-sm text-gray-600">{itinerary.weatherInfo?.expectedConditions}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <h5 className="font-semibold text-sm">Température</h5>
                    <p className="text-lg font-bold text-blue-600">{itinerary.weatherInfo?.temperature}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <h5 className="font-semibold text-sm">Précipitations</h5>
                    <p className="text-sm text-gray-600">{itinerary.weatherInfo?.rainfall}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recommandations</h4>
                  <ul className="space-y-1">
                    {itinerary.weatherInfo?.recommendations?.map((rec: string, index: number) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conseils Locaux</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Monnaie</h5>
                    <p className="text-sm text-gray-600">{itinerary.localTips?.currency}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Langue</h5>
                    <p className="text-sm text-gray-600">{itinerary.localTips?.language}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Coutumes</h5>
                    <p className="text-sm text-gray-600">{itinerary.localTips?.customs}</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Sécurité</h5>
                    <p className="text-sm text-gray-600">{itinerary.localTips?.safety}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Connectivité</h5>
                    <p className="text-sm text-gray-600">{itinerary.localTips?.connectivity}</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h5 className="font-semibold text-sm mb-1">Pourboires</h5>
                    <p className="text-sm text-gray-600">{itinerary.localTips?.tipping}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Emergency Tab */}
        <TabsContent value="emergency">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Numéros d'Urgence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">Police</span>
                    <span className="font-bold text-red-600">{itinerary.emergencyInfo?.emergencyNumbers?.police}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Urgences Médicales</span>
                    <span className="font-bold text-blue-600">
                      {itinerary.emergencyInfo?.emergencyNumbers?.medical}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Pompiers</span>
                    <span className="font-bold text-orange-600">{itinerary.emergencyInfo?.emergencyNumbers?.fire}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Assistance Touristique</span>
                    <span className="font-bold text-green-600">
                      {itinerary.emergencyInfo?.emergencyNumbers?.tourist}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Services Médicaux & Consulaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Hôpitaux</h4>
                  <ul className="space-y-2">
                    {itinerary.emergencyInfo?.hospitals?.map((hospital: string, index: number) => (
                      <li key={index} className="p-2 bg-blue-50 rounded text-sm">
                        {hospital}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ambassades & Consulats</h4>
                  <ul className="space-y-2">
                    {itinerary.emergencyInfo?.embassies?.map((embassy: string, index: number) => (
                      <li key={index} className="p-2 bg-green-50 rounded text-sm">
                        {embassy}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
