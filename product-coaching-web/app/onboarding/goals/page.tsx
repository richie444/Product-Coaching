"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Award, Users2, Briefcase } from "lucide-react";

const goals = [
  {
    id: "hired",
    title: "Get Hired",
    description: "Land your dream product role",
    icon: Briefcase,
  },
  {
    id: "upskill",
    title: "Upskill",
    description: "Master new PM skills and frameworks",
    icon: Rocket,
  },
  {
    id: "certification",
    title: "Get Certified",
    description: "Earn recognized PM certifications",
    icon: Award,
  },
  {
    id: "leadership",
    title: "Lead Teams",
    description: "Grow into leadership positions",
    icon: Users2,
  },
];

export default function GoalsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (goalId: string) => {
    setSelected((prev) =>
      prev.includes(goalId)
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      router.push("/onboarding/time-commitment");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">What are your learning goals?</h1>
          <p className="text-muted-foreground">
            Select all that apply - we'll customize your path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selected.includes(goal.id);
            return (
              <Card
                key={goal.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  isSelected
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:border-primary/50"
                }`}
                onClick={() => toggleGoal(goal.id)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      isSelected ? "bg-primary/10" : "bg-muted"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isSelected ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{goal.title}</CardTitle>
                      <CardDescription>{goal.description}</CardDescription>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
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
            disabled={selected.length === 0}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
