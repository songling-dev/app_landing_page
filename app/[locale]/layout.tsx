import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/utils/cn";
import '@/assets/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-schema: light)', color: 'white' },
        { media: '(prefers-color-schema: light)', color: 'white' },
    ]
}

type Props = {
    children: ReactNode;
    params: { locale: string }
};

export default async function RootLayout({
    children,
    params: { locale },
}: Props) {
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <title>Tim Claes</title>
                <meta name="description" content="Your page description goes here" />
            </head>
            <body className={
                cn('h-full min-h-screen w-full bg-background antialiased', inter.className)
            }>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}