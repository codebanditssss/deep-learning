import type React from "react"
import { Users, UserCheck, UserX, Clock } from "lucide-react"

type DashboardOverviewProps = {
  userRole: string
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ userRole }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} title="Total Students" value="1,234" />
        <StatCard icon={UserCheck} title="Present Today" value="1,012" />
        <StatCard icon={UserX} title="Absent Today" value="222" />
        <StatCard icon={Clock} title="Late Arrivals" value="45" />
      </div>
      {userRole === "dean" && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Department-wise Attendance</h3>
          {/* Add department-wise attendance chart here */}
        </div>
      )}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Notifications</h3>
        {/* Add recent notifications list here */}
      </div>
    </div>
  )
}

type StatCardProps = {
  icon: React.ElementType
  title: string
  value: string
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="rounded-full bg-blue-100 p-3 mr-4">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  )
}

export default DashboardOverview

