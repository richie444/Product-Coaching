"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string; activeValue?: string; setActiveValue?: (v: string) => void }
>(({ className, value, activeValue, setActiveValue, onClick, ...props }, ref) => {
  const isActive = activeValue === value;
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-background text-foreground shadow-sm",
        className
      )}
      onClick={(e) => {
        if (setActiveValue) setActiveValue(value);
        if (onClick) onClick(e);
      }}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string; activeValue?: string }
>(({ className, value, activeValue, ...props }, ref) => {
  if (value !== activeValue) return null;
  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
})
TabsContent.displayName = "TabsContent"

// Simple wrapper to manage state
const TabsRoot = ({ defaultValue, children, className }: any) => {
  const [activeValue, setActiveValue] = React.useState(defaultValue)
  
  return (
    <Tabs className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeValue, setActiveValue } as any)
        }
        return child
      })}
    </Tabs>
  )
}

// Recursively pass props to children (simplified for this specific use case)
// Note: In a real app we'd use Context, but this is a quick fix without external deps
export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent }
