import { industries } from "@/data/industries"
import React from "react"
import OnboardingForm from "./_components/OnboardingForm"
// import OnboardingForm from "@/_components"
function page() {
  return <OnboardingForm industries={industries} />
}

export default page
