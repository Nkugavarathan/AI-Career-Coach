import { getUserOnboardingStatus } from "@/actions/user"
import { redirect } from "next/dist/server/api-utils"
import React from "react"

async function page() {
  const { isOnboarded } = await getUserOnboardingStatus()
  if (!isOnboarded) {
    redirect("/onboarding")
  }
  return <div>Dashboard page</div>
}

export default page
