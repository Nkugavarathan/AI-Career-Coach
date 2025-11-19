"use server"
import db from "@lib/prisma"
import { auth } from "@clerk/nextjs/server"

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
      async (tx) => {
        // find if industry exist
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        })
        // if industry doent exist create it with defautl values
        // update the use
      },
      { timeout: 10000 }
    )
    return result.user
  } catch (error) {
    console.error(error)
    throw new Error("Failed to  update user profile")
  }
}
