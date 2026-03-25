import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // Used when no locale matches (e.g. visiting "/")
    defaultLocale: 'ar', // Set Arabic as default since it's your main content

    // This ensures the URL always has the language (e.g., /en/...)
    localePrefix: 'always'
});

export const config = {
    // Skip all internal paths (_next, images, favicon)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};