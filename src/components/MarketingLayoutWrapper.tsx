'use client'

import { MarketingLayoutShell } from "@tradetool/ui"
import { ReactNode } from "react"
import AnnouncementBar from "./AnnouncementBar"

interface MarketingLayoutWrapperProps {
  children: ReactNode
}

export default function MarketingLayoutWrapper({ children }: MarketingLayoutWrapperProps) {
  
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/login"
  }
  
  const handleRegister = () => {
    window.location.href = "http://localhost:3001/api/auth/register"
  }
  
  return (
    <MarketingLayoutShell
      authContext={{ isAuthenticated: false }}
      showSidebar={false}
      announcementBar={<AnnouncementBar />}
      headerProps={{
        logoHref: "/",
        onLogin: handleLogin,
        onRegister: handleRegister,
        showNavigation: true
      }}
    >
      {children}
    </MarketingLayoutShell>
  )
}