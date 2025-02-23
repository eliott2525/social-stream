"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight, ArrowUp, ArrowLeft, Image, Link, Video, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProgressSteps, type Step } from "@/components/ui/progress-steps";

// Mock data for connected accounts (will be replaced with real data later)
const connectedAccounts = [
  {
    id: 1,
    platform: "Twitter",
    handle: "@johndoe",
    avatar: "https://github.com/shadcn.png",
    type: "Personal",
  },
  {
    id: 2,
    platform: "LinkedIn",
    handle: "John Doe",
    avatar: "https://github.com/shadcn.png",
    type: "Business",
  },
];

const steps: Step[] = [
  { id: "content", label: "Content" },
  { id: "accounts", label: "Accounts" },
  { id: "details", label: "Details" },
  { id: "publish", label: "Publish" },
];

export function NewPost() {
  const [step, setStep] = useState<Step["id"]>("content");
  const [selectedAccounts, setSelectedAccounts] = useState<number[]>([]);
  const [postContent, setPostContent] = useState("");
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [showClearDialog, setShowClearDialog] = useState(false);

  const handleAccountToggle = (accountId: number) => {
    setSelectedAccounts(prev =>
      prev.includes(accountId)
        ? prev.filter(id => id !== accountId)
        : [...prev, accountId]
    );
  };

  const handleMediaDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setMediaFiles(files);
  };

  const handleMediaSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setMediaFiles(files);
    }
  };

  const handleClearPost = () => {
    setPostContent("");
    setMediaFiles([]);
    setSelectedAccounts([]);
    setStep("content");
    setShowClearDialog(false);
  };

  return (
    <Card className="bg-background border-foreground-secondary">
      <ProgressSteps steps={steps} currentStep={step} />
      <CardHeader>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-6"
          onClick={() => setShowClearDialog(true)}
        >
          <X className="h-4 w-4" />
        </Button>
        <CardTitle className="text-2xl font-semibold">Create New Post</CardTitle>
        <CardDescription>Share your content across multiple platforms</CardDescription>
      </CardHeader>
      <CardContent>
        {step === "content" ? (
          <Tabs defaultValue="text" className="centered w-full">
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
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button 
                    onClick={() => setStep("accounts")}
                    disabled={!postContent.trim()}
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="media" className="pt-6">
              <div className="space-y-4">
                <label>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleMediaSelect}
                  />
                  <div 
                    className="border-2 border-dashed border-brand/20 rounded-lg p-24 text-center hover:bg-muted/30 transition-colors cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleMediaDrop}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <ArrowUp className="h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground font-medium">
                        {mediaFiles.length > 0 
                          ? `${mediaFiles.length} file(s) selected`
                          : "Drag and drop your media here"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        or click to browse your files
                      </p>
                    </div>
                  </div>
                </label>
                <div className="flex justify-end">
                  <Button 
                    onClick={() => setStep("accounts")}
                    disabled={mediaFiles.length === 0}
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setStep("content")}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go back
              </Button>
              <h3 className="text-lg font-medium">Select Accounts</h3>
            </div>
            <div className="grid gap-4">
              {connectedAccounts.map((account) => (
                <div
                  key={account.id}
                  className={cn(
                    "flex items-center space-x-4 rounded-lg border p-4 cursor-pointer transition-colors",
                    selectedAccounts.includes(account.id) && "border-primary bg-primary/5"
                  )}
                  onClick={() => handleAccountToggle(account.id)}
                >
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{account.platform}</p>
                    <p className="text-sm text-muted-foreground">
                      {account.handle} · {account.type}
                    </p>
                  </div>
                  {selectedAccounts.includes(account.id) && (
                    <Check className="h-5 w-5 text-primary" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button 
                onClick={() => setStep("details")}
                disabled={selectedAccounts.length === 0}
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <Dialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Clear Post</DialogTitle>
            <DialogDescription>
              Are you sure you want to clear this post? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowClearDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleClearPost}>
              Clear post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
} 