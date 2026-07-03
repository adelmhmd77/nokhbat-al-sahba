'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
export default function AbdurrahmanPage() {
  const t = useTranslations();
  return (
<main className="bg-[#000000] min-h-screen text-right overflow-hidden select-none selection:bg-amber-900/50">
      
      {/* 🪙 1. سيكشن الـ Hero الافتتاحي 🪙 */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 border-b border-zinc-900">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#140a02_0%,_#040405_75%,_#000000_100%)] opacity-95" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-950/[0.03] blur-[130px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-600 font-sans tracking-[0.6em] text-xs uppercase block font-bold"
          >
            {t('abdurrahman.hero.tag')}
          </motion.span>
          
          <h1 className="text-5xl md:text-8xl font-tufuli text-white leading-tight tracking-wide">
            {t('abdurrahman.hero.title')}
          </h1>

          <p className="text-xl md:text-2xl font-amiri text-zinc-400 max-w-2xl mx-auto leading-relaxed pt-2">
            {t('abdurrahman.hero.subtitle')}
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="w-[1px] h-14 bg-amber-900/30" />
        </div>
      </section>

      {/* 🪙 2. سيكشن النشأة والمولد (توزيعة الدواوين المزدوجة الفاخرة) 🪙 */}
      <section className="relative min-h-screen py-52 px-6 border-b border-zinc-900 bg-[#020203]">
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* شبكة التقسيم الاحترافية لراحة القراءة */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* الجهة اليمنى: عمود السرد التاريخي الممتد والعميق (عرض 7 أعمدة) */}
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6 border-r-0 lg:border-r border-zinc-900">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-600 font-bold tracking-widest block">
                  {t('abdurrahman.biography.tag')}
                </span>
                <h2 className="text-3xl md:text-5xl font-tufuli text-white leading-tight">
                  {t('abdurrahman.biography.title')}
                </h2>
              </div>

              {/* النص الملحمي الطويل - متباعد الأسطر والخطوط مريحة جداً للعين */}
              <p className="text-lg md:text-xl font-amiri text-zinc-300 leading-[2.4] text-justify whitespace-pre-line">
                {t('abdurrahman.biography.desc')}
              </p>
            </div>

            {/* الجهة اليسرى: عمود الصورة والبيانات الأثرية السريعة (عرض 5 أعمدة) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              
              {/* الكادر البصري النظيف (الصورة الطبيعية) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-900 bg-[#050506] group">
                <img 
                  src="/makkah-dawn.jpg" 
                  alt="مكة المكرمة قديماً عند الفجر" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out scale-102 group-hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* لوحة البيانات الأثرية السريعة كوثيقة هامشية */}
              <div className="border border-zinc-900 bg-[#040405] p-6 space-y-4 font-mono text-xs text-zinc-400">
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">DATE OF BIRTH</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.biography.quick_stats.birth')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">THE LINEAGE</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.biography.quick_stats.lineage')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">PRE-ISLAMIC NAME</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.biography.quick_stats.pre_islam_name')}</span>
                </div>
                <div className="flex justify-between items-center pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">SOCIAL STATUS</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.biography.quick_stats.status')}</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* 🪙 3. سيكشن رحلة الهداية والإسلام (توزيعة المحراب المعكوسة الفاخرة) 🪙 */}
      <section className="relative min-h-screen py-52 px-6 border-b border-zinc-900 bg-[#000000]">
        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* الجهة اليمنى: عمود الصورة والتوثيق التاريخي ككتلة بصرية مميزة (عرض 5 أعمدة) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 order-last lg:order-first">
              
              {/* الكادر البصري النظيف */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-900 bg-[#050506] group">
                <img 
                  src="/first-light.jpg" 
                  alt="إشراق فجر الإسلام في مكة" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out scale-102 group-hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* لوحة التوثيق التاريخي السريع */}
              <div className="border border-zinc-900 bg-[#040405] p-6 space-y-4 font-mono text-xs text-zinc-400">
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">ISLAMIC ORDER</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.islam_story.quick_stats.order')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">THE NAME CHANGE</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.islam_story.quick_stats.change_name')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">THE PERSECUTION</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.islam_story.quick_stats.persecution')}</span>
                </div>
                <div className="flex justify-between items-center pb-2 flex-row-reverse">
                  <span className="text-amber-600 font-bold">IMMIGRATION STATUS</span>
                  <span className="font-amiri text-sm text-zinc-300">{t('abdurrahman.islam_story.quick_stats.migration')}</span>
                </div>
              </div>

            </div>

            {/* الجهة اليسرى: عمود السرد الملحمي الممتد (عرض 7 أعمدة) */}
            <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-6 border-l-0 lg:border-l border-zinc-900/50">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-600 font-bold tracking-widest block">
                  {t('abdurrahman.islam_story.tag')}
                </span>
                <h2 className="text-3xl md:text-5xl font-tufuli text-white leading-tight">
                  {t('abdurrahman.islam_story.title')}
                </h2>
              </div>

              {/* السرد الطويل والعميق */}
              <p className="text-lg md:text-xl font-amiri text-zinc-300 leading-[2.4] text-justify whitespace-pre-line">
                {t('abdurrahman.islam_story.desc')}
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}