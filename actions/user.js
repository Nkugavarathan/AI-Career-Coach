"use server"
import db from "@lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { getDisplayName } from "next/dist/shared/lib/utils"

export async function updateUser(data) {
  try {
    const { userId } = await auth()

    if (!userId) throw new Error("unauthorized")
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
        where: {
          clerkUserId: userId,
        },
      },
    })

    const result = await db.$transaction(
      // transaction to ensure industry insight exists before updating user
      async (tx) => {
        // find if industry exist
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        })

        // if industry doent exist create it with defautl values

        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [],
              growthRate: 0,
              demandLevel: "Medium",
              topSkills: [],
              marketOutlook: "Neutral",
              keyTrends: [],
              recommendedSkills: [],
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
            },
          })
        }
        // update the user

        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        })
        return { updatedUser, industryInsight }
      },
      { timeout: 10000 }
    )

    return result.user
  } catch (error) {
    console.error(error)
    throw new Error("Failed to  update user profile")
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth()

  if (!userId) throw new Error("unauthorized")
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
      where: {
        clerkUserId: userId,
      },
    },
  })
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        industry: true,
      },
    })
    return {
      isOnboarded: !!user?.industry,
    }
  } catch (error) {
    console.error("Error fetching user onboarding status:", error.message)
    throw new Error("Failed to fetch user onboarding status")
  }
}
