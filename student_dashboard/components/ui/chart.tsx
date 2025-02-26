"use client"

import * as React from "react"
import type { TooltipProps } from "recharts"

import { cn } from "@/lib/utils"

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<string, { label: string; color?: string }>
}

export const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ config, className, children, ...props }, ref) => {
    // Set CSS variables for chart colors
    React.useEffect(() => {
      const root = document.documentElement
      Object.entries(config).forEach(([key, value]) => {
        if (value.color) {
          root.style.setProperty(`--color-${key}`, value.color)
        }
      })
    }, [config])

    return (
      <div ref={ref} className={cn("w-full h-full", className)} {...props}>
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

export interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  payload?: any[]
  label?: string
  config?: Record<string, { label: string; color?: string }>
  formatter?: (value: number, name: string, props: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  hideLabel?: boolean
  indicator?: "dot" | "line"
}

export const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  (
    {
      active,
      payload,
      label,
      config,
      formatter,
      labelFormatter,
      hideLabel = false,
      indicator = "dot",
      className,
      ...props
    },
    ref,
  ) => {
    if (!active || !payload?.length) {
      return null
    }

    return (
      <div ref={ref} className={cn("rounded-lg border bg-background p-2 shadow-md", className)} {...props}>
        {!hideLabel && label ? (
          <div className="mb-1 text-sm font-medium">{labelFormatter ? labelFormatter(label) : label}</div>
        ) : null}
        <div className="flex flex-col gap-0.5">
          {payload.map((item: any, index: number) => {
            const dataKey = item.dataKey || item.name
            const name = config?.[dataKey]?.label || item.name
            const color = config?.[dataKey]?.color || item.color
            const value = formatter ? formatter(item.value, item.name, item) : item.value

            return (
              <div key={`item-${index}`} className="flex items-center gap-2">
                {indicator === "dot" ? (
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                ) : (
                  <div className="h-2 w-1" style={{ backgroundColor: color }} />
                )}
                <span className="text-xs font-medium">{name}:</span>
                <span className="text-xs">{value}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export interface ChartTooltipProps extends Omit<TooltipProps<any, any>, "content"> {
  content?: React.ReactNode
}

export const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(({ content, ...props }, ref) => {
  return <div ref={ref} {...props} content={content} />
})
ChartTooltip.displayName = "ChartTooltip"

