// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'ar'];

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale)) notFound();

    return {
        locale,
        // Import from the root messages folder
        messages: (await import(`../messages/${locale}.json`)).default
    };
});