import { parseISO, format, isAfter, isBefore, isSameDay, addDays, startOfWeek, endOfWeek, differenceInMinutes, set } from 'date-fns';

// Types for events
export interface ScheduleEvent {
  id: number;
  title: string;
  date: string; // ISO string
  endTime: string; // ISO string
  location: string;
  type: 'Lecture' | 'Lab' | 'Meeting' | string;
  description?: string;
  students?: number;
  section?: string;
  attendees?: number;
  isRecurring?: boolean;
  recurrencePattern?: RecurrencePattern;
}

export interface RecurrencePattern {
  frequency: 'daily' | 'weekly' | 'monthly';
  interval: number; // e.g., every 1 week, every 2 weeks
  daysOfWeek?: number[]; // 0 = Sunday, 1 = Monday, etc.
  endDate?: string; // ISO string
  occurrences?: number;
}

/**
 * Formats a date for display in the schedule
 */
export function formatScheduleDate(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'EEE, MMM d, yyyy');
}

/**
 * Formats a time for display in the schedule
 */
export function formatScheduleTime(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'h:mm a');
}

/**
 * Returns a color class based on event type
 */
export function getEventTypeColor(type: string, isDark: boolean = false): string {
  switch (type) {
    case 'Lecture':
      return isDark 
        ? 'bg-blue-900 border-blue-700 text-blue-100' 
        : 'bg-blue-100 border-blue-300 text-blue-800';
    case 'Lab':
      return isDark 
        ? 'bg-green-900 border-green-700 text-green-100' 
        : 'bg-green-100 border-green-300 text-green-800';
    case 'Meeting':
      return isDark 
        ? 'bg-purple-900 border-purple-700 text-purple-100' 
        : 'bg-purple-100 border-purple-300 text-purple-800';
    default:
      return isDark 
        ? 'bg-gray-800 border-gray-700 text-gray-100' 
        : 'bg-gray-100 border-gray-300 text-gray-800';
  }
}

/**
 * Gets events for a specific day
 */
export function getEventsForDay(events: ScheduleEvent[], day: Date): ScheduleEvent[] {
  return events.filter(event => {
    const eventDate = parseISO(event.date);
    return isSameDay(eventDate, day);
  });
}

/**
 * Gets events for a specific week
 */
export function getEventsForWeek(events: ScheduleEvent[], weekStart: Date): ScheduleEvent[] {
  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 0 });
  
  return events.filter(event => {
    const eventDate = parseISO(event.date);
    return isAfter(eventDate, weekStart) && isBefore(eventDate, weekEnd);
  });
}

/**
 * Gets events for a specific time range
 */
export function getEventsForTimeRange(events: ScheduleEvent[], start: Date, end: Date): ScheduleEvent[] {
  return events.filter(event => {
    const eventDate = parseISO(event.date);
    return isAfter(eventDate, start) && isBefore(eventDate, end);
  });
}

/**
 * Calculates the top position (in pixels) for an event based on its start time
 * Assuming 8:00 AM is the start of the day (0px)
 */
export function calculateEventPosition(time: string, hourHeight: number = 60): number {
  const eventTime = parseISO(time);
  const dayStart = set(new Date(eventTime), { hours: 8, minutes: 0, seconds: 0, milliseconds: 0 });
  
  // Calculate minutes since the start of the day
  const minutesSinceDayStart = differenceInMinutes(eventTime, dayStart);
  
  // Convert to pixels (hourHeight pixels per hour)
  return (minutesSinceDayStart / 60) * hourHeight;
}

/**
 * Calculates the height of an event based on its duration
 */
export function calculateEventHeight(startTime: string, endTime: string, hourHeight: number = 60): number {
  const start = parseISO(startTime);
  const end = parseISO(endTime);
  
  // Calculate duration in minutes
  const durationMinutes = differenceInMinutes(end, start);
  
  // Convert to pixels (hourHeight pixels per hour)
  return (durationMinutes / 60) * hourHeight;
}

/**
 * Generates an array of recurring events based on a pattern
 */
export function generateRecurringEvents(baseEvent: ScheduleEvent, startDate: Date, endDate: Date): ScheduleEvent[] {
  if (!baseEvent.isRecurring || !baseEvent.recurrencePattern) {
    return [baseEvent];
  }
  
  const { frequency, interval, daysOfWeek, endDate: patternEndDate, occurrences } = baseEvent.recurrencePattern;
  const events: ScheduleEvent[] = [];
  const baseEventDate = parseISO(baseEvent.date);
  const baseEventEndTime = parseISO(baseEvent.endTime);
  
  // Determine the end date for the recurrence
  let recurrenceEndDate = endDate;
  if (patternEndDate) {
    const parsedPatternEndDate = parseISO(patternEndDate);
    if (isBefore(parsedPatternEndDate, recurrenceEndDate)) {
      recurrenceEndDate = parsedPatternEndDate;
    }
  }
  
  // Helper to add a new event instance
  const addEventInstance = (date: Date) => {
    // Skip if before the start date or after the end date
    if (isBefore(date, startDate) || isAfter(date, recurrenceEndDate)) {
      return;
    }
    
    // Calculate the end time for this instance
    const durationMinutes = differenceInMinutes(baseEventEndTime, baseEventDate);
    const endTime = addDays(date, 0); // Create a new date object
    endTime.setHours(date.getHours(), date.getMinutes() + durationMinutes);
    
    events.push({
      ...baseEvent,
      id: baseEvent.id + events.length + 1, // Generate a unique ID
      date: date.toISOString(),
      endTime: endTime.toISOString()
    });
  };
  
  let currentDate = new Date(baseEventDate);
  let count = 0;
  
  // Generate events based on the recurrence pattern
  while (isBefore(currentDate, recurrenceEndDate) && (!occurrences || count < occurrences)) {
    if (frequency === 'daily') {
      addEventInstance(currentDate);
      currentDate = addDays(currentDate, interval);
    } 
    else if (frequency === 'weekly') {
      // If specific days of week are specified
      if (daysOfWeek && daysOfWeek.length > 0) {
        const currentWeekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
        
        for (const day of daysOfWeek) {
          const dayDate = addDays(currentWeekStart, day);
          // Set the hours and minutes from the base event
          dayDate.setHours(baseEventDate.getHours(), baseEventDate.getMinutes());
          addEventInstance(dayDate);
        }
        
        // Move to the next week according to the interval
        currentDate = addDays(currentWeekStart, 7 * interval);
      } else {
        // Just use the same day of week as the base event
        addEventInstance(currentDate);
        currentDate = addDays(currentDate, 7 * interval);
      }
    }
    // Add monthly recurrence if needed
    
    count++;
  }
  
  return events;
}