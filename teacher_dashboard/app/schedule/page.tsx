import { Calendar, Clock, Edit, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ClassScheduleCalendar } from "@/components/class-schedule-calendar"
import { ClassScheduleTable } from "@/components/class-schedule-table"

export default function SchedulePage() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader heading="Class Schedule" text="View and manage your teaching schedule and assignments">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Class
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="calendar">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Sync with ERP
            </Button>
          </div>
        </div>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>View your weekly teaching schedule in calendar format</CardDescription>
            </CardHeader>
            <CardContent>
              <ClassScheduleCalendar />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Class Schedule</CardTitle>
              <CardDescription>All your scheduled classes for this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <ClassScheduleTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>Manage assignments and deadlines for your classes</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Assignment
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
                  <div className="col-span-2">Assignment</div>
                  <div>Class</div>
                  <div>Due Date</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                <div className="divide-y">
                  {[
                    { title: "Database Normalization", class: "CS301", dueDate: "Mar 3, 2025", status: "Upcoming" },
                    { title: "Data Structures Project", class: "CS201", dueDate: "Mar 10, 2025", status: "Upcoming" },
                    { title: "Network Protocols Lab", class: "CS304", dueDate: "Mar 15, 2025", status: "Upcoming" },
                    { title: "Machine Learning Models", class: "CS401", dueDate: "Mar 20, 2025", status: "Draft" },
                    { title: "Web Development Project", class: "CS302", dueDate: "Mar 25, 2025", status: "Draft" },
                  ].map((assignment, i) => (
                    <div key={i} className="grid grid-cols-6 px-4 py-3">
                      <div className="col-span-2 font-medium">{assignment.title}</div>
                      <div>{assignment.class}</div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        {assignment.dueDate}
                      </div>
                      <div>
                        <Badge variant={assignment.status === "Upcoming" ? "default" : "outline"}>
                          {assignment.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Export Assignments
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
            <CardDescription>Your next scheduled classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Database Systems (CS301)", time: "11:30 AM - 12:45 PM", location: "Room 405", date: "Today" },
                { title: "Machine Learning (CS401)", time: "02:00 PM - 03:15 PM", location: "Lab 201", date: "Today" },
                {
                  title: "Data Structures (CS201)",
                  time: "09:30 AM - 10:45 AM",
                  location: "Room 302",
                  date: "Tomorrow",
                },
                {
                  title: "Web Development (CS302)",
                  time: "01:00 PM - 02:15 PM",
                  location: "Lab 105",
                  date: "Tomorrow",
                },
              ].map((cls, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="space-y-1">
                    <div className="font-medium">{cls.title}</div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      {cls.time}
                    </div>
                    <div className="text-sm text-muted-foreground">{cls.location}</div>
                  </div>
                  <Badge variant={cls.date === "Today" ? "default" : "outline"}>{cls.date}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reminders</CardTitle>
            <CardDescription>Important reminders for your classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-3">
                <div className="font-medium">Submit Mid-term Grades</div>
                <div className="text-sm text-muted-foreground">Deadline: March 5, 2025</div>
                <div className="mt-2 text-sm">Submit mid-term grades for all classes to the academic office.</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="font-medium">Faculty Meeting</div>
                <div className="text-sm text-muted-foreground">March 10, 2025 at 3:00 PM</div>
                <div className="mt-2 text-sm">Semester planning and curriculum review meeting.</div>
              </div>
              <div className="rounded-lg border p-3">
                <div className="font-medium">Lab Equipment Maintenance</div>
                <div className="text-sm text-muted-foreground">March 12, 2025</div>
                <div className="mt-2 text-sm">Lab 201 will be closed for equipment maintenance.</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Reminder
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

