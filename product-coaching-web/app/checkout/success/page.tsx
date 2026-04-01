"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Play, Calendar } from "lucide-react";

export default function CheckoutSuccessPage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="pt-12 pb-8 text-center">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold mb-4">
            Welcome to Your Learning Journey! 🎉
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your enrollment is confirmed. You now have lifetime access to your course.
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold mb-4">What's Next:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium">Check your email</p>
                  <p className="text-sm text-muted-foreground">
                    We've sent your login details and course access information
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Start learning immediately</p>
                  <p className="text-sm text-muted-foreground">
                    All course materials are now available in your dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Join the community</p>
                  <p className="text-sm text-muted-foreground">
                    Connect with thousands of other product managers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => router.push("/dashboard")}>
              <Play className="w-4 h-4 mr-2" />
              Start Learning Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => router.push("/dashboard")}>
              <Calendar className="w-4 h-4 mr-2" />
              View Dashboard
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:support@productcoaching.com" className="text-primary hover:underline">
                support@productcoaching.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
