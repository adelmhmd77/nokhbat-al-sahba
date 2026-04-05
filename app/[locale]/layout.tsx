import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css"; // Make sure your path is correct
import localFont from "next/font/local";

const Tufuli = localFont({
  src: "../fonts/tufuli/TufuliArabicDEMO-Regular.otf",
  display: "swap",
  variable: "--font-tufuli", // ضفنا دي عشان نسهل عليك في الـ Tailwind
});

const Lemon = localFont({
  src: "../fonts/lemon-brush/LemonBrushArabicPersonalUseOnly-Regular.otf",
  variable: "--font-lemon", // Define the CSS variable here
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 1. Validate the locale
  const locales = ["en", "ar"];
  if (!locales.includes(locale)) {
    notFound();
  }

  // 2. Fetch the JSON messages for this specific locale
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* التعديل هنا: استخدمنا الـ Backticks `` عشان ندمج المتغيرات صح */}
      <body
        className={`${Tufuli.variable} ${Lemon.variable} font-tufuli min-h-full flex flex-col`}
      >
        {/* 3. Wrap EVERYTHING in the Provider */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        {/* الـ Footer */}
        <footer className="relative bg-black border-t border-amber-500/20 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* اللوجو أو اسم المشروع */}
              <div className="text-right">
                <h3 className="text-2xl font-bold text-amber-500 font-tufuli tracking-wider">
                  نُخبةُ الصَّحابة
                </h3>
                <p className="text-zinc-500 font-tufuli mt-2 italic">
                  رضي الله عنهم وأرضاهم
                </p>
              </div>

              {/* حقوق الملكية وأصحاب الموقع */}
              <div className="text-center md:text-right border-r-0 md:border-r border-amber-500/30 pr-0 md:pr-8">
                <p className="text-zinc-400 font-tufuli text-lg">
                  صُنع بحب وإخلاص بواسطة:
                </p>
                <div className="flex gap-4 mt-2 justify-center md:justify-end">
                  <span className="text-white font-bold font-tufuli hover:text-amber-500 transition-colors cursor-default">
                    حازم النمر
                  </span>
                  <span className="text-amber-500 opacity-50">|</span>
                  <span className="text-white font-bold font-tufuli hover:text-amber-500 transition-colors cursor-default">
                    عادل محمد
                  </span>
                </div>
              </div>
            </div>

            {/* السطر الأخير */}
            <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
              <p className="text-zinc-600 text-sm font-sans tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Nokhbat Al-Sahaba. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
