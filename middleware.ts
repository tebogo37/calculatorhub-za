
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Define your subdomains
  const isVat = hostname.startsWith('vat.');
  const isTax = hostname.startsWith('tax.');
  const isProperty = hostname.startsWith('property.');
  const isTwoPot = hostname.startsWith('twopot.');

  // Rewrite to the internal sites directory
  if (isVat) {
    url.pathname = `/sites/vat${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (isTax) {
    url.pathname = `/sites/tax${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (isProperty) {
    url.pathname = `/sites/property${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (isTwoPot) {
    url.pathname = `/sites/twopot${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
