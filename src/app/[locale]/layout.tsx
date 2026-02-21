import type { Metadata } from "next";
import { GTProvider } from "gt-next";
import { getGT } from "gt-next/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";
import ToastContainer from "@/components/Toast";
import "./globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();
  const title = gt("BuildRight Hardware | General Translation");
  const description = gt("A demo hardware store showcasing internationalization with General Translation. Browse tools, lumber, paint, and more.");
  return {
    title,
    description,
    openGraph: { title, description, locale, type: "website", siteName: "General Translation" },
    twitter: { card: "summary", title, description },
    alternates: {
      canonical: "https://hardware-store.generaltranslation.dev",
      languages: { en: "/en", es: "/es", fr: "/fr", ja: "/ja", zh: "/zh" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className="antialiased bg-white min-h-screen flex flex-col">
        <GTProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToastContainer />
          </CartProvider>
        </GTProvider>
      </body>
    </html>
  );
}
