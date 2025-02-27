"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface EventData {
  id: number
  title: string
  type: "Lecture" | "Lab" | "Meeting"
  description: string
  location: string
  date: string
  endTime: string
  section: string
  students?: number
}

interface ScheduleEventDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialEvent?: EventData
  onSave: (event: EventData) => void
}

export function ScheduleEventDialog({ 
  open, 
  onOpenChange, 
  initialEvent, 
  onSave 
}: ScheduleEventDialogProps) {
  const isNewEvent = !initialEvent
  
  // Initialize form state
  const [formData, setFormData] = useState({
    title: initialEvent?.title || "",
    type: initialEvent?.type || "Lecture",
    description: initialEvent?.description || "",
    location: initialEvent?.location || "",
    date: initialEvent?.date ? new Date(initialEvent.date) : new Date(),
    startTime: initialEvent?.date ? format(new Date(initialEvent.date), "HH:mm") : "09:00",
    endTime: initialEvent?.endTime ? format(new Date(initialEvent.endTime), "HH:mm") : "10:30",
    section: initialEvent?.section || "A"
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({ ...prev, date }))
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construct date objects from form data
    const startDate = new Date(formData.date)
    const [startHours, startMinutes] = formData.startTime.split(':').map(Number)
    startDate.setHours(startHours, startMinutes, 0, 0)
    
    const endDate = new Date(formData.date)
    const [endHours, endMinutes] = formData.endTime.split(':').map(Number)
    endDate.setHours(endHours, endMinutes, 0, 0)
    
    // Create the event object
    const eventData: EventData = {
      id: initialEvent?.id || Math.floor(Math.random() * 10000),
      title: formData.title,
      type: formData.type as "Lecture" | "Lab" | "Meeting",
      description: formData.description,
      location: formData.location,
      date: startDate.toISOString(),
      endTime: endDate.toISOString(),
      section: formData.section,
      students: initialEvent?.students || 0
    }
    
    // Pass the event data to the parent component
    onSave(eventData)
    
    // Close the dialog
    onOpenChange(false)
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{isNewEvent ? "Add New Event" : "Edit Event"}</DialogTitle>
          <DialogDescription>
            {isNewEvent 
              ? "Fill in the details to add a new event to your schedule." 
              : "Make changes to update this event in your schedule."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                placeholder="e.g., Database Systems (CS301)" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Event Type</Label>
              <RadioGroup 
                value={formData.type} 
                onValueChange={(value) => handleSelectChange("type", value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Lecture" id="lecture" />
                  <Label htmlFor="lecture" className="cursor-pointer">Lecture</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Lab" id="lab" />
                  <Label htmlFor="lab" className="cursor-pointer">Lab</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Meeting" id="meeting" />
                  <Label htmlFor="meeting" className="cursor-pointer">Meeting</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Select 
                  value={formData.section} 
                  onValueChange={(value) => handleSelectChange("section", value)}
                >
                  <SelectTrigger id="section">
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Section A</SelectItem>
                    <SelectItem value="B">Section B</SelectItem>
                    <SelectItem value="C">Section C</SelectItem>
                    <SelectItem value="D">Section D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {isNewEvent ? "Add Event" : "Update Event"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
