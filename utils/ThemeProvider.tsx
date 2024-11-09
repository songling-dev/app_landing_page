'use client'

import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemeProviderProps } from 'next-themes';

export default function ThemeProvider({ children, ...props }: React.PropsWithChildren<NextThemeProviderProps>) {
    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    )
}