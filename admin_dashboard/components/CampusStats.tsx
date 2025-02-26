import type React from "react"
import { ArrowRight } from "lucide-react"

type CampusStatsProps = {
  userRole: string
}

const CampusStats: React.FC<CampusStatsProps> = ({ userRole }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Campus Statistics</h2>
      <p className="text-sm text-gray-500 mb-6">Find your insights</p>

      <div className="space-y-4">
        <button className="w-full flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <span>View Today's Analytics</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <button className="w-full flex items-center justify-between p-4 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <span>Download Reports</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default CampusStats

