"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MapPin, Calendar, Users, DollarSign, Heart, ArrowRight, ArrowLeft } from "lucide-react"

interface PlanningFormProps {
  onComplete: (data: any) => void
  initialData?: any
}

export default function PlanningForm({ onComplete, initialData = {} }: PlanningFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    groupSize: "1",
    travelStyle: "",
    interests: [],
    accommodationType: "",
    transportPreference: "",
    dietaryRestrictions: "",
    specialRequests: "",
  })
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize form data only once
  useEffect(() => {
    if (!isInitialized && Object.keys(initialData).length > 0) {
      setFormData((prev) => ({ ...prev, ...initialData }))
      setIsInitialized(true)
    } else if (!isInitialized) {
      setIsInitialized(true)
    }
  }, [initialData, isInitialized])

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = useCallback((field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const handleInterestToggle = useCallback((interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i: string) => i !== interest)
        : [...prev.interests, interest],
    }))
  }, [])

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }, [currentStep, totalSteps])

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  const handleSubmit = useCallback(() => {
    onComplete(formData)
  }, [onComplete, formData])

  const interests = [
    "Adventure Sports",
    "Art & Culture",
    "Food & Dining",
    "History",
    "Nature & Wildlife",
    "Nightlife",
    "Photography",
    "Shopping",
    "Relaxation",
    "Local Experiences",
    "Museums",
    "Architecture",
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Plan Your Perfect Trip</h1>
        <Progress value={progress} className="w-full h-2 mb-4" />
        <p className="text-center text-gray-600">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            {currentStep === 1 && (
              <>
                <MapPin className="mr-2 text-blue-500" /> Destination & Dates
              </>
            )}
            {currentStep === 2 && (
              <>
                <Users className="mr-2 text-coral-500" /> Group & Budget
              </>
            )}
            {currentStep === 3 && (
              <>
                <Heart className="mr-2 text-purple-500" /> Travel Style & Interests
              </>
            )}
            {currentStep === 4 && (
              <>
                <Calendar className="mr-2 text-green-500" /> Preferences
              </>
            )}
            {currentStep === 5 && (
              <>
                <DollarSign className="mr-2 text-orange-500" /> Final Details
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="destination" className="text-lg font-semibold">
                  Where would you like to go?
                </Label>
                <Input
                  id="destination"
                  placeholder="e.g., Paris, Tokyo, New York"
                  value={formData.destination}
                  onChange={(e) => handleInputChange("destination", e.target.value)}
                  className="mt-2 text-lg p-4"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate" className="text-lg font-semibold">
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    className="mt-2 text-lg p-4"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-lg font-semibold">
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange("endDate", e.target.value)}
                    className="mt-2 text-lg p-4"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="groupSize" className="text-lg font-semibold">
                  Group Size
                </Label>
                <Select value={formData.groupSize} onValueChange={(value) => handleInputChange("groupSize", value)}>
                  <SelectTrigger className="mt-2 text-lg p-4">
                    <SelectValue placeholder="Select group size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Solo Traveler</SelectItem>
                    <SelectItem value="2">Couple</SelectItem>
                    <SelectItem value="3-4">Small Group (3-4)</SelectItem>
                    <SelectItem value="5-8">Medium Group (5-8)</SelectItem>
                    <SelectItem value="9+">Large Group (9+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget" className="text-lg font-semibold">
                  Budget per Person (USD)
                </Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="mt-2 text-lg p-4">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget ($500-1000)</SelectItem>
                    <SelectItem value="mid-range">Mid-range ($1000-2500)</SelectItem>
                    <SelectItem value="luxury">Luxury ($2500-5000)</SelectItem>
                    <SelectItem value="ultra-luxury">Ultra Luxury ($5000+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <Label className="text-lg font-semibold">Travel Style</Label>
                <Select value={formData.travelStyle} onValueChange={(value) => handleInputChange("travelStyle", value)}>
                  <SelectTrigger className="mt-2 text-lg p-4">
                    <SelectValue placeholder="Select your travel style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventurous">Adventurous</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="relaxed">Relaxed</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="budget">Budget-conscious</SelectItem>
                    <SelectItem value="family">Family-friendly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-lg font-semibold mb-4 block">What interests you? (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleInterestToggle(interest)}
                      />
                      <Label htmlFor={interest} className="text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <Label className="text-lg font-semibold">Accommodation Type</Label>
                <Select
                  value={formData.accommodationType}
                  onValueChange={(value) => handleInputChange("accommodationType", value)}
                >
                  <SelectTrigger className="mt-2 text-lg p-4">
                    <SelectValue placeholder="Select accommodation preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="hostel">Hostel</SelectItem>
                    <SelectItem value="airbnb">Airbnb/Vacation Rental</SelectItem>
                    <SelectItem value="resort">Resort</SelectItem>
                    <SelectItem value="boutique">Boutique Hotel</SelectItem>
                    <SelectItem value="mixed">Mix of Options</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-lg font-semibold">Transport Preference</Label>
                <Select
                  value={formData.transportPreference}
                  onValueChange={(value) => handleInputChange("transportPreference", value)}
                >
                  <SelectTrigger className="mt-2 text-lg p-4">
                    <SelectValue placeholder="Select transport preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public Transport</SelectItem>
                    <SelectItem value="rental">Rental Car</SelectItem>
                    <SelectItem value="taxi">Taxi/Rideshare</SelectItem>
                    <SelectItem value="walking">Walking</SelectItem>
                    <SelectItem value="mixed">Mix of Options</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="dietaryRestrictions" className="text-lg font-semibold">
                  Dietary Restrictions or Preferences
                </Label>
                <Input
                  id="dietaryRestrictions"
                  placeholder="e.g., Vegetarian, Gluten-free, Halal"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                  className="mt-2 text-lg p-4"
                />
              </div>
              <div>
                <Label htmlFor="specialRequests" className="text-lg font-semibold">
                  Special Requests or Additional Information
                </Label>
                <Textarea
                  id="specialRequests"
                  placeholder="Any special occasions, accessibility needs, or specific requests..."
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  className="mt-2 text-lg p-4 min-h-[120px]"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="px-6 py-3 bg-transparent"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
                Next
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-coral-500 hover:bg-coral-600 px-8 py-3">
                Generate My Itinerary
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
