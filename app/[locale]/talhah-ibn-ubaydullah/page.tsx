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
    </main>
  );
}