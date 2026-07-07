"use client";

import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
// 🔮 كامبوننت فرعي مخصص للكروت الشفافة مع خاصية تتبع الماوس والمؤشر المضيء ورا حركة اليد
function TrackedCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`group relative border border-white/[0.03] bg-white/[0.01] backdrop-blur-3xl p-8 md:p-14 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.7)] transition-all duration-500 ${className}`}
    >
      {/* هالة الضوء التي تتبع الماوس بدقة متناهية داخل الكارت */}
      <motion.div
        className="absolute -inset-px rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.12), transparent 80%)`
          ),
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function SaidIbnZaydEpicPage() {
  const t = useTranslations();
  const mainRef = useRef(null);
  
  // شريط التحميل النيوني الممتد عبر السيرة الطويلة جداً
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <main 
      ref={mainRef} 
      className="relative min-h-[400vh] w-full overflow-hidden bg-[#020204] text-white selection:bg-blue-500/30 antialiased"
    >
      {/* 🌌 الخلفية المضيئة الممتدة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(29,78,216,0.12),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute left-1/4 top-[20%] w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute right-1/4 top-[60%] w-[700px] h-[700px] bg-blue-600/[0.03] rounded-full blur-[220px] pointer-events-none" />

      {/* ⚡ خط التحميل النيوني الرأسي */}
      <div className="absolute left-6 md:left-1/2 md:translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-900/50 z-10 hidden md:block">
        <motion.div 
          style={{ scaleY }}
          className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 via-indigo-600 to-transparent origin-top shadow-[0_0_25px_rgba(6,182,212,0.7)]"
        />
      </div>

      {/* 🎬 الفصل 1: شاشة البداية والمقدمة الجليلة */}
      <section className="relative pt-44 pb-32 px-6 z-20 max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center md:text-right space-y-4 mb-24 w-full">
          <div className="inline-flex items-center gap-3 border border-blue-500/20 bg-blue-950/10 backdrop-blur-xl px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-[0.2em]">
              {t('said_story.intro.tag')}
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-blue-100 drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            {t('said_story.intro.title')}
          </h1>
          <p className="text-2xl md:text-3xl font-mono text-cyan-400/80 font-medium">
            {t('said_story.intro.subtitle')}
          </p>
        </div>

        <TrackedCard className="max-w-4xl">
          <p className="text-2xl md:text-4xl font-amiri font-medium text-zinc-300 leading-[2.4] text-center italic">
            {t('said_story.intro.desc')}
          </p>
        </TrackedCard>
      </section>

      {/* 🎬 الفصل 2: التفصيص العميق - قصة الوالد زيد بن عمرو */}
      <section className="relative py-32 px-6 z-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <TrackedCard className="md:col-span-6 space-y-8 hover:border-cyan-500/20">
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/20 group-hover:border-cyan-400 transition-colors" />
            <h2 className="text-3xl md:text-5xl font-bold font-tufuli text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              {t('said_story.detailed_chapters.father_search_title')}
            </h2>
            <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
              {t('said_story.detailed_chapters.father_search_desc1')}
            </p>
          </TrackedCard>

          <div className="hidden md:block md:col-span-1" />

          <TrackedCard className="md:col-span-5 md:mt-24 border-l-blue-500/30">
            <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
              {t('said_story.detailed_chapters.father_search_desc2')}
            </p>
          </TrackedCard>
        </div>
      </section>

      {/* 🎬 الفصل 3: التفصيص العميق - طفولة سعيد ووصية الدم */}
      <section className="relative py-32 px-6 z-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <div className="hidden md:block md:col-span-1" />
          
          <TrackedCard className="md:col-span-5 border-r-blue-500/30 md:mt-16">
            <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
              {t('said_story.detailed_chapters.childhood_legacy_desc1')}
            </p>
          </TrackedCard>

          <div className="hidden md:block md:col-span-1" />

          <TrackedCard className="md:col-span-5 space-y-8 hover:border-blue-500/20">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/20 group-hover:border-blue-400 transition-colors" />
            <h2 className="text-3xl md:text-5xl font-bold font-tufuli text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              {t('said_story.detailed_chapters.childhood_legacy_title')}
            </h2>
            <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
              {t('said_story.detailed_chapters.childhood_legacy_desc2')}
            </p>
          </TrackedCard>
        </div>
      </section>

      {/* 🎬 الفصل 4: الموضوع الجديد - زلزال مكة وإسلام عمر بن الخطاب */}
      <section className="relative py-32 px-6 z-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <TrackedCard className="md:col-span-6 space-y-8 hover:border-cyan-500/20">
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/20 group-hover:border-cyan-400 transition-colors" />
            <h2 className="text-3xl md:text-5xl font-bold font-tufuli text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              {t('said_story.detailed_chapters.omar_islam_title')}
            </h2>
            <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
              {t('said_story.detailed_chapters.omar_islam_desc1')}
            </p>
          </TrackedCard>

          <div className="hidden md:block md:col-span-1" />

          <TrackedCard className="md:col-span-5 md:mt-32 border-l-cyan-500/30">
            <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
              {t('said_story.detailed_chapters.omar_islam_desc2')}
            </p>
          </TrackedCard>
        </div>
      </section>
      {/* 🎬 الفصل 5: العمليات السرية وملحمة اليرموك (نظام الكروت الشفافة المتفرقة العشوائية) */}
      <section className="relative py-40 px-6 z-20 max-w-7xl mx-auto space-y-24">
        
        {/* عنوان ممهد للسيكشن المتفرق */}
        <div className="space-y-4 text-center md:text-right border-r-2 border-cyan-500/30 pr-6 max-w-2xl">
          <span className="text-xs font-mono text-cyan-400 font-bold block uppercase tracking-[0.2em]">
            MILITARY & INTELLIGENCE // الأثر العسكري والاستخباري
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
            مهمات خلف خطوط العدو وزئير يهز اليرموك
          </h2>
        </div>

        {/* شبكة الكروت المتفرقة (Scattered Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* كارت 1: عريض (المهمة المخابراتية في بدر) */}
          <TrackedCard className="md:col-span-7 flex flex-col justify-between hover:border-cyan-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                {t('said_story.detailed_chapters.badr_secret_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.badr_secret_desc1')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 2: أصغر وجانبي (ثواب بدر النبوي) */}
          <TrackedCard className="md:col-span-5 border-b-blue-500/20 bg-gradient-to-br from-blue-950/5 via-transparent to-transparent flex items-center">
            <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
              {t('said_story.detailed_chapters.badr_secret_desc2')}
            </p>
          </TrackedCard>

          {/* كارت 3: متوسط الطول (بداية زلزال اليرموك وخوف الجيش) */}
          <TrackedCard className="md:col-span-5 md:mt-6 border-r-cyan-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-zinc-400">
                هول الموقف وصدمة اللقاء
              </h3>
              <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
                {t('said_story.detailed_chapters.yarmouk_epic_desc1')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 4: عريض وضخم (القتال الانتحاري لسعيد بن زيد) */}
          <TrackedCard className="md:col-span-7 md:mt-6 flex flex-col justify-between hover:border-blue-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                {t('said_story.detailed_chapters.yarmouk_epic_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.yarmouk_epic_desc2')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 5: كارت سفلي ممتد كامل العرض (نتائج معركة اليرموك الأسطورية) */}
          <TrackedCard className="md:col-span-12 hover:border-cyan-500/30 bg-gradient-to-l from-cyan-950/5 via-transparent to-transparent">
            <p className="text-2xl md:text-3xl font-amiri text-zinc-200 leading-[2.4] text-center max-w-5xl mx-auto">
              {t('said_story.detailed_chapters.yarmouk_epic_desc3')}
            </p>
          </TrackedCard>

        </div>
      </section>
      {/* 🎬 الفصل 6: زهد الإمارة وقصة مستجاب الدعوة (تابع الكروت الشفافة المتفرقة العشوائية) */}
      <section className="relative py-40 px-6 z-20 max-w-7xl mx-auto space-y-24">
        
        {/* عنوان ممهد للسيكشن */}
        <div className="space-y-4 text-center md:text-right border-r-2 border-blue-500/30 pr-6 max-w-2xl">
          <span className="text-xs font-mono text-blue-400 font-bold block uppercase tracking-[0.2em]">
            ASCETICISM & SPIRITUALITY // الزهد واستجابة الدعاء
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
            فرار من بريق السلطة ودعوة هزت أرجاء المدينة
          </h2>
        </div>

        {/* شبكة الكروت المتفرقة (Scattered Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* كارت 1: عريض (الهروب من إمارة دمشق) */}
          <TrackedCard className="md:col-span-7 flex flex-col justify-between hover:border-blue-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                {t('said_story.detailed_chapters.damascus_governor_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.damascus_governor_desc1')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 2: جانبي طويل (رسالة سعيد لأبي عبيدة) */}
          <TrackedCard className="md:col-span-5 border-l-cyan-500/20 bg-gradient-to-bl from-cyan-950/5 via-transparent to-transparent flex items-center">
            <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
              {t('said_story.detailed_chapters.damascus_governor_desc2')}
            </p>
          </TrackedCard>

          {/* كارت 3: متوسط (مقدمة محاكمة أروى الظالمة) */}
          <TrackedCard className="md:col-span-5 md:mt-6 border-b-cyan-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-zinc-400">
                افتراء في مجلس الوالي
              </h3>
              <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
                {t('said_story.detailed_chapters.arwa_trial_desc1')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 4: عريض وضخم (الدعاء الأسطوري لسعيد) */}
          <TrackedCard className="md:col-span-7 md:mt-6 flex flex-col justify-between hover:border-cyan-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                {t('said_story.detailed_chapters.arwa_trial_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.arwa_trial_desc2')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 5: كارت سفلي كامل العرض (نهاية القصة والعبرة التاريخية) */}
          <TrackedCard className="md:col-span-12 hover:border-blue-500/30 bg-gradient-to-r from-blue-950/5 via-transparent to-transparent">
            <p className="text-2xl md:text-3xl font-amiri text-zinc-200 leading-[2.4] text-center max-w-5xl mx-auto">
              {t('said_story.detailed_chapters.arwa_trial_desc3')}
            </p>
          </TrackedCard>

        </div>
      </section>
      {/* 🎬 الفصل 7: مواقفه مع الصحابة (توزيع الكروت المتفرقة العشوائية الفخمة) */}
      <section className="relative py-40 px-6 z-20 max-w-7xl mx-auto space-y-24">
        
        {/* عنوان السيكشن */}
        <div className="space-y-4 text-center md:text-right border-r-2 border-cyan-500/30 pr-6 max-w-2xl">
          <span className="text-xs font-mono text-cyan-400 font-bold block uppercase tracking-[0.2em]">
            BROTHERHOOD & LOYALTY // مواقفه مع الخلفاء والصحابة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
            سند الصديق، ودموع الوفاء للفاروق، وسيف ذي النورين
          </h2>
        </div>

        {/* شبكة الكروت المتفرقة العشوائية */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* كارت 1: طويل (موقفه مع أبو بكر الصديق) */}
          <TrackedCard className="md:col-span-5 flex flex-col justify-between hover:border-cyan-500/20">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-mono rounded-md">
                ABU BAKR // الصديق
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white">
                {t('said_story.detailed_chapters.said_with_abu_bakr_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.said_with_abu_bakr_desc')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 2: عريض وضخم (موقفه المزلزل مع عمر بن الخطاب) */}
          <TrackedCard className="md:col-span-7 flex flex-col justify-between hover:border-blue-500/20 border-b-blue-500/30">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-sm font-mono rounded-md">
                OMAR // الفاروق
              </div>
              <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                {t('said_story.detailed_chapters.said_with_omar_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-200 leading-[2.4] text-justify italic">
                {t('said_story.detailed_chapters.said_with_omar_desc')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 3: ممتد بكامل العرض (موقفه الناري بعد استشهاد عثمان بن عفان) */}
          <TrackedCard className="md:col-span-12 hover:border-cyan-500/30 bg-gradient-to-l from-cyan-950/5 via-transparent to-transparent">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3 space-y-2">
                <div className="inline-block px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-mono rounded-md">
                  OTHMAN // ذو النورين
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white">
                  {t('said_story.detailed_chapters.said_with_othman_title')}
                </h3>
              </div>
              <div className="md:col-span-9">
                <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                  {t('said_story.detailed_chapters.said_with_othman_desc')}
                </p>
              </div>
            </div>
          </TrackedCard>

        </div>
      </section>
      {/* 🎬 الفصل 8: أقواله الخالصة والتحليل العسكري والأرقام */}
      <section className="relative py-40 px-6 z-20 max-w-7xl mx-auto space-y-32">
        
        {/* القسم الفرعي الأول: الأقوال الخالدة */}
        <div className="space-y-16">
          <div className="space-y-4 text-center md:text-right border-r-2 border-cyan-500/30 pr-6 max-w-2xl">
            <span className="text-xs font-mono text-cyan-400 font-bold block uppercase tracking-[0.2em]">
              WORDS OF ETERNITY // أقواله الخالدة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
              كلمات زلزلت الفتن ووزنت منازل الرجال
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* كارت قول الكوفة */}
            <TrackedCard className="md:col-span-7 flex flex-col justify-between hover:border-cyan-500/20">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-cyan-400">
                  {t('said_story.detailed_chapters.quote_kufa_title')}
                </h3>
                <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                  {t('said_story.detailed_chapters.quote_kufa_desc')}
                </p>
              </div>
            </TrackedCard>

            {/* كارت حديث العشرة المبشرين بالجنة */}
            <TrackedCard className="md:col-span-5 flex flex-col justify-between hover:border-blue-500/20 bg-gradient-to-br from-blue-950/5 via-transparent to-transparent">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-blue-400">
                  {t('said_story.detailed_chapters.quote_paradise_title')}
                </h3>
                <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
                  {t('said_story.detailed_chapters.quote_paradise_desc')}
                </p>
              </div>
            </TrackedCard>
          </div>
        </div>

        {/* القسم الفرعي الثاني: الجزء التحليلي الرقمي للغزوات والفتوحات */}
        <div className="space-y-16">
          <div className="space-y-4 text-center md:text-right border-r-2 border-blue-500/30 pr-6 max-w-2xl">
            <span className="text-xs font-mono text-blue-400 font-bold block uppercase tracking-[0.2em]">
              MILITARY ANALYSIS // التقرير العسكري والتحليلي
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
              تحليل المسيرة: من جبال مكة إلى حصون الروم
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* كارت تحليل الغزوات */}
            <TrackedCard className="md:col-span-6 space-y-6 hover:border-blue-500/20">
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white">
                  {t('said_story.detailed_chapters.battles_count_title')}
                </h3>
                <span className="text-5xl font-mono font-bold text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  100%
                </span>
              </div>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.battles_count_desc')}
              </p>
            </TrackedCard>

            {/* كارت تحليل الفتوحات */}
            <TrackedCard className="md:col-span-6 space-y-6 hover:border-cyan-500/20">
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white">
                  {t('said_story.detailed_chapters.conquests_title')}
                </h3>
                <span className="text-5xl font-mono font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  +4
                </span>
              </div>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.conquests_desc')}
              </p>
            </TrackedCard>

          </div>
        </div>

      </section>
      {/* كارت المفارقة العائلية والنسب */}
          <TrackedCard className="md:col-span-6 flex flex-col justify-between hover:border-cyan-500/20 bg-gradient-to-tr from-cyan-950/5 via-transparent to-transparent">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-mono rounded-md">
                FAMILY & KINSHIP // مفارقة النسب
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white">
                {t('said_story.detailed_chapters.family_irony_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.family_irony_desc')}
              </p>
            </div>
          </TrackedCard>
          {/* 🎬 الفصل 9: مواقف عجيبة وكرامات (نظام الكروت الشفافة المتفرقة) */}
      <section className="relative py-40 px-6 z-20 max-w-7xl mx-auto space-y-24">
        
        {/* عنوان السيكشن */}
        <div className="space-y-4 text-center md:text-right border-r-2 border-cyan-500/30 pr-6 max-w-2xl">
          <span className="text-xs font-mono text-cyan-400 font-bold block uppercase tracking-[0.2em]">
            WONDERS & MIRACLES // كرامات ومواقف عجيبة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
            مواقف خارقة للعادة أذهلت أهل المدينة
          </h2>
        </div>

        {/* شبكة الكروت المتفرقة */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* كارت 1: عريض وضخم (عجيبة الدعاء على أروى) */}
          <TrackedCard className="md:col-span-7 flex flex-col justify-between hover:border-cyan-500/20">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-mono rounded-md">
                THE ANSWERED PRAYER // الدعوة المستجابة
              </div>
              <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                {t('said_story.detailed_chapters.said_prayer_wonder_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.said_prayer_wonder_desc')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 2: كارت جانبي (عجيبة رائحة المسك عند الوفاة) */}
          <TrackedCard className="md:col-span-5 flex flex-col justify-between hover:border-blue-500/20 bg-gradient-to-br from-blue-950/5 via-transparent to-transparent">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-950/40 border border-blue-500/30 text-blue-400 text-sm font-mono rounded-md">
                THE ODOR OF MUSK // رائحة المسك
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white">
                {t('said_story.detailed_chapters.said_death_wonder_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
                {t('said_story.detailed_chapters.said_death_wonder_desc')}
              </p>
            </div>
          </TrackedCard>

        </div>
      </section>
      {/* 🎬 الفصل 10 والأخير: الوفاة وقصيدة الرثاء */}
      <section className="relative py-40 px-6 z-20 max-w-7xl mx-auto space-y-24">
        
        {/* عنوان الختام */}
        <div className="space-y-4 text-center md:text-right border-r-2 border-red-500/30 pr-6 max-w-2xl">
          <span className="text-xs font-mono text-red-400 font-bold block uppercase tracking-[0.2em]">
            THE FINAL CHAPTER // الوفاة والرحيل
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
            ترجل الفارس وانطواء صفحة العقيق
          </h2>
        </div>

        {/* شبكة الكروت المتفرقة */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* كارت 1: عريض وضخم (تفاصيل مشهد الوفاة) */}
          <TrackedCard className="md:col-span-7 flex flex-col justify-between hover:border-red-500/20 bg-gradient-to-br from-red-950/5 via-transparent to-transparent">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-red-950/40 border border-red-500/30 text-red-400 text-sm font-mono rounded-md">
                51 AH // ٥١ للهجرة
              </div>
              <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-red-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                {t('said_story.detailed_chapters.death_moment_title')}
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                {t('said_story.detailed_chapters.death_moment_desc')}
              </p>
            </div>
          </TrackedCard>

          {/* كارت 2: كارت جانبي طويل مخصص لأبيات القصيدة */}
          <TrackedCard className="md:col-span-5 flex flex-col justify-center items-center hover:border-zinc-500/30 border-dashed border-white/10">
            <div className="space-y-8 w-full text-center">
              <div className="inline-block px-3 py-1 bg-zinc-950/40 border border-zinc-500/30 text-zinc-400 text-sm font-mono rounded-md uppercase tracking-wider">
                POEM OF LAMENT // أبيات الرثاء
              </div>
              
              <h3 className="text-2xl font-bold font-tufuli text-zinc-200">
                {t('said_story.detailed_chapters.elegy_poem_title')}
              </h3>
              
              {/* تنسيق أبيات الشعر المفرقة داخل الكارت */}
              <div className="text-2xl font-amiri text-cyan-400/90 leading-[2.6] whitespace-pre-line bg-zinc-900/20 p-6 rounded-xl border border-white/[0.02]">
                {t('said_story.detailed_chapters.elegy_poem_desc')}
              </div>
            </div>
          </TrackedCard>

        </div>
      </section>
<section className="relative py-32 px-6 z-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-r from-blue-950/10 via-transparent to-cyan-950/10 p-12 rounded-3xl border border-white/[0.03] backdrop-blur-sm">
          
          <div className="md:col-span-8 space-y-6">
            <span className="text-xs font-mono text-cyan-400 font-bold block uppercase tracking-[0.2em]">
              {t('said_story.detailed_chapters.next_companion_tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-tufuli text-white">
              {t('said_story.detailed_chapters.next_companion_title')}
            </h2>
            <p className="text-2xl font-amiri text-zinc-400 leading-[2.2] text-justify">
              {t('said_story.detailed_chapters.next_companion_desc')}
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end">
  <Link 
    href="/abu-ubaidah-ibn-al-jarrah"  
    className="inline-flex items-center gap-2 px-6 py-4 border border-cyan-500/30 bg-cyan-500/10 text-xs font-mono text-cyan-400 font-bold tracking-wider hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-105 text-center"
  >
    GO TO CHAPTER // ABU UBAIDAH ←
  </Link>
</div>
        </div>
      </section>
    </main>
  );
}