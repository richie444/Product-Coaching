"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video,
  Users,
  CheckCircle2,
  ArrowLeft,
  BookOpen,
  MessageSquare,
  Star
} from "lucide-react";
import Link from "next/link";

export default function SessionsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Generate calendar days for current month
  const generateCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    // Add empty slots for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const upcomingSessions = [
    {
      id: 1,
      title: "Service Blueprint Review",
      mentor: "Dr. Sarah Chen",
      date: "Feb 8, 2026",
      time: "2:00 PM - 3:00 PM",
      type: "1-on-1",
      status: "confirmed",
      meetingLink: "https://meet.google.com/abc-defg-hij"
    },
    {
      id: 2,
      title: "Career Path Planning",
      mentor: "Marcus Rodriguez",
      date: "Feb 12, 2026",
      time: "10:00 AM - 11:00 AM",
      type: "1-on-1",
      status: "confirmed",
      meetingLink: "https://zoom.us/j/123456789"
    },
    {
      id: 3,
      title: "Portfolio Review Workshop",
      mentor: "Emma Thompson",
      date: "Feb 15, 2026",
      time: "4:00 PM - 5:30 PM",
      type: "Group",
      status: "pending",
      meetingLink: null
    }
  ];

  const availableSlots = [
    { time: "9:00 AM", available: true, mentor: "Dr. Sarah Chen" },
    { time: "10:00 AM", available: true, mentor: "Marcus Rodriguez" },
    { time: "11:00 AM", available: false, mentor: "Emma Thompson" },
    { time: "1:00 PM", available: true, mentor: "Dr. Sarah Chen" },
    { time: "2:00 PM", available: true, mentor: "James Wilson" },
    { time: "3:00 PM", available: true, mentor: "Marcus Rodriguez" },
    { time: "4:00 PM", available: false, mentor: "Emma Thompson" },
    { time: "5:00 PM", available: true, mentor: "Dr. Sarah Chen" }
  ];

  const pastSessions = [
    {
      id: 1,
      title: "Journey Mapping Workshop",
      mentor: "Dr. Sarah Chen",
      date: "Jan 28, 2026",
      duration: "60 min",
      rating: 5,
      notes: "Excellent session on creating journey maps"
    },
    {
      id: 2,
      title: "Stakeholder Interview Prep",
      mentor: "Marcus Rodriguez",
      date: "Jan 22, 2026",
      duration: "45 min",
      rating: 5,
      notes: "Very helpful guidance"
    }
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const changeMonth = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + direction);
    setSelectedDate(newDate);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Coaching Sessions</h1>
                <p className="text-sm text-muted-foreground">Schedule and manage your mentoring sessions</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="book" className="space-y-6">
          <TabsList>
            <TabsTrigger value="book">Book Session</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Book Session Tab */}
          <TabsContent value="book" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Calendar */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                  <CardDescription>Choose a date to see available time slots</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <Button variant="outline" size="sm" onClick={() => changeMonth(-1)}>
                      Previous
                    </Button>
                    <h3 className="text-lg font-semibold">
                      {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                    </h3>
                    <Button variant="outline" size="sm" onClick={() => changeMonth(1)}>
                      Next
                    </Button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Day headers */}
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                        {day}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {generateCalendar().map((day, index) => {
                      const isToday = day === new Date().getDate() && 
                                     selectedDate.getMonth() === new Date().getMonth() &&
                                     selectedDate.getFullYear() === new Date().getFullYear();
                      const isSelected = day === selectedDate.getDate();
                      
                      return (
                        <button
                          key={index}
                          disabled={!day}
                          onClick={() => {
                            if (day) {
                              const newDate = new Date(selectedDate);
                              newDate.setDate(day);
                              setSelectedDate(newDate);
                            }
                          }}
                          className={`
                            aspect-square p-2 text-sm rounded-lg transition-colors
                            ${!day ? 'invisible' : ''}
                            ${isToday ? 'bg-blue-50 border-2 border-blue-500' : ''}
                            ${isSelected && !isToday ? 'bg-primary text-primary-foreground' : ''}
                            ${day && !isSelected && !isToday ? 'hover:bg-accent' : ''}
                            ${day && day < new Date().getDate() && selectedDate.getMonth() === new Date().getMonth() ? 'text-muted-foreground' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-blue-50 border-2 border-blue-500"></div>
                      <span className="text-muted-foreground">Today</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-primary"></div>
                      <span className="text-muted-foreground">Selected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Session Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Session Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Video className="w-4 h-4 mr-2" />
                    1-on-1 Mentoring
                    <Badge className="ml-auto" variant="secondary">60 min</Badge>
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Group Workshop
                    <Badge className="ml-auto" variant="secondary">90 min</Badge>
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Portfolio Review
                    <Badge className="ml-auto" variant="secondary">45 min</Badge>
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Quick Q&A
                    <Badge className="ml-auto" variant="secondary">30 min</Badge>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Available Time Slots */}
            <Card>
              <CardHeader>
                <CardTitle>Available Time Slots - {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</CardTitle>
                <CardDescription>Select a time slot to book your session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-3">
                  {availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      disabled={!slot.available}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`
                        p-4 rounded-lg border-2 text-left transition-all
                        ${!slot.available ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:border-primary'}
                        ${selectedSlot === slot.time ? 'border-primary bg-primary/5' : 'border-border'}
                      `}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{slot.time}</span>
                        {slot.available && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                      </div>
                      <p className="text-xs text-muted-foreground">{slot.mentor}</p>
                      {!slot.available && (
                        <Badge variant="secondary" className="mt-2 text-xs">Booked</Badge>
                      )}
                    </button>
                  ))}
                </div>

                {selectedSlot && (
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">Session Selected</h4>
                        <p className="text-sm text-muted-foreground">
                          {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedSlot}
                        </p>
                      </div>
                      <Button>Confirm Booking</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upcoming Sessions Tab */}
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{session.title}</CardTitle>
                      <CardDescription className="mt-1">
                        with {session.mentor}
                      </CardDescription>
                    </div>
                    <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>
                      {session.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{session.type} Session</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {session.meetingLink && (
                        <Button className="w-full">
                          <Video className="w-4 h-4 mr-2" />
                          Join Meeting
                        </Button>
                      )}
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message Mentor
                      </Button>
                      <Button variant="ghost" className="w-full text-destructive">
                        Cancel Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-4">
            {pastSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{session.title}</CardTitle>
                      <CardDescription className="mt-1">
                        with {session.mentor} • {session.date}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(session.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Notes:</strong> {session.notes}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        Book Again
                      </Button>
                      <Button variant="outline" size="sm">
                        View Recording
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
