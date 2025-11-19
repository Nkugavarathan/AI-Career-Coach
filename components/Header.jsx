import React from "react"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"

import Link from "next/link"

import { Button } from "./ui/button"
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
// import checkUser from "../lib/checkUser"
import { checkUser } from "./../lib/checkUser"
export default async function Header() {
  await checkUser()
  return (
    <header className="fixed top-0 w-full border-b flex  items-center justify-between bg-background backdrop-blur-md z-50 supports-backdrop-filter:bg-background/80 h-16  px-4  ">
      <Link href={"/"}>PathFinder AI</Link>
      {/* later add Image  Logo*/}
      <div className="flex gap-2">
        {/* actions */}
        <SignedIn>
          {/* if person signedIn  */}
          <Link href={"/dashboard"}>
            <Button variant="outline" className="hidden md:inline-flex  gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Industry Insights
            </Button>
            <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
              <LayoutDashboard className="h-4 w-4" />
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2">
                <StarsIcon className="h-4 w-4" />
                <span className=" md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/resume" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Build Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/ai-cover-letter"
                  className="flex items-center gap-2"
                >
                  <PenBox className="h-4 w-4" />
                  Cover Letter
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/interview" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Interview Prep
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/roadmap" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Roadmap Generation
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>
        {/* login */}
        <SignedOut>
          <SignInButton>
            <button className="bg-black/70 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
      </div>
    </header>
  )
}
