'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
export default function AbdurrahmanPage() {
  const t = useTranslations();
  const canvasRef = useRef(null);
  return (
<main className="bg-[#000000] min-h-screen text-right overflow-hidden select-none selection:bg-amber-900/50">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen" />
      {/* 🪙 1. سيكشن الـ Hero الافتتاحي 🪙 */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 border-b border-zinc-900">
<div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#160c02_0%,_#030304_80%,_#000000_100%)] opacity-85" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/[0.02] blur-[150px]" />
        </div>

<div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          {/* العنوان الأساسي المدمج باللون الذهبي الماسي اللامع الجديد */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
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
{/* 🪙 4. سيكشن ملحمة السوق وبناء الثروة (تحديث الألوان الفاخرة عالية التباين) 🪙 */}
      <section className="relative min-h-screen py-52 px-6 border-b border-zinc-900 overflow-hidden bg-[#030304]">
        
        {/* ☄️ منظومة الخلفية الحية المتحركة */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-500/10 blur-[120px] animate-[pulse_8s_infinite_ease-in-out]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-yellow-600/[0.07] blur-[150px] animate-[pulse_12s_infinite_ease-in-out_1s]" />
          <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-amber-600/[0.05] blur-[100px] animate-[pulse_10s_infinite_ease-in-out_2s]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* الجهة اليمنى: عمود السرد الاقتصادي الممتد */}
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6 border-r-0 lg:border-r border-zinc-900/60">
              <div className="space-y-4">
                {/* التاجر الصغير فوق العنوان - أصبح بلون ذهبي ساطع وواضح */}
                <span className="text-xs font-mono text-amber-400 font-bold tracking-widest block">
                  {t('abdurrahman.market_legacy.tag')}
                </span>
                
                {/* ✨ العنوان الجديد: ذهب أبيض كريستالي ساطع جداً وعالي التباين */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  {t('abdurrahman.market_legacy.title')}
                </h2>
              </div>

              {/* ✍️ الفقرات الجديدة: لون العاج الناصع الشديد المقروئية والوضوح التام */}
              <p className="text-xl md:text-2xl font-amiri text-[#f4f4f6] font-medium leading-[2.3] text-justify whitespace-pre-line tracking-wide">
                {t('abdurrahman.market_legacy.desc')}
              </p>
            </div>

            {/* الجهة اليسرى: عمود الصورة والبيانات الاقتصادية */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              
              {/* الكادر البصري */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-900 bg-[#050506] group shadow-2xl">
                <img 
                  src="/market-empire.jpg" 
                  alt="التجارة والقوافل في سوق المدينة القديم" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-700 ease-out scale-102 group-hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030304] via-[#030304]/40 to-transparent" />
              </div>

              {/* لوحة البيانات الوثائقية - نصوص داخلية بيضاء ناصعة */}
              <div className="border border-zinc-900/80 bg-[#050506]/90 p-6 space-y-4 font-mono text-xs text-zinc-400 backdrop-blur-md shadow-xl shadow-black/50">
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">THE BROTHERHOOD</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.market_legacy.quick_stats.brotherhood')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">THE GOLDEN MOTTO</span>
                  <span className="font-amiri text-base text-amber-100 font-medium">{t('abdurrahman.market_legacy.quick_stats.principle')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">FIRST INVESTMENT</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.market_legacy.quick_stats.first_trade')}</span>
                </div>
                <div className="flex justify-between items-center pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">FINAL OUTCOME</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.market_legacy.quick_stats.result')}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* 🪙 5. سيكشن الإنفاق الإعجازي وقافلة الـ 700 جمل 🪙 */}
      <section className="relative min-h-screen py-52 px-6 border-b border-zinc-900 overflow-hidden bg-[#030304]">
        
        {/* ☄️ الخلفية الحية النظيفة (نبضات الضوء الكهرماني الخفيف في العمق) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          <div className="absolute top-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-amber-500/10 blur-[130px] animate-[pulse_9s_infinite_ease-in-out]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-yellow-600/[0.06] blur-[140px] animate-[pulse_11s_infinite_ease-in-out_2s]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* عكسنا التوزيعة (هنا الصورة على اليمين والسرد على اليسار) لخلق توازن بصري مبهر أثناء التمرير */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* الجهة اليمنى: عمود الصورة والبيانات (عرض 5 أعمدة) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 order-last lg:order-first">
              
              {/* كادر الصورة */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-900 bg-[#050506] group shadow-2xl">
                <img 
                  src="/infinite-charity.jpg" 
                  alt="قوافل الإبل والإنفاق الأسطوري في المدينة" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-700 ease-out scale-102 group-hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030304] via-[#030304]/40 to-transparent" />
              </div>

              {/* لوحة البيانات الإحصائية (Glassmorphism الفاخر عالي التباين) */}
              <div className="border border-zinc-900/80 bg-[#050506]/90 p-6 space-y-4 font-mono text-xs text-zinc-400 backdrop-blur-md shadow-xl shadow-black/50">
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">TABUK EXPEDITION</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.charity_legacy.quick_stats.tabuk')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">700 CAMELS CARAVAN</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.charity_legacy.quick_stats.the_caravan')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">THE LAST WILL</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.charity_legacy.quick_stats.will')}</span>
                </div>
                <div className="flex justify-between items-center pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">SECRET OF BLESSING</span>
                  <span className="font-amiri text-base text-amber-100 font-medium">{t('abdurrahman.charity_legacy.quick_stats.blessing')}</span>
                </div>
              </div>

            </div>

            {/* الجهة اليسرى: عمود السرد الملحمي للإنفاق (عرض 7 أعمدة) */}
            <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-6 border-l-0 lg:border-l border-zinc-900/50">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 font-bold tracking-widest block">
                  {t('abdurrahman.charity_legacy.tag')}
                </span>
                
                {/* 💎 تطبيق الستايل الماسي اللامع الجديد الذي اعتمدته للعنوان 💎 */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  {t('abdurrahman.charity_legacy.title')}
                </h2>
              </div>

              {/* ✍️ تطبيق لون العاج الفاخر عالي المقروئية والوضوح للفقرة ✍️ */}
              <p className="text-xl md:text-2xl font-amiri text-[#f4f4f6] font-medium leading-[2.3] text-justify whitespace-pre-line tracking-wide">
                {t('abdurrahman.charity_legacy.desc')}
                
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 🪙 6. سيكشن الخاتمة والرحيل الشريف 🪙 */}
      <section className="relative min-h-screen py-52 px-6 overflow-hidden bg-[#030304]">
        
        {/* ☄️ الخلفية الحية النبضية */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/[0.08] blur-[130px] animate-[pulse_10s_infinite_ease-in-out]" />
          <div className="absolute top-[-10%] right-[20%] w-[45vw] h-[45vw] rounded-full bg-amber-500/[0.04] blur-[120px] animate-[pulse_8s_infinite_ease-in-out_1s]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* نعود للتوزيعة الأصلية: السرد يمين والصورة والبطاقة يسار لإغلاق الصفحة بتوازن إيقاعي */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* الجهة اليمنى: عمود السرد التاريخي للخاتمة (عرض 7 أعمدة) */}
            <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6 border-r-0 lg:border-r border-zinc-900/60">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 font-bold tracking-widest block">
                  {t('abdurrahman.final_legacy.tag')}
                </span>
                
                {/* 💎 الستايل الماسي المعتمد من طرفك للعنوان الرئيسي 💎 */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  {t('abdurrahman.final_legacy.title')}
                </h2>
              </div>

              {/* ✍️ خط العاج الفاخر الناصع وعالي المقروئية ✍️ */}
              <p className="text-xl md:text-2xl font-amiri text-[#f4f4f6] font-medium leading-[2.3] text-justify whitespace-pre-line tracking-wide">
                {t('abdurrahman.final_legacy.desc')}
              </p>
            </div>

            {/* الجهة اليسرى: عمود الصورة والبيانات (عرض 5 أعمدة) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              
              {/* كادر الصورة التعبيري */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-900 bg-[#050506] group shadow-2xl">
                <img 
                  src="/sacred-departure.jpg" 
                  alt="الوداع الشريف وتاريخ البقيع بالمدينة المنورة" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-700 ease-out scale-102 group-hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030304] via-[#030304]/40 to-transparent" />
              </div>

              {/* لوحة البيانات الإحصائية النهائية (Glassmorphism عالي التباين) */}
              <div className="border border-zinc-900/80 bg-[#050506]/90 p-6 space-y-4 font-mono text-xs text-zinc-400 backdrop-blur-md shadow-xl shadow-black/50">
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">THE WEEPING ASCETIC</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.final_legacy.quick_stats.weeping')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">RESTING PLACE</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.final_legacy.quick_stats.burial')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-900/60 pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">THE INHERITANCE</span>
                  <span className="font-amiri text-base text-white font-medium">{t('abdurrahman.final_legacy.quick_stats.inheritance')}</span>
                </div>
                <div className="flex justify-between items-center pb-2 flex-row-reverse">
                  <span className="text-amber-400 font-bold">THE ETERNAL GLORY</span>
                  <span className="font-amiri text-base text-amber-100 font-medium">{t('abdurrahman.final_legacy.quick_stats.paradise')}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* 🪙 7. سيكشن المقولة الختامية والتشويق للصحابي القادم 🪙 */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#020203] border-t border-zinc-900/80">
        
        {/* تأثيرات ضوئية ميتاليك خلف السيكشن */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vw] rounded-full bg-gradient-to-r from-amber-500/5 to-blue-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-16">
          
          {/* 🔗 الجزء الأول: المقولة الختامية القوية */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <span className="text-xs font-mono text-amber-400 font-bold tracking-widest block">
              {t('abdurrahman.abdurrahman_epilogue.tag')}
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-200 leading-relaxed drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] font-medium p-4 border-x border-zinc-900/60">
              {t('abdurrahman.abdurrahman_epilogue.quote')}
            </blockquote>
          </div>

          {/* خط فاصل ناعم بين المقولة والتشويق */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto" />

          {/* 🏹 الجزء الثاني: التمهيد والتشويق لسعد بن أبي وقاص */}
          <div className="max-w-3xl mx-auto space-y-6 bg-[#050506]/40 p-8 border border-zinc-900/60 backdrop-blur-sm rounded-sm">
            <span className="text-xs font-mono text-blue-400 font-bold tracking-widest block animate-pulse">
              {t('abdurrahman.abdurrahman_epilogue.teaser_title')}
            </span>
            
            {/* عنوان تشويقي بالستايل الماسي الصافي المعتمد */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              المحطة القادمة: أول من رمى بسهم في الإسلام
            </h3>

            {/* النص العاجي الفاخر عالي المقروئية والوضوح */}
            <p className="text-lg md:text-xl font-amiri text-[#e4e4e7] leading-[2] text-center">
              {t('abdurrahman.abdurrahman_epilogue.teaser_desc')}
            </p>

            {/* زر انتقال تفاعلي سريع للصحابي القادم */}
            <div className="pt-4">
               <Link href="/saad-ibn-abi-waqqas"  
                
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-900/40 bg-blue-950/10 text-xs font-mono text-blue-400 font-bold tracking-wider hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
              >
                GO TO CHAPTER II // SAAD IBN ABI WAQQAS ←
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}