"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight, User, Users, Briefcase, Map } from "lucide-react";

export default function CareerPathPage() {
  const levels = [
    {
      id: "junior",
      title: "Junior Service Designer",
      xp: "0-2 Years",
      focus: "Execution & Learning",
      description: "You are learning the tools of the trade. You support research activities, digitize maps, and help create prototypes.",
      skills: ["User Research Support", "Journey Mapping Basics", "Figma / Miro", "Workshop Scribing"],
      salary: "$60k - $85k"
    },
    {
      id: "mid",
      title: "Service Designer",
      xp: "2-5 Years",
      focus: "Autonomy & Process",
      description: "You lead small to medium projects. You can plan research, facilitate standard workshops, and create comprehensive blueprints.",
      skills: ["Service Blueprinting", "Facilitation", "Prototyping Services", "Stakeholder Management"],
      salary: "$85k - $120k",
      current: true
    },
    {
      id: "senior",
      title: "Senior Service Designer",
      xp: "5-8 Years",
      focus: "Strategy & Complexity",
      description: "You handle ambiguity. You define the problems, manage complex stakeholder relationships, and mentor junior designers.",
      skills: ["Systems Thinking", "Strategic Design", "Org Design Basics", "Project Leadership"],
      salary: "$120k - $160k"
    },
    {
      id: "lead",
      title: "Lead / Principal",
      xp: "8+ Years",
      focus: "Vision & Influence",
      description: "You shape the service design practice. You influence leadership, define service strategy across products, and hire talent.",
      skills: ["Service Strategy", "Executive Influence", "Practice Leadership", "Change Management"],
      salary: "$160k+"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <header className="py-12 bg-slate-50 border-b">
        <div className="container mx-auto px-4">
          <Badge className="mb-4">Career Growth</Badge>
          <h1 className="text-4xl font-bold mb-4">The Service Design Career Path</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Understand the expectations, required skills, and growth opportunities at every stage of your service design journey.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Path Visualizer */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative border-l-4 border-slate-200 ml-4 space-y-12 pl-8 py-4">
              {levels.map((level, index) => (
                <div key={level.id} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[41px] top-6 w-6 h-6 rounded-full border-4 border-white ${level.current ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'}`} />
                  
                  <Card className={`${level.current ? 'border-blue-500 shadow-lg' : 'border-slate-200'}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold">{level.title}</h3>
                            {level.current && <Badge variant="default">You are here</Badge>}
                          </div>
                          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{level.xp} • {level.focus}</p>
                        </div>
                        <Badge variant="outline">{level.salary}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600">{level.description}</p>
                      
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-sm mb-3">Key Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                          {level.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-white border">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-full justify-between group">
                        View Detailed Competency Map
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            <Card className="bg-blue-600 text-white border-none">
              <CardHeader>
                <CardTitle>Assess Your Level</CardTitle>
                <CardDescription className="text-blue-100">
                  Not sure where you stand? Take our comprehensive skills assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full font-bold text-blue-700">Start Assessment</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Reading</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b">
                  <Briefcase className="w-5 h-5 mt-1 text-slate-400" />
                  <div>
                    <p className="font-medium text-sm">This is Service Design Doing</p>
                    <p className="text-xs text-muted-foreground">Essential for Mid-Senior levels</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <Map className="w-5 h-5 mt-1 text-slate-400" />
                  <div>
                    <p className="font-medium text-sm">Mapping Experiences</p>
                    <p className="text-xs text-muted-foreground">Great for mastering blueprints</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <Users className="w-4 h-4" />
                Mentor Tip
              </h4>
              <p className="text-sm">
                "Moving from Mid to Senior often requires shifting focus from pixel-perfect maps to facilitating conversations. Don't just make the map; assume the role of the 'Integrator'."
              </p>
              <p className="text-xs font-bold mt-2">- Sarah Chen, Lead SD</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
