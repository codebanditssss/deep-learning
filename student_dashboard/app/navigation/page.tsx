"use client"

import { useState } from "react"
import { ChevronRight, Compass, Info, MapPin, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"

export default function NavigationPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="container py-6 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Campus Navigation</h1>
            <p className="text-muted-foreground">Find your way around campus</p>
          </header>

          <Tabs defaultValue="map">
            <TabsList className="mb-6">
              <TabsTrigger value="map">Campus Map</TabsTrigger>
              <TabsTrigger value="search">Search Locations</TabsTrigger>
            </TabsList>

            <TabsContent value="map">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Interactive Campus Map</CardTitle>
                      <CardDescription>Navigate to your next class or any campus location</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-[16/9] overflow-hidden rounded-md border bg-muted">
                        <img
                          src="/placeholder.svg?height=400&width=800"
                          alt="Campus Map"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <Button size="sm" variant="secondary">
                            <MapPin className="mr-2 h-4 w-4" />
                            Your Location
                          </Button>
                          <Button size="sm">
                            <Compass className="mr-2 h-4 w-4" />
                            Navigate
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Next Class</CardTitle>
                      <CardDescription>Starting in 45 minutes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Database Systems</div>
                          <Badge variant="outline">CSE-305</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          Room 105, Building A
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        Navigate to Class
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Quick Navigation</CardTitle>
                      <CardDescription>Find common locations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-between">
                          Main Library
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                          Student Center
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                          Cafeteria
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                          Computer Labs
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold">Campus Shuttle Tracking</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="flex-1">
                        <div className="relative aspect-video overflow-hidden rounded-md border bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=400"
                            alt="Shuttle Map"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-md bg-background/80 p-4 backdrop-blur-sm">
                              <p className="text-center text-sm font-medium">Live shuttle tracking</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="rounded-lg bg-muted p-4">
                          <h3 className="mb-2 font-medium">Shuttle Routes</h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                <span className="text-sm">Main Campus Loop</span>
                              </div>
                              <Badge variant="outline">Every 10 min</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                <span className="text-sm">Residence Halls</span>
                              </div>
                              <Badge variant="outline">Every 15 min</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                <span className="text-sm">Downtown Express</span>
                              </div>
                              <Badge variant="outline">Every 30 min</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
                          <div className="flex items-start gap-3">
                            <Info className="mt-0.5 h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                            <div>
                              <p className="font-medium text-yellow-800 dark:text-yellow-500">Service Alert</p>
                              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                                Downtown Express running 10 minutes behind schedule due to construction.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="search">
              <Card>
                <CardHeader>
                  <CardTitle>Search Campus Locations</CardTitle>
                  <CardDescription>Find classrooms, offices, facilities, and more</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Search for a location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1"
                      />
                      <Button>
                        <Search className="mr-2 h-4 w-4" />
                        Search
                      </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="mb-3 font-medium">Popular Searches</h3>
                        <div className="space-y-2">
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Computer Science Department</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Main Cafeteria</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Student Services</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Library Study Rooms</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 font-medium">Building Directory</h3>
                        <div className="space-y-2">
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Building A - Liberal Arts</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Building B - Sciences</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Building C - Engineering</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full justify-between text-left">
                            <span>Building D - Computer Labs</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="mb-3 font-medium">Recent Searches</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="cursor-pointer">
                          Room 203, Building B
                        </Badge>
                        <Badge variant="secondary" className="cursor-pointer">
                          Computer Lab 3
                        </Badge>
                        <Badge variant="secondary" className="cursor-pointer">
                          Student Center
                        </Badge>
                        <Badge variant="secondary" className="cursor-pointer">
                          Library
                        </Badge>
                        <Badge variant="secondary" className="cursor-pointer">
                          Cafeteria
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

