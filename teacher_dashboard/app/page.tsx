import { BatteryChargingIcon, CalendarIcon, ChevronRightIcon, ClockIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DashboardChart } from "@/components/dashboard-chart"

export default function Dashboard() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader
        heading="Teacher Dashboard"
        text="Welcome back, Prof. Pooja Batra. Here's an overview of your classes today."
      >
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <ClockIcon className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Current Time:</span> 10:45 AM
          </Button>
          <Button variant="outline" size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Today:</span> Feb 27, 2025
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assigned Classes</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Computer Science Department</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Attendance</CardTitle>
            <BatteryChargingIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">3 Students Marked Absent</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">2 Leave Requests, 2 Manual Attendance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next: Database Systems (11:30 AM)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Weekly Attendance Overview</CardTitle>
            <CardDescription>Average attendance across all classes this week</CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardChart />
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Class Attendance Status</CardTitle>
            <CardDescription>Current attendance percentages by class</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium">Database Systems (CS301)</div>
                <Badge variant="outline">87%</Badge>
              </div>
              <Progress value={87} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium">Data Structures (CS201)</div>
                <Badge variant="outline">92%</Badge>
              </div>
              <Progress value={92} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium">Machine Learning (CS401)</div>
                <Badge variant="outline">76%</Badge>
              </div>
              <Progress value={76} className="bg-yellow-100 dark:bg-yellow-900">
                <div className="bg-yellow-500 h-full rounded-full" style={{ width: "76%" }} />
              </Progress>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium">Web Development (CS302)</div>
                <Badge variant="outline">82%</Badge>
              </div>
              <Progress value={82} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium">Computer Networks (CS304)</div>
                <Badge variant="outline">71%</Badge>
              </div>
              <Progress value={71} className="bg-red-100 dark:bg-red-900">
                <div className="bg-red-500 h-full rounded-full" style={{ width: "71%" }} />
              </Progress>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Link href="/reports" className="flex items-center">
                View Full Attendance Report
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Students Requiring Attention</CardTitle>
            <CardDescription>Students with low attendance or pending issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div>
                    <div className="font-medium">Kavita Sharma (CS201A)</div>
                    <div className="text-xs text-muted-foreground">Attendance: 65%</div>
                  </div>
                </div>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div>
                    <div className="font-medium">Rahul Gupta (CS301B)</div>
                    <div className="text-xs text-muted-foreground">Attendance: 72%</div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-800"
                >
                  Warning
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div>
                    <div className="font-medium">Priya Patel (CS401A)</div>
                    <div className="text-xs text-muted-foreground">Attendance: 73%</div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-800"
                >
                  Warning
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Link href="/alerts" className="flex items-center">
                View All Student Alerts
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Upcoming classes and events for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <div className="font-medium">Data Structures (CS201)</div>
                    <div className="text-xs text-muted-foreground">09:30 AM - 10:45 AM | Room 302</div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-300 dark:border-green-800"
                >
                  Completed
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="font-medium">Database Systems (CS301)</div>
                    <div className="text-xs text-muted-foreground">11:30 AM - 12:45 PM | Room 405</div>
                  </div>
                </div>
                <Badge variant="secondary">Upcoming</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="font-medium">Machine Learning (CS401)</div>
                    <div className="text-xs text-muted-foreground">02:00 PM - 03:15 PM | Lab 201</div>
                  </div>
                </div>
                <Badge variant="secondary">Upcoming</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <div>
                    <div className="font-medium">Faculty Meeting</div>
                    <div className="text-xs text-muted-foreground">04:00 PM - 05:00 PM | Conference Room</div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800"
                >
                  Meeting
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Link href="/schedule" className="flex items-center">
                View Full Schedule
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" asChild>
                <Link href="/attendance">Take Attendance</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/events">Schedule Event</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/reports">Export Reports</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/announcements">Send Announcement</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-sm">Database Assignment</div>
                <Badge>Mar 3</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm">Mid-term Exams</div>
                <Badge>Mar 15</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm">Project Submissions</div>
                <Badge>Mar 22</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="rounded-lg bg-muted p-2 text-xs">
                <span className="font-medium">ERP Sync:</span> Completed successfully at 10:15 AM
              </div>
              <div className="rounded-lg bg-muted p-2 text-xs">
                <span className="font-medium">Face Scanner:</span> Connected and operational
              </div>
              <div className="rounded-lg bg-muted p-2 text-xs">
                <span className="font-medium">System Update:</span> New features available
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

