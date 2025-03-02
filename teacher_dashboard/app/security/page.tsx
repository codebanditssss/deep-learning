import { Check, Eye, EyeOff, Key, Lock, Shield, ShieldAlert, ShieldCheck, UserCog } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SecurityPage() {
  return (
    <div className="flex flex-col space-y-6 pt-10 md:pt-0">
      <DashboardHeader heading="Security Settings" text="Manage your account security and privacy settings" />

      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>View and update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input value="Prof. Jane Smith" readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input value="jane.smith@university.edu" readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Department</label>
                <Input value="Computer Science" readOnly />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Employee ID</label>
                <Input value="EMP-CS-2023-001" readOnly />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <UserCog className="mr-2 h-4 w-4" />
                Request Profile Update
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Password</label>
                <div className="relative">
                  <Input type="password" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                    <EyeOff className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New Password</label>
                <div className="relative">
                  <Input type="password" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm New Password</label>
                <div className="relative">
                  <Input type="password" />
                  <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-3 space-y-2">
                <h4 className="text-sm font-medium">Password Requirements</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Minimum 8 characters</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>At least one uppercase letter</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>At least one number</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>At least one special character</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Key className="mr-2 h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">SMS Authentication</div>
                  <div className="text-sm text-muted-foreground">Receive a code via SMS</div>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Email Authentication</div>
                  <div className="text-sm text-muted-foreground">Receive a code via email</div>
                </div>
                <Switch checked={false} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="font-medium">Authenticator App</div>
                  <div className="text-sm text-muted-foreground">Use an authenticator app</div>
                </div>
                <Switch checked={false} />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <Shield className="mr-2 h-4 w-4" />
                Configure 2FA
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control what information is visible to others</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="profile-visibility">Profile Visibility</Label>
                    <div className="text-sm text-muted-foreground">
                      Make your profile visible to other faculty members
                    </div>
                  </div>
                  <Switch id="profile-visibility" checked={true} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-visibility">Email Visibility</Label>
                    <div className="text-sm text-muted-foreground">Show your email to students</div>
                  </div>
                  <Switch id="email-visibility" checked={true} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="phone-visibility">Phone Visibility</Label>
                    <div className="text-sm text-muted-foreground">Show your phone number to students</div>
                  </div>
                  <Switch id="phone-visibility" checked={false} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="activity-log">Activity Logging</Label>
                    <div className="text-sm text-muted-foreground">Log your activity for security purposes</div>
                  </div>
                  <Switch id="activity-log" checked={true} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sharing</CardTitle>
              <CardDescription>Control how your data is shared with the system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="analytics">Analytics</Label>
                    <div className="text-sm text-muted-foreground">Allow the system to collect analytics data</div>
                  </div>
                  <Switch id="analytics" checked={true} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ai-features">AI Features</Label>
                    <div className="text-sm text-muted-foreground">Enable AI-powered features and insights</div>
                  </div>
                  <Switch id="ai-features" checked={true} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="third-party">Third-Party Integrations</Label>
                    <div className="text-sm text-muted-foreground">Allow integration with third-party services</div>
                  </div>
                  <Switch id="third-party" checked={false} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Role and Permissions</CardTitle>
              <CardDescription>View your role and associated permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Current Role</h3>
                    <p className="text-sm text-muted-foreground">Your assigned role in the system</p>
                  </div>
                  <Badge>Teacher</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Permissions</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center">
                      <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                      <span>View student profiles</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    >
                      Allowed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center">
                      <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                      <span>Manage class attendance</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    >
                      Allowed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center">
                      <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                      <span>Create announcements</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    >
                      Allowed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center">
                      <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                      <span>Schedule events</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    >
                      Allowed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center">
                      <ShieldAlert className="mr-2 h-4 w-4 text-red-500" />
                      <span>Modify curriculum</span>
                    </div>
                    <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                      Restricted
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center">
                      <ShieldAlert className="mr-2 h-4 w-4 text-red-500" />
                      <span>Access financial data</span>
                    </div>
                    <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                      Restricted
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <Lock className="mr-2 h-4 w-4" />
                Request Additional Permissions
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Access Log</CardTitle>
              <CardDescription>Recent access to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    device: "Windows PC",
                    location: "New Delhi, India",
                    ip: "192.168.1.1",
                    time: "Today, 10:30 AM",
                    status: "Current",
                  },
                  {
                    device: "iPhone 13",
                    location: "New Delhi, India",
                    ip: "192.168.1.2",
                    time: "Yesterday, 3:45 PM",
                    status: "Success",
                  },
                  {
                    device: "MacBook Pro",
                    location: "Mumbai, India",
                    ip: "192.168.1.3",
                    time: "Feb 25, 2025, 9:15 AM",
                    status: "Success",
                  },
                  {
                    device: "Unknown Device",
                    location: "Bangalore, India",
                    ip: "192.168.1.4",
                    time: "Feb 23, 2025, 7:30 PM",
                    status: "Failed",
                  },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <div className="font-medium">{log.device}</div>
                      <div className="text-sm text-muted-foreground">
                        {log.location} • {log.ip}
                      </div>
                      <div className="text-xs text-muted-foreground">{log.time}</div>
                    </div>
                    <Badge
                      variant={
                        log.status === "Current" ? "default" : log.status === "Success" ? "outline" : "destructive"
                      }
                    >
                      {log.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

