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
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6">
        {/* Dashboard content will go here */}
      </div>
    </div>
  )
} 