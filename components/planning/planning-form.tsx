"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { CityAutocomplete } from "@/components/ui/city-autocomplete"
import {
  Calendar,
  MapPin,
  Users,
  Euro,
  Sparkles,
  Plane,
  Clock,
  Utensils,
  ChevronRight,
  ChevronLeft,
  Check,
  Info,
  Heart,
  Zap,
  Star,
} from "lucide-react"

interface PlanningFormProps {
  onComplete: (data: any) => void
  initialData?: any
}

export default function PlanningForm({ onComplete, initialData = {} }: PlanningFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "mid-range",
    groupSize: "2",
    travelStyle: "balanced",
    interests: [] as string[],
    accommodationType: "hotel",
    transportPreference: "mixed",
    dietaryRestrictions: "",
    specialRequests: "",
    aiMode: true,
    ...initialData,
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isFormValid, setIsFormValid] = useState(false)

  // Validation en temps réel
  useEffect(() => {
    const errors: Record<string, string> = {}

    if (currentStep >= 0) {
      if (!formData.destination) errors.destination = "Destination requise"
      if (!formData.startDate) errors.startDate = "Date de départ requise"
      if (!formData.endDate) errors.endDate = "Date de retour requise"

      if (formData.startDate && formData.endDate) {
        const start = new Date(formData.startDate)
        const end = new Date(formData.endDate)
        if (end <= start) {
          errors.endDate = "La date de retour doit être après la date de départ"
        }
      }
    }

    setFormErrors(errors)
    setIsFormValid(Object.keys(errors).length === 0)
  }, [formData, currentStep])

  const steps = [
    {
      title: "Destination & Dates",
      description: "Où et quand souhaitez-vous partir ?",
      icon: MapPin,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Groupe & Budget",
      description: "Combien êtes-vous et quel est votre budget ?",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Style & Intérêts",
      description: "Quel type de voyage vous fait rêver ?",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Préférences",
      description: "Personnalisez votre expérience",
      icon: Star,
      color: "from-orange-500 to-red-500",
    },
  ]

  const interestOptions = [
    { id: "culture", label: "Culture & Histoire", icon: "🏛️", description: "Musées, monuments, patrimoine" },
    { id: "food", label: "Gastronomie", icon: "🍽️", description: "Cuisine locale, restaurants, marchés" },
    { id: "nature", label: "Nature & Paysages", icon: "🌿", description: "Parcs, jardins, panoramas" },
    { id: "adventure", label: "Aventure & Sport", icon: "🏔️", description: "Randonnée, sports, activités" },
    { id: "art", label: "Art & Musées", icon: "🎨", description: "Galeries, expositions, créations" },
    { id: "nightlife", label: "Vie Nocturne", icon: "🌃", description: "Bars, clubs, spectacles" },
    { id: "shopping", label: "Shopping", icon: "🛍️", description: "Boutiques, marchés, souvenirs" },
    { id: "relaxation", label: "Détente & Spa", icon: "🧘", description: "Bien-être, relaxation, spa" },
    { id: "photography", label: "Photographie", icon: "📸", description: "Spots photo, paysages uniques" },
    { id: "local", label: "Expériences Locales", icon: "🏘️", description: "Rencontres, traditions, authenticité" },
  ]

  const budgetOptions = [
    {
      value: "budget",
      label: "Budget",
      range: "50-100€/jour",
      icon: "💰",
      description: "Auberges, street food, transports publics",
    },
    {
      value: "mid-range",
      label: "Confort",
      range: "100-200€/jour",
      icon: "🏨",
      description: "Hôtels 3*, restaurants, quelques activités",
    },
    {
      value: "luxury",
      label: "Luxe",
      range: "200-400€/jour",
      icon: "✨",
      description: "Hôtels 4-5*, gastronomie, expériences premium",
    },
    {
      value: "ultra-luxury",
      label: "Ultra-luxe",
      range: "400€+/jour",
      icon: "💎",
      description: "Le meilleur de tout, expériences exclusives",
    },
  ]

  const travelStyleOptions = [
    { value: "relaxed", label: "Détendu", icon: "🏖️", description: "Rythme lent, beaucoup de temps libre" },
    { value: "balanced", label: "Équilibré", icon: "⚖️", description: "Mix parfait d'activités et de détente" },
    { value: "active", label: "Actif", icon: "🚀", description: "Programme chargé, nombreuses activités" },
    { value: "adventurous", label: "Aventureux", icon: "🗻", description: "Expériences uniques et défis" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      onComplete(formData)
    }
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateDuration = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate)
      const end = new Date(formData.endDate)
      const diffTime = Math.abs(end.getTime() - start.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* En-tête avec progression */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Planifiez Votre Voyage Parfait
          </h1>
          <p className="text-gray-600 text-lg mb-8">Créez un itinéraire personnalisé en quelques étapes simples</p>

          {/* Barre de progression */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                    index <= currentStep
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg scale-110`
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {index < currentStep ? <Check className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                  {index <= currentStep && (
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} animate-ping opacity-20`}
                    ></div>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      index < currentStep ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Titre et description de l'étape actuelle */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{steps[currentStep].title}</h2>
            <p className="text-gray-600">{steps[currentStep].description}</p>
          </div>
        </div>

        {/* Formulaire */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Étape 1: Destination & Dates */}
              {currentStep === 0 && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Destination avec autocomplétion améliorée */}
                    <div className="space-y-2">
                      <Label htmlFor="destination" className="flex items-center gap-2 text-lg font-semibold">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        Où souhaitez-vous aller ?
                      </Label>
                      <CityAutocomplete
                        value={formData.destination}
                        onChange={(value) => setFormData((prev) => ({ ...prev, destination: value }))}
                        placeholder="Tapez votre destination de rêve..."
                        className="text-lg"
                      />
                      {formErrors.destination && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <Info className="h-4 w-4" />
                          {formErrors.destination}
                        </p>
                      )}
                    </div>

                    {/* Dates avec durée calculée */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="startDate" className="flex items-center gap-2 font-semibold">
                          <Calendar className="h-4 w-4 text-green-500" />
                          Date de départ
                        </Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                          className="text-lg"
                          min={new Date().toISOString().split("T")[0]}
                        />
                        {formErrors.startDate && <p className="text-red-500 text-sm">{formErrors.startDate}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate" className="flex items-center gap-2 font-semibold">
                          <Calendar className="h-4 w-4 text-green-500" />
                          Date de retour
                        </Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={formData.endDate}
                          onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                          className="text-lg"
                          min={formData.startDate || new Date().toISOString().split("T")[0]}
                        />
                        {formErrors.endDate && <p className="text-red-500 text-sm">{formErrors.endDate}</p>}
                      </div>
                    </div>

                    {/* Durée calculée */}
                    {calculateDuration() > 0 && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span className="text-lg font-semibold text-blue-800">
                            Durée du voyage: {calculateDuration()} jour{calculateDuration() > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Étape 2: Groupe & Budget */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fade-in-up">
                  {/* Taille du groupe */}
                  <div className="space-y-4">
                    <Label className="flex items-center gap-2 text-lg font-semibold">
                      <Users className="h-5 w-5 text-green-500" />
                      Combien êtes-vous ?
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {[
                        { value: "1", label: "Solo", icon: "👤" },
                        { value: "2", label: "Couple", icon: "👫" },
                        { value: "3-4", label: "Petit groupe", icon: "👨‍👩‍👧" },
                        { value: "5-8", label: "Groupe", icon: "👨‍👩‍👧‍👦" },
                        { value: "9+", label: "Grand groupe", icon: "👥" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, groupSize: option.value }))}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                            formData.groupSize === option.value
                              ? "border-green-500 bg-green-50 shadow-lg"
                              : "border-gray-200 hover:border-green-300"
                          }`}
                        >
                          <div className="text-2xl mb-2">{option.icon}</div>
                          <div className="font-semibold text-sm">{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-4">
                    <Label className="flex items-center gap-2 text-lg font-semibold">
                      <Euro className="h-5 w-5 text-yellow-500" />
                      Quel est votre budget par personne ?
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {budgetOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: option.value }))}
                          className={`p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 text-left ${
                            formData.budget === option.value
                              ? "border-yellow-500 bg-yellow-50 shadow-lg"
                              : "border-gray-200 hover:border-yellow-300"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{option.icon}</span>
                            <div>
                              <div className="font-semibold text-lg">{option.label}</div>
                              <div className="text-yellow-600 font-medium">{option.range}</div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{option.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 3: Style & Intérêts */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fade-in-up">
                  {/* Style de voyage */}
                  <div className="space-y-4">
                    <Label className="flex items-center gap-2 text-lg font-semibold">
                      <Zap className="h-5 w-5 text-purple-500" />
                      Quel est votre style de voyage ?
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {travelStyleOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, travelStyle: option.value }))}
                          className={`p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 text-left ${
                            formData.travelStyle === option.value
                              ? "border-purple-500 bg-purple-50 shadow-lg"
                              : "border-gray-200 hover:border-purple-300"
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{option.icon}</span>
                            <div className="font-semibold text-lg">{option.label}</div>
                          </div>
                          <p className="text-gray-600 text-sm">{option.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Centres d'intérêt */}
                  <div className="space-y-4">
                    <Label className="flex items-center gap-2 text-lg font-semibold">
                      <Heart className="h-5 w-5 text-pink-500" />
                      Qu'est-ce qui vous passionne ? (sélectionnez plusieurs options)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {interestOptions.map((interest) => (
                        <div
                          key={interest.id}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:scale-105 ${
                            formData.interests.includes(interest.id)
                              ? "border-pink-500 bg-pink-50 shadow-lg"
                              : "border-gray-200 hover:border-pink-300"
                          }`}
                          onClick={() => handleInterestChange(interest.id, !formData.interests.includes(interest.id))}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox
                              id={interest.id}
                              checked={formData.interests.includes(interest.id)}
                              onChange={() => {}}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg">{interest.icon}</span>
                                <span className="font-semibold">{interest.label}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{interest.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {formData.interests.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-sm text-gray-600">Sélectionnés:</span>
                        {formData.interests.map((interestId) => {
                          const interest = interestOptions.find((i) => i.id === interestId)
                          return (
                            <Badge key={interestId} variant="secondary" className="flex items-center gap-1">
                              <span>{interest?.icon}</span>
                              {interest?.label}
                            </Badge>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Étape 4: Préférences */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in-up">
                  {/* Hébergement et Transport */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="flex items-center gap-2 font-semibold">
                        <Clock className="h-4 w-4 text-blue-500" />
                        Type d'hébergement préféré
                      </Label>
                      <Select
                        value={formData.accommodationType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, accommodationType: value }))}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hotel">🏨 Hôtel</SelectItem>
                          <SelectItem value="hostel">🏠 Auberge de jeunesse</SelectItem>
                          <SelectItem value="airbnb">🏡 Airbnb/Location</SelectItem>
                          <SelectItem value="resort">🏖️ Resort</SelectItem>
                          <SelectItem value="boutique">✨ Hôtel boutique</SelectItem>
                          <SelectItem value="mixed">🔄 Mixte</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label className="flex items-center gap-2 font-semibold">
                        <Plane className="h-4 w-4 text-green-500" />
                        Préférence de transport
                      </Label>
                      <Select
                        value={formData.transportPreference}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, transportPreference: value }))}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="walking">🚶 À pied principalement</SelectItem>
                          <SelectItem value="public">🚌 Transport public</SelectItem>
                          <SelectItem value="taxi">🚕 Taxi/VTC</SelectItem>
                          <SelectItem value="rental">🚗 Voiture de location</SelectItem>
                          <SelectItem value="mixed">🔄 Mixte</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Restrictions et demandes spéciales */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="dietaryRestrictions" className="flex items-center gap-2 font-semibold">
                        <Utensils className="h-4 w-4 text-orange-500" />
                        Restrictions alimentaires
                      </Label>
                      <Input
                        id="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => setFormData((prev) => ({ ...prev, dietaryRestrictions: e.target.value }))}
                        placeholder="Végétarien, sans gluten, halal..."
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="specialRequests" className="flex items-center gap-2 font-semibold">
                        <Star className="h-4 w-4 text-purple-500" />
                        Demandes spéciales
                      </Label>
                      <Input
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                        placeholder="Accessibilité, anniversaire, lune de miel..."
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Mode IA */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Label htmlFor="aiMode" className="text-lg font-semibold text-gray-900">
                            ✨ Génération IA Avancée
                          </Label>
                          <p className="text-gray-600 mt-1">
                            Utilisez l'intelligence artificielle pour créer un itinéraire ultra-personnalisé basé sur
                            vos préférences
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="aiMode"
                        checked={formData.aiMode}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, aiMode: checked }))}
                        className="scale-125"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Précédent
                </Button>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  Étape {currentStep + 1} sur {steps.length}
                </div>

                {currentStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!isFormValid && currentStep === 0}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Suivant
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg font-semibold"
                  >
                    <Sparkles className="h-5 w-5" />
                    Créer Mon Itinéraire
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Résumé en bas */}
        {formData.destination && (
          <Card className="mt-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                Résumé de votre voyage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>
                    <strong>Destination:</strong> {formData.destination}
                  </span>
                </div>
                {calculateDuration() > 0 && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <span>
                      <strong>Durée:</strong> {calculateDuration()} jour{calculateDuration() > 1 ? "s" : ""}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  <span>
                    <strong>Groupe:</strong> {formData.groupSize === "1" ? "Solo" : formData.groupSize}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="h-4 w-4 text-yellow-500" />
                  <span>
                    <strong>Budget:</strong> {budgetOptions.find((b) => b.value === formData.budget)?.label}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
