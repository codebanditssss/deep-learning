"use client"

import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  isToday, 
  isSameMonth, 
  parseISO, 
  isSameDay 
} from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock schedule data - same as in week view
const scheduleData = [
  {
    id: 1,
    title: "Data Structures (CS201)",
    date: "2025-02-27T09:30:00",
    endTime: "2025-02-27T10:45:00",
    location: "Room 302",
    type: "Lecture"
  },
  {
    id: 2,
    title: "Database Systems (CS301)",
    date: "2025-02-27T11:30:00",
    endTime: "2025-02-27T12:45:00",
    location: "Room 405",
    type: "Lecture"
  },
  {
    id: 3,
    title: "Machine Learning (CS401)",
    date: "2025-02-27T14:00:00",
    endTime: "2025-02-27T15:15:00",
    location: "Lab 201",
    type: "Lab"
  },
  {
    id: 4,
    title: "Faculty Meeting",
    date: "2025-02-27T16:00:00",
    endTime: "2025-02-27T17:00:00",
    location: "Conference Room",
    type: "Meeting"
  },
  {
    id: 5,
    title: "Computer Networks (CS304)",
    date: "2025-02-28T13:00:00",
    endTime: "2025-02-28T14:15:00",
    location: "Room 207",
    type: "Lecture"
  },
  {
    id: 6,
    title: "Web Development (CS302)",
    date: "2025-03-01T11:00:00",
    endTime: "2025-03-01T12:15:00",
    location: "Lab 105",
    type: "Lab"
  },
  {
    id: 7,
    title: "Data Structures (CS201)",
    date: "2025-03-02T09:30:00",
    endTime: "2025-03-02T10:45:00",
    location: "Room 302",
    type: "Lecture"
  },
  {
    id: 8,
    title: "Database Systems (CS301)",
    date: "2025-03-03T11:30:00",
    endTime: "2025-03-03T12:45:00",
    location: "Room 405",
    type: "Lecture"
  },
  {
    id: 9,
    title: "Machine Learning Lab (CS401)",
    date: "2025-03-05T14:00:00",
    endTime: "2025-03-05T15:15:00",
    location: "Lab 201",
    type: "Lab"
  },
  {
    id: 10,
    title: "Department Meeting",
    date: "2025-03-07T15:00:00",
    endTime: "2025-03-07T16:00:00",
    location: "Conference Room",
    type: "Meeting"
  },
  {
    id: 11,
    title: "Web Development Project Review",
    date: "2025-03-10T13:30:00",
    endTime: "2025-03-10T15:00:00",
    location: "Lab 105",
    type: "Lab"
  },
  {
    id: 12,
    title: "Computer Networks (CS304)",
    date: "2025-03-12T13:00:00",
    endTime: "2025-03-12T14:15:00",
    location: "Room 207",
    type: "Lecture"
  }
]

interface ScheduleMonthViewProps {
  currentDate: Date
}

export function ScheduleMonthView({ currentDate }: ScheduleMonthViewProps) {
  // Get all days in the current month view (including days from prev/next months that appear in the grid)
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 })
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 })
  
  const calendarDays = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  })

  // Create weeks array for the grid
  const weeks = []
  let days = []

  calendarDays.forEach((day, i) => {
    if (i % 7 === 0 && days.length) {
      weeks.push(days)
      days = []
    }
    days.push(day)
    if (i === calendarDays.length - 1) {
      weeks.push(days)
    }
  })

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return scheduleData.filter(event => {
      const eventDate = parseISO(event.date)
      return isSameDay(eventDate, day)
    })
  }

  // Get badge color based on event type
  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "Lecture":
        return "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800"
      case "Lab":
        return "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-300 dark:border-green-800"
      case "Meeting":
        return "bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800"
    }
  }

  return (
    <Card>
      <CardContent className="p-0">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 border-b text-center py-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="text-sm font-medium">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7">
          {weeks.map((week, weekIndex) => (
            week.map((day, dayIndex) => {
              const events = getEventsForDay(day)
              const isCurrentMonth = isSameMonth(day, currentDate)
              
              return (
                <div 
                  key={`${weekIndex}-${dayIndex}`} 
                  className={`min-h-28 border p-1 ${
                    !isCurrentMonth ? 'bg-muted/20 text-muted-foreground' : ''
                  } ${
                    isToday(day) ? 'bg-primary/10' : ''
                  }`}
                >
                  <div className={`text-right mb-1 ${
                    isToday(day) ? 'font-bold text-primary' : ''
                  }`}>
                    {format(day, "d")}
                  </div>
                  
                  <div className="space-y-1">
                    {events.slice(0, 3).map(event => (
                      <div 
                        key={event.id} 
                        className="text-xs rounded border px-1 py-0.5 truncate cursor-pointer hover:shadow-sm transition-shadow"
                      >
                        <span className="font-medium">
                          {format(parseISO(event.date), "h:mm a")}
                        </span>{" "}
                        {event.title.split("(")[0].trim()}
                      </div>
                    ))}
                    
                    {events.length > 3 && (
                      <div className="text-xs text-center">
                        <Badge variant="outline" className="mt-1">
                          +{events.length - 3} more
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              )
            })
          ))}
        </div>
      </CardContent>
    </Card>
  )
}