'use strict';
/**
 * Next.js middleware for tenant isolation on all dashboard requests.
 * Ensures tenant context based on subdomain or blocks/redirects otherwise.
 */
import { NextResponse } from 'next/server';

/** Utility to parse subdomain from host */
function getTenantFromHost(host) {
  if (!host) return null;
  const parts = host.split('.');
  if (parts.length < 3) return null;
  return parts[0]; // e.g., org1.example.com => 'org1'
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host');
  const tenant = getTenantFromHost(host);
  // Restrict access to '/dashboard' and API routes for tenant-only paths
  if ((pathname.startsWith('/dashboard') || pathname.startsWith('/api/')) && !tenant) {
    // Invalid tenant context: redirect to error or login page
    const url = request.nextUrl.clone();
    url.pathname = '/tenant-error';
    return NextResponse.redirect(url);
  }
  // Attach tenant to request headers for use in pages and APIs
  if (tenant) {
    request.headers.set('x-tenant-id', tenant);
  }
  return NextResponse.next({ request });
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
