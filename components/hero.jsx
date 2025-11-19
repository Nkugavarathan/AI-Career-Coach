"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center 
        bg-gray-50 text-gray-900
      "
    >
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        className="object-cover brightness-90"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome To AI Career Coach
          <br />
          <span className="text-cyan-400">For Professional Success</span>
        </h1>

        <p className="mt-4 max-w-xl mx-auto text-gray-200 md:text-lg">
          Advance your career with personalized guidance, interview prep, and
          AI-powered tools for job success.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 bg-[#6c47ff] hover:bg-[#5a3bcc] text-white"
            >
              Get Started
            </Button>
          </Link>

          {/* <Link href="https://www.youtube.com/roadsidecoder">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Watch Demo
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
