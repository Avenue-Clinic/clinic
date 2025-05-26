import { i18nRouter } from 'next-i18n-router';
import { NextResponse } from 'next/server';
import i18nConfig from '../i18nConfig';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // For root path, use default configuration
  if (pathname === '/') {
    return i18nRouter(request, {
      ...i18nConfig,
      defaultLocale: 'en',
      prefixDefault: false,
    });
  }
  
  // For all other paths, use standard i18n routing
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
