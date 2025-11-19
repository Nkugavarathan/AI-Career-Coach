import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4  bg-blue-300">
      <h1 className="text-5xl font-bold gradient-title mb-4">404</h1>
      <h2 className="font-semibold text-2xl mb-3">Page Not Found</h2>
      <p className="text-gray-700 mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved
      </p>
      <Link to="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}
