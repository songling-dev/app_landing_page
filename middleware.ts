import { defaultLocale, localePrefix, locales } from "./i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: localePrefix
});

export const config = {
    matcher: [
        '/((?!_next|_vercel|api|.*\\..*).*)',
    ]
}