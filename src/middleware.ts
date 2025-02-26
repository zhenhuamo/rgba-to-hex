import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get response object
  const response = NextResponse.next();
  
  // Allow embedding tool page from all origins
  if (request.nextUrl.pathname.startsWith('/tools/color-converter')) {
    response.headers.set('X-Frame-Options', 'ALLOWALL');
    response.headers.set('Content-Security-Policy', "frame-ancestors *");
  } else {
    // Set security headers for other pages
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
    response.headers.set('Content-Security-Policy', "frame-ancestors 'self'");
  }
  
  return response;
}

export const config = {
  matcher: ['/tools/color-converter', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 