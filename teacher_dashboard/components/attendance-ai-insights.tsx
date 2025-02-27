"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AttendanceAIInsights() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold">Key Insights</h3>
          <div className="mt-2 space-y-2">
            <p>
              Based on the current attendance data, students in Computer Networks (CS304) have the lowest attendance
              rate.
            </p>
            <p>
              Kavita Sharma (CS201A) and Vikram Mehta (CS304) have critically low attendance and require immediate
              attention.
            </p>
            <p>There is a noticeable dip in attendance on Wednesdays across all classes.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold">Recommendations</h3>
          <div className="mt-2 space-y-2">
            <p>
              Consider reaching out to students with low attendance to understand and address any underlying issues.
            </p>
            <p>
              Explore the reasons behind the Wednesday dip in attendance. It could be due to scheduling conflicts or
              other factors.
            </p>
            <p>Provide additional support or resources to students struggling with attendance.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

