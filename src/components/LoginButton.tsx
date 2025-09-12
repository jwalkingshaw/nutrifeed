'use client'

import { Button } from './ui/button'

export default function LoginButton() {
  const handleLogin = () => {
    // Redirect to our custom login page for better UX
    window.location.href = 'http://localhost:3001/login'
  }

  return (
    <Button 
      onClick={handleLogin}
      variant="outline"
      size="sm" 
      className="transition-all duration-200 font-medium"
    >
      Login
    </Button>
  )
}