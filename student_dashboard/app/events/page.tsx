"use client"

import { useState } from "react"
import { Bell, BookOpen, Calendar, Clock, Filter, MapPin, Star, Tag, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"

// Mock events data
const eventsData = [
  {
    id: 1,
    title: "Annual Hackathon",
    description: "Join the biggest coding event of the year. Form teams and build innovative projects.",
    date: "May 20, 2023",
    time: "9:00 AM - 9:00 PM",
    location: "Computer Science Building, Lab 5",
    category: "Tech",
    image: "/placeholder.svg?height=200&width=400",
    isRecommended: true,
  },
  {
    id: 2,
    title: "Guest Lecture: AI Ethics",
    description: "Distinguished Professor Dr. Emily Chen discusses the ethical implications of AI.",
    date: "May 22, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Auditorium A, Building C",
    category: "Academic",
    image: "/placeholder.svg?height=200&width=400",
    isRecommended: true,
  },
  {
    id: 3,
    title: "Career Fair",
    description: "Meet recruiters from top tech companies and explore internship and job opportunities.",
    date: "May 25, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "Student Center, Grand Hall",
    category: "Career",
    image: "/placeholder.svg?height=200&width=400",
    isRecommended: false,
  },
  {
    id: 4,
    title: "Research Symposium",
    description: "Undergraduate and graduate students present their research projects.",
    date: "May 28, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Science Building, Conference Room",
    category: "Academic",
    image: "/placeholder.svg?height=200&width=400",
    isRecommended: false,
  },
]

// Mock notifications data
const notificationsData = [
  {
    id: 1,
    title: "Exam Schedule Released",
    description: "Final examination schedule for this semester has been released.",
    time: "2 hours ago",
    isUrgent: true,
  },
  {
    id: 2,
    title: "Library Hours Extended",
    description: "The main library will be open 24/7 during finals week.",
    time: "Yesterday",
    isUrgent: false,
  },
  {
    id: 3,
    title: "Scholarship Application Deadline",
    description: "Reminder: Merit scholarship applications are due next week.",
    time: "2 days ago",
    isUrgent: true,
  },
  {
    id: 4,
    title: "Campus Wi-Fi Maintenance",
    description: "Wi-Fi service will be interrupted from 2 AM to 4 AM tomorrow.",
    time: "3 days ago",
    isUrgent: false,
  },
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Academic", "Tech", "Career", "Social", "Sports"]

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="container py-6 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Events & Notifications</h1>
            <p className="text-muted-foreground">Stay updated with campus events and important notices</p>
          </header>

          <Tabs defaultValue="events">
            <TabsList className="mb-6">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="digest">Daily Digest</TabsTrigger>
            </TabsList>

            <TabsContent value="events">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-1 gap-2">
                  <Input
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-md"
                  />
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="mb-4 text-xl font-semibold">Recommended for You</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {eventsData
                    .filter((event) => event.isRecommended)
                    .map((event) => (
                      <Card key={event.id} className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle>{event.title}</CardTitle>
                            <Badge>{event.category}</Badge>
                          </div>
                          <CardDescription>{event.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="col-span-2 flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{event.location}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            <Star className="mr-2 h-4 w-4" />
                            Interested
                          </Button>
                          <Button size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Add to Calendar
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-semibold">All Events</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredEvents.map((event) => (
                    <Card key={event.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{event.title}</CardTitle>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Notifications</h2>
                <Button variant="outline" size="sm">
                  <Bell className="mr-2 h-4 w-4" />
                  Mark All as Read
                </Button>
              </div>

              <div className="space-y-4">
                {notificationsData.map((notification) => (
                  <Card key={notification.id} className={notification.isUrgent ? "border-l-4 border-l-red-500" : ""}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{notification.title}</CardTitle>
                        {notification.isUrgent && <Badge variant="destructive">Urgent</Badge>}
                      </div>
                      <CardDescription>{notification.time}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{notification.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" size="sm">
                        Mark as Read
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold">Notification Settings</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Notifications</CardTitle>
                    <CardDescription>Control what notifications you receive and how they are delivered</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bell className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Event Reminders</p>
                            <p className="text-sm text-muted-foreground">Notifications about upcoming events</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="event-reminders" className="h-4 w-4" defaultChecked />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Academic Updates</p>
                            <p className="text-sm text-muted-foreground">Exam schedules, class changes, etc.</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="academic-updates" className="h-4 w-4" defaultChecked />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Faculty Announcements</p>
                            <p className="text-sm text-muted-foreground">Messages from professors and staff</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="faculty-announcements" className="h-4 w-4" defaultChecked />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Tag className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Campus Activities</p>
                            <p className="text-sm text-muted-foreground">Social events, club meetings, etc.</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="campus-activities" className="h-4 w-4" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Preferences</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="digest">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Digest</CardTitle>
                  <CardDescription>A summary of today's important updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 text-lg font-medium">Today's Schedule</h3>
                      <div className="space-y-3 rounded-lg bg-muted p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Data Structures</p>
                            <p className="text-sm text-muted-foreground">11:00 AM - 12:30 PM</p>
                          </div>
                          <Badge variant="success">Attended</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Database Systems</p>
                            <p className="text-sm text-muted-foreground">2:00 PM - 3:30 PM</p>
                          </div>
                          <Badge variant="outline">Upcoming</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Operating Systems</p>
                            <p className="text-sm text-muted-foreground">4:00 PM - 5:30 PM</p>
                          </div>
                          <Badge variant="outline">Upcoming</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-medium">Attendance Highlights</h3>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <p className="font-medium">Overall Attendance</p>
                          <p className="font-medium">85%</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Data Structures</span>
                            <span className="text-green-600">92%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Algorithms</span>
                            <span className="text-green-600">78%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Web Development</span>
                            <span className="text-red-600">45%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-medium">Today's Events</h3>
                      <div className="space-y-3">
                        <Card>
                          <CardHeader className="p-3 pb-1">
                            <CardTitle className="text-base">Guest Lecture: AI Ethics</CardTitle>
                          </CardHeader>
                          <CardContent className="p-3 pt-0">
                            <div className="flex flex-col gap-1 text-sm">
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span>2:00 PM - 4:00 PM</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-3 w-3 text-muted-foreground" />
                                <span>Auditorium A, Building C</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="p-3 pb-1">
                            <CardTitle className="text-base">Computer Science Club Meeting</CardTitle>
                          </CardHeader>
                          <CardContent className="p-3 pt-0">
                            <div className="flex flex-col gap-1 text-sm">
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span>5:30 PM - 7:00 PM</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-3 w-3 text-muted-foreground" />
                                <span>Room 101, Building D</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-medium">Important Reminders</h3>
                      <div className="space-y-2">
                        <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
                          <p className="text-sm font-medium text-yellow-800 dark:text-yellow-500">
                            Data Structures assignment due tomorrow at 11:59 PM
                          </p>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                          <p className="text-sm font-medium text-blue-800 dark:text-blue-500">
                            Registration for next semester opens in 3 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Full Calendar
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

