import { Outlet } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavMenu } from "@/components/NavMenu"
import { UserProfile } from "@/components/UserProfile"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function AppLayout() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-3 px-2 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary font-semibold text-sidebar-primary-foreground">
                U
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-sidebar-foreground">
                  Ureka
                </p>
                <p className="truncate text-xs text-sidebar-foreground/70">
                  Enterprise workspace
                </p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarSeparator />

          <SidebarContent>
            <NavMenu />
          </SidebarContent>

          <SidebarSeparator />

          <SidebarFooter>
            <UserProfile />
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="flex h-14 items-center gap-3 border-b bg-background px-4">
            <SidebarTrigger />
            <div>
              <p className="text-sm font-medium">Enterprise Dashboard</p>
              <p className="text-xs text-muted-foreground">
                Single-router sidebar layout
              </p>
            </div>
          </div>

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
