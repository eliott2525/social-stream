"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error || !session) {
        router.push("/login")
        return
      }
    }

    checkAuth()
  }, [router])

  return (
    <div className="grid gap-6">
      {/* Welcome Section */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-2xl font-semibold">Welcome back!</h2>
        <p className="mt-2 text-muted-foreground">
          Here's what's happening with your social media accounts today.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Posts Today</div>
          <div className="mt-2 text-3xl font-bold">12</div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Engagement Rate</div>
          <div className="mt-2 text-3xl font-bold">4.2%</div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">New Followers</div>
          <div className="mt-2 text-3xl font-bold">+248</div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-sm font-medium text-muted-foreground">Total Reach</div>
          <div className="mt-2 text-3xl font-bold">15.7K</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <div className="mt-4 space-y-4">
          {/* Activity items would go here */}
          <p className="text-muted-foreground">No recent activity to show.</p>
        </div>
      </div>
    </div>
  )
} 