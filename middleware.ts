// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // Used when no locale matches (e.g. visiting "/")
    defaultLocale: 'en',

    // This ensures that the locale is always prefixed in the URL
    // e.g., /about -> /en/about
    localePrefix: 'always'
});

export const config = {
    // Match only internationalized pathnames
    // This regex skips folders like /api, /_next, and static files (e.g. favicon.ico)
    matcher: ['/', '/(ar|en)/:path*']
};