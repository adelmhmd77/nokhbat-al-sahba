import { useTranslations } from 'next-intl';


export default function AliIbnAbiTalib() {
    const t = useTranslations('aliIbnAbiTlib');

    return (
        <div>
            
            <h1>{t('title')}</h1>
            
            </div>
    );
}