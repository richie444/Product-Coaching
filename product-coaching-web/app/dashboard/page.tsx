"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Play,
  Calendar,
  Users,
  CheckCircle2
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Product Coaching</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Community
              </Button>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, Jordan! 👋</h2>
                <p className="text-muted-foreground mb-4">
                  You're making great progress. Keep it up!
                </p>
                <Button size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Learning Streak</CardDescription>
              <CardTitle className="text-3xl">7 days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>Keep it going!</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Courses Enrolled</CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span>1 in progress</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Hours Completed</CardDescription>
              <CardTitle className="text-3xl">12.5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>This month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Certificates</CardDescription>
              <CardTitle className="text-3xl">1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4" />
                <span>Earned</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Course */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Continue Learning</h3>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">In Progress</Badge>
                      <CardTitle className="text-xl mb-2">
                        Product Discovery & Research
                      </CardTitle>
                      <CardDescription>
                        Master the art of understanding user needs and validating ideas
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">45% complete</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Next Lesson</h4>
                      <span className="text-sm text-muted-foreground">15 min</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Conducting User Interviews: Best Practices
                    </p>
                    <Button className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Start Lesson 4
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Courses */}
            <div>
              <h3 className="text-xl font-bold mb-4">My Courses</h3>
              <div className="space-y-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">Roadmap & Strategy</h4>
                          <Badge variant="outline" className="text-xs">Not Started</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Build compelling product roadmaps and strategy
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            10 lessons
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            2 weeks
                          </span>
                        </div>
                      </div>
                      <Button variant="outline">Start</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">Stakeholder Management</h4>
                          <Badge variant="outline" className="text-xs">Locked</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Influence without authority and align teams
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            6 lessons
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            1 week
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" disabled>Locked</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                    <span className="text-xs font-medium text-primary">FEB</span>
                    <span className="text-lg font-bold text-primary">15</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">1:1 Coaching Session</h4>
                    <p className="text-xs text-muted-foreground">2:00 PM - 3:00 PM</p>
                    <p className="text-xs text-muted-foreground">with Sarah Chen</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed lesson</p>
                    <p className="text-xs text-muted-foreground">User Research Methods</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Joined discussion</p>
                    <p className="text-xs text-muted-foreground">PM Interview Tips</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <Award className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Earned certificate</p>
                    <p className="text-xs text-muted-foreground">PM Fundamentals</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Highlight */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-none">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                  <h4 className="font-semibold mb-2">Join the Community</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with 10,000+ product managers
                  </p>
                  <Button variant="outline" className="w-full">
                    Explore Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
