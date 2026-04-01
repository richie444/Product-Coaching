"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming these exist, otherwise fallback
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building2, Star } from "lucide-react";

export default function MentorsPage() {
  const mentors = [
    {
      name: "Sarah Chen",
      role: "Lead Service Designer",
      company: "Gov.uk",
      image: "", // Placeholder
      tags: ["Public Sector", "Policy", "Strategy"],
      bio: "Helping services work for real people. I specialize in complex government services and policy design.",
      available: true
    },
    {
      name: "Mike Ross",
      role: "Principal Product Designer",
      company: "FinTech Co",
      image: "",
      tags: ["Finance", "Systems Thinking", "Research"],
      bio: "Bridging the gap between Product and Service. Expert in systems thinking and financial regulations.",
      available: true
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      company: "HealthPlus",
      image: "",
      tags: ["Healthcare", "Leadership", "Org Design"],
      bio: "Passionate about patient experience. I can help you with portfolio reviews and navigating healthcare complexities.",
      available: false
    },
    {
      name: "David Kim",
      role: "Service Design Consultant",
      company: "Freelance",
      image: "",
      tags: ["Consulting", "Workshops", "Facilitation"],
      bio: "Master the art of facilitation. I coach on how to run effective workshops and manage difficult stakeholders.",
      available: true
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <header className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">Expert Coaching</Badge>
          <h1 className="text-4xl font-bold mb-4">Find Your Service Design Mentor</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Connect with seasoned professionals who have walked the path. tailored guidance to accelerate your career.
          </p>
          
          <div className="max-w-xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input placeholder="Search by skill, industry, or name..." className="pl-10 text-black bg-white" />
            </div>
            <Button variant="secondary" className="font-semibold">Find Mentor</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
         {/* Filters (Visual Only for now) */}
         <div className="flex gap-2 overflow-x-auto pb-8 justify-center">
            <Button variant="outline" className="rounded-full">All Industries</Button>
            <Button variant="ghost" className="rounded-full">Public Sector</Button>
            <Button variant="ghost" className="rounded-full">FinTech</Button>
            <Button variant="ghost" className="rounded-full">Healthcare</Button>
            <Button variant="ghost" className="rounded-full">Consulting</Button>
         </div>

         {/* Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor) => (
               <Card key={mentor.name} className="flex flex-col hover:border-blue-500 transition-colors cursor-pointer group">
                  <CardHeader className="text-center pb-2">
                     <div className="w-24 h-24 mx-auto bg-slate-200 rounded-full mb-4 flex items-center justify-center text-slate-500 font-bold text-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {mentor.name.charAt(0)}{mentor.name.split(' ')[1].charAt(0)}
                     </div>
                     <CardTitle className="text-lg">{mentor.name}</CardTitle>
                     <CardDescription className="flex items-center justify-center gap-1">
                        <Building2 className="w-3 h-3" /> {mentor.role} at {mentor.company}
                     </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center flex-1">
                     <div className="flex flex-wrap gap-1 justify-center mb-4">
                        {mentor.tags.map(tag => (
                           <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                     </div>
                     <p className="text-sm text-muted-foreground line-clamp-3">
                        {mentor.bio}
                     </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                     <Button className="w-full" variant={mentor.available ? "default" : "secondary"} disabled={!mentor.available}>
                        {mentor.available ? "Book Session" : "Fully Booked"}
                     </Button>
                  </CardFooter>
               </Card>
            ))}
         </div>
      </main>
    </div>
  )
}
