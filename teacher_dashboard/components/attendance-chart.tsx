"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  {
    month: "Jan",
    "Data Structures": 90,
    "Database Systems": 85,
    "Computer Networks": 78,
    "Machine Learning": 82,
    "Web Development": 88,
  },
  {
    month: "Feb",
    "Data Structures": 92,
    "Database Systems": 87,
    "Computer Networks": 75,
    "Machine Learning": 80,
    "Web Development": 85,
  },
  {
    month: "Mar",
    "Data Structures": 94,
    "Database Systems": 89,
    "Computer Networks": 71,
    "Machine Learning": 78,
    "Web Development": 84,
  },
  {
    month: "Apr",
    "Data Structures": 91,
    "Database Systems": 86,
    "Computer Networks": 73,
    "Machine Learning": 81,
    "Web Development": 87,
  },
  {
    month: "May",
    "Data Structures": 90,
    "Database Systems": 88,
    "Computer Networks": 70,
    "Machine Learning": 79,
    "Web Development": 86,
  },
]

export function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[50, 100]} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Data Structures" stackId="1" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
        <Area
          type="monotone"
          dataKey="Database Systems"
          stackId="2"
          stroke="#0284c7"
          fill="#0284c7"
          fillOpacity={0.6}
        />
        <Area
          type="monotone"
          dataKey="Computer Networks"
          stackId="3"
          stroke="#be123c"
          fill="#be123c"
          fillOpacity={0.6}
        />
        <Area
          type="monotone"
          dataKey="Machine Learning"
          stackId="4"
          stroke="#eab308"
          fill="#eab308"
          fillOpacity={0.6}
        />
        <Area type="monotone" dataKey="Web Development" stackId="5" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

