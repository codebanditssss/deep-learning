"use client"

import { useState } from "react"
import { User } from "lucide-react"
import Sidebar from "./Sidebar"
import NextScan from "./NextScan"
import AttendanceOverview from "./AttendanceOverview"
import CampusStats from "./CampusStats"
import Announcements from "./Announcements"

const Dashboard = () => {
  const [userRole, setUserRole] = useState("teacher") // 'teacher' or 'dean'
  const adminName = "Prof. Sharma"

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar userRole={userRole} />
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl text-gray-800 font-semibold">Good morning, {adminName}!</h1>
            <p className="text-gray-500 mt-1">Here's your attendance overview for today.</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600"
            >
              <option value="teacher">Teacher View</option>
              <option value="dean">Dean View</option>
            </select>
            <button className="p-2 rounded-full bg-gray-100">
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <NextScan userRole={userRole} />
            <Announcements />
          </div>
          <div className="space-y-6">
            <AttendanceOverview userRole={userRole} />
            <CampusStats userRole={userRole} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

