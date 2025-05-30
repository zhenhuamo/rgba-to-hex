import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get response object
  const response = NextResponse.next();
  
  // Allow embedding tool pages from all origins
  if (
    request.nextUrl.pathname.startsWith('/tools/color-converter') ||
    request.nextUrl.pathname.startsWith('/tools/hex-to-rgba-converter') ||
    request.nextUrl.pathname.startsWith('/tools/hsl-to-hex-converter') ||
    request.nextUrl.pathname.startsWith('/tools/cmyk-to-hex-converter') ||
    request.nextUrl.pathname.startsWith('/tools/rgb-to-hsl-converter') ||
    request.nextUrl.pathname.startsWith('/tools/rgb-to-cmyk-converter') ||
    request.nextUrl.pathname.startsWith('/tools/cmyk-to-rgb-converter') ||
    request.nextUrl.pathname.startsWith('/tools/color-contrast-checker') ||
    request.nextUrl.pathname.startsWith('/tools/gradient-generator-tool') ||
    request.nextUrl.pathname.startsWith('/tools/color-blindness-simulator') ||
    request.nextUrl.pathname.startsWith('/tools/image-color-extractor')
  ) {
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
  matcher: [
    '/tools/color-converter',
    '/tools/hex-to-rgba-converter',
    '/tools/hsl-to-hex-converter',
    '/tools/cmyk-to-hex-converter',
    '/tools/rgb-to-hsl-converter',
    '/tools/rgb-to-cmyk-converter',
    '/tools/cmyk-to-rgb-converter',
    '/tools/color-contrast-checker',
    '/tools/gradient-generator-tool',
    '/tools/color-blindness-simulator',
    '/tools/image-color-extractor',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};