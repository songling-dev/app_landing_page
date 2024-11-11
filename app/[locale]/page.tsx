import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Header');

    return (
        <main>
            Hello World!
        </main>
    )
}