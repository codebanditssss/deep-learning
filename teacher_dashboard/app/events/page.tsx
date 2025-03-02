import { Calendar, CalendarDays, Clock, Edit, Filter, MapPin, Plus, Search, Trash2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { EventCalendar } from "@/components/event-calendar"

export default function EventsPage() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader heading="Events" text="Schedule and manage class events and activities">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="upcoming">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search events..." className="pl-8 w-[200px]" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Database Project Presentation",
                class: "CS301 - Database Systems",
                date: "Mar 10, 2025",
                time: "10:00 AM - 12:00 PM",
                location: "Room 405",
                attendees: 35,
                type: "Presentation",
              },
              {
                title: "Guest Lecture on AI",
                class: "CS401 - Machine Learning",
                date: "Mar 5, 2025",
                time: "2:00 PM - 4:00 PM",
                location: "Main Auditorium",
                attendees: 120,
                type: "Lecture",
              },
              {
                title: "Networking Workshop",
                class: "CS304 - Computer Networks",
                date: "Mar 12, 2025",
                time: "9:30 AM - 12:30 PM",
                location: "Lab 201",
                attendees: 38,
                type: "Workshop",
              },
              {
                title: "Web Development Hackathon",
                class: "CS302 - Web Development",
                date: "Mar 18, 2025",
                time: "9:00 AM - 5:00 PM",
                location: "Computer Lab",
                attendees: 45,
                type: "Hackathon",
              },
              {
                title: "Data Structures Quiz",
                class: "CS201 - Data Structures",
                date: "Mar 8, 2025",
                time: "11:30 AM - 12:30 PM",
                location: "Room 302",
                attendees: 42,
                type: "Quiz",
              },
              {
                title: "Faculty Meeting",
                class: "All Faculty",
                date: "Mar 10, 2025",
                time: "4:00 PM - 5:00 PM",
                location: "Conference Room",
                attendees: 15,
                type: "Meeting",
              },
            ].map((event, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge
                      variant="outline"
                      className={
                        event.type === "Presentation"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          : event.type === "Lecture"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            : event.type === "Workshop"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : event.type === "Hackathon"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : event.type === "Quiz"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                      }
                    >
                      {event.type}
                    </Badge>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.class}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      {event.attendees} Attendees
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
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {/* Similar content for past events */}
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Event Calendar</CardTitle>
              <CardDescription>View all scheduled events in calendar format</CardDescription>
            </CardHeader>
            <CardContent>
              <EventCalendar />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events in the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Guest Lecture on AI", date: "Mar 5, 2025", class: "CS401" },
                { title: "Data Structures Quiz", date: "Mar 8, 2025", class: "CS201" },
                { title: "Database Project Presentation", date: "Mar 10, 2025", class: "CS301" },
                { title: "Faculty Meeting", date: "Mar 10, 2025", class: "All Faculty" },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-1">
                    <div className="font-medium">{event.title}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="text-sm text-muted-foreground">{event.class}</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Statistics</CardTitle>
            <CardDescription>Overview of your events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-3">
                  <div className="text-sm text-muted-foreground">Total Events</div>
                  <div className="text-2xl font-bold">24</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm text-muted-foreground">Upcoming</div>
                  <div className="text-2xl font-bold">12</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm text-muted-foreground">This Month</div>
                  <div className="text-2xl font-bold">8</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-sm text-muted-foreground">Attendees</div>
                  <div className="text-2xl font-bold">295</div>
                </div>
              </div>

              <div className="rounded-lg border p-3">
                <div className="font-medium mb-2">Events by Type</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Lectures</div>
                    <div className="text-sm font-medium">5</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Quizzes</div>
                    <div className="text-sm font-medium">8</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Presentations</div>
                    <div className="text-sm font-medium">6</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Workshops</div>
                    <div className="text-sm font-medium">3</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">Other</div>
                    <div className="text-sm font-medium">2</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

