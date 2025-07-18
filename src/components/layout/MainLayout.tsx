'use client'

import { ReactNode, useState } from 'react'
import Sidebar from './SideBar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserMenu } from '@/components/ui/user-menu'
import { PanelLeft, Search, Bell, User } from 'lucide-react'

interface MainLayoutProps {
  children: ReactNode
  pageTitle?: string
  showSidebar?: boolean
}

export default function MainLayout({ children, pageTitle = '', showSidebar = true }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Sidebar Card wrapping everything */}
      <Card className="w-full min-h-full bg-sidebar p-2">
        <div className="flex h-full">
          {/* Sidebar Content */}
          {showSidebar && (
            <div className={`${sidebarOpen ? 'w-64' : 'w-16'} flex-shrink-0 overflow-hidden transition-[width] duration-500 ease-out`}>
              <Sidebar 
                isCollapsed={!sidebarOpen} 
              />
            </div>
          )}
          
          {/* Main Content as a separate card inside */}
          <div className="flex-1">
            <Card className="w-full h-full max-h-screen overflow-auto">
              <div className="pt-8 relative">
                {/* Sidebar toggle button and page title */}
                <div className="absolute top-2 left-4 flex items-center">
                  {showSidebar && (
                    <>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                      >
                        <PanelLeft className="h-6 w-6" />
                      </Button>
                      <div className="w-px h-6 bg-border ml-2"></div>
                    </>
                  )}
                  <span className={`${showSidebar ? 'ml-4' : ''} text-base font-sans font-normal`}>{pageTitle}</span>
                </div>
                
                {/* Top right toolbar */}
                <div className="absolute top-2 right-6 flex items-center space-x-4">
                  {/* Search bar */}
                  <div className="relative -ml-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="text" 
                      placeholder="Search..." 
                      className="pl-10 w-40 h-6 text-sm font-sans font-normal"
                    />
                  </div>
                  
                  {/* Notifications icon */}
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                    <Bell className="h-6 w-6" />
                  </Button>
                  
                  {/* Profile icon */}
                  <UserMenu 
                    trigger={
                      <Button variant="ghost" size="sm" className="h-9 w-9 p-0 -ml-4">
                        <User className="h-6 w-6" />
                      </Button>
                    }
                  />
                </div>
                
                {/* Horizontal line touching edges */}
                <hr className="border-border -mx-8 my-4" />
              </div>
              
              {/* Page content */}
              {children}
            </Card>
          </div>
        </div>
      </Card>
    </div>
  )
}