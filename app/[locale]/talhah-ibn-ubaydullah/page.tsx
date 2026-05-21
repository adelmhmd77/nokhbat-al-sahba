'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { span } from 'framer-motion/client';
import GoldenVortexScene from '@/app/components/GoldenVortexScene';
import GoldenRandomNexus from '@/app/components/GoldenVortexScene';
export default function TalhahIbnUbaydullah() {
  const t = useTranslations('talha');
  const stageKeys: string[] = ['one', 'two', 'three', 'four'];

  return (
    <main className="bg-[#020617] min-h-screen text-[#e2e8f0] selection:bg-[#d4af37] selection:text-black font-sans">
      
      {/* طبقة الـ Noise اللي بتدي إحساس الأفلام */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('/noise.png')]" />

      {/* --- Section 1: Hero Section (The IP Branding) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-[#d4af37]/10">
        
        {/* الخلفية: توهج "شمسي" خلف النصوص */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020617] to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          
          {/* Badge: ستايل عسكري حديث */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-block"
          >
            <span className="text-[#94a3b8] text-xs md:text-sm font-bold uppercase border-x border-[#d4af37]/40 px-4 py-1">
              {t('hero.subtitle')}
            </span>
          </motion.div>

          {/* العنوان الرئيسي: Gold Gradient & Shadow */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-[11rem] font-tufuli leading-none tracking-tight mb-8">
              <span className="bg-gradient-to-b from-[#fde68a] via-[#d4af37] to-[#b45309] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(180,83,9,0.3)]">
                {t('hero.title')}
              </span>
            </h1>
          </motion.div>

          {/* الوصف: Steel Teal Color */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl font-amiri text-[#94a3b8] max-w-3xl mx-auto leading-[1.8] relative"
          >
             {/* لمسة "الدرع": خط جانبي ذهبي رفيع */}
            <span className="absolute -right-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/50 to-transparent" />
            {t('hero.description')}
          </motion.p>

          {/* زرار تفاعلي بستايل الـ Cinematic UI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <button className="relative group px-12 py-4 overflow-hidden border border-[#d4af37]/30 bg-white/5 backdrop-blur-md transition-all hover:border-[#d4af37]">
              <div className="absolute inset-0 w-0 bg-[#d4af37] transition-all duration-500 ease-out group-hover:w-full opacity-10" />
              <span className="relative text-[#d4af37] font-tufuli tracking-widest text-lg">استكشف الملحمة</span>
            </button>
          </motion.div>

        </div>

        {/* زخرفة تقنية خفيفة في الأركان */}
        <div className="absolute bottom-10 right-10 flex gap-4 items-center opacity-20">
          <div className="text-right">
            <p className="text-[10px] text-[#d4af37] tracking-[0.3em] uppercase">Status</p>
            <p className="text-xs text-white">LIVE MARTYR</p>
          </div>
          <div className="w-10 h-[1px] bg-[#d4af37]" />
        </div>
      </section>
      {/* --- Section 2: Identity & Physical (الملف التعريفي) --- */}
      <section className="py-24 px-6 relative bg-black/50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* النص: النشأة والنسب */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              className="space-y-6 text-right order-1 lg:order-1"
            >
              <h2 className="text-[#d4af37] font-tufuli text-4xl md:text-5xl mb-4">{t('identity.title')}</h2>
              <div className="h-1 w-24 bg-gradient-to-l from-[#d4af37] to-transparent mb-8" />
              <p className="text-2xl md:text-3xl font-tufuli leading-loose text-slate-300">
                {t('identity.origin')}
              </p>
            </motion.div>

            {/* الكروت: المظهر الجسدي */}
            <div className="grid gap-6 order-2 lg:order-2">
              {[
                { title: 'البنية والقوام', text: t('identity.traits.stature') },
                { title: 'الملامح والوجه', text: t('identity.traits.face') },
                { title: 'الهيبة والحركة', text: t('identity.traits.movement') }
              ].map((trait, index) => (
                <motion.div 
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/[0.03] border-r-4 border-[#d4af37] p-8 rounded-l-2xl hover:bg-white/[0.07] transition-all group"
                >
                  <h4 className="text-[#d4af37] font-tufuli text-xl mb-3 group-hover:tracking-widest transition-all">
                    {trait.title}
                  </h4>
                  <p className="font-tufuli text-slate-400 text-xl leading-relaxed">
                    {trait.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
        
        {/* خلفية فنية (Watermark) */}
        <div className="absolute left-[-5%] bottom-[-5%] opacity-[0.03] pointer-events-none select-none">
          <h3 className="text-[15rem] font-black italic tracking-tighter">TALHA</h3>
        </div>
      </section>
      {/* --- Section 3: Relationships (الروابط والميثاق) --- */}
      <section className="py-32 px-6 relative bg-[#020617] overflow-hidden">
        
        {/* تأثير ضوئي جانبي (توهج النور) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#d4af37] font-tufuli text-center text-4xl md:text-5xl mb-20 tracking-wider"
          >
            {t('relationships.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 relative">
            
            {/* الخط الواصل بين المرحلتين */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37]/5 to-transparent hidden md:block" />

            {/* قبل الإسلام: الصدق والمكانة */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] p-10 rounded-3xl border border-white/5 hover:border-[#d4af37]/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-3 h-3 bg-slate-600 rounded-full group-hover:bg-[#d4af37] transition-colors" />
                 <h3 className="text-2xl font-tufuli text-slate-200">{t('relationships.preIslam.title')}</h3>
              </div>
              <p className="text-xl font-tufuli leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors">
                {t('relationships.preIslam.desc')}
              </p>
            </motion.div>

            {/* نقطة التحول: التمهيد للإسلام */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-10 rounded-3xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37]" />
                 <h3 className="text-2xl font-tufuli text-[#d4af37]">{t('relationships.transition.title')}</h3>
              </div>
              <p className="text-xl font-tufuli leading-relaxed text-slate-300 group-hover:text-white transition-colors">
                {t('relationships.transition.desc')}
              </p>
            </motion.div>

          </div>

          {/* اقتباس بسيط يربط السيكشن باللي جاي */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center italic"
          >
            <p className="text-slate-500 font-tufuli text-lg">
             من أراد أن ينظر إلى شهيد يمشي على وجه الأرض، فلينظر إلى طلحة بن عبيد الله
              <span className="block text-[#d4af37] mt-2 font-tufuli not-italic text-sm">— النبي محمد ﷺ</span>
            </p>
          </motion.div>
        </div>
      </section>
      <section className="relative py-40 px-6 bg-black overflow-hidden border-t border-[#d4af37]/5">
        
        {/* الـ 3D Scene: الدوامة الذهبية النورانية */}
        <div className="absolute inset-0 z-0 opacity-80">
          <GoldenVortexScene />
        </div>

        {/* طبقة Noise للتعتيم الفني */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay z-10" />

        <div className="relative z-20 max-w-6xl mx-auto space-y-24">
          
          {/* العنوان: بستايل بزوغ النور */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-8xl font-tufuli leading-none">
              <span className="bg-gradient-to-b from-white via-[#d4af37] to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                {t('awakening.title')}
              </span>
            </h2>
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* القصة: كارت Glassmorphism */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              className="p-10 bg-white/[0.02] backdrop-blur-lg border border-white/5 rounded-[3rem] text-right space-y-6 group hover:border-[#d4af37]/30 transition-all duration-700"
            >
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-4 h-4 rounded-full bg-slate-700 group-hover:bg-[#d4af37] transition-colors" />
                 <h3 className="text-3xl font-tufuli text-slate-100">{t('awakening.story.title')}</h3>
              </div>
              <p className="text-2xl font-tufuli leading-relaxed text-slate-300 group-hover:text-white transition-colors">
                {t('awakening.story.text')}
              </p>
            </motion.div>

            {/* الأثر: كارت Glassmorphism مميز بالذهب */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              className="p-10 bg-[#d4af37]/5 backdrop-blur-lg border border-[#d4af37]/10 rounded-[3rem] text-right space-y-6 group hover:border-[#d4af37]/40 transition-all duration-700 md:mt-12"
            >
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_15px_#d4af37]" />
                 <h3 className="text-3xl font-tufuli text-white">{t('awakening.impact.title')}</h3>
              </div>
              <p className="text-2xl font-tufuli leading-relaxed text-white group-hover:text-[#d4af37] transition-colors">
                {t('awakening.impact.text')}
              </p>
            </motion.div>

          </div>

          {/* مسك الختام لسيكشن الإسلام */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center pt-20"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
            <p className="text-2xl md:text-3xl font-tufuli text-[#d4af37] mt-8 tracking-wider">الشهيد الحي على الأرض</p>
          </motion.div>

        </div>
      </section>
<section className="relative py-32 px-6 overflow-hidden bg-black border-t border-white/5">
      
      {/* الخلفية الـ 3D العشوائية (تمثل تشتت قريش وصمود طلحة) */}
      <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
        <GoldenRandomNexus />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* العنوان الرئيسي الساعي للثبات */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-[#d4af37] font-tufuli text-5xl md:text-7xl mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            {t('persecution.title')}
          </h2>
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* كارت: غليان قريش (ستايل داكن وحاد) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="group relative p-10 bg-white/[0.02] border border-white/10 rounded-br-[4rem] transition-all hover:bg-white/[0.05]"
          >
            <div className="absolute top-0 right-0 w-2 h-16 bg-[#d4af37] opacity-50" />
            <h3 className="text-3xl font-tufuli text-white mb-6 flex items-center gap-4">
              <span className="text-[#d4af37] font-sans">01.</span>
              {t('persecution.status.title')}
            </h3>
            <p className="text-2xl font-tufuli text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
              {t('persecution.status.desc')}
            </p>
          </motion.div>

          {/* كارت: القرينان (ستايل ذهبي قوي) */}
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-10 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-tl-[4rem] transition-all hover:border-[#d4af37]/50"
          >
            <div className="absolute bottom-0 left-0 w-2 h-16 bg-[#d4af37]" />
            <h3 className="text-3xl font-tufuli text-[#d4af37] mb-6 flex items-center gap-4">
              <span className="text-white/40 font-sans">02.</span>
              {t('persecution.theBond.title')}
            </h3>
            <p className="text-2xl font-tufuli text-slate-300 leading-relaxed group-hover:text-white transition-colors">
              {t('persecution.theBond.desc')}
            </p>
          </motion.div>

        </div>

        {/* تلميح بصري (The Rope Symbolism) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          className="mt-20 flex justify-center"
        >
          <div className="w-1 h-32 bg-gradient-to-b from-[#d4af37] via-transparent to-transparent" />
        </motion.div>

      </div>
    </section>
    <section className="relative py-32 px-6 overflow-hidden bg-[#020617]">
      
      {/* تأثير "خيوط القدر" في الخلفية */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <GoldenRandomNexus />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* عنوان السيكشن بستايل "الدرب" */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-20"
        >
          <h2 className="text-[#d4af37] font-tufuli text-5xl md:text-6xl border-r-8 border-[#d4af37] pr-6">
            {t('migration.title')}
          </h2>
        </motion.div>

        <div className="space-y-16">
          
          {/* رحلة الهجرة - Card 1 */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10 bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[2.5rem] hover:bg-white/[0.03] transition-all"
          >
            <div className="md:w-1/3 text-[#d4af37] font-tufuli text-2xl">
              <span className="block text-6xl opacity-10 mb-2 font-sans">01</span>
              {t('migration.journey.title')}
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl font-tufuli leading-loose text-slate-300 italic">
                {t('migration.journey.desc')}
              </p>
            </div>
          </motion.div>

          {/* غياب بدر - Card 2 */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center gap-10 bg-[#d4af37]/5 border border-[#d4af37]/10 p-8 md:p-12 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all"
          >
            <div className="md:w-1/3 text-right font-tufuli text-2xl">
              <span className="block text-6xl font-sans opacity-10 mb-2 text-white">02</span>
              <span className="text-[#d4af37]">{t('migration.theMissingBattle.title')}</span>
            </div>
            <div className="md:w-2/3 text-right">
              <p className="text-2xl font-tufuli leading-loose text-slate-200">
                {t('migration.theMissingBattle.desc')}
              </p>
            </div>
          </motion.div>

        </div>

        {/* تمهيد لغزوة أحد: "الوعد بالتعويض" */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500 font-tufuli tracking-[0.2em] uppercase text-sm">
            The Vow of Uhud is approaching...
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#d4af37] opacity-40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
    <section className="relative py-40 px-6 overflow-hidden bg-black">
      
      {/* خلفية الشرارات (تعديل الـ Nexus ليكون أسرع وأكثر حدة) */}
      <div className="absolute inset-0 z-0 opacity-50 scale-125">
        <GoldenRandomNexus /> 
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* عنوان ملحمي مع حركة انقضاض الصقر */}
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="text-center mb-32"
        >
          <span className="text-[#d4af37] font-sans tracking-[0.5em] text-sm mb-4 block">THE LIVING MARTYR</span>
          <h2 className="text-white font-tufuli text-6xl md:text-9xl drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
            {t('uhud.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          
          {/* محتوى: الدرع البشري */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="relative p-12 bg-gradient-to-br from-[#d4af37]/10 to-transparent border-r-4 border-[#d4af37] backdrop-blur-sm"
          >
            <h3 className="text-4xl font-tufuli text-[#d4af37] mb-8">{t('uhud.theShield.title')}</h3>
            <p className="text-3xl font-amiri leading-loose text-white drop-shadow-md">
              {t('uhud.theShield.desc')}
            </p>
          </motion.div>

          {/* محتوى: التضحية (الجروح) */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="relative p-12 bg-white/[0.02] border-l-4 border-white/20 backdrop-blur-sm lg:mt-24"
          >
            <h3 className="text-4xl font-tufuli text-slate-300 mb-8">{t('uhud.theSacrifice.title')}</h3>
            <p className="text-2xl font-amiri leading-loose text-slate-400">
              {t('uhud.theSacrifice.desc')}
            </p>
            
            {/* أيقونة تعبيرية بسيطة (الجنة) */}
            <div className="mt-8 text-[#d4af37] opacity-50 font-tufuli italic text-xl">
              أوجبَ طلحة..
            </div>
          </motion.div>

        </div>

        {/* تأثير بصري سفلي (خاتم البطولة) */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-32"
        />
      </div>
    </section>
    <section className="relative py-32 px-6 overflow-hidden bg-[#050505] border-y border-white/5">

  {/* ✨ توهج ذهبي خفيف */}
  <div className="absolute inset-0 bg-[#d4af37]/[0.03] blur-[140px]" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* 🏆 العنوان */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-24 space-y-6"
    >
      <span className="text-[#d4af37]/60 tracking-[0.4em] text-sm uppercase">
        طلحة الفياض
      </span>

      <h2 className="text-5xl md:text-7xl font-tufuli text-[#fbbf24] drop-shadow-[0_0_25px_rgba(251,191,36,0.2)]">
        {t("generosity.title")}
      </h2>

      <p className="text-slate-400 text-xl md:text-2xl font-amiri max-w-3xl mx-auto leading-[2]">
        {t("generosity.quote")}
      </p>

      <div className="w-40 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto" />
    </motion.div>

    {/* 📜 الكروت */}
    <div className="flex flex-col gap-20">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-end"
      >
        <div className="max-w-3xl p-12 rounded-[2rem] border border-[#d4af37]/10 bg-gradient-to-b from-[#d4af37]/[0.04] to-transparent backdrop-blur-md shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          
          <h3 className="text-3xl md:text-4xl font-tufuli text-[#fbbf24] mb-8">
            {t("generosity.stories.titles.one")}
          </h3>

          <p className="text-2xl text-slate-300 leading-[2.1] font-amiri">
            {t("generosity.stories.details.one")}
          </p>

        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-start"
      >
        <div className="max-w-3xl p-12 rounded-[2rem] border border-emerald-500/10 bg-gradient-to-b from-emerald-500/[0.04] to-transparent backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          
          <h3 className="text-3xl md:text-4xl font-tufuli text-emerald-400 mb-8">
            {t("generosity.stories.titles.two")}
          </h3>

          <p className="text-2xl text-slate-300 leading-[2.1] font-amiri">
            {t("generosity.stories.details.two")}
          </p>

        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-end"
      >
        <div className="max-w-3xl p-12 rounded-[2rem] border border-red-900/20 bg-gradient-to-b from-red-900/[0.05] to-transparent backdrop-blur-md shadow-[0_0_40px_rgba(123,0,28,0.08)]">
          
          <h3 className="text-3xl md:text-4xl font-tufuli text-red-400 mb-8">
            {t("generosity.stories.titles.three")}
          </h3>

          <p className="text-2xl text-slate-300 leading-[2.1] font-amiri">
            {t("generosity.stories.details.three")}
          </p>

        </div>
      </motion.div>

      {/* CARD 4 */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-start"
      >
        <div className="max-w-3xl p-12 rounded-[2rem] border border-[#fbbf24]/10 bg-gradient-to-b from-[#fbbf24]/[0.04] to-transparent backdrop-blur-md shadow-[0_0_40px_rgba(251,191,36,0.08)]">
          
          <h3 className="text-3xl md:text-4xl font-tufuli text-[#fbbf24] mb-8">
            {t("generosity.stories.titles.four")}
          </h3>

          <p className="text-2xl text-slate-300 leading-[2.1] font-amiri">
            {t("generosity.stories.details.four")}
          </p>

        </div>
      </motion.div>

    </div>

  </div>
</section>
<section className="relative py-40 px-6 overflow-hidden bg-[#020205] border-b border-white/5 text-right">
  
  {/* 🚀 تشغيل النيكسس المطور والسرير في الخلفية لمنح طابع روحاني متوهج */}
  <GoldenRandomNexus />

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* 👑 المقدمة المحورية العلوية */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center mb-32 space-y-6"
    >
      <span className="text-[#d4af37]/60 tracking-[0.5em] text-xs uppercase block">
        THE LIVING MARTYR
      </span>
      <h2 className="text-5xl md:text-8xl font-tufuli text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        {t("status.title")}
      </h2>
      <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-6" />
      <p className="text-[#fbbf24] text-2xl md:text-3xl font-amiri max-w-3xl mx-auto leading-relaxed italic">
        {t("status.subtitle")}
      </p>
    </motion.div>

    {/* 🗂️ المحتوى المدمج في لوحة مركزية فخمة ومختلفة */}
    <div className="space-y-16">
      
      {/* الجزء الأول: نبوءة الشهادة */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative p-12 md:p-16 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        {/* لمسة إضاءة علوية ناعمة تعطي إيحاء النور المستمر */}
        <div className="absolute top-0 right-1/4 left-1/4 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-tufuli text-[#fbbf24] mb-8 flex items-center gap-4 justify-start">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            {t("status.prophecy.title")}
          </h3>
          <p className="text-2xl text-slate-300 leading-[2.2] font-amiri text-justify">
            {t("status.prophecy.desc")}
          </p>
        </div>
      </motion.div>

      {/* الجزء الثاني: العشرة المبشرون */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative p-12 md:p-16 rounded-[2.5rem] border border-[#d4af37]/10 bg-gradient-to-br from-[#d4af37]/[0.02] to-transparent backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.03)]"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-tufuli text-slate-200 mb-8 flex items-center gap-4 justify-start">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            {t("status.paradise.title")}
          </h3>
          <p className="text-2xl text-slate-400 leading-[2.2] font-amiri text-justify group-hover:text-slate-300 transition-colors">
            {t("status.paradise.desc")}
          </p>
        </div>
      </motion.div>

    </div>

  </div>
</section>
<section className="relative py-48 px-6 bg-[#030306] border-b border-white/5 overflow-hidden text-right">
      
      {/* سديم الإضاءة العميقة لكسر عتمة الخلفية */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#d4af37]/[0.02] blur-[150px]" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-amber-500/[0.02] blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* رأس الفصل الملحمي */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-40 space-y-4"
        >
          <span className="text-[#d4af37] font-sans tracking-[0.5em] text-xs uppercase block">
            The Untold Chapters
          </span>
          <h2 className="text-5xl md:text-7xl font-tufuli text-white leading-tight">
            {t('chronicles.title')}
          </h2>
          <p className="text-xl md:text-2xl font-amiri text-slate-400 max-w-2xl pt-2">
            {t('chronicles.subtitle')}
          </p>
          <div className="w-20 h-[1px] bg-[#d4af37]/40 mt-6" />
        </motion.div>

        {/* سرد المحطات الغنية بستايل النص الحر والمؤثرات الطولية */}
        <div className="space-y-36 relative">
          
          {/* عمود التوجيه المضيء المخفي في الشاشات الصغيرة */}
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d4af37]/20 via-white/5 to-transparent hidden md:block" />

          {stageKeys.map((key, index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pr-0 md:pr-12 group"
            >
              {/* مؤشر النقطة المتوهجة على الخط الجانبي */}
              <div className="absolute right-[-6px] top-3 w-3 h-3 rounded-full bg-[#030306] border border-[#d4af37] z-10 hidden md:block group-hover:bg-[#d4af37] transition-colors duration-300" />
              
              <div className="grid md:grid-cols-12 gap-6 items-start">
                
                {/* العنوان الفرعي الجانبي */}
                <div className="md:col-span-4 space-y-2">
                  <span className="text-xs font-mono text-[#d4af37]/50 block">CHRONICLE 0{index + 1}</span>
                  <h3 className="text-3xl font-tufuli text-slate-100 group-hover:text-[#fbbf24] transition-colors duration-300">
                    {t(`chronicles.stages.titles.${key}`)}
                  </h3>
                </div>

                {/* التفاصيل التاريخية المطولة والمملة بالخط الأميري الكبير */}
                <div className="md:col-span-8">
                  <p className="text-2xl font-amiri text-slate-400 group-hover:text-slate-300 leading-[2.2] text-justify transition-colors duration-300">
                    {t(`chronicles.stages.details.${key}`)}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
<section className="relative py-40 px-6 bg-[#020204] overflow-hidden border-t border-white/5">
      
      {/* 🌌 تأثير البوابة الضوئية الخلفية (تظهر وتتوهج بقوة عند الـ Hover على السيكشن) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-[#d4af37]/5 to-amber-500/5 rounded-full blur-[100px] opacity-60 animate-pulse" />
        {/* خط هندسي دائري خافت جداً يلتف حول الزر */}
        <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-[#d4af37]/10 animate-[spin_80s_linear_infinite]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* شارة التنبيه العلوية */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-[#d4af37] font-tufuli text-xs tracking-[0.3em] uppercase">
            {t('nextCompanion.label')}
          </span>
        </motion.div>

        {/* 🌟 الرابط السحري: بوابة الانتقال لسيدنا الزبير */}
        <Link href="/al-zubayr-ibn-al-awwam" className="group relative inline-block px-12 py-8 rounded-[2.5rem]">
          
          {/* خلفية زجاجية تظهر بنعومة فائقة عند الـ Hover */}
          <div className="absolute inset-0 bg-white/[0.01] border border-white/0 group-hover:border-white/5 group-hover:bg-white/[0.02] rounded-[2.5rem] transition-all duration-500 backdrop-blur-sm" />
          
          {/* التوهج الناري خلف الاسم */}
          <div className="absolute inset-x-12 bottom-4 h-8 bg-amber-500/0 group-hover:bg-amber-500/20 rounded-full blur-xl transition-all duration-500" />

          <div className="relative z-10 flex items-center justify-center gap-6">
            
            {/* السهم المتفاعل الموجه جهة اليمين (حسب اتجاه القراءة العربي المنساب) */}
            <svg 
              className="w-8 h-8 text-[#d4af37]/40 group-hover:text-[#d4af37] transform group-hover:translate-x-[-8px] transition-all duration-500 ease-out" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

            {/* الاسم العملاق الفخم بـ Gradient ذهبي مذهل */}
            <h2 className="text-4xl md:text-6xl font-tufuli font-bold text-transparent bg-clip-text bg-gradient-to-l from-slate-300 via-white to-slate-300 group-hover:from-[#d4af37] group-hover:to-[#fbbf24] transition-all duration-500 tracking-wide drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              {t('nextCompanion.name')}
            </h2>

          </div>
        </Link>

        {/* الوصف السفلي الانسيابي بالخط الأميري المتناسق */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 font-amiri text-xl md:text-2xl max-w-xl leading-relaxed transition-colors duration-500 group-hover:text-slate-400"
        >
          {t('nextCompanion.desc')}
        </motion.p>

      </div>
    </section>
  </main>
  );
}