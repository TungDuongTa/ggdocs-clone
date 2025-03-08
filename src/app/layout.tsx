import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";

const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Google Docs Clone",
  description: "A clone of Google Docs built with Next.js",
  keywords: "Google Docs, Clone, Next.js, Collaborative Editing",
  authors: [{ name: "Tung Duong Ta", url: "https://ggdocs-clone.vercel.app/" }],
  openGraph: {
    title: "Google Docs Clone",
    description: "A clone of Google Docs built with Next.js",
    url: "https://ggdocs-clone.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Google Docs Clone" />
        <meta
          property="og:description"
          content="A clone of Google Docs built with Next.js"
        />
        <meta property="og:url" content="https://ggdocs-clone.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
