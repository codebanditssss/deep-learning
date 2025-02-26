"use client"

import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, LineChart, Line } from "recharts"
import { BarChart3, Calendar, CheckCircle, Download, Info, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Sidebar } from "@/components/sidebar"

// Mock attendance data
const attendanceData = [
  { subject: "Data Structures", attendance: 92, threshold: 75 },
  { subject: "Algorithms", attendance: 78, threshold: 75 },
  { subject: "Database Systems", attendance: 85, threshold: 75 },
  { subject: "Computer Networks", attendance: 65, threshold: 75 },
  { subject: "Operating Systems", attendance: 90, threshold: 75 },
  { subject: "Web Development", attendance: 45, threshold: 75 },
]

// Mock monthly trend data
const monthlyTrendData = [
  { month: "Jan", attendance: 95 },
  { month: "Feb", attendance: 88 },
  { month: "Mar", attendance: 76 },
  { month: "Apr", attendance: 82 },
  { month: "May", attendance: 85 },
]

// Mock weekly pattern data
const weeklyPatternData = [
  { day: "Mon", attendance: 65 },
  { day: "Tue", attendance: 85 },
  { day: "Wed", attendance: 90 },
  { day: "Thu", attendance: 80 },
  { day: "Fri", attendance: 75 },
]

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="container py-6 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Attendance Analytics</h1>
            <p className="text-muted-foreground">Insights and trends about your attendance</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Overall Attendance</CardTitle>
                <CardDescription>Current semester</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">85%</p>
                    <p className="text-sm text-muted-foreground">Attendance rate</p>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <Progress value={85} className="mt-4 h-2" />
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">
                  <Info className="mr-1 inline h-3 w-3" />
                  Minimum required: 75%
                </p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Attendance Trend</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">+3%</p>
                    <p className="text-sm text-muted-foreground">Improvement</p>
                  </div>
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-500" />
                  </div>
                </div>
                <div className="mt-4 h-[60px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyTrendData.slice(-3)}>
                      <Line
                        type="monotone"
                        dataKey="attendance"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-green-600 dark:text-green-500">
                  <TrendingUp className="mr-1 inline h-3 w-3" />
                  Your attendance is improving
                </p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">At Risk Subjects</CardTitle>
                <CardDescription>Below 75% threshold</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Computer Networks</span>
                      <span className="text-sm font-medium text-yellow-600">65%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-yellow-100 dark:bg-yellow-900/20">
                      <div className="h-full bg-yellow-500" style={{ width: "65%" }} />
                    </Progress>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Web Development</span>
                      <span className="text-sm font-medium text-red-600">45%</span>
                    </div>
                    <Progress value={45} className="h-2 bg-red-100 dark:bg-red-900/20">
                      <div className="h-full bg-red-500" style={{ width: "45%" }} />
                    </Progress>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-red-600 dark:text-red-500">
                  <Info className="mr-1 inline h-3 w-3" />
                  Immediate attention required
                </p>
              </CardFooter>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Attendance Trends</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Subject-wise Attendance</CardTitle>
                    <CardDescription>Current semester attendance breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          attendance: {
                            label: "Attendance",
                            color: "hsl(var(--primary))",
                          },
                          threshold: {
                            label: "Threshold",
                            color: "hsl(var(--muted-foreground))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={attendanceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="subject" />
                            <YAxis />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="attendance" fill="var(--color-attendance)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="threshold" fill="var(--color-threshold)" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Status</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium">Present</span>
                        </div>
                        <span className="text-sm font-medium">42 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                          <span className="text-sm font-medium">Late</span>
                        </div>
                        <span className="text-sm font-medium">5 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-red-500"></div>
                          <span className="text-sm font-medium">Absent</span>
                        </div>
                        <span className="text-sm font-medium">8 days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Pattern</CardTitle>
                    <CardDescription>Attendance by day of week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ChartContainer
                        config={{
                          attendance: {
                            label: "Attendance",
                            color: "hsl(var(--primary))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={weeklyPatternData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="attendance" fill="var(--color-attendance)" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trends">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Attendance Trends</CardTitle>
                  <CardDescription>Track your attendance patterns over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ChartContainer
                      config={{
                        attendance: {
                          label: "Attendance",
                          color: "hsl(var(--primary))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyTrendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="attendance"
                            stroke="var(--color-attendance)"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Historical Data
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="insights">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Powered Insights</CardTitle>
                    <CardDescription>Personalized attendance analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                        <div className="flex items-start gap-3">
                          <Info className="mt-0.5 h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                          <div>
                            <p className="font-medium text-yellow-800 dark:text-yellow-500">Attendance Alert</p>
                            <p className="text-sm text-yellow-700 dark:text-yellow-400">
                              Your Web Development attendance is 45%. Try attending the next class to avoid falling
                              below the threshold.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                        <div className="flex items-start gap-3">
                          <BarChart3 className="mt-0.5 h-5 w-5 text-blue-600 dark:text-blue-500" />
                          <div>
                            <p className="font-medium text-blue-800 dark:text-blue-500">Attendance Pattern</p>
                            <p className="text-sm text-blue-700 dark:text-blue-400">
                              Most absences occur on Mondays. Consider adjusting your study schedule!
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 text-green-600 dark:text-green-500" />
                          <div>
                            <p className="font-medium text-green-800 dark:text-green-500">Good Progress</p>
                            <p className="text-sm text-green-700 dark:text-green-400">
                              Your Data Structures attendance is excellent at 92%. Keep up the good work!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Recommendations</CardTitle>
                    <CardDescription>Personalized suggestions to improve your attendance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Set morning alarms</p>
                          <p className="text-sm text-muted-foreground">
                            You tend to miss early morning classes. Set multiple alarms to ensure you wake up on time.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Plan your commute</p>
                          <p className="text-sm text-muted-foreground">
                            Leave 15 minutes earlier to account for traffic and unexpected delays.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Focus on Web Development</p>
                          <p className="text-sm text-muted-foreground">
                            Your attendance in this subject is critical. Prioritize attending the next 3 classes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Reports</CardTitle>
                  <CardDescription>Download and export your attendance data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Monthly Attendance Report</p>
                            <p className="text-sm text-muted-foreground">May 2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Semester Attendance Report</p>
                            <p className="text-sm text-muted-foreground">Spring 2023</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Subject-wise Attendance Report</p>
                            <p className="text-sm text-muted-foreground">All subjects</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Generate Custom Report
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

