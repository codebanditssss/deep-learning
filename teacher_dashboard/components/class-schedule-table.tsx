"use client"
import { Calendar, Clock, Edit, MapPin, MoreHorizontal, Trash2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ClassScheduleTable() {
  return (
    <div className="rounded-md border">
      <div className="grid grid-cols-7 border-b px-4 py-3 font-medium">
        <div className="col-span-2">Class</div>
        <div>Schedule</div>
        <div>Room</div>
        <div>Students</div>
        <div>Status</div>
        <div>Actions</div>
      </div>
      <div className="divide-y">
        {[
          {
            name: "Data Structures",
            code: "CS201",
            section: "A",
            schedule: "Mon, Wed 9:30 - 10:45 AM",
            room: "Room 302",
            students: 42,
            status: "Active",
          },
          {
            name: "Database Systems",
            code: "CS301",
            section: "B",
            schedule: "Tue, Thu 11:30 - 12:45 PM",
            room: "Room 405",
            students: 35,
            status: "Active",
          },
          {
            name: "Computer Networks",
            code: "CS304",
            section: "A",
            schedule: "Mon, Fri 9:30 - 10:45 AM",
            room: "Room 201",
            students: 38,
            status: "Active",
          },
          {
            name: "Machine Learning",
            code: "CS401",
            section: "A",
            schedule: "Wed, Fri 2:30 - 3:45 PM",
            room: "Lab 201",
            students: 25,
            status: "Active",
          },
          {
            name: "Web Development",
            code: "CS302",
            section: "C",
            schedule: "Tue, Thu 1:00 - 2:15 PM",
            room: "Lab 105",
            students: 30,
            status: "Active",
          },
        ].map((cls, i) => (
          <div key={i} className="grid grid-cols-7 px-4 py-3">
            <div className="col-span-2">
              <div className="font-medium">{cls.name}</div>
              <div className="text-sm text-muted-foreground">
                {cls.code} - Section {cls.section}
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{cls.schedule}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{cls.room}</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{cls.students}</span>
            </div>
            <div>
              <Badge variant={cls.status === "Active" ? "default" : "outline"}>{cls.status}</Badge>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    View Schedule
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    View Students
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Class
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove Class
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

