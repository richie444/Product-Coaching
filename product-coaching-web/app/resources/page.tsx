"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Download, BookOpen, ExternalLink, PlayCircle } from "lucide-react";

export default function ResourcesPage() {
  const resources = {
    templates: [
      {
        title: "Service Blueprint Template",
        type: "Miro & Figma",
        downloads: "2.4k",
        desc: "Standard swimlane blueprint with front-stage, back-stage, and support processes."
      },
      {
        title: "Customer Journey Map",
        type: "PDF & Figma",
        downloads: "5.1k",
        desc: "Map emotional highs and lows along with key touchpoints."
      },
      {
        title: "Stakeholder Map",
        type: "Miro",
        downloads: "1.2k",
        desc: "Identify and prioritize your project stakeholders effectively."
      }
    ],
    articles: [
      {
        title: "What is Service Design?",
        author: "NNGroup",
        readTime: "5 min read",
        desc: "The definitive definition and differentiation from UX Design."
      },
      {
        title: "Facilitating Remote Workshops",
        author: "Mural Blog",
        readTime: "8 min read",
        desc: "Tips and tricks for keeping energy high when everyone is on Zoom."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <header className="py-12 bg-indigo-50 border-b border-indigo-100">
        <div className="container mx-auto px-4">
           <div className="flex justify-between items-center">
             <div>
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">The Library</Badge>
                <h1 className="text-4xl font-bold mb-4 text-indigo-900">Service Design Resources</h1>
                <p className="text-xl text-indigo-700/80 max-w-2xl">
                  Curated templates, guides, and lectures to help you do your best work.
                </p>
             </div>
             <div className="hidden md:block">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                   <BookOpen className="w-10 h-10 text-indigo-500" />
                </div>
             </div>
           </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="templates" className="space-y-8">
          <TabsList className="bg-slate-100 p-1">
            <TabsTrigger value="templates">Templates & Tools</TabsTrigger>
            <TabsTrigger value="guides">Guides & Articles</TabsTrigger>
            <TabsTrigger value="courses">Video Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
             <div className="grid md:grid-cols-3 gap-6">
                {resources.templates.map((resource, i) => (
                   <Card key={i} className="hover:shadow-lg transition-all">
                      <CardHeader>
                         <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                            <Download className="w-5 h-5 text-blue-600" />
                         </div>
                         <CardTitle className="text-lg">{resource.title}</CardTitle>
                         <CardDescription>{resource.type}</CardDescription>
                      </CardHeader>
                      <CardContent>
                         <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">
                           {resource.desc}
                         </p>
                         <Button variant="outline" className="w-full gap-2">
                           <Download className="w-4 h-4" /> Download
                         </Button>
                      </CardContent>
                   </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
               {resources.articles.map((article, i) => (
                 <Card key={i} className="flex flex-row items-center p-4 gap-4 hover:bg-slate-50 cursor-pointer">
                    <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center shrink-0">
                       <FileText className="w-6 h-6 text-slate-500" />
                    </div>
                    <div className="flex-1">
                       <h4 className="font-semibold">{article.title}</h4>
                       <p className="text-sm text-slate-500">{article.author} • {article.readTime}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                 </Card>
               ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
