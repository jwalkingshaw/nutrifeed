'use client'

import { Button } from './ui/button'

export default function SignUpButton() {
  const handleSignUp = () => {
    // TODO: Implement KINDE auth sign up
    console.log('Sign up clicked - KINDE integration pending')
  }

  return (
    <Button 
      size="sm" 
      className="bg-orange-500 text-white hover:bg-orange-600 border border-orange-500 hover:border-orange-600 transition-all duration-200 font-medium"
      onClick={handleSignUp}
    >
      Sign Up
    </Button>
  )
}