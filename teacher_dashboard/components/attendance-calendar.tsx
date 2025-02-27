"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function AttendanceCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  // Mock data showing attendance percentages for dates
  const dateAttendance = React.useMemo(() => {
    const result = {}
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    // Generate random attendance data for the current month
    for (let day = 1; day <= 28; day++) {
      const date = new Date(currentYear, currentMonth, day)
      if (date > currentDate) continue

      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue

      // Random attendance percentage (50-100%)
      result[date.toISOString()] = Math.floor(Math.random() * 51) + 50
    }

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
            high: (date) => {
              const dateStr = new Date(date).toISOString()
              return dateStr in dateAttendance && dateAttendance[dateStr] >= 85
            },
            medium: (date) => {
              const dateStr = new Date(date).toISOString()
              return dateStr in dateAttendance && dateAttendance[dateStr] >= 75 && dateAttendance[dateStr] < 85
            },
            low: (date) => {
              const dateStr = new Date(date).toISOString()
              return dateStr in dateAttendance && dateAttendance[dateStr] < 75
            },
          }}
          modifiersClassNames={{
            high: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
            medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
            low: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
          }}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Attendance for {date?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </h3>

          {date && dateAttendance[date.toISOString()] ? (
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium">Overall Attendance</div>
                      <div className="text-2xl font-bold mt-1">{dateAttendance[date.toISOString()]}%</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-sm font-medium">Students Present</div>
                      <div className="text-2xl font-bold mt-1">
                        {Math.floor(dateAttendance[date.toISOString()] * 1.7)}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-md border p-4 mt-4">
                  <h4 className="font-medium mb-2">Class-wise Attendance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Structures (CS201)</span>
                      <span className="font-medium">{Math.min(100, dateAttendance[date.toISOString()] + 5)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Database Systems (CS301)</span>
                      <span className="font-medium">{dateAttendance[date.toISOString()]}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Computer Networks (CS304)</span>
                      <span className="font-medium">{Math.max(50, dateAttendance[date.toISOString()] - 15)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Machine Learning (CS401)</span>
                      <span className="font-medium">{Math.max(50, dateAttendance[date.toISOString()] - 8)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Web Development (CS302)</span>
                      <span className="font-medium">{Math.min(100, dateAttendance[date.toISOString()] + 2)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              {date && date > new Date()
                ? "Future date selected. No attendance data available."
                : "No attendance data available for this date. It might be a weekend or holiday."}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-green-100 dark:bg-green-900"></div>
          <span className="text-sm">High (≥85%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-yellow-100 dark:bg-yellow-900"></div>
          <span className="text-sm">Medium (75-84%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-100 dark:bg-red-900"></div>
          <span className="text-sm">Low (&lt;75%)</span>
        </div>
      </div>
    </div>
  )
}

