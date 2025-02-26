import type React from "react"
import { Clock, User, MapPin, Camera } from "lucide-react"

type NextScanProps = {
  userRole: string
}

const NextScan: React.FC<NextScanProps> = ({ userRole }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Next Scan</h2>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Ongoing</span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Camera className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Data Structures</h3>
            <p className="text-sm text-gray-500">Starting in 25 minutes</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Prof. Pooja Batra</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Room CR-1, Law Building</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">10:30 AM - 11:30 AM</span>
        </div>

        <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition-colors">
          Start Face Scanning
        </button>
      </div>
    </div>
  )
}

export default NextScan

