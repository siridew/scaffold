import { 
  CreditCard, 
  Package, 
  LayoutDashboard,
  NotebookPen,
  House,
  ShoppingCart,
  Layers,
  LucideIcon
} from 'lucide-react'

export interface NavItem {
  title: string
  icon: LucideIcon
  href?: string
  disabled?: boolean
}

export const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'Page 1',
    icon: NotebookPen,
    href: '/page1',
  },
  {
    title: 'Page 2',
    icon: CreditCard,
    href: '/page2',
  },
  {
    title: 'Page 3',
    icon: Package,
    href: '/page3',
  },
  {
    title: 'Page 4',
    icon: ShoppingCart,
    href: '/page4',
  },
  {
    title: 'Page 5',
    icon: Layers,
    href: '/page5',
    disabled: true
  }
]

export const appIcon = House
export const appName = 'appName'