// router/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// --- Configuration ---
// The default project to send a user to if they have no last visited project
const DEFAULT_PROJECT_PATH = '/campus-bazaar';

// The cookie name for tracking the last project
const LAST_PROJECT_COOKIE = 'last_project';

// An array of your project paths to check against
const PROJECT_PATHS = ['/bloom-dental', '/flowpulse-ai', '/campus-bazaar'];
const PROJECT_MATCHERS = PROJECT_PATHS.map((path) => `${path}/:path*`);
// ---------------------

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // A. Handle the root path: projects.myname.com/
  if (pathname === '/') {
    // 1. Check for the last visited project in the cookies
    const lastProjectPath = request.cookies.get(LAST_PROJECT_COOKIE)?.value;

    // 2. Redirect to the last visited project, or the default project
    const redirectTo =
      lastProjectPath && PROJECT_PATHS.includes(lastProjectPath)
        ? lastProjectPath
        : DEFAULT_PROJECT_PATH;

    // Perform the redirect
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  // B. Handle project paths: projects.myname.com/project-name...
  // Check if the current path starts with any of the defined project paths
  const isProjectPath = PROJECT_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isProjectPath) {
    const response = NextResponse.next();

    // Find the base path (e.g., '/flowpulse-ai') from the full pathname
    const currentBasePath = PROJECT_PATHS.find(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );

    if (currentBasePath) {
      // Set/update the cookie with the base path of the current project
      // This ensures the user is sent back to the project base, not a deep page
      response.cookies.set(LAST_PROJECT_COOKIE, currentBasePath, {
        path: '/', // Make cookie available across the whole domain
        maxAge: 60 * 60 * 24 * 7, // Example: persist for 7 days
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
      });
    }

    return response;
  }

  // C. For all other paths (assets, API routes, etc.), just continue
  return NextResponse.next();
}

// Ensure the middleware only runs on paths we care about (optimization)
export const config = {
  matcher: [
    '/', // Match the root path
    ...PROJECT_MATCHERS, // Match all project paths and their sub-paths
    // This will match: '/', '/bloom-dental', '/flowpulse-ai/about', etc.
  ],
};
