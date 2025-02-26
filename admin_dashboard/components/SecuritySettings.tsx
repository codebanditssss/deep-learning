import type React from "react"
import { Shield, Key, Users } from "lucide-react"

type SecuritySettingsProps = {
  userRole: string
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ userRole }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Security Settings</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Authentication Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Key className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">Two-Factor Authentication</span>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Enable</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">Password Policy</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Configure</button>
          </div>
        </div>
      </div>
      {userRole === "dean" && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Role-Based Access Control</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Manage User Roles</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Configure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SecuritySettings

