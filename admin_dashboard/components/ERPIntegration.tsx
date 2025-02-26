import { Database, RefreshCw } from "lucide-react"

const ERPIntegration = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">ERP Integration</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">ERP Sync Status</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <RefreshCw className="h-5 w-5 mr-2" />
            Sync Now
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Database className="h-8 w-8 text-green-500" />
          <div>
            <p className="text-sm font-medium text-gray-600">Last Sync:</p>
            <p className="text-lg font-semibold text-gray-800">Today at 09:15 AM</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">ERP Configuration</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="erp-url" className="block text-sm font-medium text-gray-700 mb-1">
              ERP API URL
            </label>
            <input
              type="text"
              id="erp-url"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="https://erp.example.com/api"
            />
          </div>
          <div>
            <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 mb-1">
              API Key
            </label>
            <input
              type="password"
              id="api-key"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your API key"
            />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Save Configuration
          </button>
        </form>
      </div>
    </div>
  )
}

export default ERPIntegration

