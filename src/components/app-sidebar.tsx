"use client"

import { Calendar, Home, Inbox, Settings, Files, Monitor, TestTube, Beaker, PanelLeft } from "lucide-react"

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
import { Button } from "@/components/ui/button"

// Navigation items.
const navigationItems = [
  {
    title: "Home",
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
  const { toggleSidebar, state } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <div className="pt-16"> {/* Add padding for header height */}
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="size-7"
              aria-label={state === "collapsed" ? "Expand sidebar" : "Collapse sidebar"}
            >
              <PanelLeft className={state === "collapsed" ? "rotate-180" : ""} />
            </Button>
            <span className="group-data-[collapsible=icon]:hidden font-semibold">Menu</span>
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
                      <item.icon />
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
                      <item.icon />
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