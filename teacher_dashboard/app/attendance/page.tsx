import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckIcon, Camera, AlertTriangle, Clock, DownloadIcon } from "lucide-react"
import { AttendanceScanner } from "@/components/attendance-scanner"

export default function LiveAttendancePage() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader
        heading="Live Attendance"
        text="Connect to the face scanner and take attendance for your class"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Select Class Details</CardTitle>
            <CardDescription>Choose the class to take attendance for</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Class</label>
              <Select defaultValue="cs301">
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
              <label className="text-sm font-medium">Class Section</label>
              <Select defaultValue="a">
                <SelectTrigger>
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Section A</SelectItem>
                  <SelectItem value="b">Section B</SelectItem>
                  <SelectItem value="c">Section C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time Slot</label>
              <Select defaultValue="slot2">
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slot1">09:30 AM - 10:45 AM</SelectItem>
                  <SelectItem value="slot2">11:30 AM - 12:45 PM</SelectItem>
                  <SelectItem value="slot3">02:00 PM - 03:15 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Connect to Face Scanner</Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Face Scanner Status</CardTitle>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Connected</Badge>
            </div>
            <CardDescription>Database Systems (CS301) • Section A • 11:30 AM - 12:45 PM</CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4">
              <Camera className="h-4 w-4" />
              <AlertTitle>Scanner Connected</AlertTitle>
              <AlertDescription>Face scanner is operational and ready to take attendance.</AlertDescription>
            </Alert>

            <AttendanceScanner />

            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-green-600">24</div>
                <div className="text-xs text-muted-foreground">Present</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-xs text-muted-foreground">Late</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-red-600">2</div>
                <div className="text-xs text-muted-foreground">Absent</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">All Students</TabsTrigger>
            <TabsTrigger value="present">Present</TabsTrigger>
            <TabsTrigger value="late">Late</TabsTrigger>
            <TabsTrigger value="absent">Absent</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              Auto Refresh
            </Button>
            <Button variant="outline" size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-0">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                  <div>Student ID</div>
                  <div className="col-span-2">Name</div>
                  <div>Status</div>
                  <div>Time</div>
                </div>
                <div className="divide-y">
                  {[
                    { id: "CS301001", name: "Rahul Gupta", status: "present", time: "11:32 AM" },
                    { id: "CS301002", name: "Priya Patel", status: "present", time: "11:30 AM" },
                    { id: "CS301003", name: "Amit Shah", status: "present", time: "11:31 AM" },
                    { id: "CS301004", name: "Kavita Sharma", status: "late", time: "11:45 AM" },
                    { id: "CS301005", name: "Vikram Singh", status: "present", time: "11:33 AM" },
                    { id: "CS301006", name: "Neha Desai", status: "present", time: "11:35 AM" },
                    { id: "CS301007", name: "Rajiv Kumar", status: "absent", time: "-" },
                    { id: "CS301008", name: "Sanjay Patel", status: "present", time: "11:36 AM" },
                    { id: "CS301009", name: "Ananya Reddy", status: "present", time: "11:32 AM" },
                    { id: "CS301010", name: "Kiran Joshi", status: "late", time: "11:47 AM" },
                    { id: "CS301011", name: "Pradeep Verma", status: "late", time: "11:48 AM" },
                    { id: "CS301012", name: "Deepak Sharma", status: "absent", time: "-" },
                  ].map((student) => (
                    <div key={student.id} className="grid grid-cols-5 px-4 py-3 items-center">
                      <div className="font-medium">{student.id}</div>
                      <div className="col-span-2 flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                          <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        {student.name}
                      </div>
                      <div>
                        {student.status === "present" && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            <CheckIcon className="mr-1 h-3 w-3" /> Present
                          </Badge>
                        )}
                        {student.status === "late" && (
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          >
                            <Clock className="mr-1 h-3 w-3" /> Late
                          </Badge>
                        )}
                        {student.status === "absent" && (
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          >
                            <AlertTriangle className="mr-1 h-3 w-3" /> Absent
                          </Badge>
                        )}
                      </div>
                      <div className="text-muted-foreground">{student.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="present" className="space-y-0">
          {/* Similar content for present students only */}
        </TabsContent>
        <TabsContent value="late" className="space-y-0">
          {/* Similar content for late students only */}
        </TabsContent>
        <TabsContent value="absent" className="space-y-0">
          {/* Similar content for absent students only */}
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline">
          <Link href="/">Cancel</Link>
        </Button>
        <div className="space-x-2">
          <Button variant="outline">Manual Override</Button>
          <Button>Submit Attendance to ERP</Button>
        </div>
      </div>
    </div>
  )
}

