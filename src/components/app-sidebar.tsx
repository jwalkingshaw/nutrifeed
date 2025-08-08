"use client"

import { useState, useEffect } from "react"
import { Calendar, Home, Inbox, Settings, Files, Monitor, TestTube, Beaker, Menu } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
// import { Button } from "@/components/ui/button"

// Navigation items.
const navigationItems = [
  {
    title: "Stackcess IQ",
    url: "/",
    icon: Home,
  },
  {
    title: "Technology",
    url: "#",
    icon: Monitor,
  },
  {
    title: "Testing",
    url: "#",
    icon: TestTube,
  },
  {
    title: "Science",
    url: "#",
    icon: Beaker,
  },
]

// App items.
const appItems = [
  {
    title: "Assets",
    url: "#",
    icon: Files,
  },
   {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { toggleSidebar, state, isMobile } = useSidebar()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Server-side render: render as desktop version to avoid hydration mismatch
    return (
      <Sidebar collapsible="icon">
        <div className="absolute top-4 left-2 z-10">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
        </div>
        
        <div className="pt-16">
          <SidebarHeader>
            <div className="flex items-center gap-2">
              {/* No header text needed */}
            </div>
          </SidebarHeader>
        
          <SidebarContent>
            {/* Navigation Section */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <a href={item.url}>
                          <item.icon size={20} className="text-black hover:text-gray-500 transition-colors" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* App Section */}
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {appItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <a href={item.url}>
                          <item.icon size={20} className="text-black hover:text-gray-500 transition-colors" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </div>
      </Sidebar>
    )
  }

  return (
    <Sidebar collapsible="icon">
      {/* Desktop trigger positioned under announcement bar */}
      {!isMobile && (
        <div className="absolute top-1 left-2 z-10">
          <button
            onClick={toggleSidebar}
            className="p-2 text-black hover:text-gray-500 transition-colors"
            aria-label={state === "collapsed" ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Menu size={20} />
          </button>
        </div>
      )}
      
      <div className={isMobile ? "pt-20" : "pt-8"}> {/* Add extra padding for mobile header */}
        <SidebarHeader>
          <div className="flex items-center gap-2">
            {/* No header text needed */}
          </div>
        </SidebarHeader>
      
      <SidebarContent>
        {/* Navigation Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* App Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {appItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      </div>
    </Sidebar>
  )
}