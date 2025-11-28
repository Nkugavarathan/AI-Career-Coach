import { industries } from "@/data/industries"
import React from "react"
import { getUserOnboardingStatus } from "@/actions/user"
import { redirect } from "next/navigation"
import OnboardingForm from "./_components/onboarding-form"
async function page() {
  //check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus()
  if (isOnboarded) {
    redirect("/dasboard")
  }
  return <OnboardingForm industries={industries} />
}

export default page
