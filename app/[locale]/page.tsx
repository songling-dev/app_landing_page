import { useTranslations } from 'next-intl';
import AnimationLogo from '@/components/header/AnimationLogo';

export default function Home() {
    const t = useTranslations('Header');

    return (
        <main>
            <AnimationLogo className='h-40 w-40 shadow-lg' />
        </main>
    )
}