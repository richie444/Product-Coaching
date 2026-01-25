"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold">
            Welcome to Product Coaching!
          </CardTitle>
          <p className="text-muted-foreground">
            You're one step closer to accelerating your product career
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">What happens next:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Personalized learning path</p>
                  <p className="text-sm text-muted-foreground">
                    Get courses tailored to your goals and experience
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Track your progress</p>
                  <p className="text-sm text-muted-foreground">
                    See how far you've come with clear milestones
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Join the community</p>
                  <p className="text-sm text-muted-foreground">
                    Connect with peers and get expert coaching
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <Button 
            className="w-full" 
            size="lg"
            onClick={() => router.push("/onboarding/career-stage")}
          >
            Set Up Your Learning Path
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
