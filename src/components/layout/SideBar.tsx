'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { navigationItems, appIcon as AppIcon, appName } from './NavItems'

interface SidebarProps {
  className?: string
  isCollapsed: boolean
}

export default function Sidebar({ className, isCollapsed }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()


  return (
    <div className={cn(
      "flex flex-col h-screen bg-sidebar transition-all duration-300",
      isCollapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="px-4 pt-2 pb-4">
        <div className={cn("flex items-center transition-all duration-300", isCollapsed ? "justify-center" : "space-x-3")}>
          <div className="p-2 bg-sidebar-primary/10 rounded-lg flex-shrink-0">
            <AppIcon className="h-6 w-6 text-sidebar-primary" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <h2 className="text-lg font-sans font-normal text-sidebar-foreground">{appName}</h2>
            </div>
          )}
        </div>
        <div className="mt-4 mx-2 border-b border-sidebar-border"></div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                "w-full h-10 transition-all duration-300",
                isCollapsed ? "justify-center px-0" : "justify-start space-x-3",
                pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground",
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
              disabled={item.disabled}
              onClick={() => {
                if (!item.disabled && item.href) {
                  router.push(item.href)
                }
              }}
              title={isCollapsed ? item.title : undefined}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {!isCollapsed && (
                <>
                  <span className="truncate font-sans font-normal">{item.title}</span>
                  {item.disabled && (
                    <span className="ml-auto text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded flex-shrink-0">
                      Soon
                    </span>
                  )}
                </>
              )}
            </Button>
          )
        })}
      </div>

    </div>
  )
}