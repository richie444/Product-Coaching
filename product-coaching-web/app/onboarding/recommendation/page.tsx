"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, BookOpen, Award } from "lucide-react";

const recommendedPath = {
  title: "Product Management Fundamentals",
  description: "Master the core skills every PM needs to succeed",
  duration: "8 weeks",
  modules: 12,
  level: "Intermediate",
  courses: [
    {
      title: "Product Discovery & Research",
      lessons: 8,
      duration: "2 weeks",
      completed: false,
    },
    {
      title: "Roadmap & Strategy",
      lessons: 10,
      duration: "2 weeks",
      completed: false,
    },
    {
      title: "Stakeholder Management",
      lessons: 6,
      duration: "1 week",
      completed: false,
    },
    {
      title: "Metrics & Analytics",
      lessons: 8,
      duration: "2 weeks",
      completed: false,
    },
    {
      title: "Agile & Execution",
      lessons: 10,
      duration: "1 week",
      completed: false,
    },
  ],
};

export default function RecommendationPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/dashboard");
  };

  const handleCustomize = () => {
    // In a real app, this would open a customization modal or page
    alert("Customization feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Your Personalized Learning Path</h1>
          <p className="text-muted-foreground">
            Based on your goals and experience, we recommend starting here
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">
                  {recommendedPath.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {recommendedPath.description}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-sm">
                {recommendedPath.level}
              </Badge>
            </div>
            <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{recommendedPath.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{recommendedPath.modules} modules</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-4">Course Roadmap:</h3>
            <div className="space-y-3">
              {recommendedPath.courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {course.lessons} lessons • {course.duration}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground opacity-30" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="flex-1" onClick={handleStart}>
            Start Learning Journey
          </Button>
          <Button size="lg" variant="outline" onClick={handleCustomize}>
            Customize Path
          </Button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => window.location.href = "/dashboard"}
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            Skip for now, I'll explore on my own
          </button>
        </div>
      </div>
    </div>
  );
}
