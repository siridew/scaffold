'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  ChefHat, 
  Package, 
  LayoutDashboard,
  NotebookPen,
  Salad,
  ShoppingCart,
  Apple
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  className?: string
  isCollapsed: boolean
}

export default function Sidebar({ className, isCollapsed }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const navigationItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      active: pathname === '/dashboard'
    },
    {
      title: 'Menu Planner',
      icon: NotebookPen,
      href: '/menu-planner',
      active: pathname === '/menu-planner'
    },
    {
      title: 'Recipes',
      icon: ChefHat,
      href: '/recipes',
      active: pathname === '/recipes'
    },
    {
      title: 'Inventory',
      icon: Package,
      href: '/inventory',
      active: pathname === '/inventory'
    },
    {
      title: 'Shopping List',
      icon: ShoppingCart,
      href: '/shopping-list',
      active: pathname === '/shopping-list'
    },
    {
      title: 'Nutrition',
      icon: Apple,
      href: '/nutrition',
      disabled: true
    }
  ]


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
            <Salad className="h-6 w-6 text-sidebar-primary" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <h2 className="text-lg font-sans font-normal text-sidebar-foreground">nourish</h2>
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
                item.active && "bg-sidebar-accent text-sidebar-accent-foreground",
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