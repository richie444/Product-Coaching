"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Calendar, Users, Heart, Share2, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CommunityPage() {
  const router = useRouter();

  const discussions = [
    {
      id: 1,
      title: "How do you handle stakeholders who don't believe in research?",
      author: "Alex M.",
      role: "Junior Designer",
      replies: 24,
      likes: 156,
      tag: "Career Advice",
      time: "2h ago"
    },
    {
      id: 2,
      title: "Service Blueprinting for backend processes - need examples!",
      author: "Sarah J.",
      role: "Senior Designer",
      replies: 12,
      likes: 45,
      tag: "Methodology",
      time: "5h ago"
    },
    {
      id: 3,
      title: "Feedback on my portfolio case study?",
      author: "David K.",
      role: "Student",
      replies: 8,
      likes: 23,
      tag: "Portfolio Review",
      time: "1d ago"
    }
  ];

  const events = [
    {
      title: "Design Crits & Coffee",
      date: "Tomorrow, 10:00 AM EST",
      attendees: 45,
      type: "Virtual Meetup"
    },
    {
      title: "Masterclass: Systems Thinking w/ Mike Ross",
      date: "Feb 15, 2:00 PM EST",
      attendees: 120,
      type: "Workshop"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold flex items-center gap-2 cursor-pointer" onClick={() => router.push("/dashboard")}>
               <Users className="w-6 h-6 text-primary" /> Community
            </h1>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
               <a href="#" className="text-primary">Discussions</a>
               <a href="#" className="hover:text-primary">Events</a>
               <a href="#" className="hover:text-primary">Design Crits</a>
               <a href="#" className="hover:text-primary">Members</a>
            </nav>
          </div>
          <Button>Start Discussion</Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Main Feed */}
           <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-2">
                 <h2 className="text-2xl font-bold">Latest Discussions</h2>
                 <div className="flex gap-2">
                    <Button variant="ghost" size="sm">Top</Button>
                    <Button variant="ghost" size="sm" className="text-primary bg-primary/10">Newest</Button>
                 </div>
              </div>

              {discussions.map(post => (
                 <Card key={post.id} className="hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader className="pb-3">
                       <div className="flex justify-between items-start">
                          <div className="flex gap-2 mb-2">
                             <Badge variant="secondary" className="hover:bg-secondary/80">{post.tag}</Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">{post.time}</span>
                       </div>
                       <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-3">
                       <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                             <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{post.author}</span>
                          <span className="text-xs text-muted-foreground">• {post.role}</span>
                       </div>
                    </CardContent>
                    <CardFooter className="pt-0 text-muted-foreground text-sm flex gap-4">
                       <span className="flex items-center gap-1 hover:text-primary">
                          <MessageSquare className="w-4 h-4" /> {post.replies} Replies
                       </span>
                       <span className="flex items-center gap-1 hover:text-primary">
                          <Heart className="w-4 h-4" /> {post.likes} Likes
                       </span>
                    </CardFooter>
                 </Card>
              ))}
           </div>

           {/* Sidebar */}
           <div className="space-y-6">
              <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                       <Calendar className="w-5 h-5" /> Upcoming Events
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    {events.map((event, i) => (
                       <div key={i} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                          <div className="flex justify-between items-start mb-1">
                             <span className="text-xs font-medium bg-black/20 px-2 py-0.5 rounded">{event.type}</span>
                          </div>
                          <h4 className="font-semibold mb-1">{event.title}</h4>
                          <div className="text-sm text-white/80 flex flex-col gap-0.5">
                             <span>{event.date}</span>
                             <span>{event.attendees} attending</span>
                          </div>
                       </div>
                    ))}
                    <Button variant="secondary" className="w-full text-indigo-700 hover:text-indigo-800">
                       View Calendar
                    </Button>
                 </CardContent>
              </Card>
              
              <Card>
                 <CardHeader>
                    <CardTitle className="text-base">Community Guidelines</CardTitle>
                 </CardHeader>
                 <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>1. Be respectful and constructive.</p>
                    <p>2. Share knowledge, not just links.</p>
                    <p>3. No self-promotion in discussions.</p>
                    <Button variant="link" className="px-0 h-auto">Read full guidelines</Button>
                 </CardContent>
              </Card>
           </div>

        </div>
      </main>
    </div>
  );
}
