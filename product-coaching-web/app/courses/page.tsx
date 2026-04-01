"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const courses = [
  {
    slug: "product-discovery",
    title: "Product Discovery & Research Masterclass",
    description: "Master the art of understanding user needs, validating ideas, and making data-driven product decisions.",
    level: "Intermediate",
    duration: "4 weeks",
    modules: 8,
    badge: "Best Seller"
  },
  {
    slug: "product-strategy",
    title: "Product Strategy & Roadmap",
    description: "Learn how to build and communicate a compelling product vision and strategy.",
    level: "Advanced",
    duration: "6 weeks",
    modules: 12,
    badge: "Featured"
  },
  {
    slug: "agile-product-management",
    title: "Agile Product Management",
    description: "Practical guide to working with engineering teams and delivering value faster.",
    level: "Beginner",
    duration: "3 weeks",
    modules: 6,
    badge: "Popular"
  }
];

export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Product Coaching</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => router.push("/dashboard")}>
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advance your career with courses designed by industry leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <Card key={course.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge>{course.badge}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.modules} Modules</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                 <Link href={`/courses/${course.slug}`} className="w-full">
                    <Button className="w-full">
                      View Course <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                 </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
