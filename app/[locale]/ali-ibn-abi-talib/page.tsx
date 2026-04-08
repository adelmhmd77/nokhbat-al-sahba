'use client';
import { motion } from 'framer-motion'; 
import { useTranslations } from 'next-intl';

interface Phase {
  year: string;
  title: string;
  desc: string;
}

export default function AliIbnAbiTalib() {
    const t = useTranslations('aliIbnAbiTalib');
  return (
    <main className="bg-black text-white min-h-screen">

      {/* --- Section 1: Hero (الأسد الغالب) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#064e3b]/30 via-black to-black opacity-80" />
        <div className="absolute inset-0 bg-[url('/silver-dust.png')] opacity-20 pointer-events-none mix-blend-screen" />

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="px-6 py-2 border border-[#10b981]/30 rounded-full text-[#10b981] text-sm tracking-[5px] uppercase bg-[#10b981]/5">
              {t("aliPage.hero.badge")}
            </span>
          </motion.div>

          <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }} className="text-7xl md:text-9xl font-tufuli mb-8">
            {t.rich("aliPage.hero.title", {
              silver: (w) => <span className="bg-gradient-to-b from-white via-slate-400 to-slate-700 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">{w}</span>
            })}
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-2xl md:text-4xl font-amiri text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {t("aliPage.hero.subtitle")}
          </motion.p>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#10b981] to-transparent" />
      </section>
      <section className="relative py-32 px-6 bg-black overflow-hidden border-b border-white/5">
    {/* تأثير إضاءة جانبي أخضر خافت */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[120px] pointer-events-none" />

    <div className="max-w-5xl mx-auto relative z-10">
        
        {/* عنوان القصيدة */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
        >
            <h3 className="text-[#10b981] font-tufuli text-2xl md:text-3xl tracking-[0.3em] mb-4">
                {t("aliPage.poetry.title")}
            </h3>
            <div className="w-24 h-1 bg-[#10b981]/30 mx-auto rounded-full" />
        </motion.div>

        {/* أبيات القصيدة */}
        <div className="flex flex-col items-center space-y-10 md:space-y-14">
            {t.raw("aliPage.poetry.verses").map((verse: string, index: number) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                >
                    {/* رقم البيت بيظهر بشكل خفي على الجنب */}
                    <span className="absolute -right-12 top-1/2 -translate-y-1/2 text-[#10b981]/10 font-bold text-4xl group-hover:text-[#10b981]/40 transition-colors">
                        {index + 1}
                    </span>

                    <p className="text-3xl md:text-6xl font-amiri text-slate-200 leading-tight text-center group-hover:text-white transition-all">
                        {verse}
                    </p>
                    
                    {/* زخرفة بسيطة تحت كل بيت */}
                    <div className="mt-4 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/40 to-transparent group-hover:w-full transition-all duration-700 mx-auto" />
                </motion.div>
            ))}
        </div>

        {/* التوقيع */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 text-center border-t border-white/5 pt-12"
        >
            <p className="text-[#10b981] font-tufuli text-2xl italic opacity-80">
                {t("aliPage.poetry.author")}
            </p>
        </motion.div>
    </div>
</section>
<section className="relative py-32 px-6 bg-black">
  {/* خلفية بتوهج أخضر خافت جداً */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_var(--tw-gradient-stops))] from-[#10b981]/5 via-transparent to-transparent opacity-50" />

  <div className="max-w-6xl mx-auto relative">
    
    {/* العناوين الرئيسية */}
    <div className="text-center mb-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-tufuli mb-6"
      >
        {t.rich("aliPage.upbringing.title", {
          highlight: (w) => <span className="text-[#10b981] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">{w}</span>
        })}
      </motion.h2>
      <p className="text-xl md:text-2xl font-amiri text-slate-400 max-w-2xl mx-auto">
        {t("aliPage.upbringing.subtitle")}
      </p>
    </div>

    {/* الخط الزمني (The Timeline) */}
    <div className="relative">
      {/* الخط الرأسي المتوهج */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#10b981]/0 via-[#10b981]/40 to-[#10b981]/0 hidden md:block" />

      <div className="space-y-24">
        {t.raw("aliPage.upbringing.phases").map((phase: Phase, index: number) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
          >
            {/* الجزء النصي */}
            <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'} w-full md:w-auto`}>
              <span className="text-[#10b981] font-tufuli text-lg tracking-widest block mb-2">{phase.year}</span>
              <h4 className="text-3xl md:text-4xl text-white font-bold mb-4">{phase.title}</h4>
              <p className="text-xl md:text-2xl font-amiri text-slate-400 leading-relaxed">
                {phase.desc}
              </p>
            </div>

            {/* الدائرة المركزية (The Core) */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-[#10b981] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
               <div className="w-4 h-4 rounded-full bg-[#10b981] animate-pulse" />
            </div>

            {/* مساحة فارغة للتوازن في الـ Grid */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>
    </main>
  );
}