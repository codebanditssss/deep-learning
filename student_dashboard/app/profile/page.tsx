"use client"

import { useState } from "react"
import { Bell, Camera, Edit, Lock, LogOut, Mail, Moon, Save, Sun } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"

export default function ProfilePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <main className="flex-1 md:ml-64">
        <div className="container py-6 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Profile Management</h1>
            <p className="text-muted-foreground">View and update your profile information</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Student Profile</CardTitle>
                <CardDescription>Your personal information</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Student" />
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full bg-background"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-bold">Khushi Diwan</h3>
                <p className="text-sm text-muted-foreground">Computer Science</p>
                <div className="mt-2 flex gap-2">
                  <Badge>Student ID: 2481069</Badge>
                  <Badge variant="outline">Year 1</Badge>
                </div>
                <div className="mt-6 w-full space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Email:</span>
                    <span className="text-sm">khushi.diwan@university.edu</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Phone:</span>
                    <span className="text-sm">+91 9354900378</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Department:</span>
                    <span className="text-sm">Computer Science</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Mentor:</span>
                    <span className="text-sm">Dr. Pooja Batra</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setIsEditing(true)}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>

            <div className="md:col-span-2">
              <Tabs defaultValue="account">
                <TabsList className="mb-6">
                  <TabsTrigger value="account">Account Settings</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="appearance">Appearance</TabsTrigger>
                </TabsList>

                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>Update your account details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" defaultValue="John" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" defaultValue="Doe" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="john.doe@university.edu" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" defaultValue="123 Campus Drive, University City" />
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-lg border p-4">
                          <p className="text-sm text-muted-foreground">
                            Click "Edit Profile" to update your account information.
                          </p>
                        </div>
                      )}
                    </CardContent>
                    {isEditing && (
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button onClick={() => setIsEditing(false)}>
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </TabsContent>

                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>Manage your account security</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="mb-2 text-lg font-medium">Change Password</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="current-password">Current Password</Label>
                              <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-password">New Password</Label>
                              <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirm-password">Confirm New Password</Label>
                              <Input id="confirm-password" type="password" />
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="mb-2 text-lg font-medium">Two-Factor Authentication</h3>
                          <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <p className="font-medium">Enhance your account security</p>
                              <p className="text-sm text-muted-foreground">
                                Two-factor authentication adds an extra layer of security to your account
                              </p>
                            </div>
                            <Button variant="outline">Enable</Button>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="mb-2 text-lg font-medium">Face Recognition Settings</h3>
                          <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <p className="font-medium">Request Face Re-registration</p>
                              <p className="text-sm text-muted-foreground">
                                If the attendance system is having trouble recognizing you, request a re-registration
                              </p>
                            </div>
                            <Button variant="outline">Request</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Lock className="mr-2 h-4 w-4" />
                        Update Security Settings
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>Control how you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Class Reminders</p>
                              <p className="text-sm text-muted-foreground">Notifications about upcoming classes</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Email Notifications</p>
                              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Attendance Alerts</p>
                              <p className="text-sm text-muted-foreground">Get notified about attendance issues</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bell className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Event Notifications</p>
                              <p className="text-sm text-muted-foreground">Updates about campus events</p>
                            </div>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Save className="mr-2 h-4 w-4" />
                        Save Preferences
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="appearance">
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance Settings</CardTitle>
                      <CardDescription>Customize how the dashboard looks</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {isDarkMode ? (
                              <Moon className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <Sun className="h-5 w-5 text-muted-foreground" />
                            )}
                            <div>
                              <p className="font-medium">Theme</p>
                              <p className="text-sm text-muted-foreground">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                            </div>
                          </div>
                          <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                        </div>

                        <div className="rounded-lg border p-4">
                          <h3 className="mb-2 text-lg font-medium">Color Theme</h3>
                          <div className="grid grid-cols-5 gap-2">
                            <div className="h-10 w-10 cursor-pointer rounded-full bg-blue-500 ring-2 ring-offset-2"></div>
                            <div className="h-10 w-10 cursor-pointer rounded-full bg-purple-500"></div>
                            <div className="h-10 w-10 cursor-pointer rounded-full bg-green-500"></div>
                            <div className="h-10 w-10 cursor-pointer rounded-full bg-red-500"></div>
                            <div className="h-10 w-10 cursor-pointer rounded-full bg-yellow-500"></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div>
                              <p className="font-medium">Compact View</p>
                              <p className="text-sm text-muted-foreground">Display more content with less spacing</p>
                            </div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Save className="mr-2 h-4 w-4" />
                        Save Appearance Settings
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Account Actions</CardTitle>
                <CardDescription>Manage your account status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <p className="font-medium">Sign Out</p>
                      <p className="text-sm text-muted-foreground">Log out of your account on this device</p>
                    </div>
                    <Button variant="outline">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-destructive p-4">
                    <div className="space-y-0.5">
                      <p className="font-medium">Deactivate Account</p>
                      <p className="text-sm text-muted-foreground">Temporarily disable your account</p>
                    </div>
                    <Button variant="destructive">Deactivate</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

