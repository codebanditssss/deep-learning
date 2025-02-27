"use client"

import { useState } from "react"
import { format, addDays, startOfWeek, isToday, parseISO, isSameDay } from "date-fns"
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock schedule data
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
  }
]

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
]

interface ScheduleWeekViewProps {
  currentDate: Date
}

export function ScheduleWeekView({ currentDate }: ScheduleWeekViewProps) {
  const { theme } = useTheme()
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  // Generate the days of the week starting from Sunday
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 })
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  const getEventsForDay = (day: Date) => {
    return scheduleData.filter(event => {
      const eventDate = parseISO(event.date)
      return isSameDay(eventDate, day)
    })
  }

  // Function to get the top position based on event time
  const getEventPosition = (eventTime: string) => {
    const hour = parseInt(parseISO(eventTime).getHours().toString(), 10)
    const minutes = parseInt(parseISO(eventTime).getMinutes().toString(), 10)
    
    // Calculate position: each hour is 60px height
    return (hour - 8) * 60 + minutes
  }

  // Function to get the height based on event duration
  const getEventHeight = (startTime: string, endTime: string) => {
    const start = parseISO(startTime)
    const end = parseISO(endTime)
    
    // Calculate difference in minutes
    const diff = (end.getHours() - start.getHours()) * 60 + (end.getMinutes() - start.getMinutes())
    
    // Return height in pixels (1 minute = 1px)
    return diff
  }

  // Function to get color based on event type
  const getEventColor = (type: string) => {
    switch (type) {
      case "Lecture":
        return theme === "dark" 
          ? "bg-blue-900 border-blue-700 text-blue-100" 
          : "bg-blue-100 border-blue-300 text-blue-800"
      case "Lab":
        return theme === "dark" 
          ? "bg-green-900 border-green-700 text-green-100" 
          : "bg-green-100 border-green-300 text-green-800"
      case "Meeting":
        return theme === "dark" 
          ? "bg-purple-900 border-purple-700 text-purple-100" 
          : "bg-purple-100 border-purple-300 text-purple-800"
      default:
        return theme === "dark" 
          ? "bg-gray-800 border-gray-700 text-gray-100" 
          : "bg-gray-100 border-gray-300 text-gray-800"
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex border-b">
          <div className="w-16 shrink-0 border-r py-2"></div>
          {weekDays.map(day => (
            <div 
              key={day.toString()} 
              className={`flex-1 text-center py-2 border-r ${isToday(day) ? 'bg-primary/10 font-bold' : ''}`}
            >
              <div className="text-sm">{format(day, "EEE")}</div>
              <div className={`text-lg ${isToday(day) ? 'text-primary' : ''}`}>{format(day, "d")}</div>
            </div>
          ))}
        </div>
        
        <div className="flex relative" style={{ height: '660px' }}>
          {/* Time indicators */}
          <div className="w-16 shrink-0 border-r">
            {timeSlots.map((time, index) => (
              <div key={index} className="h-14 border-b text-xs flex items-start justify-center pt-1">
                {time}
              </div>
            ))}
          </div>

          {/* Days columns */}
          {weekDays.map((day, dayIndex) => (
            <div key={dayIndex} className="flex-1 border-r relative">
              {/* Time grid */}
              {timeSlots.map((_, index) => (
                <div key={index} className="h-14 border-b"></div>
              ))}
              
              {/* Events */}
              {getEventsForDay(day).map(event => {
                const top = getEventPosition(event.date)
                const height = getEventHeight(event.date, event.endTime)
                const colorClass = getEventColor(event.type)
                
                return (
                  <div 
                    key={event.id}
                    className={`absolute mx-1 rounded p-1 border ${colorClass} text-xs transition-all overflow-hidden ${hoveredEvent === event.id ? 'z-10 shadow-lg' : 'z-0'}`}
                    style={{ 
                      top: `${top}px`, 
                      height: `${height}px`,
                      left: '2px',
                      right: '2px'
                    }}
                    onMouseEnter={() => setHoveredEvent(event.id)}
                    onMouseLeave={() => setHoveredEvent(null)}
                  >
                    <div className="font-medium truncate">{event.title}</div>
                    <div className="truncate">{format(parseISO(event.date), "h:mm a")} - {format(parseISO(event.endTime), "h:mm a")}</div>
                    <div className="truncate opacity-75">{event.location}</div>
                    {hoveredEvent === event.id && (
                      <Badge variant="outline" className="mt-1 bg-background/80">{event.type}</Badge>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}