"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart2,
  Calendar,
  FileText,
  Home,
  Menu,
  MessageSquare,
  SkipForward,
  Users,
  AlertTriangle,
  Lock,
  Smartphone,
  ChevronLeft,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarItem {
  title: string
  href: string
  icon: LucideIcon
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "Live Attendance",
    href: "/attendance",
    icon: SkipForward,
  },
  {
    title: "Class Schedule",
    href: "/schedule",
    icon: Calendar,
  },
  {
    title: "Attendance Reports",
    href: "/reports",
    icon: BarChart2,
  },
  {
    title: "Announcements",
    href: "/announcements",
    icon: MessageSquare,
  },
  {
    title: "Events",
    href: "/events",
    icon: FileText,
  },
  {
    title: "Student Alerts",
    href: "/alerts",
    icon: AlertTriangle,
  },
  {
    title: "Security Settings",
    href: "/security",
    icon: Lock,
  },
  {
    title: "Mobile Access",
    href: "/mobile",
    icon: Smartphone,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { isOpen, toggle } = useSidebar()

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center border-b bg-background px-4 md:hidden">
        <Button variant="outline" size="icon" onClick={toggle}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <div className="ml-4 font-semibold">Teacher Dashboard</div>
      </div>

      <aside
        className={cn(
          "fixed inset-y-0 z-30 flex w-72 flex-col border-r bg-muted/40 transition-transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:sticky md:top-0 md:h-screen",
        )}
      >
        <header className="border-b bg-background p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Teacher" />
              <AvatarFallback>TD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">Teacher Dashboard</div>
              <div className="text-xs text-muted-foreground">Prof. Pooja Batra</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={toggle} className="md:hidden">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </header>

        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>

        <div className="border-t bg-background p-4">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-muted-foreground" />
            <div className="text-sm">
              <span className="font-medium">CSE Department</span>
              <div className="text-xs text-muted-foreground">5 Classes Assigned</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

