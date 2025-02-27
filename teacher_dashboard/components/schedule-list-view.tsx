"use client"

import { useState } from "react"
import { format, parseISO, isAfter, isBefore, addDays } from "date-fns"
import { Calendar, MapPin, Clock, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Mock schedule data - extended for list view
const scheduleData = [
  {
    id: 1,
    title: "Data Structures (CS201)",
    date: "2025-02-27T09:30:00",
    endTime: "2025-02-27T10:45:00",
    location: "Room 302",
    type: "Lecture",
    description: "Binary trees and heap implementation",
    students: 42,
    section: "A"
  },
  {
    id: 2,
    title: "Database Systems (CS301)",
    date: "2025-02-27T11:30:00",
    endTime: "2025-02-27T12:45:00",
    location: "Room 405",
    type: "Lecture",
    description: "Normalization and relational algebra",
    students: 35,
    section: "B"
  },
  {
    id: 3,
    title: "Machine Learning (CS401)",
    date: "2025-02-27T14:00:00",
    endTime: "2025-02-27T15:15:00",
    location: "Lab 201",
    type: "Lab",
    description: "Neural network implementation with TensorFlow",
    students: 25,
    section: "A"
  },
  {
    id: 4,
    title: "Faculty Meeting",
    date: "2025-02-27T16:00:00",
    endTime: "2025-02-27T17:00:00",
    location: "Conference Room",
    type: "Meeting",
    description: "Monthly faculty progress review",
    attendees: 15
  },
  {
    id: 5,
    title: "Computer Networks (CS304)",
    date: "2025-02-28T13:00:00",
    endTime: "2025-02-28T14:15:00",
    location: "Room 207",
    type: "Lecture",
    description: "TCP/IP protocol suite and network security",
    students: 38,
    section: "A"
  },
  {
    id: 6,
    title: "Web Development (CS302)",
    date: "2025-03-01T11:00:00",
    endTime: "2025-03-01T12:15:00",
    location: "Lab 105",
    type: "Lab",
    description: "React.js component architecture",
    students: 30,
    section: "B"
  },
  {
    id: 7,
    title: "Data Structures (CS201)",
    date: "2025-03-02T09:30:00",
    endTime: "2025-03-02T10:45:00",
    location: "Room 302",
    type: "Lecture",
    description: "Graph algorithms and implementations",
    students: 42,
    section: "A"
  },
  {
    id: 8,
    title: "Database Systems (CS301)",
    date: "2025-03-03T11:30:00",
    endTime: "2025-03-03T12:45:00",
    location: "Room 405",
    type: "Lecture",
    description: "Transaction processing and concurrency control",
    students: 35,
    section: "B"
  },
  {
    id: 9,
    title: "Machine Learning Lab (CS401)",
    date: "2025-03-05T14:00:00",
    endTime: "2025-03-05T15:15:00",
    location: "Lab 201",
    type: "Lab",
    description: "Support Vector Machines practical implementation",
    students: 25,
    section: "A"
  },
  {
    id: 10,
    title: "Department Meeting",
    date: "2025-03-07T15:00:00",
    endTime: "2025-03-07T16:00:00",
    location: "Conference Room",
    type: "Meeting",
    description: "Curriculum review for next semester",
    attendees: 12
  },
  {
    id: 11,
    title: "Web Development Project Review",
    date: "2025-03-10T13:30:00",
    endTime: "2025-03-10T15:00:00",
    location: "Lab 105",
    type: "Lab",
    description: "Mid-term project presentations",
    students: 30,
    section: "B"
  },
  {
    id: 12,
    title: "Computer Networks (CS304)",
    date: "2025-03-12T13:00:00",
    endTime: "2025-03-12T14:15:00",
    location: "Room 207",
    type: "Lecture",
    description: "Network security fundamentals",
    students: 38,
    section: "A"
  }
]

export function ScheduleListView() {
  const [timeFilter, setTimeFilter] = useState<string>("upcoming")
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  
  const today = new Date()
  const nextWeek = addDays(today, 7)
  
  // Filter events based on selected time period
  const filteredEvents = scheduleData.filter(event => {
    const eventDate = parseISO(event.date)
    
    if (timeFilter === "today") {
      // Only show events from today
      return format(eventDate, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")
    } else if (timeFilter === "upcoming") {
      // Show events from today onwards
      return isAfter(eventDate, new Date(today.setHours(0, 0, 0, 0)))
    } else if (timeFilter === "week") {
      // Show events in the next 7 days
      return isAfter(eventDate, new Date(today.setHours(0, 0, 0, 0))) && 
             isBefore(eventDate, nextWeek)
    } else {
      // Show all events
      return true
    }
  }).sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  // Group events by date
  const groupedEvents: Record<string, typeof scheduleData> = {}
  
  filteredEvents.forEach(event => {
    const dateKey = format(parseISO(event.date), "yyyy-MM-dd")
    if (!groupedEvents[dateKey]) {
      groupedEvents[dateKey] = []
    }
    groupedEvents[dateKey].push(event)
  })

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
  
  // Generate two letters for avatar fallback from event title
  const getInitials = (title: string) => {
    const parts = title.split(/[\s()]+/).filter(Boolean)
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase()
    }
    return parts[0].slice(0, 2).toUpperCase()
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Tabs 
          value={timeFilter} 
          onValueChange={setTimeFilter}
          className="w-full md:w-auto"
        >
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {Object.keys(groupedEvents).length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <Calendar className="h-10 w-10 text-muted-foreground mb-3" />
            <h3 className="text-lg font-medium">No scheduled events</h3>
            <p className="text-sm text-muted-foreground mt-1">
              There are no events scheduled for this time period.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedEvents).map(([dateKey, events]) => (
            <div key={dateKey} className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                {format(new Date(dateKey), "EEEE, MMMM d, yyyy")}
                {format(new Date(dateKey), "yyyy-MM-dd") === format(today, "yyyy-MM-dd") && (
                  <Badge className="ml-2 bg-primary">Today</Badge>
                )}
              </h3>
              
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {events.map(event => (
                      <Collapsible
                        key={event.id}
                        open={expandedEvent === event.id}
                        onOpenChange={() => {
                          setExpandedEvent(expandedEvent === event.id ? null : event.id)
                        }}
                        className="w-full"
                      >
                        <div className="flex items-center py-3 px-4 hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className="flex-shrink-0 mr-4">
                            <Avatar className={`${
                              event.type === "Lecture" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" :
                              event.type === "Lab" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" :
                              "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            }`}>
                              <AvatarFallback>{getInitials(event.title)}</AvatarFallback>
                            </Avatar>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-sm font-medium">{event.title}</h4>
                                <div className="flex items-center text-xs text-muted-foreground mt-1">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {format(parseISO(event.date), "h:mm a")} - {format(parseISO(event.endTime), "h:mm a")}
                                  <MapPin className="h-3 w-3 ml-2 mr-1" />
                                  {event.location}
                                </div>
                              </div>
                              
                              <Badge 
                                variant="outline" 
                                className={`${getEventBadgeColor(event.type)} ml-2`}
                              >
                                {event.type}
                              </Badge>
                            </div>
                          </div>
                          
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="ml-2"
                            >
                              {expandedEvent === event.id ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        
                        <CollapsibleContent>
                          <div className="px-4 pb-4 pt-1">
                            <div className="bg-muted/50 p-3 rounded-md">
                              <h5 className="font-medium mb-1">Details</h5>
                              <p className="text-sm">{event.description}</p>
                              
                              <div className="grid grid-cols-2 gap-2 mt-3">
                                {event.type !== "Meeting" ? (
                                  <>
                                    <div>
                                      <span className="text-xs text-muted-foreground">Class</span>
                                      <p className="text-sm font-medium">{event.title}</p>
                                    </div>
                                    <div>
                                      <span className="text-xs text-muted-foreground">Section</span>
                                      <p className="text-sm font-medium">{event.section}</p>
                                    </div>
                                    <div>
                                      <span className="text-xs text-muted-foreground">Students</span>
                                      <p className="text-sm font-medium">{event.students}</p>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div>
                                      <span className="text-xs text-muted-foreground">Meeting</span>
                                      <p className="text-sm font-medium">{event.title}</p>
                                    </div>
                                    <div>
                                      <span className="text-xs text-muted-foreground">Attendees</span>
                                      <p className="text-sm font-medium">{event.attendees}</p>
                                    </div>
                                  </>
                                )}
                                <div>
                                  <span className="text-xs text-muted-foreground">Location</span>
                                  <p className="text-sm font-medium">{event.location}</p>
                                </div>
                              </div>
                              
                              <div className="flex mt-4 space-x-2">
                                <Button size="sm" variant="outline">View Details</Button>
                                <Button size="sm" variant="outline">Take Attendance</Button>
                              </div>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}