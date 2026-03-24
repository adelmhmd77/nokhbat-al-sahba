import type { Metadata } from "next";
import "./globals.css";
import { lemonbrush, tufuli } from "./fonts";

export const metadata: Metadata = {
  title: "Nokhbet El Sahb",
  description: "Biographies of the Sahaba",
};
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${lemonbrush.variable} ${tufuli.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
