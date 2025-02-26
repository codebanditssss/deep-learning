import { Bell } from "lucide-react"

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "New Face Recognition System Update",
      time: "Posted 2 hours ago",
      isNew: true,
    },
    {
      id: 2,
      title: "Attendance Reports for Last Month",
      time: "Posted 5 hours ago",
      isNew: false,
    },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Announcements</h2>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-blue-100 rounded-lg">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{announcement.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{announcement.time}</p>
            </div>
            {announcement.isNew && (
              <span className="ml-auto px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">New</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements

