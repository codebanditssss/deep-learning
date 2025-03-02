"use client"

export function ClassScheduleCalendar() {
  return (
    <div className="w-full overflow-auto">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-6 gap-4">
          <div className="text-center font-medium p-2"></div>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
            <div key={day} className="text-center font-medium p-2 bg-muted rounded-md">
              {day}
            </div>
          ))}
        </div>

        {["9:30 - 10:45", "11:30 - 12:45", "1:00 - 2:15", "2:30 - 3:45"].map((timeSlot, timeIndex) => (
          <div key={timeSlot} className="grid grid-cols-6 gap-4 mt-2">
            <div className="flex items-center justify-center text-sm text-muted-foreground">{timeSlot}</div>

            {[0, 1, 2, 3, 4].map((dayIndex) => {
              // Generate class data based on day and time slot
              const classes = [
                {
                  day: 0,
                  time: 0,
                  name: "Data Structures",
                  code: "CS201",
                  room: "Room 302",
                  color:
                    "bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300",
                },
                {
                  day: 0,
                  time: 2,
                  name: "Computer Networks",
                  code: "CS304",
                  room: "Room 201",
                  color: "bg-red-100 border-red-300 text-red-800 dark:bg-red-900 dark:border-red-700 dark:text-red-300",
                },
                {
                  day: 1,
                  time: 1,
                  name: "Database Systems",
                  code: "CS301",
                  room: "Room 405",
                  color:
                    "bg-green-100 border-green-300 text-green-800 dark:bg-green-900 dark:border-green-700 dark:text-green-300",
                },
                {
                  day: 1,
                  time: 3,
                  name: "Web Development",
                  code: "CS302",
                  room: "Lab 105",
                  color:
                    "bg-purple-100 border-purple-300 text-purple-800 dark:bg-purple-900 dark:border-purple-700 dark:text-purple-300",
                },
                {
                  day: 2,
                  time: 0,
                  name: "Data Structures",
                  code: "CS201",
                  room: "Room 302",
                  color:
                    "bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300",
                },
                {
                  day: 2,
                  time: 2,
                  name: "Machine Learning",
                  code: "CS401",
                  room: "Lab 201",
                  color:
                    "bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-300",
                },
                {
                  day: 3,
                  time: 1,
                  name: "Database Systems",
                  code: "CS301",
                  room: "Room 405",
                  color:
                    "bg-green-100 border-green-300 text-green-800 dark:bg-green-900 dark:border-green-700 dark:text-green-300",
                },
                {
                  day: 4,
                  time: 0,
                  name: "Computer Networks",
                  code: "CS304",
                  room: "Room 201",
                  color: "bg-red-100 border-red-300 text-red-800 dark:bg-red-900 dark:border-red-700 dark:text-red-300",
                },
                {
                  day: 4,
                  time: 3,
                  name: "Machine Learning",
                  code: "CS401",
                  room: "Lab 201",
                  color:
                    "bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-300",
                },
              ]

              const classForSlot = classes.find((c) => c.day === dayIndex && c.time === timeIndex)

              return (
                <div key={`${dayIndex}-${timeIndex}`} className="min-h-[80px] rounded-md border border-dashed p-2">
                  {classForSlot ? (
                    <div className={`h-full rounded-md border p-2 ${classForSlot.color}`}>
                      <div className="font-medium">{classForSlot.name}</div>
                      <div className="text-xs">{classForSlot.code}</div>
                      <div className="text-xs mt-1">{classForSlot.room}</div>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

