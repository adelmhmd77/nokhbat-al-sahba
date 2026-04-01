import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css"; // Make sure your path is correct
import localFont from 'next/font/local'

const Tufuli = localFont({
  src: '../fonts/tufuli/TufuliArabicDEMO-Regular.otf',
  display: 'swap',
  variable: '--font-tufuli', // ضفنا دي عشان نسهل عليك في الـ Tailwind
})

const Lemon = localFont({
  src: '../fonts/lemon-brush/LemonBrushArabicPersonalUseOnly-Regular.otf',
  variable: '--font-lemon', // Define the CSS variable here
  display: 'swap',
})

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // 1. Validate the locale
    const locales = ['en', 'ar'];
    if (!locales.includes(locale)) {
        notFound();
    }

    // 2. Fetch the JSON messages for this specific locale
    const messages = await getMessages();

    return (
        <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {/* التعديل هنا: استخدمنا الـ Backticks `` عشان ندمج المتغيرات صح */}
            <body className={`${Tufuli.variable} ${Lemon.variable} font-tufuli min-h-full flex flex-col`}>
                {/* 3. Wrap EVERYTHING in the Provider */}
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}