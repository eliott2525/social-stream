"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, MoreVertical } from "lucide-react";

const dummyScheduledPosts = [
  {
    id: 1,
    content: "Exciting news coming soon! Stay tuned for our latest product launch 🚀",
    date: "2024-03-01",
    time: "10:00 AM",
    platform: "Twitter",
  },
  {
    id: 2,
    content: "Check out our new blog post about social media management best practices!",
    date: "2024-03-02",
    time: "2:30 PM",
    platform: "LinkedIn",
  },
  // Add more dummy posts as needed
];

export function ScheduledPosts() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Scheduled Posts</h2>
        <p className="text-muted-foreground">
          Manage your upcoming social media posts.
        </p>
      </div>

      <div className="grid gap-4">
        {dummyScheduledPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {post.platform}
              </CardTitle>
              <button className="hover:bg-muted rounded-full p-1">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{post.content}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 