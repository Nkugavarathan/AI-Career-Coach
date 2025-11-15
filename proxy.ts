import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


const isProtectedRoute=createRouteMatcher([
"/dashboard(.*)",
"/resume(.*)",
"/interview(.*)",
"/ai-cover-letter(.*)",
"/roadmap(.*)",
"/onboarding(.*)"
])
export default clerkMiddleware(async (auth,req)=>{
  const {userId,redirectToSignIn}=await auth();
  if(!userId&&isProtectedRoute(req)){
 // not signin then got to signinpage
 /*
 Whenever someone visits a protected route, check if they’re signed in. If they’re not, immediately send them to the sign-in page. */
    return redirectToSignIn();
  }
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};