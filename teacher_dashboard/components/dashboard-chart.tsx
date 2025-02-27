"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Mon",
    CS201: 92,
    CS301: 89,
    CS304: 75,
    CS401: 88,
    CS302: 91,
  },
  {
    name: "Tue",
    CS201: 88,
    CS301: 92,
    CS304: 71,
    CS401: 83,
    CS302: 85,
  },
  {
    name: "Wed",
    CS201: 90,
    CS301: 87,
    CS304: 69,
    CS401: 80,
    CS302: 88,
  },
  {
    name: "Thu",
    CS201: 95,
    CS301: 86,
    CS304: 73,
    CS401: 78,
    CS302: 84,
  },
  {
    name: "Fri",
    CS201: 86,
    CS301: 90,
    CS304: 67,
    CS401: 76,
    CS302: 82,
  },
]

export function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="CS201" name="Data Structures" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        <Bar dataKey="CS301" name="Database Systems" fill="#0284c7" radius={[4, 4, 0, 0]} />
        <Bar dataKey="CS304" name="Computer Networks" fill="#be123c" radius={[4, 4, 0, 0]} />
        <Bar dataKey="CS401" name="Machine Learning" fill="#eab308" radius={[4, 4, 0, 0]} />
        <Bar dataKey="CS302" name="Web Development" fill="#16a34a" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

