import type React from "react"

type AttendanceOverviewProps = {
  userRole: string
}

const AttendanceOverview: React.FC<AttendanceOverviewProps> = ({ userRole }) => {
  const subjects = [
    { name: "Overall", percentage: 85 },
    { name: "Data Structures", percentage: 92 },
    { name: "Algorithms", percentage: 78 },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Attendance Status</h2>
      <p className="text-sm text-gray-500 mb-6">Current semester</p>

      <div className="space-y-4">
        {subjects.map((subject) => (
          <div key={subject.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-600">{subject.name}</span>
              <span className="text-sm text-gray-900">{subject.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: `${subject.percentage}%` }} />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-blue-600 hover:text-blue-700 text-sm font-medium">View All Subjects</button>
    </div>
  )
}

export default AttendanceOverview

