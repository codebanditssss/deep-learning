"use client"

import type React from "react"

import { useState } from "react"
import { BarChart3, CheckCircle, Clock, Info, XCircle } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Sidebar } from "@/components/sidebar"

const attendanceData = [
  { subject: "Data Structures", attendance: 92, status: "Present", color: "hsl(142, 76%, 36%)" },
  { subject: "Algorithms", attendance: 78, status: "Present", color: "hsl(142, 76%, 36%)" },
  { subject: "Database Systems", attendance: 85, status: "Present", color: "hsl(142, 76%, 36%)" },
  { subject: "Computer Networks", attendance: 65, status: "Late", color: "hsl(48, 96%, 53%)" },
  { subject: "Operating Systems", attendance: 90, status: "Present", color: "hsl(142, 76%, 36%)" },
  { subject: "Web Development", attendance: 45, status: "Absent", color: "hsl(0, 84%, 60%)" },
]

const chartData = [
  { month: "Jan", attendance: 95 },
  { month: "Feb", attendance: 88 },
  { month: "Mar", attendance: 76 },
  { month: "Apr", attendance: 82 },
  { month: "May", attendance: 85 },
]

export default function AttendancePage() {
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [isRecognizing, setIsRecognizing] = useState(false)
  const [isRecognized, setIsRecognized] = useState(false)

  const handleScanFace = () => {
    setIsCameraActive(true)

    // Simulate face recognition process
    setTimeout(() => {
      setIsRecognizing(true)

      setTimeout(() => {
        setIsRecognizing(false)
        setIsRecognized(true)

        setTimeout(() => {
          setIsCameraActive(false)
          setIsRecognized(false)
        }, 2000)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="container py-6 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Attendance System</h1>
            <p className="text-muted-foreground">View and track your attendance records</p>
          </header>

          <Tabs defaultValue="status">
            <TabsList className="mb-6">
              <TabsTrigger value="status">Attendance Status</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="status">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <CardTitle className="text-lg">Today's Status</CardTitle>
                    <CardDescription>May 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-green-100 p-1">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-sm font-medium">Data Structures</span>
                        </div>
                        <Badge variant="success">Present</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-yellow-100 p-1">
                            <Clock className="h-4 w-4 text-yellow-600" />
                          </div>
                          <span className="text-sm font-medium">Algorithms</span>
                        </div>
                        <Badge variant="warning">Late</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-red-100 p-1">
                            <XCircle className="h-4 w-4 text-red-600" />
                          </div>
                          <span className="text-sm font-medium">Web Development</span>
                        </div>
                        <Badge variant="danger">Absent</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming Classes</CardTitle>
                    <CardDescription>Today's schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Database Systems</p>
                          <p className="text-xs text-muted-foreground">2:00 PM - 3:30 PM</p>
                        </div>
                        <Badge variant="outline">Upcoming</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Operating Systems</p>
                          <p className="text-xs text-muted-foreground">4:00 PM - 5:30 PM</p>
                        </div>
                        <Badge variant="outline">Upcoming</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold">Subject-wise Attendance</h2>
                <div className="rounded-lg border bg-card">
                  <div className="p-6">
                    <div className="grid gap-4">
                      {attendanceData.map((subject) => (
                        <div key={subject.subject} className="flex items-center gap-4">
                          <div className="w-1/3 font-medium">{subject.subject}</div>
                          <div className="flex-1">
                            <div className="mb-1 flex items-center justify-between">
                              <span className="text-sm">{subject.attendance}%</span>
                              <Badge
                                variant={
                                  subject.status === "Present"
                                    ? "success"
                                    : subject.status === "Late"
                                      ? "warning"
                                      : "danger"
                                }
                              >
                                {subject.status}
                              </Badge>
                            </div>
                            <Progress
                              value={subject.attendance}
                              className="h-2"
                              style={
                                {
                                  "--progress-background": subject.color,
                                } as React.CSSProperties
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Attendance Trends</CardTitle>
                    <CardDescription>Monthly attendance percentage for the current semester</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          attendance: {
                            label: "Attendance",
                            color: "hsl(var(--primary))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Bar dataKey="attendance" fill="var(--color-attendance)" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Insights</CardTitle>
                    <CardDescription>AI-powered analysis of your attendance patterns</CardDescription>
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
          </Tabs>
        </div>
      </main>
    </div>
  )
}

