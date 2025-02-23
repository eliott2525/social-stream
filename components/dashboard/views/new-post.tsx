"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight, ArrowUp, Image, Link, Video } from "lucide-react";

export function NewPost() {
  return (
    <Card className="bg-background border-foreground-secondary">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Create New Post</CardTitle>
        <CardDescription>Share your content across multiple platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="text" className="centered  w-full">
          <TabsList className="w-full justify-start border-b gap-8 h-12 p-0 bg-transparent">
            <TabsTrigger 
              value="media" 
              className="relative h-12 rounded-none border-none bg-transparent px-4 font-medium data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-primary"
            >
              Media Post
            </TabsTrigger>
            <TabsTrigger 
              value="text"
              className="relative h-12 rounded-none border-none bg-transparent px-4 font-medium data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-primary"
            >
              Text Post
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="pt-6">
            <div className="space-y-4">
              <Textarea
                placeholder="What's on your mind?"
                className="min-h-[200px] resize-none text-lg"
              />
              <div className="flex justify-end gap-3">
                <Button variant="outline">Save Draft</Button>
                <Button>Schedule Post</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="media" className="pt-6">
            <div className="space-y-4">
              <div className="border-2 border-dashed border-brand/20 rounded-lg p-24 text-center hover:bg-muted/30 transition-colors cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  <ArrowUp className="h-8 w-8 text-muted-foreground" />
                  <p className="text-muted-foreground font-medium">
                    Drag and drop your media here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse your files
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-6 pt-2">
                <Button>Select accounts <ArrowRight className="h-4 w-4 ml-2" /></Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 