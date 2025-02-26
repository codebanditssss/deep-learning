"use client"

import { useState } from "react"
import { Plus, Upload, Download } from "lucide-react"

const StudentManagement = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", rollNumber: "001", department: "Computer Science" },
    { id: 2, name: "Jane Smith", rollNumber: "002", department: "Electrical Engineering" },
    // Add more sample students here
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Student Management</h2>
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Student
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <Upload className="h-4 w-4 mr-2" />
            Import Students
          </button>
        </div>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Export Students
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Roll Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.rollNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{student.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentManagement

