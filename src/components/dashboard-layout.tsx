"use client"

import React from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar"
import { 
  Bot, 
  ImageIcon, 
  FileText, 
  Code, 
  Mic, 
  Home, 
  Moon, 
  Sun, 
  Sparkles,
  Zap
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navigation = [
  { 
    name: "Dashboard", 
    href: "/", 
    icon: Home, 
    description: "Overview of all tools",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    name: "AI Chatbot", 
    href: "/chat", 
    icon: Bot, 
    description: "Chat with AI assistant",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    name: "Image Generation", 
    href: "/image-generation", 
    icon: ImageIcon, 
    description: "Create amazing images",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    name: "Text Summarizer", 
    href: "/text-summarizer", 
    icon: FileText, 
    description: "Summarize any content",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    name: "Code Explainer", 
    href: "/code-explainer", 
    icon: Code, 
    description: "Understand your code",
    gradient: "from-red-500 to-pink-500"
  },
  { 
    name: "Speech to Text", 
    href: "/speech-to-text", 
    icon: Mic, 
    description: "Convert speech to text",
    gradient: "from-teal-500 to-blue-500"
  },
]

function SidebarNavigation() {
  const pathname = usePathname()
  const { isOpen } = useSidebar()

  return (
    <SidebarContent className="px-3 py-6 space-y-2">
      <SidebarMenu className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={isActive}>
                <Link 
                  href={item.href} 
                  className={cn(
                    "group relative flex items-center gap-3 rounded-xl px-3 py-3",
                    "transition-all duration-300 ease-out",
                    "hover:scale-105 hover:shadow-lg",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                    isActive 
                      ? "bg-gradient-to-r " + item.gradient + " text-white shadow-lg scale-105"
                      : "hover:bg-muted/80 hover:text-foreground text-muted-foreground",
                    !isOpen && "justify-center"
                  )}
                  title={!isOpen ? item.name : undefined}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-20 animate-pulse" 
                         style={{background: `linear-gradient(to right, var(--tw-gradient-stops))`}} />
                  )}
                  <item.icon className={cn(
                    "h-5 w-5 flex-shrink-0 transition-all duration-300",
                    "group-hover:scale-110",
                    isActive && "drop-shadow-sm text-white",
                    !isActive && "group-hover:text-foreground"
                  )} />
                  {isOpen && (
                    <div className="flex flex-col">
                      <span className={cn(
                        "text-sm font-medium transition-colors",
                        isActive ? "text-white" : "group-hover:text-foreground"
                      )}>
                        {item.name}
                      </span>
                      {!isActive && (
                        <span className="text-xs text-muted-foreground group-hover:text-muted-foreground/80">
                          {item.description}
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarContent>
  )
}

function SidebarHeaderContent() {
  const { isOpen } = useSidebar()
  
  return (
    <SidebarHeader className="border-b border-border/50 bg-card/50">
      <div className={cn(
        "flex items-center gap-3 px-3 py-4",
        !isOpen && "justify-center"
      )}>
        <div className="relative">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-md" />
          <Sparkles className="h-8 w-8 text-primary relative z-10" />
        </div>
        {isOpen && (
          <div className="flex flex-col">
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IntelliKit
            </h1>
            <p className="text-xs text-muted-foreground">AI-Powered Tools</p>
          </div>
        )}
      </div>
    </SidebarHeader>
  )
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gradient-to-br from-background via-background to-muted/10">
        <Sidebar className="border-r border-border bg-card/50 backdrop-blur-xl">
          <SidebarHeaderContent />
          <SidebarNavigation />
          
          {/* Footer section for sidebar */}
          <div className="mt-auto p-3 border-t border-border/50">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Zap className="h-3 w-3" />
                <span>Powered by AI</span>
              </div>
            </div>
          </div>
        </Sidebar>

        <SidebarInset className="flex flex-col flex-1">
          <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-xl px-6">
            <SidebarTrigger className="hover:bg-muted/50 transition-colors" />
            
            {/* Breadcrumb or page info */}
            <div className="flex-1 flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <span className="text-sm font-medium text-muted-foreground">
                AI-Powered Dashboard
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-muted/50 hover:scale-105 transition-all duration-200"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto">
            <div className="relative min-h-full">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/5 dark:to-purple-950/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-200/10 to-transparent dark:from-blue-800/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-purple-200/10 to-transparent dark:from-purple-800/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 p-6">
                {children}
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
