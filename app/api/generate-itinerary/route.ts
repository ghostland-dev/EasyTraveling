import { type NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    console.log("Received form data:", formData)

    // Validate required fields
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      return NextResponse.json({ error: "Destination, start date, and end date are required" }, { status: 400 })
    }

    // Calculate trip duration
    const startDate = new Date(formData.startDate)
    const endDate = new Date(formData.endDate)
    const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

    if (duration <= 0) {
      return NextResponse.json({ error: "End date must be after start date" }, { status: 400 })
    }

    // Check if Gemini API is available
    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY not found, using mock data")
      return NextResponse.json(generateMockItinerary(formData, duration))
    }

    try {
      // Generate itinerary using Gemini AI
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

      const prompt = createPrompt(formData, duration)
      console.log("Sending prompt to Gemini:", prompt.substring(0, 200) + "...")

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      console.log("Gemini response received:", text.substring(0, 200) + "...")

      // Parse the JSON response
      let itinerary
      try {
        // Clean the response text to extract JSON
        const jsonMatch = text.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          itinerary = JSON.parse(jsonMatch[0])
        } else {
          throw new Error("No valid JSON found in response")
        }
      } catch (parseError) {
        console.error("Error parsing Gemini response:", parseError)
        console.log("Raw response:", text)
        // Fallback to mock data if parsing fails
        itinerary = generateMockItinerary(formData, duration)
      }

      return NextResponse.json(itinerary)
    } catch (aiError) {
      console.error("Gemini AI error:", aiError)
      // Fallback to mock data if AI fails
      return NextResponse.json(generateMockItinerary(formData, duration))
    }
  } catch (error) {
    console.error("Error generating itinerary:", error)
    return NextResponse.json({ error: "Failed to generate itinerary. Please try again." }, { status: 500 })
  }
}

function createPrompt(formData: any, duration: number): string {
  const interestsText = formData.interests?.length > 0 ? formData.interests.join(", ") : "general sightseeing"

  return `Create a detailed ${duration}-day travel itinerary for ${formData.destination} in JSON format.

Trip Details:
- Destination: ${formData.destination}
- Duration: ${duration} days (${formData.startDate} to ${formData.endDate})
- Group size: ${formData.groupSize}
- Budget: ${formData.budget}
- Travel style: ${formData.travelStyle}
- Interests: ${interestsText}
- Accommodation: ${formData.accommodationType}
- Transport: ${formData.transportPreference}
- Dietary restrictions: ${formData.dietaryRestrictions || "None"}
- Special requests: ${formData.specialRequests || "None"}

Please respond with ONLY a valid JSON object in this exact format:
{
  "destination": "${formData.destination}",
  "duration": ${duration},
  "totalBudget": "estimated total budget",
  "days": [
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "theme": "day theme",
      "activities": [
        {
          "time": "09:00",
          "name": "activity name",
          "description": "detailed description",
          "duration": "2 hours",
          "cost": "€20-30",
          "type": "sightseeing/food/culture/etc",
          "tips": "helpful tips"
        }
      ],
      "recommendations": {
        "restaurant": "recommended restaurant",
        "accommodation": "accommodation suggestion",
        "transport": "transport tips"
      }
    }
  ],
  "practicalInfo": {
    "budget": "detailed budget breakdown",
    "transport": "transport information",
    "accommodation": "accommodation recommendations",
    "tips": "general travel tips"
  }
}

Make sure to:
1. Include ${duration} days in the "days" array
2. Provide 4-6 activities per day
3. Consider the specified interests: ${interestsText}
4. Match the budget level: ${formData.budget}
5. Adapt to group size: ${formData.groupSize}
6. Include practical tips and local insights
7. Provide realistic time estimates and costs
8. Consider the travel style: ${formData.travelStyle}

Respond with valid JSON only, no additional text.`
}

function generateMockItinerary(formData: any, duration: number) {
  const days = []

  for (let i = 0; i < duration; i++) {
    const date = new Date(formData.startDate)
    date.setDate(date.getDate() + i)

    days.push({
      day: i + 1,
      date: date.toISOString().split("T")[0],
      theme: `Jour ${i + 1} - Découverte de ${formData.destination}`,
      activities: [
        {
          time: "09:00",
          name: "Petit-déjeuner local",
          description: "Commencez la journée avec un petit-déjeuner typique de la région",
          duration: "1 heure",
          cost: "€10-15",
          type: "food",
          tips: "Essayez les spécialités locales",
        },
        {
          time: "10:30",
          name: "Visite du centre historique",
          description: "Explorez les monuments et l'architecture historique",
          duration: "3 heures",
          cost: "€15-25",
          type: "culture",
          tips: "Prenez un guide local pour plus d'informations",
        },
        {
          time: "14:00",
          name: "Déjeuner traditionnel",
          description: "Savourez la cuisine locale dans un restaurant authentique",
          duration: "1.5 heures",
          cost: "€20-35",
          type: "food",
          tips: "Réservez à l'avance pendant la haute saison",
        },
        {
          time: "16:00",
          name: "Activité selon vos intérêts",
          description: "Activité personnalisée basée sur vos préférences",
          duration: "2-3 heures",
          cost: "€25-50",
          type: "activity",
          tips: "Adaptée à votre style de voyage",
        },
      ],
      recommendations: {
        restaurant: "Restaurant local recommandé",
        accommodation: "Hébergement de qualité dans le centre",
        transport: "Transport public ou marche à pied",
      },
    })
  }

  return {
    destination: formData.destination,
    duration: duration,
    totalBudget: `€${duration * 100}-${duration * 200} par personne`,
    days: days,
    practicalInfo: {
      budget: `Budget estimé: €${duration * 100}-${duration * 200} par personne pour ${duration} jours`,
      transport: "Utilisez les transports publics ou marchez pour découvrir la ville",
      accommodation: "Réservez votre hébergement à l'avance, surtout en haute saison",
      tips: "Respectez les coutumes locales et apprenez quelques mots de base dans la langue locale",
    },
  }
}
