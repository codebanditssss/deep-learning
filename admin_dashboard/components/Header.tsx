import type React from "react"
import { Bell, User } from "lucide-react"

type HeaderProps = {
  userRole: string
  setUserRole: (role: string) => void
}

const Header: React.FC<HeaderProps> = ({ userRole, setUserRole }) => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">AI-Powered Attendance System</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 capitalize">{userRole}</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <button
              onClick={() => setUserRole("teacher")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Switch to Teacher
            </button>
            <button
              onClick={() => setUserRole("dean")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Switch to Dean
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

