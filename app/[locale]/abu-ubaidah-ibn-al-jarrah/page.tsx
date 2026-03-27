import { useTranslations } from 'next-intl';


export default function AbuUbaidahIbnAlJarrah() {
    const t = useTranslations('abuUbaidahIbnAlJarrah');
    return (
        <div>
            <h1 className='text-center text-2xl'>{t('title')}</h1>
            
            </div>
    );
}