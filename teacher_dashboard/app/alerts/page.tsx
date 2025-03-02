import { AlertTriangle, Bell, CheckCircle, Clock, Filter, MessageSquare, Plus, Search, Send, UserX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AlertsPage() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader
        heading="Student Alerts"
        text="Monitor and send alerts to students with attendance or performance issues"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Alert
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="all">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <TabsList>
                <TabsTrigger value="all">All Alerts</TabsTrigger>
                <TabsTrigger value="attendance">Attendance</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search alerts..." className="pl-8 w-[200px]" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {[
                      {
                        name: "Kavita Sharma",
                        id: "CS301004",
                        class: "CS201 - Data Structures",
                        issue: "Attendance",
                        details: "Attendance below 65%",
                        status: "Critical",
                        date: "Feb 20, 2025",
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                      {
                        name: "Rahul Gupta",
                        id: "CS301002",
                        class: "CS301 - Database Systems",
                        issue: "Attendance",
                        details: "Attendance below 72%",
                        status: "Warning",
                        date: "Feb 22, 2025",
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                      {
                        name: "Priya Patel",
                        id: "CS301008",
                        class: "CS401 - Machine Learning",
                        issue: "Performance",
                        details: "Failed mid-term exam",
                        status: "Critical",
                        date: "Feb 18, 2025",
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                      {
                        name: "Vikram Mehta",
                        id: "CS301015",
                        class: "CS304 - Computer Networks",
                        issue: "Attendance",
                        details: "Attendance below 68%",
                        status: "Critical",
                        date: "Feb 15, 2025",
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                      {
                        name: "Sanjay Kumar",
                        id: "CS301023",
                        class: "CS304 - Computer Networks",
                        issue: "Performance",
                        details: "Missing assignments",
                        status: "Warning",
                        date: "Feb 10, 2025",
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                      {
                        name: "Ananya Reddy",
                        id: "CS301009",
                        class: "CS201 - Data Structures",
                        issue: "Attendance",
                        details: "Attendance below 75%",
                        status: "Resolved",
                        date: "Jan 25, 2025",
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                    ].map((alert, i) => (
                      <div key={i} className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={alert.avatar} alt={alert.name} />
                            <AvatarFallback>{alert.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium">{alert.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {alert.id} • {alert.class}
                                </p>
                              </div>
                              <Badge
                                variant={
                                  alert.status === "Critical"
                                    ? "destructive"
                                    : alert.status === "Warning"
                                      ? "outline"
                                      : "default"
                                }
                              >
                                {alert.status}
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <div className="flex items-center text-sm">
                                <span className="font-medium mr-2">Issue:</span>
                                <span
                                  className={
                                    alert.issue === "Attendance"
                                      ? "text-red-600 dark:text-red-400"
                                      : "text-yellow-600 dark:text-yellow-400"
                                  }
                                >
                                  {alert.issue}
                                </span>
                              </div>
                              <p className="text-sm mt-1">{alert.details}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <div className="text-xs text-muted-foreground">
                                <Clock className="inline-block mr-1 h-3 w-3" />
                                {alert.date}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="mr-2 h-3 w-3" />
                                  Contact
                                </Button>
                                {alert.status !== "Resolved" && (
                                  <Button variant="outline" size="sm">
                                    <CheckCircle className="mr-2 h-3 w-3" />
                                    Resolve
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="attendance" className="space-y-4">
              {/* Similar content for attendance alerts */}
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              {/* Similar content for performance alerts */}
            </TabsContent>

            <TabsContent value="resolved" className="space-y-4">
              {/* Similar content for resolved alerts */}
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Create Alert</CardTitle>
              <CardDescription>Send an alert to a student</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Student</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs301004">Kavita Sharma (CS301004)</SelectItem>
                    <SelectItem value="cs301002">Rahul Gupta (CS301002)</SelectItem>
                    <SelectItem value="cs301008">Priya Patel (CS301008)</SelectItem>
                    <SelectItem value="cs301015">Vikram Mehta (CS301015)</SelectItem>
                    <SelectItem value="cs301023">Sanjay Kumar (CS301023)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Class</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs201">Data Structures (CS201)</SelectItem>
                    <SelectItem value="cs301">Database Systems (CS301)</SelectItem>
                    <SelectItem value="cs304">Computer Networks (CS304)</SelectItem>
                    <SelectItem value="cs401">Machine Learning (CS401)</SelectItem>
                    <SelectItem value="cs302">Web Development (CS302)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Issue Type</label>
                <Select defaultValue="attendance">
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="attendance">Attendance</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                    <SelectItem value="behavior">Behavior</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Severity</label>
                <Select defaultValue="warning">
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="info">Information</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Enter alert message..." className="min-h-[100px]" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Draft</Button>
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Send Alert
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Alert Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Total Alerts</span>
                  </div>
                  <span className="font-medium">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <UserX className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Attendance Issues</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Bell className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Performance Issues</span>
                  </div>
                  <span className="font-medium">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Resolved</span>
                  </div>
                  <span className="font-medium">5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

