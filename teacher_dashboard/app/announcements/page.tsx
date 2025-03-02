import { Bell, Edit, Filter, MessageSquare, Plus, Search, Send, Trash2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader heading="Announcements" text="Create and manage announcements for your classes">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Announcement
        </Button>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="all">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending Approval</TabsTrigger>
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search announcements..." className="pl-8 w-[200px]" />
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
                        title: "Mid-term Exam Schedule",
                        class: "All Classes",
                        date: "Feb 25, 2025",
                        status: "Published",
                        content:
                          "The mid-term exams will be held from March 15-20, 2025. Please check the exam schedule on the college portal for your specific exam dates and times.",
                      },
                      {
                        title: "Database Assignment Extension",
                        class: "CS301 - Database Systems",
                        date: "Feb 24, 2025",
                        status: "Published",
                        content:
                          "The deadline for the database normalization assignment has been extended to March 10, 2025. Please submit your assignments through the online portal.",
                      },
                      {
                        title: "Guest Lecture on AI",
                        class: "CS401 - Machine Learning",
                        date: "Feb 23, 2025",
                        status: "Published",
                        content:
                          "We will have a guest lecture on 'Recent Advances in AI' by Dr. Rajesh Kumar on March 5, 2025 at 2:00 PM in the Main Auditorium. Attendance is mandatory for all CS401 students.",
                      },
                      {
                        title: "Project Submission Guidelines",
                        class: "CS302 - Web Development",
                        date: "Feb 22, 2025",
                        status: "Pending Approval",
                        content:
                          "The final project submission guidelines have been updated. Please review the new requirements on the course portal before submitting your projects.",
                      },
                      {
                        title: "Lab Equipment Update",
                        class: "CS304 - Computer Networks",
                        date: "Feb 21, 2025",
                        status: "Draft",
                        content:
                          "New networking equipment has been installed in Lab 201. We will be using this equipment for the upcoming practical sessions.",
                      },
                    ].map((announcement, i) => (
                      <div key={i} className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{announcement.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {announcement.class} • {announcement.date}
                            </p>
                          </div>
                          <Badge
                            variant={
                              announcement.status === "Published"
                                ? "default"
                                : announcement.status === "Pending Approval"
                                  ? "outline"
                                  : "secondary"
                            }
                          >
                            {announcement.status}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm">{announcement.content}</p>
                        <div className="flex justify-end gap-2 mt-4">
                          <Button variant="ghost" size="sm">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              {/* Similar content for pending announcements */}
            </TabsContent>

            <TabsContent value="published" className="space-y-4">
              {/* Similar content for published announcements */}
            </TabsContent>

            <TabsContent value="drafts" className="space-y-4">
              {/* Similar content for draft announcements */}
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Create Announcement</CardTitle>
              <CardDescription>Create a new announcement for your classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="Enter announcement title" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Target Class</label>
                <Select>
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

              <div className="space-y-2">
                <label className="text-sm font-medium">Announcement Content</label>
                <Textarea placeholder="Enter your announcement here..." className="min-h-[150px]" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <Select defaultValue="normal">
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Publish
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Announcement Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Bell className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Total Announcements</span>
                  </div>
                  <span className="font-medium">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Published</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Edit className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Drafts</span>
                  </div>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Pending Approval</span>
                  </div>
                  <span className="font-medium">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

