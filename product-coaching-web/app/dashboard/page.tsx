"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/components/AuthProvider";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Play,
  Calendar,
  Users,
  CheckCircle2,
  Video,
  FileText,
  ArrowRight,
  Compass,
  Library,
  MessageCircle
} from "lucide-react";

// import { auth } from "@/lib/firebase";
// import { signOut } from "firebase/auth";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const handleLogout = async () => {
    // await signOut(auth);
    router.push("/login"); // or /
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/dashboard")}>Service Design Coaching</h1>
            <nav className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => router.push("/career-path")}>
                <Compass className="w-4 h-4 mr-2" />
                Career Path
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/mentors")}>
                <Users className="w-4 h-4 mr-2" />
                Mentors
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/sessions")}>
                <Calendar className="w-4 h-4 mr-2" />
                Sessions
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/resources")}>
                <Library className="w-4 h-4 mr-2" />
                Resources
              </Button>
              <Button variant="ghost" size="sm" onClick={() => router.push("/community")}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Community
              </Button>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary cursor-pointer">
                {user.email?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        
        <Tabs defaultValue="learning" className="space-y-6">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
             </div>
             <TabsList>
              <TabsTrigger value="learning">My Learning</TabsTrigger>
              <TabsTrigger value="coaching">Coaching & Sessions</TabsTrigger>
            </TabsList>
          </div>

        <TabsContent value="learning" className="space-y-6">
        
        {/* Welcome Banner */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, {user.email?.split('@')[0]}! 👋</h2>
                <p className="text-muted-foreground mb-4">
                  You're making great progress in your Service Design track.
                </p>
                <Button size="lg" onClick={() => router.push("/courses/product-discovery")}>
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Learning Streak</CardDescription>
              <CardTitle className="text-3xl">7 days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>Keep it going!</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Modules Completed</CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>Across 3 tracks</span>
              </div>
            </CardContent>
          </Card>

           <Card>
            <CardHeader className="pb-3">
              <CardDescription>Coaching Hours</CardDescription>
              <CardTitle className="text-3xl">5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Video className="w-4 h-4" />
                <span>Last session: 2d ago</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Certificates</CardDescription>
              <CardTitle className="text-3xl">1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4" />
                <span>Earned</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push("/career-path")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Career Path</CardTitle>
                    <CardDescription className="text-xs">Navigate your journey</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push("/mentors")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Find Mentors</CardTitle>
                    <CardDescription className="text-xs">Connect with experts</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push("/sessions")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Book Sessions</CardTitle>
                    <CardDescription className="text-xs">Schedule coaching</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push("/resources")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Library className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Resources</CardTitle>
                    <CardDescription className="text-xs">Templates & guides</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push("/community")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Community</CardTitle>
                    <CardDescription className="text-xs">Join discussions</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push("/courses")}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">All Courses</CardTitle>
                    <CardDescription className="text-xs">Browse catalog</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Tracks Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold">Your Learning Tracks</h3>
          
          {/* Service Design Track */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">Service Design</Badge>
                  <CardTitle>Service Design Fundamentals</CardTitle>
                  <CardDescription>Mastering the end-to-end service experience</CardDescription>
                </div>
                <Button variant="outline" className="hidden sm:flex">View Curriculum</Button>
              </div>
            </CardHeader>
            <CardContent>
               <div className="mb-4">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Track Progress</span>
                    <span className="font-medium">65% complete</span>
                  </div>
                  <Progress value={65} className="h-2" />
               </div>
               <div className="grid md:grid-cols-3 gap-4">
                 <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Current Module</h4>
                    <p className="text-sm text-slate-600 mb-3">User Journey Mapping</p>
                    <Button size="sm" className="w-full text-xs">Continue</Button>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Next Up</h4>
                    <p className="text-sm text-slate-600">Service Blueprints</p>
                 </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Completed</h4>
                    <p className="text-sm text-slate-600">Stakeholder Research</p>
                 </div>
               </div>
            </CardContent>
          </Card>

          {/* Career Coaching Track */}
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100">Career Coaching</Badge>
                  <CardTitle>Senior PM Career Path</CardTitle>
                  <CardDescription>Strategic preparation for your next leadership role</CardDescription>
                </div>
                <Button variant="outline" className="hidden sm:flex">View Curriculum</Button>
              </div>
            </CardHeader>
             <CardContent>
               <div className="mb-4">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Track Progress</span>
                    <span className="font-medium">30% complete</span>
                  </div>
                  <Progress value={30} className="h-2" />
               </div>
               <div className="grid md:grid-cols-3 gap-4">
                 <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Current Module</h4>
                    <p className="text-sm text-slate-600 mb-3">Leadership & Influence</p>
                    <Button size="sm" className="w-full text-xs">Continue</Button>
                 </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Coming Up</h4>
                    <p className="text-sm text-slate-600">Interview Strategy</p>
                 </div>
               </div>
            </CardContent>
          </Card>
        </div>
        </TabsContent>

        <TabsContent value="coaching" className="space-y-6">
           <div className="grid md:grid-cols-3 gap-8">
             {/* Left Column: Upcoming & Booking */}
             <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Your Coaching Calendar</CardTitle>
                      <Button asChild>
                         <a href="/checkout?plan=coaching-session">Book Session</a>
                      </Button>
                    </div>
                    <CardDescription>Manage your upcoming 1:1 sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Upcoming Session Item */}
                      <div className="flex items-start gap-4 p-4 border rounded-lg bg-green-50/50">
                        <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-lg flex flex-col items-center justify-center text-green-700">
                          <span className="text-xs font-bold uppercase">FEB</span>
                          <span className="text-xl font-bold">15</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                             <div>
                               <h4 className="font-semibold">Career Strategy Review</h4>
                               <p className="text-sm text-muted-foreground mb-1">with Coach Sarah Chen</p>
                               <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                 <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> 2:00 PM - 3:00 PM EST</span>
                                 <span className="flex items-center gap-1"><Video className="w-3 h-3"/> Zoom Link</span>
                               </div>
                             </div>
                             <Button size="sm" variant="outline">Reschedule</Button>
                          </div>
                        </div>
                      </div>

                       {/* Future Session Item */}
                       <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-600">
                          <span className="text-xs font-bold uppercase">FEB</span>
                          <span className="text-xl font-bold">28</span>
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between items-start">
                             <div>
                               <h4 className="font-semibold">Service Design Case Study Review</h4>
                               <p className="text-sm text-muted-foreground mb-1">with Coach Mike Ross</p>
                               <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                 <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> 10:00 AM - 11:00 AM EST</span>
                               </div>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Session History & Notes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="p-4 border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="flex justify-between mb-2">
                           <h4 className="font-semibold text-sm">Initial Career Assessment</h4>
                           <span className="text-xs text-muted-foreground">Jan 20, 2026</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                           Discussed current role challenges and 6-month goals. Need to focus on stakeholder management modules...
                        </p>
                        <div className="mt-3 flex gap-2">
                           <Badge variant="secondary" className="text-xs">Career</Badge>
                           <Badge variant="outline" className="text-xs">Notes Available</Badge>
                        </div>
                     </div>

                     <div className="p-4 border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                        <div className="flex justify-between mb-2">
                           <h4 className="font-semibold text-sm">Service Design Blueprinting</h4>
                           <span className="text-xs text-muted-foreground">Jan 12, 2026</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                           Reviewed the draft blueprint for the onboarding flow. Recommendations on simplifying the user actions...
                        </p>
                         <div className="mt-3 flex gap-2">
                           <Badge variant="secondary" className="text-xs">Service Design</Badge>
                           <Badge variant="outline" className="text-xs">Notes Available</Badge>
                        </div>
                     </div>
                  </CardContent>
                </Card>
             </div>

             {/* Right Column: Expert Profile */}
             <div className="space-y-6">
                <Card className="bg-primary text-primary-foreground">
                   <CardHeader>
                      <CardTitle>Need more support?</CardTitle>
                      <CardDescription className="text-primary-foreground/80">
                         Book an ad-hoc session with a specialist.
                      </CardDescription>
                   </CardHeader>
                   <CardContent>
                      <div className="space-y-4">
                         <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold">SC</div>
                            <div>
                               <p className="font-semibold text-sm">Sarah Chen</p>
                               <p className="text-xs opacity-90">Career Coaching Lead</p>
                            </div>
                            <Button size="sm" variant="secondary" className="ml-auto text-xs">Book</Button>
                         </div>
                         <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                            <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-bold">MR</div>
                            <div>
                               <p className="font-semibold text-sm">Mike Ross</p>
                               <p className="text-xs opacity-90">Service Design Expert</p>
                            </div>
                            <Button size="sm" variant="secondary" className="ml-auto text-xs">Book</Button>
                         </div>
                      </div>
                   </CardContent>
                </Card>

                 <Card>
                  <CardHeader>
                    <CardTitle>Recommended Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                     <div className="flex items-start gap-3">
                        <FileText className="w-4 h-4 mt-1 text-muted-foreground" />
                        <p className="text-sm">Complete the pre-session questionnaire/worksheet for your Feb 15th session.</p>
                     </div>
                     <div className="flex items-start gap-3">
                        <Video className="w-4 h-4 mt-1 text-muted-foreground" />
                        <p className="text-sm">Watch the "Mock Interview" recording from last week.</p>
                     </div>
                  </CardContent>
                </Card>
             </div>
           </div>
        </TabsContent>

        </Tabs>
      </main>
    </div>
  );
}
