import { type ComponentType } from "react"
import {
  BarChart3,
  Home,
  Package,
  Search,
  Settings,
  Table2,
  User,
} from "lucide-react"

export type NavigationItem = {
  title: string
  href: string
  description: string
  icon: ComponentType<{ className?: string }>
  badge?: string | number
}

export const navigationGroups: {
  label: string
  items: NavigationItem[]
}[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Home",
        href: "/",
        description: "Workspace overview",
        icon: Home,
      },
      {
        title: "Search",
        href: "/search",
        description: "Find records and pages",
        icon: Search,
      },
      {
        title: "Explore",
        href: "/explore",
        description: "Browse the product surface",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Operations",
    items: [
      {
        title: "Static Form",
        href: "/static-form",
        description: "Review tabular form data",
        icon: Table2,
      },
      {
        title: "Product",
        href: "/product",
        description: "Inspect product content",
        icon: Package,
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        title: "Profile",
        href: "/profile",
        description: "View user profile",
        icon: User,
      },
      {
        title: "Settings",
        href: "/settings",
        description: "Manage application settings",
        icon: Settings,
      },
    ],
  },
]
