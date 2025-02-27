import { BarChart3, DownloadIcon, FilterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AttendanceChart } from "@/components/attendance-chart"
import { AttendanceCalendar } from "@/components/attendance-calendar"
import { AttendanceAIInsights } from "@/components/attendance-ai-insights"

export default function ReportsPage() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader
        heading="Attendance Reports & Analytics"
        text="Generate and view detailed attendance reports with AI-powered insights"
      />

      <div className="flex flex-col md:flex-row gap-4 justify-between mb-2">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-sm font-medium">Select Class</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="cs201">Data Structures (CS201)</SelectItem>
                <SelectItem value="cs301">Database Systems (CS301)</SelectItem>
                <SelectItem value="cs304">Computer Networks (CS304)</SelectItem>
                <SelectItem value="cs401">Machine Learning (CS401)</SelectItem>
                <SelectItem value="cs302">Web Development (CS302)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-sm font-medium">Date Range</label>
            <Select defaultValue="month">
              <SelectTrigger>
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="semester">This Semester</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FilterIcon className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="charts">Charts & Trends</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
              <CardDescription>Overview of attendance across all classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b px-4 py-3 font-medium">
                  <div className="col-span-2">Class</div>
                  <div>Total Students</div>
                  <div>Average Attendance</div>
                  <div>Low Attendance</div>
                  <div>Action</div>
                </div>
                <div className="divide-y">
                  {[
                    { class: "Data Structures (CS201)", students: 42, avgAttendance: "92%", lowAttendance: 1 },
                    { class: "Database Systems (CS301)", students: 35, avgAttendance: "87%", lowAttendance: 2 },
                    { class: "Computer Networks (CS304)", students: 38, avgAttendance: "71%", lowAttendance: 8 },
                    { class: "Machine Learning (CS401)", students: 25, avgAttendance: "76%", lowAttendance: 5 },
                    { class: "Web Development (CS302)", students: 30, avgAttendance: "82%", lowAttendance: 3 },
                  ].map((cls, i) => (
                    <div key={i} className="grid grid-cols-6 px-4 py-3">
                      <div className="col-span-2 font-medium">{cls.class}</div>
                      <div>{cls.students}</div>
                      <div>
                        <span
                          className={
                            Number(cls.avgAttendance.replace("%", "")) >= 85
                              ? "text-green-600"
                              : Number(cls.avgAttendance.replace("%", "")) >= 75
                                ? "text-yellow-600"
                                : "text-red-600"
                          }
                        >
                          {cls.avgAttendance}
                        </span>
                      </div>
                      <div>{cls.lowAttendance} students</div>
                      <div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Attendance Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82.5%</div>
                <p className="text-xs text-muted-foreground">Across all classes this semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Highest Attendance</CardTitle>
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
                <div className="text-2xl font-bold">CS201</div>
                <p className="text-xs text-muted-foreground">Data Structures (92%)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Lowest Attendance</CardTitle>
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
                <div className="text-2xl font-bold">CS304</div>
                <p className="text-xs text-muted-foreground">Computer Networks (71%)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Students &lt; 75%</CardTitle>
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">19</div>
                <p className="text-xs text-muted-foreground">Requiring attention</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex justify-between items-center">
              <div>
                <CardTitle>Students with Low Attendance</CardTitle>
                <CardDescription>Students below 75% attendance threshold</CardDescription>
              </div>
              <Button size="sm">Send Mass Alert</Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-7 border-b px-4 py-3 font-medium">
                  <div>Student ID</div>
                  <div className="col-span-2">Name</div>
                  <div>Class</div>
                  <div>Attendance</div>
                  <div>Status</div>
                  <div>Action</div>
                </div>
                <div className="divide-y">
                  {[
                    { id: "CS301004", name: "Kavita Sharma", class: "CS201", attendance: "65%", status: "Critical" },
                    { id: "CS301002", name: "Rahul Gupta", class: "CS301", attendance: "72%", status: "Warning" },
                    { id: "CS301008", name: "Priya Patel", class: "CS401", attendance: "73%", status: "Warning" },
                    { id: "CS301015", name: "Vikram Mehta", class: "CS304", attendance: "68%", status: "Critical" },
                    { id: "CS301023", name: "Sanjay Kumar", class: "CS304", attendance: "70%", status: "Warning" },
                  ].map((student, i) => (
                    <div key={i} className="grid grid-cols-7 px-4 py-3">
                      <div>{student.id}</div>
                      <div className="col-span-2 font-medium">{student.name}</div>
                      <div>{student.class}</div>
                      <div className="text-red-600 font-semibold">{student.attendance}</div>
                      <div>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            student.status === "Critical"
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {student.status}
                        </span>
                      </div>
                      <div>
                        <Button variant="ghost" size="sm">
                          Send Alert
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="charts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Trends</CardTitle>
              <CardDescription>Monthly attendance patterns by class</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <AttendanceChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Calendar</CardTitle>
              <CardDescription>View attendance by date</CardDescription>
            </CardHeader>
            <CardContent>
              <AttendanceCalendar />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Attendance Insights</CardTitle>
              <CardDescription>Smart analysis of attendance patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <AttendanceAIInsights />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

