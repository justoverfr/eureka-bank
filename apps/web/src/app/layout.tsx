import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import '/public/static/css/style.css';
import '/public/static/css/font-awesome-all.min.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-quill/dist/quill.snow.css';

import Chatbot from '@/components/chat-bot/chatbot';
import ServiceWorker from '@/components/sw/sw';
import { NextAuthProvider } from '@/providers/next-auth-provider';
import ThemeProvider from '@/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Chatbot />
            <ServiceWorker />
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
