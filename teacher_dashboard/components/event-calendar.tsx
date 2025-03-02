"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  // Mock data showing events for dates
  const dateEvents = React.useMemo(() => {
    const result: Record<string, Array<{ type: string; title: string; time: string; location: string }>> = {}
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    // Add some events
    const events = [
      {
        date: new Date(currentYear, currentMonth, 5),
        type: "lecture",
        title: "Guest Lecture on AI",
        time: "2:00 PM - 4:00 PM",
        location: "Main Auditorium",
      },
      {
        date: new Date(currentYear, currentMonth, 8),
        type: "quiz",
        title: "Data Structures Quiz",
        time: "11:30 AM - 12:30 PM",
        location: "Room 302",
      },
      {
        date: new Date(currentYear, currentMonth, 10),
        type: "presentation",
        title: "Database Project Presentation",
        time: "10:00 AM - 12:00 PM",
        location: "Room 405",
      },
      {
        date: new Date(currentYear, currentMonth, 12),
        type: "workshop",
        title: "Networking Workshop",
        time: "9:30 AM - 12:30 PM",
        location: "Lab 201",
      },
      {
        date: new Date(currentYear, currentMonth, 18),
        type: "hackathon",
        title: "Web Development Hackathon",
        time: "9:00 AM - 5:00 PM",
        location: "Computer Lab",
      },
    ]

    events.forEach((event) => {
      const dateStr = event.date.toISOString()
      if (!result[dateStr]) {
        result[dateStr] = []
      }
      result[dateStr].push(event)
    })

    return result
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border rounded-md"
          modifiers={{
            event: (date) => {
              const dateStr = date.toISOString()
              return dateStr in dateEvents
            },
          }}
          modifiersClassNames={{
            event: "bg-primary/10 text-primary font-medium",
          }}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Events for {date?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </h3>

          {date && dateEvents[date.toISOString()] ? (
            <div className="space-y-4">
              {dateEvents[date.toISOString()].map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{event.title}</h4>
                      <Badge
                        variant="outline"
                        className={
                          event.type === "lecture"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            : event.type === "quiz"
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              : event.type === "presentation"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : event.type === "workshop"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }
                      >
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div>{event.time}</div>
                      <div>{event.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">No events scheduled for this date.</div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-purple-100 dark:bg-purple-900"></div>
          <span className="text-sm">Lecture</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-100 dark:bg-red-900"></div>
          <span className="text-sm">Quiz</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-blue-100 dark:bg-blue-900"></div>
          <span className="text-sm">Presentation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-green-100 dark:bg-green-900"></div>
          <span className="text-sm">Workshop</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-yellow-100 dark:bg-yellow-900"></div>
          <span className="text-sm">Hackathon</span>
        </div>
      </div>
    </div>
  )
}

