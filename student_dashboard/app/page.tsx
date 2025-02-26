import { ArrowRight, BookOpen, Clock, MapPin, User, CheckCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="container py-6 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Good morning, Khushi!</h1>
            <p className="text-muted-foreground">Here's your schedule for today.</p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Next Class Card */}
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Next Class
                </CardTitle>
                <CardDescription>Starting in 25 minutes</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Python</span>
                    </div>
                    <Badge variant="success">Ongoing</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span>Prof. Pooja Batra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Room CR-1, Law Building </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Attendance Status Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Attendance Status
                </CardTitle>
                <CardDescription>Current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Overall</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Data Structures</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium">Algorithms</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  View All Subjects
                </Button>
              </CardFooter>
            </Card>

            {/* Campus Navigation Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Campus Navigation
                </CardTitle>
                <CardDescription>Find your way around</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border bg-muted/50 p-2">
                  <div className="aspect-video overflow-hidden rounded-md bg-muted">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Campus Map"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Button size="sm" className="justify-between">
                    Navigate to next class
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="justify-between">
                    Find library
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Announcements</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Exam Schedule Released</CardTitle>
                    <Badge>New</Badge>
                  </div>
                  <CardDescription>Posted 2 hours ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The final examination schedule for this semester has been released. Please check your email for
                    details.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    Read more
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Hackathon Registration Open</CardTitle>
                  <CardDescription>Posted yesterday</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Registration for the annual college hackathon is now open. Form your teams and register before May
                    15th.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0">
                    Read more
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

