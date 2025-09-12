'use client'

import { Button } from './ui/button'
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components"

export default function SignUpButton() {
  return (
    <RegisterLink 
      postLoginRedirectURL="http://localhost:3001/onboarding" // Redirect to onboarding flow
    >
      <Button 
        size="sm" 
        className="bg-orange-500 text-white hover:bg-orange-600 border border-orange-500 hover:border-orange-600 transition-all duration-200 font-medium"
      >
        Sign Up
      </Button>
    </RegisterLink>
  )
}