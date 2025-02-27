"use client"

import Link from "next/link"
import { useState } from "react"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Plus, Filter, DownloadIcon } from "lucide-react"
import { format, addDays, subDays, startOfWeek, addWeeks, subWeeks, isToday, parseISO } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { ScheduleWeekView } from "@/components/schedule-week-view"
import { ScheduleMonthView } from "@/components/schedule-month-view"
import { ScheduleListView } from "@/components/schedule-list-view"

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(new Date())
  const [currentView, setCurrentView] = useState("week")
  
  const handlePrevious = () => {
    if (currentView === "week") {
      setCurrentDate(subWeeks(currentDate, 1))
    } else if (currentView === "month") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }
  }

  const handleNext = () => {
    if (currentView === "week") {
      setCurrentDate(addWeeks(currentDate, 1))
    } else if (currentView === "month") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }
  }

  const handleToday = () => {
    setCurrentDate(new Date())
  }

  const getDateRangeText = () => {
    if (currentView === "week") {
      const start = startOfWeek(currentDate, { weekStartsOn: 0 })
      const end = addDays(start, 6)
      return `${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`
    } else if (currentView === "month") {
      return format(currentDate, "MMMM yyyy")
    } else {
      return "Upcoming Classes"
    }
  }

  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader
        heading="Class Schedule"
        text="View and manage your teaching schedule across all assigned courses"
      >
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrevious}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleToday}>
            Today
          </Button>
          <Button variant="outline" size="sm" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </DashboardHeader>

      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <h2 className="text-xl font-semibold">{getDateRangeText()}</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="h-8 w-8 ml-1">
                <CalendarIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={calendarDate}
                onSelect={(date) => {
                  setCalendarDate(date)
                  if (date) {
                    setCurrentDate(date)
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Event
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="week" className="w-full" onValueChange={setCurrentView} value={currentView}>
        <TabsList className="grid grid-cols-3 w-full md:w-auto mb-4">
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="mt-0">
          <ScheduleWeekView currentDate={currentDate} />
        </TabsContent>

        <TabsContent value="month" className="mt-0">
          <ScheduleMonthView currentDate={currentDate} />
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <ScheduleListView />
        </TabsContent>
      </Tabs>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Schedule Highlights</CardTitle>
            <CardDescription>Important classes and events in the next few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Database Systems (CS301)",
                  date: "2025-02-28T11:30:00",
                  location: "Room 405",
                  type: "Lecture",
                  status: "upcoming"
                },
                {
                  id: 2,
                  title: "Machine Learning (CS401)",
                  date: "2025-02-28T14:00:00",
                  location: "Lab 201",
                  type: "Lab",
                  status: "upcoming"
                },
                {
                  id: 3,
                  title: "Faculty Meeting",
                  date: "2025-02-28T16:00:00",
                  location: "Conference Room",
                  type: "Meeting",
                  status: "important"
                },
                {
                  id: 4,
                  title: "Data Structures (CS201)",
                  date: "2025-03-01T09:30:00",
                  location: "Room 302",
                  type: "Lecture",
                  status: "upcoming"
                }
              ].map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      event.status === "important" ? "bg-purple-500" : 
                      event.status === "upcoming" ? "bg-blue-500" : ""
                    }`}></div>
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {format(parseISO(event.date), "MMM d, h:mm a")}
                        <MapPin className="h-3 w-3 ml-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      event.type === "Lecture" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" :
                      event.type === "Lab" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" :
                      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                    }`}
                  >
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Full Schedule
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}