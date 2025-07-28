"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Plane, User, Sparkles, LogOut, Settings, CreditCard } from "lucide-react"
import AuthModal from "@/components/auth/auth-modal"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleAuthSuccess = (userData: any) => {
    setUser(userData)
    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    setUser(null)
    setShowUserMenu(false)
    // Clear auth cookie
    document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-coral-500 p-2 rounded-xl shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">TravelAI</span>
                <div className="text-xs text-gray-500">Propulsé par Gemini</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Accueil
              </Link>
              <Link
                href="/plan"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center"
              >
                <Sparkles className="w-4 h-4 mr-1" />
                Planifier un Voyage
              </Link>
              <Link href="/examples" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Exemples
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                À Propos
              </Link>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg transition-all duration-300"
                  >
                    <User className="w-4 h-4" />
                    <span>{user.name}</span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                        <p className="text-xs text-blue-600 font-medium">Plan {user.plan}</p>
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Tableau de bord
                      </Link>
                      <Link
                        href="/billing"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <CreditCard className="w-4 h-4 mr-2" />
                        Facturation
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white shadow-lg"
                >
                  <User className="w-4 h-4 mr-2" />
                  Se connecter
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/plan"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 font-medium flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Planifier un Voyage
                </Link>
                <Link
                  href="/examples"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Exemples
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  À Propos
                </Link>
                <div className="px-4">
                  {user ? (
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded-xl">
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                      <Button onClick={handleLogout} variant="outline" className="w-full bg-transparent">
                        <LogOut className="w-4 h-4 mr-2" />
                        Déconnexion
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        setIsAuthModalOpen(true)
                        setIsOpen(false)
                      }}
                      className="w-full bg-gradient-to-r from-coral-500 to-orange-500 hover:from-coral-600 hover:to-orange-600 text-white shadow-lg"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Se connecter
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onSuccess={handleAuthSuccess} />
    </>
  )
}
