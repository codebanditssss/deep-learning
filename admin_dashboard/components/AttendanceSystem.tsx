"use client"

import type React from "react"
import { useState } from "react"
import { Camera, Check, X, Clock } from "lucide-react"

type AttendanceSystemProps = {
  userRole: string
}

const AttendanceSystem: React.FC<AttendanceSystemProps> = ({ userRole }) => {
  const [scanning, setScanning] = useState(false)
  const [attendanceList, setAttendanceList] = useState([
    { id: 1, name: "John Doe", status: "present" },
    { id: 2, name: "Jane Smith", status: "absent" },
    { id: 3, name: "Alice Johnson", status: "late" },
    // Add more sample attendance data here
  ])

  const startScanning = () => {
    setScanning(true)
    // Implement face scanning logic here
  }

  const stopScanning = () => {
    setScanning(false)
    // Stop face scanning logic here
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Attendance System</h2>
      {userRole === "teacher" && (
        <div className="flex items-center space-x-4">
          <button
            onClick={scanning ? stopScanning : startScanning}
            className={`${
              scanning ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
            } text-white font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            <Camera className="h-5 w-5 mr-2" />
            {scanning ? "Stop Scanning" : "Start Face Scanning"}
          </button>
          {scanning && <p className="text-green-600 font-semibold">Scanning in progress...</p>}
        </div>
      )}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attendanceList.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {student.status === "present" && <Check className="h-5 w-5 text-green-500" />}
                  {student.status === "absent" && <X className="h-5 w-5 text-red-500" />}
                  {student.status === "late" && <Clock className="h-5 w-5 text-yellow-500" />}
                  <span className="ml-2 capitalize">{student.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{student.status !== "absent" && "9:00 AM"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AttendanceSystem

