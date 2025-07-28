"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search } from "lucide-react"

interface City {
  name: string
  country: string
  continent: string
  flag: string
  popular: boolean
}

const POPULAR_CITIES: City[] = [
  { name: "Paris", country: "France", continent: "Europe", flag: "🇫🇷", popular: true },
  { name: "Tokyo", country: "Japon", continent: "Asie", flag: "🇯🇵", popular: true },
  { name: "New York", country: "États-Unis", continent: "Amérique du Nord", flag: "🇺🇸", popular: true },
  { name: "Londres", country: "Royaume-Uni", continent: "Europe", flag: "🇬🇧", popular: true },
  { name: "Rome", country: "Italie", continent: "Europe", flag: "🇮🇹", popular: true },
  { name: "Barcelone", country: "Espagne", continent: "Europe", flag: "🇪🇸", popular: true },
  { name: "Amsterdam", country: "Pays-Bas", continent: "Europe", flag: "🇳🇱", popular: true },
  { name: "Berlin", country: "Allemagne", continent: "Europe", flag: "🇩🇪", popular: true },
  { name: "Prague", country: "République tchèque", continent: "Europe", flag: "🇨🇿", popular: true },
  { name: "Vienne", country: "Autriche", continent: "Europe", flag: "🇦🇹", popular: true },
  { name: "Lisbonne", country: "Portugal", continent: "Europe", flag: "🇵🇹", popular: true },
  { name: "Budapest", country: "Hongrie", continent: "Europe", flag: "🇭🇺", popular: true },
  { name: "Copenhague", country: "Danemark", continent: "Europe", flag: "🇩🇰", popular: true },
  { name: "Stockholm", country: "Suède", continent: "Europe", flag: "🇸🇪", popular: true },
  { name: "Zurich", country: "Suisse", continent: "Europe", flag: "🇨🇭", popular: true },
  { name: "Bali", country: "Indonésie", continent: "Asie", flag: "🇮🇩", popular: true },
  { name: "Bangkok", country: "Thaïlande", continent: "Asie", flag: "🇹🇭", popular: true },
  { name: "Singapour", country: "Singapour", continent: "Asie", flag: "🇸🇬", popular: true },
  { name: "Hong Kong", country: "Hong Kong", continent: "Asie", flag: "🇭🇰", popular: true },
  { name: "Séoul", country: "Corée du Sud", continent: "Asie", flag: "🇰🇷", popular: true },
  { name: "Sydney", country: "Australie", continent: "Océanie", flag: "🇦🇺", popular: true },
  { name: "Melbourne", country: "Australie", continent: "Océanie", flag: "🇦🇺", popular: true },
  { name: "Los Angeles", country: "États-Unis", continent: "Amérique du Nord", flag: "🇺🇸", popular: true },
  { name: "San Francisco", country: "États-Unis", continent: "Amérique du Nord", flag: "🇺🇸", popular: true },
  { name: "Las Vegas", country: "États-Unis", continent: "Amérique du Nord", flag: "🇺🇸", popular: true },
  { name: "Miami", country: "États-Unis", continent: "Amérique du Nord", flag: "🇺🇸", popular: true },
  { name: "Toronto", country: "Canada", continent: "Amérique du Nord", flag: "🇨🇦", popular: true },
  { name: "Vancouver", country: "Canada", continent: "Amérique du Nord", flag: "🇨🇦", popular: true },
  { name: "Mexico", country: "Mexique", continent: "Amérique du Nord", flag: "🇲🇽", popular: true },
  { name: "Buenos Aires", country: "Argentine", continent: "Amérique du Sud", flag: "🇦🇷", popular: true },
  { name: "Rio de Janeiro", country: "Brésil", continent: "Amérique du Sud", flag: "🇧🇷", popular: true },
  { name: "São Paulo", country: "Brésil", continent: "Amérique du Sud", flag: "🇧🇷", popular: true },
  { name: "Lima", country: "Pérou", continent: "Amérique du Sud", flag: "🇵🇪", popular: true },
  { name: "Le Cap", country: "Afrique du Sud", continent: "Afrique", flag: "🇿🇦", popular: true },
  { name: "Marrakech", country: "Maroc", continent: "Afrique", flag: "🇲🇦", popular: true },
  { name: "Le Caire", country: "Égypte", continent: "Afrique", flag: "🇪🇬", popular: true },
  { name: "Dubaï", country: "Émirats arabes unis", continent: "Asie", flag: "🇦🇪", popular: true },
  { name: "Istanbul", country: "Turquie", continent: "Europe/Asie", flag: "🇹🇷", popular: true },
  { name: "Moscou", country: "Russie", continent: "Europe/Asie", flag: "🇷🇺", popular: true },
  { name: "Saint-Pétersbourg", country: "Russie", continent: "Europe", flag: "🇷🇺", popular: true },
  { name: "Mumbai", country: "Inde", continent: "Asie", flag: "🇮🇳", popular: true },
  { name: "Delhi", country: "Inde", continent: "Asie", flag: "🇮🇳", popular: true },
  { name: "Pékin", country: "Chine", continent: "Asie", flag: "🇨🇳", popular: true },
  { name: "Shanghai", country: "Chine", continent: "Asie", flag: "🇨🇳", popular: true },
  { name: "Kyoto", country: "Japon", continent: "Asie", flag: "🇯🇵", popular: true },
  { name: "Osaka", country: "Japon", continent: "Asie", flag: "🇯🇵", popular: true },
  { name: "Reykjavik", country: "Islande", continent: "Europe", flag: "🇮🇸", popular: true },
  { name: "Dublin", country: "Irlande", continent: "Europe", flag: "🇮🇪", popular: true },
  { name: "Édimbourg", country: "Écosse", continent: "Europe", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", popular: true },
  { name: "Florence", country: "Italie", continent: "Europe", flag: "🇮🇹", popular: true },
  { name: "Venise", country: "Italie", continent: "Europe", flag: "🇮🇹", popular: true },
  { name: "Nice", country: "France", continent: "Europe", flag: "🇫🇷", popular: true },
  { name: "Lyon", country: "France", continent: "Europe", flag: "🇫🇷", popular: true },
]

interface CityAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function CityAutocomplete({
  value,
  onChange,
  placeholder = "Rechercher une destination...",
  className,
}: CityAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filteredCities, setFilteredCities] = useState<City[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (value.length === 0) {
      // Show popular cities when no input
      setFilteredCities(POPULAR_CITIES.filter((city) => city.popular).slice(0, 8))
    } else {
      // Filter cities based on input
      const filtered = POPULAR_CITIES.filter(
        (city) =>
          city.name.toLowerCase().includes(value.toLowerCase()) ||
          city.country.toLowerCase().includes(value.toLowerCase()),
      )
        .sort((a, b) => {
          // Prioritize popular cities
          if (a.popular && !b.popular) return -1
          if (!a.popular && b.popular) return 1

          // Then sort by name match
          const aNameMatch = a.name.toLowerCase().startsWith(value.toLowerCase())
          const bNameMatch = b.name.toLowerCase().startsWith(value.toLowerCase())
          if (aNameMatch && !bNameMatch) return -1
          if (!aNameMatch && bNameMatch) return 1

          return a.name.localeCompare(b.name)
        })
        .slice(0, 10)

      setFilteredCities(filtered)
    }
    setSelectedIndex(-1)
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)
    setIsOpen(true)
  }

  const handleCitySelect = (city: City) => {
    onChange(`${city.name}, ${city.country}`)
    setIsOpen(false)
    inputRef.current?.blur()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setIsOpen(true)
        return
      }
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filteredCities.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredCities.length - 1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && filteredCities[selectedIndex]) {
          handleCitySelect(filteredCities[selectedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleFocus = () => {
    setIsOpen(true)
  }

  const handleBlur = (e: React.FocusEvent) => {
    // Delay closing to allow for click events
    setTimeout(() => {
      if (!e.currentTarget.contains(document.activeElement)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }, 150)
  }

  return (
    <div className={`relative ${className}`} onBlur={handleBlur}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="pl-10 pr-4"
          autoComplete="off"
        />
      </div>

      {isOpen && filteredCities.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {value.length === 0 && (
            <div className="px-3 py-2 text-sm text-gray-500 border-b">Destinations populaires</div>
          )}
          <ul ref={listRef} className="py-1">
            {filteredCities.map((city, index) => (
              <li key={`${city.name}-${city.country}`}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start px-3 py-2 h-auto text-left hover:bg-gray-50 ${
                    index === selectedIndex ? "bg-blue-50 text-blue-600" : ""
                  }`}
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{city.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="font-medium text-gray-900">{city.name}</span>
                        {city.popular && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Populaire
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        {city.country} • {city.continent}
                      </div>
                    </div>
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
