import type React from "react"
import Link from "next/link"
import { Home, Camera, BarChart2, Users, Calendar, Navigation2, Bell, Settings } from "lucide-react"

type SidebarProps = {
  userRole: string
}

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold">AD</span>
        </div>
        <span className="font-semibold text-gray-800">Admin Dashboard</span>
      </div>

      <div className="space-y-1">
        <NavItem href="/" icon={Home}>
          Dashboard
        </NavItem>
        <NavItem href="/attendance" icon={Camera}>
          Face Scan
        </NavItem>
        <NavItem href="/analytics" icon={BarChart2}>
          Analytics
        </NavItem>
        <NavItem href="/students" icon={Users}>
          Students
        </NavItem>
        <NavItem href="/schedule" icon={Calendar}>
          Schedule
        </NavItem>
        <NavItem href="/navigation" icon={Navigation2}>
          Navigation
        </NavItem>
        <NavItem href="/notifications" icon={Bell}>
          Notifications
        </NavItem>
        {userRole === "dean" && (
          <NavItem href="/settings" icon={Settings}>
            Settings
          </NavItem>
        )}
      </div>

      <div className="mt-8 px-2">
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Quick Scan</h3>
          <p className="text-sm text-blue-600 mb-3">Start face scanning for attendance</p>
          <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
            Start Scanning
          </button>
        </div>
      </div>
    </div>
  )
}

type NavItemProps = {
  href: string
  icon: React.ElementType
  children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, children }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-2 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </Link>
  )
}

export default Sidebar

