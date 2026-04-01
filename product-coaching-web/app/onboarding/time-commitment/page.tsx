"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const timeCommitments = [
  {
    id: "2-3",
    hours: "2-3 hours/week",
    description: "Perfect for busy schedules",
    recommended: "1-2 lessons per week",
  },
  {
    id: "4-6",
    hours: "4-6 hours/week",
    description: "Steady progress",
    recommended: "3-4 lessons per week",
  },
  {
    id: "7+",
    hours: "7+ hours/week",
    description: "Accelerated learning",
    recommended: "5+ lessons per week",
  },
];

export default function TimeCommitmentPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("");

  const handleContinue = () => {
    if (selected) {
      router.push("/onboarding/recommendation");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">How much time can you commit?</h1>
          <p className="text-muted-foreground">
            We'll pace your learning accordingly - you can always adjust later
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {timeCommitments.map((commitment) => (
            <Card
              key={commitment.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selected === commitment.id
                  ? "ring-2 ring-primary bg-primary/5"
                  : "hover:border-primary/50"
              }`}
              onClick={() => setSelected(commitment.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      selected === commitment.id ? "bg-primary/10" : "bg-muted"
                    }`}>
                      <Clock className={`w-6 h-6 ${
                        selected === commitment.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{commitment.hours}</CardTitle>
                      <CardDescription>{commitment.description}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">
                        {commitment.recommended}
                      </p>
                    </div>
                  </div>
                  {selected === commitment.id && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={() => router.back()}>
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
