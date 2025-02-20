"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { supabase } from "@/lib/supabase"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error("Error during auth callback:", error.message)
        router.push("/register")
        return
      }

      if (session) {
        // Check if user has completed onboarding
        const { data: profile } = await supabase
          .from("profiles")
          .select("has_completed_onboarding")
          .eq("id", session.user.id)
          .single()

        if (profile?.has_completed_onboarding) {
          router.push("/dashboard")
        } else {
          // Redirect new users to congratulations page first
          router.push("/congratulations")
        }
      } else {
        router.push("/register")
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Setting up your account...</h2>
        <p className="text-sm text-muted-foreground">Please wait while we redirect you.</p>
      </div>
    </div>
  )
} 