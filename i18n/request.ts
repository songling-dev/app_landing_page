import { IntlErrorCode } from "next-intl";
import { Pathnames } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ['en', 'nl', 'fr'] as const;

export const localePrefix = "as-needed";

export const localeNames: object = {
    en: '🇺🇸 English',
    nl: '🇳🇱 Nederlands',
    fr: '🇫🇷 Français'
};

export const pathnames = {
    '/': '/',
} satisfies Pathnames<typeof locales>;

export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../assets/locales/${locale}.json`)).default,
        onError(error) {
            console.error(error);
        },
        getMessageFallback({ namespace, key, error }) {
            let path = [namespace, key].filter((part) => part != null).join('.');
            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                return path += 'is not yet translated';
            } else {
                return 'Dear developer, please fix this message: ' + path;
            }
        },
    }
})