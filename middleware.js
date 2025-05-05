import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './src/app/utils/i18n';

const LANG_COOKIE_NAME = 'preferred-lang';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  // Get preferred language from cookie or use default
  const preferredLang = request.cookies.get(LANG_COOKIE_NAME)?.value || defaultLocale;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Redirect /en/* paths to /* for cleaner URLs (English is default)
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const newPath = pathname === `/${defaultLocale}` 
      ? '/' 
      : pathname.slice(defaultLocale.length + 1);
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Handle the root path - internally rewrite to default locale
  if (pathname === '/') {
    return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  // Check if path has a valid locale
  const pathnameHasValidLocale = locales.some(
    locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // If path doesn't have a valid locale prefix (and isn't root), add one based on preferences
  if (!pathnameHasValidLocale && pathname !== '/') {
    // Use preferred language from cookie or default
    return NextResponse.rewrite(new URL(`/${preferredLang}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except certain static files and API routes
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};