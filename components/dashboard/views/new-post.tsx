"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Image, Link, Video } from "lucide-react";

export function NewPost() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Create New Post</h2>
        <p className="text-muted-foreground">
          Create and schedule your social media content.
        </p>
      </div>

      <Tabs defaultValue="post" className="w-full">
        <TabsList>
          <TabsTrigger value="post">Post</TabsTrigger>
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
          <TabsTrigger value="link">Link</TabsTrigger>
        </TabsList>
        <TabsContent value="post" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Text Post</CardTitle>
              <CardDescription>
                Write your post content and schedule when to publish it.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="What's on your mind?"
                className="min-h-[150px]"
              />
              <div className="flex gap-4">
                <Button>Schedule Post</Button>
                <Button variant="outline">Save as Draft</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Other tab contents will be similar */}
      </Tabs>
    </div>
  );
} 