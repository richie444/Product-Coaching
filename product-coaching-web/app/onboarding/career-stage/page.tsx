"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Target } from "lucide-react";

const careerStages = [
  {
    id: "early",
    title: "Early-Career",
    description: "Just starting out in product management",
    icon: Target,
  },
  {
    id: "mid",
    title: "Mid-Level",
    description: "Building expertise and leading initiatives",
    icon: TrendingUp,
  },
  {
    id: "transitioning",
    title: "Transitioning",
    description: "Moving into product from another role",
    icon: Briefcase,
  },
  {
    id: "team",
    title: "Team Lead",
    description: "Managing product teams and strategy",
    icon: Users,
  },
];

export default function CareerStagePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  const handleContinue = () => {
    if (selected) {
      router.push("/onboarding/goals");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">What's your career stage?</h1>
          <p className="text-muted-foreground">
            This helps us personalize your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {careerStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <Card
                key={stage.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selected === stage.id
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setSelected(stage.id)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      selected === stage.id ? "bg-primary/10" : "bg-muted"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        selected === stage.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{stage.title}</CardTitle>
                      <CardDescription>{stage.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={() => window.history.back()}>
            Back
          </Button>
          <Button 
            size="lg" 
            disabled={!selected}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
