import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

// In a real app, you would use a database
// For demo purposes, we'll use a simple in-memory store
const users: Array<{ id: string; name: string; email: string; password: string; createdAt: Date }> = []

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Le mot de passe doit contenir au moins 6 caractères" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email)
    if (existingUser) {
      return NextResponse.json({ error: "Un compte avec cet email existe déjà" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const newUser = {
      id: Math.random().toString(36).substring(2, 15),
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    }

    users.push(newUser)

    // Return success (don't include password in response)
    return NextResponse.json({
      message: "Compte créé avec succès",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt,
      },
    })
  } catch (error) {
    console.error("Erreur lors de la création du compte:", error)
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 })
  }
}

// Export the users array for use in signin
export { users }
