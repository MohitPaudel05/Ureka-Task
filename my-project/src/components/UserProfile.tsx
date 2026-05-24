import { LogOut, Settings, UserCircle2 } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function UserProfile() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-accent text-sidebar-accent-foreground">
                  <UserCircle2 className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-sidebar-foreground">
                    John Doe
                  </p>
                  <p className="truncate text-xs text-sidebar-foreground/70">
                    john@example.com
                  </p>
                </div>
              </div>

              <div className="mt-3 flex gap-2">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-start gap-2"
                >
                  <NavLink to="/settings">
                    <Settings className="h-4 w-4" />
                    Settings
                  </NavLink>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-start gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
