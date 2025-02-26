import { Search } from "lucide-react"

const SystemLogs = () => {
  const sampleLogs = [
    { id: 1, timestamp: "2023-05-01 09:15:23", action: "Face scan initiated", user: "Prof. Smith" },
    { id: 2, timestamp: "2023-05-01 09:16:45", action: "Student attendance marked", user: "System" },
    { id: 3, timestamp: "2023-05-01 10:30:12", action: "Report generated", user: "Dean Johnson" },
    // Add more sample logs as needed
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">System Logs</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search logs..."
            className="flex-grow py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Search
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleLogs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.timestamp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.action}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SystemLogs

