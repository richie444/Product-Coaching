"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Award, 
  Users,
  Star,
  CheckCircle2,
  Play,
  Download
} from "lucide-react";

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Product Coaching</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <a href="/dashboard">Dashboard</a>
              </Button>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex gap-2 mb-4">
              <Badge>Best Seller</Badge>
              <Badge variant="secondary">Intermediate</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Product Discovery & Research Masterclass
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Master the art of understanding user needs, validating ideas, and making data-driven product decisions
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.8</span>
                <span className="text-muted-foreground">(2,345 ratings)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>8,432 students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>12.5 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Conduct effective user interviews and research",
                    "Analyze qualitative and quantitative data",
                    "Create user personas and journey maps",
                    "Validate product ideas before building",
                    "Design and run discovery experiments",
                    "Present research findings to stakeholders",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>8 modules • 42 lessons • 12.5 hours total</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    title: "Introduction to Product Discovery",
                    lessons: 4,
                    duration: "45 min",
                    completed: false,
                  },
                  {
                    title: "User Research Fundamentals",
                    lessons: 6,
                    duration: "1.5 hrs",
                    completed: false,
                  },
                  {
                    title: "Conducting User Interviews",
                    lessons: 5,
                    duration: "1.2 hrs",
                    completed: false,
                  },
                  {
                    title: "Data Analysis & Synthesis",
                    lessons: 7,
                    duration: "2 hrs",
                    completed: false,
                  },
                  {
                    title: "Creating User Personas",
                    lessons: 4,
                    duration: "1 hr",
                    completed: false,
                  },
                  {
                    title: "Journey Mapping & Service Design",
                    lessons: 6,
                    duration: "1.5 hrs",
                    completed: false,
                  },
                  {
                    title: "Experiment Design & Validation",
                    lessons: 6,
                    duration: "2 hrs",
                    completed: false,
                  },
                  {
                    title: "Presenting Research Findings",
                    lessons: 4,
                    duration: "1.5 hrs",
                    completed: false,
                  },
                ].map((module, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-semibold text-primary">
                            Module {index + 1}
                          </span>
                          <h4 className="font-semibold">{module.title}</h4>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{module.lessons} lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                      <Play className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>Your Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center font-bold text-2xl text-primary flex-shrink-0">
                    SC
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Sarah Chen</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Senior Product Manager at Meta | 12+ years in Product
                    </p>
                    <p className="text-sm mb-3">
                      Sarah has led product discovery for features used by millions at companies like Meta, 
                      Google, and successful startups. She's passionate about teaching PMs how to build 
                      the right products through rigorous research and validation.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        4.9 rating
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        15,234 students
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        8 courses
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Purchase Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary" />
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold">$149</span>
                    <span className="text-lg text-muted-foreground line-through">$299</span>
                    <Badge variant="destructive">50% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Limited time offer ends in 2 days
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg" asChild>
                    <a href="/checkout?course=product-discovery">
                      Enroll Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Try Free Preview
                  </Button>
                </div>

                <div className="space-y-3 text-sm border-t pt-4">
                  <h4 className="font-semibold">This course includes:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>12.5 hours on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      <span>42 lessons & exercises</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-muted-foreground" />
                      <span>15 downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Community access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                      <span>Lifetime access</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 mt-4">
                  <p className="text-xs text-center text-muted-foreground">
                    30-day money-back guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
