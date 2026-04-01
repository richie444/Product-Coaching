import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, TrendingUp, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Product Coaching</h1>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm hover:underline">
                Dashboard
              </Link>
              <Button asChild>
                <Link href="/onboarding/welcome">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Trusted by 10,000+ Product Managers
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Accelerate Your Product Management Career
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master PM skills with personalized courses, expert coaching, and a thriving community. 
              From aspiring PMs to seasoned leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/onboarding/welcome">Start Learning Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to become a successful product manager in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert-Led Courses</CardTitle>
                <CardDescription>
                  Learn from top product leaders at companies like Google, Meta, and Amazon
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>1:1 Coaching</CardTitle>
                <CardDescription>
                  Get personalized guidance from experienced coaches to fast-track your growth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Career Support</CardTitle>
                <CardDescription>
                  Access job boards, resume reviews, and interview prep to land your dream role
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Get started in just 3 minutes</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                1
              </div>
              <h3 className="font-semibold mb-2">Set Your Goals</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your career stage and learning objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="font-semibold mb-2">Get Your Path</h3>
              <p className="text-sm text-muted-foreground">
                Receive a personalized learning roadmap tailored to you
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                3
              </div>
              <h3 className="font-semibold mb-2">Start Learning</h3>
              <p className="text-sm text-muted-foreground">
                Access courses, connect with coaches, and track progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your PM Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of product managers who have transformed their careers
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/signup">Start Free Today</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Product Coaching. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Courses</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Coaching</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Community</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
