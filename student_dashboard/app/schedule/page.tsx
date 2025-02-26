"use client"

import { useState } from "react"
import { Bell, BookOpen, Calendar, ChevronLeft, ChevronRight, Clock, MapPin, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"

// Mock schedule data
const scheduleData = {
  today: [
    {
      id: 1,
      subject: "Data Structures",
      code: "CSE-301",
      professor: "Prof. Sapna Arora",
      room: "Room 203, Building B",
      time: "11:00 AM - 12:30 PM",
      status: "ongoing",
    },
    {
      id: 2,
      subject: "Database Systems",
      code: "CSE-305",
      professor: "Prof. Aarti Chugh",
      room: "Room 105, Building A",
      time: "2:00 PM - 3:30 PM",
      status: "upcoming",
    },
    {
      id: 3,
      subject: "Operating Systems",
      code: "CSE-310",
      professor: "Prof. Pallavi Panday",
      room: "Room 302, Building C",
      time: "4:00 PM - 5:30 PM",
      status: "upcoming",
    },
  ],
  week: [
    {
      day: "Monday",
      classes: [
        {
          id: 1,
          subject: "Data Structures",
          code: "CSE-301",
          professor: "Prof. Sapna Arora",
          room: "Room 203, Building B",
          time: "11:00 AM - 12:30 PM",
        },
        {
          id: 2,
          subject: "Database Systems",
          code: "CSE-305",
          professor: "Prof. Aarti Chugh",
          room: "Room 105, Building A",
          time: "2:00 PM - 3:30 PM",
        },
        {
          id: 3,
          subject: "Operating Systems",
          code: "CSE-310",
          professor: "Prof. Pallavi Panday",
          room: "Room 302, Building C",
          time: "4:00 PM - 5:30 PM",
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          id: 4,
          subject: "Algorithms",
          code: "CSE-302",
          professor: "Prof. Pooja Archarya",
          room: "Room 201, Building B",
          time: "9:30 AM - 11:00 AM",
        },
        {
          id: 5,
          subject: "Web Development",
          code: "CSE-315",
          professor: "Prof. Sonam Lata",
          room: "Lab 3, Building D",
          time: "1:00 PM - 3:00 PM",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          id: 6,
          subject: "Computer Networks",
          code: "CSE-320",
          professor: "Prof. Tina Bhatia",
          room: "Room 204, Building B",
          time: "10:00 AM - 11:30 AM",
        },
        {
          id: 7,
          subject: "Software Engineering",
          code: "CSE-330",
          professor: "Prof. Pooja Batra",
          room: "Room 101, Building A",
          time: "2:30 PM - 4:00 PM",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          id: 8,
          subject: "Artificial Intelligence",
          code: "CSE-340",
          professor: "Prof. Shamik Tiwari",
          room: "Room 305, Building C",
          time: "11:00 AM - 12:30 PM",
        },
        {
          id: 9,
          subject: "Mobile App Development",
          code: "CSE-350",
          professor: "Prof. Nidhi Srivashtava",
          room: "Lab 2, Building D",
          time: "3:00 PM - 5:00 PM",
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          id: 10,
          subject: "Machine Learning",
          code: "CSE-360",
          professor: "Prof. Gyanedra Tiwari",
          room: "Room 202, Building B",
          time: "9:00 AM - 10:30 AM",
        },
        {
          id: 11,
          subject: "Cybersecurity",
          code: "CSE-370",
          professor: "Prof. Neelam Diwan",
          room: "Room 303, Building C",
          time: "1:30 PM - 3:00 PM",
        },
      ],
    },
  ],
}

export default function SchedulePage() {
  const [currentWeek, setCurrentWeek] = useState(0)

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="container py-6 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Class Schedule</h1>
            <p className="text-muted-foreground">View and manage your academic schedule</p>
          </header>

          <Tabs defaultValue="today">
            <TabsList className="mb-6">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">Weekly</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="today">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Today's Classes</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Bell className="mr-2 h-4 w-4" />
                      Set Reminder
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {scheduleData.today.map((classItem) => (
                    <Card
                      key={classItem.id}
                      className={
                        classItem.status === "ongoing"
                          ? "border-l-4 border-l-green-500"
                          : classItem.status === "upcoming"
                            ? "border-l-4 border-l-yellow-500"
                            : ""
                      }
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{classItem.subject}</h3>
                              <Badge
                                variant={
                                  classItem.status === "ongoing"
                                    ? "success"
                                    : classItem.status === "upcoming"
                                      ? "warning"
                                      : "default"
                                }
                              >
                                {classItem.status === "ongoing"
                                  ? "Ongoing"
                                  : classItem.status === "upcoming"
                                    ? "Upcoming"
                                    : "Completed"}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{classItem.code}</p>
                          </div>

                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{classItem.professor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{classItem.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{classItem.room}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                            {classItem.status === "upcoming" && <Button size="sm">Navigate</Button>}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="week">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Weekly Schedule</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek - 1)}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium">Week {currentWeek + 1}</span>
                    <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek + 1)}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-8">
                  {scheduleData.week.map((day) => (
                    <div key={day.day}>
                      <h3 className="mb-4 font-semibold">{day.day}</h3>
                      <div className="space-y-3">
                        {day.classes.map((classItem) => (
                          <Card key={classItem.id}>
                            <CardContent className="p-4">
                              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="space-y-1">
                                  <h4 className="font-medium">{classItem.subject}</h4>
                                  <p className="text-xs text-muted-foreground">{classItem.code}</p>
                                </div>

                                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                  <div className="flex items-center gap-1">
                                    <User className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{classItem.professor}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{classItem.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs">{classItem.room}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Calendar</CardTitle>
                  <CardDescription>View your schedule in a calendar format</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <Calendar className="h-10 w-10 text-muted-foreground" />
                      <h3 className="font-medium">Calendar View</h3>
                      <p className="text-sm text-muted-foreground">Calendar integration coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Smart Reminders</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Next Class Reminder</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-yellow-100 p-2 dark:bg-yellow-900/20">
                      <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Database Systems starts in 45 minutes</p>
                      <p className="text-xs text-muted-foreground">Room 105, Building A</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Schedule Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900/20">
                      <Bell className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">AI class rescheduled to Thursday</p>
                      <p className="text-xs text-muted-foreground">Check your updated schedule</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Assignment Due</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/20">
                      <BookOpen className="h-5 w-5 text-red-600 dark:text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Data Structures assignment due tomorrow</p>
                      <p className="text-xs text-muted-foreground">Submit before 11:59 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

