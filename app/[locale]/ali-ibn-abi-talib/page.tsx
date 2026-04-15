'use client';
import { motion } from 'framer-motion'; 
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
interface Phase {
  year: string;
  title: string;
  desc: string;
}

// جرب المسار ده لو الفولدرات جنب بعض
const StarFieldScene = dynamic(() => import('../../components/StarFieldScene'), {
  ssr: false,
});
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
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1 initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }} className="text-7xl md:text-9xl font-tufuli mb-8">
            {t.rich("hero.title", {
              silver: (w) => <span className="bg-gradient-to-b from-white via-slate-400 to-slate-700 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">{w}</span>
            })}
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-2xl md:text-4xl font-amiri text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
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
                {t("poetry.title")}
            </h3>
            <div className="w-24 h-1 bg-[#10b981]/30 mx-auto rounded-full" />
        </motion.div>

        {/* أبيات القصيدة */}
        <div className="flex flex-col items-center space-y-10 md:space-y-14">
            {t.raw("poetry.verses").map((verse: string, index: number) => (
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
                {t("poetry.author")}
            </p>
        </motion.div>
    </div>
</section>
<section className="relative py-32 px-6 bg-black">
  {/* خلفية بتوهج أخضر خافت جداً */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_var(--tw-gradient-stops))] from-[#10b981]/5 via-transparent to-transparent opacity-50" />
  <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
    <StarFieldScene />
  </div>
  <div className="max-w-6xl mx-auto relative">
    
    {/* العناوين الرئيسية */}
    <div className="text-center mb-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-tufuli mb-6"
      >
        {t.rich("upbringing.title", {
          highlight: (w) => <span className="text-[#10b981] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">{w}</span>
        })}
      </motion.h2>
      <p className="text-xl md:text-2xl font-amiri text-slate-400 max-w-2xl mx-auto">
        {t("upbringing.subtitle")}
      </p>
    </div>

    {/* الخط الزمني (The Timeline) */}
    <div className="relative">
      {/* الخط الرأسي المتوهج */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#10b981]/0 via-[#10b981]/40 to-[#10b981]/0 hidden md:block" />

      <div className="space-y-24">
        {t.raw("upbringing.phases").map((phase: Phase, index: number) => (
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
<section className="relative py-32 px-6 bg-[#020202] overflow-hidden">
  
  {/* 1. النجوم كخلفية للسيكشن بالكامل */}
  {/* الـ z-index صفر عشان تكون ورا كل حاجة والـ pointer-events-none عشان متوقفش اللمس */}
  <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
    <StarFieldScene />
  </div>

  {/* 2. تأثير الدخان أو الضباب - فوق النجوم وتحت الكلام */}
  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/smoke.png')] bg-cover mix-blend-overlay z-1" />
  
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
    

    {/* الجانب النصي - بقى فوق النجوم مباشرة */}
    <div className="space-y-8 relative z-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <span className="text-[#10b981] text-xl tracking-widest block mb-4">
          الـعـمـر: 
          <span className="font-sans font-bold mx-2 inline-block" style={{ fontStyle: 'normal' }}>
             23 
          </span>
          عاماً
        </span>
        <h2 className="text-5xl md:text-8xl font-tufuli leading-tight">
          {t.rich("fedaNight.title", {
            focus: (w) => <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">{w}</span>
          })}
        </h2>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-4xl font-amiri text-slate-300 leading-relaxed drop-shadow-sm"
      >
        {t("fedaNight.subtitle")}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-8 bg-white/[0.03] border-l-2 border-[#10b981] backdrop-blur-[2px]"
      >
        <p className="text-xl md:text-2xl font-amiri text-slate-100 italic">
          {t("fedaNight.story")}
        </p>
      </motion.div>
    </div>

  </div>
</section>
<section className="relative py-24 px-6 border-y border-white/5 bg-[#030303]">
  <div className="max-w-4xl mx-auto text-center space-y-12">
    
    {/* السؤال الاستنكاري */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-[#10b981] text-2xl font-tufuli tracking-wider">
        {t("confrontation.question")}
      </h3>
      <div className="h-px w-24 bg-[#10b981]/30 mx-auto" />
    </motion.div>

    {/* مقولة أبو جهل في برواز "قديم" */}
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="p-10 bg-white/[0.01] border border-white/10 rounded-2xl relative"
    >
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#030303] px-4 text-slate-500 font-amiri italic">
        قالوا قديماً
      </span>
      <p className="text-3xl md:text-5xl font-amiri text-slate-200 leading-snug italic">
        {t("confrontation.abuJahlQuote")}
      </p>
    </motion.div>

    {/* رسالتك الشخصية (الجواب) */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="relative"
    >
      <p className="text-xl md:text-2xl font-amiri text-[#10b981]/90 leading-relaxed max-w-2xl mx-auto">
        {t("confrontation.reflection")}
      </p>
      
      {/* تأثير إضاءة خفي خلف النص */}
      <div className="absolute inset-0 bg-[#10b981]/5 blur-[80px] -z-10" />
    </motion.div>
  </div>
</section>
<section className="relative py-32 px-6 border-y border-white/5 bg-[#020202] overflow-hidden">
  <div className="max-w-4xl mx-auto space-y-24 relative z-10">
    
    {/* العنوان الرئيسي للسيكشن */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <h2 className="text-[#10b981] text-3xl md:text-5xl font-tufuli tracking-widest">
        {t("reveal.title")}
      </h2>
      <div className="h-px w-32 bg-[#10b981]/30 mx-auto" />
    </motion.div>

    {/* الفقرة الأولى: الترقب وبزوغ الفجر */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="p-10 bg-white/[0.01] border-l-4 border-[#10b981]/20 rounded-xl relative group hover:border-[#10b981] transition-all"
    >
      <p className="text-2xl md:text-3xl font-amiri text-slate-300 leading-relaxed">
        {t("reveal.sectionOne")}
      </p>
    </motion.div>

    {/* الفقرة الثانية: لحظة كشف الغطاء (الصدمة) */}
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="p-12 bg-[#10b981]/5 border border-[#10b981]/20 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#10b981]">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
      <p className="text-3xl md:text-4xl font-amiri text-white leading-snug text-center italic">
        {t("reveal.sectionTwo")}
      </p>
    </motion.div>

    {/* الفقرات المتتالية: المواجهة والثبات */}
    <div className="grid gap-12">
      {[ "sectionThree", "sectionFour", "sectionFive" ].map((key, index) => (
        <motion.div 
          key={key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl"
        >
          <p className="text-xl md:text-2xl font-amiri text-slate-400 leading-relaxed text-right">
             {t(`reveal.${key}`)}
          </p>
        </motion.div>
      ))}
    </div>

    {/* الخاتمة: خيبة الفجر وثبات القلب */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative pt-10 text-center"
    >
      <div className="absolute inset-0 bg-[#10b981]/5 blur-[100px] -z-10" />
      <p className="text-2xl md:text-4xl font-amiri text-[#10b981] leading-relaxed italic max-w-3xl mx-auto">
        {t("reveal.closing")}
      </p>
    </motion.div>
  </div>
</section>
<section className="relative py-32 px-6 border-y border-white/5 bg-[#010101] overflow-hidden">
  <div className="max-w-4xl mx-auto space-y-20 relative z-10 text-right">
    
    {/* العنوان بروح الهيبة والوقار */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <h2 className="text-[#10b981] text-3xl md:text-5xl font-tufuli tracking-widest">
        {t("trust.title")}
      </h2>
      <div className="h-px w-32 bg-[#10b981]/30 mx-auto" />
    </motion.div>

    {/* الفقرة الأولى: ثقل الأمانة */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="p-8 md:p-12 bg-white/[0.01] border-r-4 border-[#10b981]/30 rounded-2xl relative"
    >
      <p className="text-2xl md:text-3xl font-amiri text-slate-300 leading-relaxed">
        {/* استخدمنا هنا الـ dangerouslySetInnerHTML لو عايز تشغل الـ <highlight> */}
        {t("trust.sectionOne")}
      </p>
    </motion.div>

    {/* الفقرة الثانية: اختيار البقاء في الخطر */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="p-10 border border-white/10 rounded-3xl bg-gradient-to-br from-transparent via-[#10b981]/5 to-transparent"
    >
      <p className="text-2xl md:text-3xl font-amiri text-white text-center leading-relaxed">
        {t("trust.sectionTwo")}
      </p>
    </motion.div>

    {/* شبكة "رد الحقوق" (sectionThree & sectionFour) */}
    <div className="grid md:grid-cols-2 gap-8">
      {[ "sectionThree", "sectionFour" ].map((key, index) => (
        <motion.div 
          key={key}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-center"
        >
          <p className="text-xl md:text-2xl font-amiri text-slate-400 leading-relaxed italic">
  {t.rich(`trust.${key}`, {
    highlight: (chunks) => <span className="text-[#10b981] font-bold">{chunks}</span>,
    focus: (chunks) => <span className="text-white border-b border-[#10b981]">{chunks}</span>,
    gold: (chunks) => <span className="text-yellow-500 font-bold">{chunks}</span>
  })}
</p>
        </motion.div>
      ))}
    </div>

    {/* الفقرة الخامسة: إثبات النقاء */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="p-8 border-b border-white/10"
    >
      <p className="text-2xl md:text-3xl font-amiri text-slate-300 text-center leading-relaxed">
        {t("trust.sectionFive")}
      </p>
    </motion.div>

    {/* الدرس الخالد - الخاتمة */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative text-center pt-10"
    >
      {/* تأثير "هالة" خضراء خفيفة تحت نص الخاتمة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#10b981]/5 blur-[100px] -z-10" />
      
      <p className="text-3xl md:text-5xl font-amiri text-[#10b981] leading-snug drop-shadow-sm italic">
        {t("trust.closing")}
      </p>
    </motion.div>

  </div>
</section>
<section className="relative py-32 px-6 border-y border-white/5 bg-[#020202] overflow-hidden text-right">
  <div className="max-w-5xl mx-auto space-y-24 relative z-10">

    {/* 🏆 العنوان */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <span className="text-slate-500 text-sm tracking-[0.3em] uppercase">
        المسير نحو المدينة
      </span>

      <h2 className="text-[#10b981] text-4xl md:text-6xl font-tufuli leading-tight">
        {t("migration.title")}
      </h2>

      <div className="h-px w-32 bg-[#10b981]/20 mx-auto" />
    </motion.div>

    {/* 📝 المقدمة */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-3xl mx-auto text-center"
    >
      <p className="text-2xl md:text-3xl font-amiri text-slate-300 leading-relaxed">
        {t("migration.intro")}
      </p>
    </motion.div>

    {/* ⚡ كارت 1 (يمين) */}
    <motion.div 
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex justify-end"
    >
      <div className="max-w-xl p-10 bg-white/[0.01] border border-white/5 rounded-3xl space-y-4 hover:border-[#10b981]/30 transition-all">
        <h4 className="text-[#10b981] font-tufuli text-xl">طريقٌ بلا صحبة</h4>
        <p className="text-xl font-amiri text-slate-400 leading-relaxed">
          {t("migration.loneliness")}
        </p>
      </div>
    </motion.div>

    {/* ⚡ كارت 2 (شمال) */}
    <motion.div 
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex justify-start"
    >
      <div className="max-w-xl p-10 bg-white/[0.01] border border-white/5 rounded-3xl space-y-4 hover:border-red-900/40 transition-all">
        <h4 className="text-red-500 font-tufuli text-xl">قلبُ الخطر</h4>
        <p className="text-xl font-amiri text-slate-400 leading-relaxed">
          {t("migration.danger")}
        </p>
      </div>
    </motion.div>

    {/* 🩸 كارت 3 (الألم - في النص) */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex justify-center"
    >
      <div className="max-w-2xl p-12 bg-gradient-to-b from-[#7b001c]/10 to-transparent border border-[#7b001c]/20 rounded-3xl text-center space-y-4 shadow-[0_0_40px_rgba(123,0,28,0.2)]">
        <h4 className="text-[#fbbf24] font-tufuli text-2xl">جراح الطريق</h4>
        <p className="text-2xl font-amiri text-slate-300 leading-relaxed">
          {t("migration.pain")}
        </p>
      </div>
    </motion.div>

    {/* 💀 CLIMAX */}
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="text-center pt-10"
    >
      <p className="text-3xl md:text-5xl font-amiri text-white leading-[2] tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        {t("migration.bravery")}
      </p>
    </motion.div>

    {/* ✨ الخاتمة */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center pt-16"
    >
      <p className="text-2xl md:text-4xl font-amiri text-[#10b981] leading-[2] max-w-2xl mx-auto font-black tracking-wider">
        {t("migration.closing")}
      </p>

      {/* توهج */}
      <div className="absolute inset-0 bg-[#10b981]/5 blur-[120px] -z-10" />
    </motion.div>

  </div>
</section>
<section className="relative py-32 px-6 bg-[#010101] overflow-hidden">
  {/* تأثير إضاءة علوي يوحي بنور المدينة */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#10b981]/10 blur-[120px] rounded-full" />
  <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
    <StarFieldScene />
  </div>
  <div className="max-w-5xl mx-auto relative z-10 text-right">
    
    {/* العنوان بشكل جديد (Floating Title) */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-center mb-24"
    >
      <h2 className="text-white text-4xl md:text-7xl font-tufuli mb-6 drop-shadow-[0_5px_15px_rgba(16,185,129,0.3)]">
        {t("arrival.title")}
      </h2>
      <div className="flex justify-center gap-3">
        <div className="h-1 w-12 bg-[#10b981] rounded-full" />
        <div className="h-1 w-4 bg-[#10b981]/40 rounded-full" />
      </div>
    </motion.div>

    {/* محتوى اللقاء (تنسيق الصور الكلامية) */}
    <div className="grid md:grid-cols-12 gap-8 items-center">
      
      {/* مشهد التعب والوصول */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="md:col-span-7 p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl"
      >
        <p className="text-2xl md:text-3xl font-amiri text-slate-200 leading-relaxed mb-8">
          {t("arrival.journeyEnd")}
        </p>
        <div className="p-6 bg-[#10b981]/5 border-r-2 border-[#10b981] italic">
          <p className="text-xl md:text-2xl font-amiri text-[#10b981]">
            {t("arrival.physicalState")}
          </p>
        </div>
      </motion.div>

      {/* مشهد اللقاء النبوي (تصميم بارز) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="md:col-span-5 p-8 bg-gradient-to-br from-[#10b981]/20 to-transparent border border-[#10b981]/20 rounded-[2.5rem] relative group overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#10b981]/10 blur-3xl group-hover:bg-[#10b981]/20 transition-all" />
        <p className="text-2xl font-amiri text-white leading-loose relative z-10">
          {t("arrival.meeting")}
        </p>
      </motion.div>

      {/* الرابطة والبدء (Full Width Card) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="md:col-span-12 mt-12 p-12 text-center bg-white/[0.01] border-y border-white/5"
      >
        <p className="text-2xl md:text-4xl font-amiri text-slate-400 max-w-4xl mx-auto leading-snug mb-12">
          {t("arrival.brotherhood")}
        </p>
        
        {/* الخاتمة كأنها توقيع */}
        <div className="inline-block relative">
          <p className="text-3xl md:text-5xl font-tufuli text-[#10b981] relative z-10">
            {t("arrival.closing")}
          </p>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#10b981]/10 -rotate-1" />
        </div>
      </motion.div>

    </div>
  </div>
</section>
<section className="relative py-24 px-6 bg-[#020202] border-y border-white/5">
  <div className="max-w-4xl mx-auto space-y-16 text-right">
    
    {/* عنوان المرحلة الجديدة */}
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      className="text-center"
    >
      <h2 className="text-slate-500 text-lg font-tufuli mb-2 tracking-widest uppercase">
        المرحلة الثانية
      </h2>
      <h3 className="text-white text-4xl md:text-6xl font-tufuli">
        {t("madinahLife.title")}
      </h3>
    </motion.div>

    {/* موقف المؤاخاة - تصميم Card مميز */}
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="p-10 bg-gradient-to-l from-[#10b981]/10 to-transparent border-r-4 border-[#10b981] rounded-l-3xl"
    >
      <h4 className="text-[#10b981] text-2xl font-tufuli mb-4">
        {t("madinahLife.brotherhoodTitle")}
      </h4>
      <p className="text-2xl font-amiri text-slate-200 leading-relaxed italic">
        {t("madinahLife.brotherhoodText")}
      </p>
    </motion.div>

    {/* الحياة اليومية - نصوص موزعة بشكل مريح */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.01]">
        <p className="text-xl font-amiri text-slate-400 leading-relaxed">
          {t("madinahLife.dailyLife")}
        </p>
      </div>

      {/* التمهيد للغزوات - لون مختلف شوية */}
      <div className="p-8 border border-red-900/20 rounded-2xl bg-red-900/5">
        <p className="text-xl font-amiri text-red-100/70 leading-relaxed">
          {t("madinahLife.bridgeToWar")}
        </p>
      </div>
    </motion.div>
  </div>
</section>
<section className="relative py-32 px-6 bg-[#050505] border-y border-red-900/10 overflow-hidden text-right">
  {/* تأثير "غبار المعركة" في الخلفية */}
  <div className="absolute inset-0 bg-[url('/dust-texture.png')] opacity-5 pointer-events-none" />

  <div className="max-w-5xl mx-auto space-y-24 relative z-10">
    
    {/* رأس السيكشن - بدر */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-center space-y-4"
    >
      {/* <h2 className="text-red-600 text-2xl font-tufuli tracking-widest uppercase opacity-80">17 رمضان - <span className="font-san text-red-400">-</span> 2 هـ</h2> */}
      <h2 className="text-red-600 text-2xl font-tufuli tracking-widest uppercase opacity-80 flex justify-center gap-2 items-center">
  <span className="font-sans tracking-normal">17</span> 
  <span>رمضان -</span> 
  <span className="font-sans tracking-normal">2</span> 
  <span>هـ</span>
</h2>
      <h1 className="text-white text-5xl md:text-8xl font-tufuli drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]">
        {t("badr.title")}
      </h1>
    </motion.div>

    {/* فقرة المبارزة (The Duel) - ستايل سينمائي */}
    <motion.div 
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="relative p-10 bg-white/[0.02] border-r-8 border-red-600 rounded-2xl"
    >
      <span className="text-red-600 font-tufuli text-xl mb-4 block">المبارزة الأولى</span>
      <p className="text-2xl md:text-4xl font-amiri text-slate-200 leading-relaxed italic">
        {t("badr.theDuel")}
      </p>
    </motion.div>

    {/* البطولات والموقف مع عمر الفاروق */}
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="space-y-6"
      >
        <h3 className="text-[#10b981] text-3xl font-tufuli">زلزال الميدان</h3>
        <p className="text-xl font-amiri text-slate-400 leading-loose">
          {t("badr.heroism")}
        </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl"
      >
        <h3 className="text-slate-300 text-2xl font-tufuli mb-4">عليٌّ والفاروق</h3>
        <p className="text-xl font-amiri text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-4 italic">
          {t("badr.aliAndUmar")}
        </p>
      </motion.div>
    </div>

    {/* القصيدة - برواز ذهبي */}
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="p-12 bg-[#10b981]/5 border border-[#10b981]/20 rounded-[3rem] text-center relative"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#050505] px-6 text-[#10b981] font-tufuli">
        {t("badr.poemTitle")}
      </div>
      <p className="text-3xl md:text-5xl font-amiri text-white leading-snug whitespace-pre-line">
        {t("badr.poem")}
      </p>
    </motion.div>

    {/* الخاتمة */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center pt-10"
    >
      <p className="text-2xl md:text-3xl font-amiri text-[#10b981] italic">
        {t("badr.closing")}
      </p>
      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>

  </div>
</section>
<section className="relative py-24 px-6 bg-[#020202] border-y border-white/5 overflow-hidden text-right">
  {/* إضاءة ذهبية خفيفة توحي بالبهجة */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full" />
  <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
    <StarFieldScene />
  </div>
  <div className="max-w-4xl mx-auto space-y-16 relative z-10">
    
    {/* العنوان */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-[#d4af37] text-3xl md:text-5xl font-tufuli tracking-wide">
        {t("fatimaMarriage.title")}
      </h2>
      <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
    </motion.div>

    {/* قصة المهر والخطبة (Card بخطوط ذهبية) */}
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="p-8 bg-white/[0.02] border border-[#d4af37]/20 rounded-3xl"
      >
        <p className="text-xl md:text-2xl font-amiri text-slate-300 leading-relaxed italic">
          {t("fatimaMarriage.proposal")}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="p-8 bg-white/[0.02] border border-[#d4af37]/20 rounded-3xl"
      >
        <p className="text-xl md:text-2xl font-amiri text-slate-300 leading-relaxed">
           <span className="text-[#d4af37] font-bold">المهر: </span>
          {t("fatimaMarriage.theDowry")}
        </p>
      </motion.div>
    </div>

    {/* البيت النبوي (Full Width) */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-10 bg-[#10b981]/5 border-y border-[#10b981]/20 text-center"
    >
      <p className="text-2xl md:text-3xl font-amiri text-white leading-loose mb-6">
        {t("fatimaMarriage.simpleHome")}
      </p>
      <p className="text-xl md:text-2xl font-amiri text-[#10b981] italic">
        {t("fatimaMarriage.prophetLove")}
      </p>
    </motion.div>

    {/* الخاتمة */}
    <motion.div className="text-center opacity-80">
      <p className="text-2xl font-amiri text-slate-400">
        {t("fatimaMarriage.closing")}
      </p>
    </motion.div>

  </div>
</section>
<section className="relative py-32 px-6 bg-[#020202] border-y border-white/5 text-right">
  <div className="max-w-5xl mx-auto space-y-32">
    
    {/* العنوان الرئيسي الفخم */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center">
      <h2 className="text-[#10b981] text-2xl font-tufuli mb-4 tracking-[0.2em]">السيرة العسكرية</h2>
      <h1 className="text-white text-5xl md:text-8xl font-tufuli leading-tight">
        {t("battlesDetail.title")}
      </h1>
    </motion.div>

    {/* غزوة أُحد - ستايل الفداء العميق */}
    <div className="relative">
      <div className="absolute -right-4 top-0 h-full w-1 bg-red-600/20" />
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="pr-10 space-y-8">
        <h3 className="text-red-500 text-4xl font-tufuli">{t("battlesDetail.uhud.title")}</h3>
        <p className="text-2xl md:text-3xl font-amiri text-slate-300 leading-[2] text-justify">
          {t("battlesDetail.uhud.description")}
        </p>
        <div className="p-6 bg-red-900/10 border border-red-900/20 rounded-xl">
          <p className="text-2xl font-amiri text-red-100 italic text-center">
            {t("battlesDetail.uhud.quote")}
          </p>
        </div>
      </motion.div>
    </div>
    {/* غزوة الخندق - ستايل الحسم والمواجهة */}
    <div className="relative">
      <div className="absolute -left-4 top-0 h-full w-1 bg-slate-500/20" />
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="pl-10 space-y-8 text-left">
        <div className="text-right">
          <h3 className="text-slate-300 text-4xl font-tufuli">{t("battlesDetail.khandaq.title")}</h3>
          <p className="text-2xl md:text-3xl font-amiri text-slate-400 leading-[2] text-justify mt-6">
            {t("battlesDetail.khandaq.description")}
          </p>
          <p className="text-[#10b981] font-tufuli text-xl mt-4 italic">{t("battlesDetail.khandaq.impact")}</p>
        </div>
      </motion.div>
    </div>

    {/* غزوة خيبر - ستايل الفتح والاعجاز */}
    <motion.div 
      initial={{ y: 50, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      className="p-12 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-[4rem]"
    >
      <div className="text-center space-y-10">
        <h3 className="text-[#10b981] text-5xl font-tufuli">{t("battlesDetail.khaybar.title")}</h3>
        <p className="text-2xl md:text-4xl font-amiri text-white leading-[2.2] max-w-4xl mx-auto">
          {t("battlesDetail.khaybar.description")}
        </p>
      </div>
    </motion.div>
  </div>
</section>
<section className="relative py-32 px-6 bg-[#030303] overflow-hidden">
  <div className="max-w-4xl mx-auto space-y-16 text-right">
    
    {/* تمهيد المبارزة */}
    <div className="text-center space-y-4">
      <h3 className="text-red-600 font-tufuli text-2xl tracking-[0.3em]">المبارزة الحاسمة</h3>
      <div className="h-px w-32 bg-red-600/30 mx-auto" />
    </div>

    <div className="grid md:grid-cols-2 gap-12 relative items-start">
      {/* سيف فاصل في النص */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/50 via-white/10 to-[#10b981]/50 -translate-x-1/2" />

      {/* جانب مرحب - أحمر وداكن */}
      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="p-10 bg-red-900/5 border border-red-900/10 rounded-[2rem] space-y-6"
      >
        <span className="text-red-500 font-tufuli text-xl block border-b border-red-900/20 pb-2">
          {t("battlesDetail.khaybar.khaybarDuel.marhabTitle")}
        </span>
        <p className="text-2xl md:text-3xl font-amiri text-slate-400 leading-[1.8] whitespace-pre-line italic">
          {t("battlesDetail.khaybar.khaybarDuel.marhabPoem")}
        </p>
      </motion.div>

      {/* جانب الحيدرة - أخضر وساطع */}
      <motion.div 
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="p-10 bg-[#10b981]/5 border border-[#10b981]/20 rounded-[2rem] space-y-6 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
      >
        <span className="text-[#10b981] font-tufuli text-2xl block border-b border-[#10b981]/20 pb-2">
          {t("battlesDetail.khaybar.khaybarDuel.aliTitle")}
        </span>
        <p className="text-2xl md:text-4xl font-amiri text-white leading-[1.8] whitespace-pre-line font-bold">
          {t("battlesDetail.khaybar.khaybarDuel.aliReply")}
        </p>
      </motion.div>
    </div>

    {/* الحسم النهائي */}
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="text-center p-12 bg-white/[0.01] border-y border-white/5 rounded-[3rem]"
    >
      <p className="text-2xl md:text-3xl font-amiri text-slate-300 leading-relaxed italic max-w-3xl mx-auto">
        {t("battlesDetail.khaybar.khaybarDuel.description")}
      </p>
      {/* توهج خفيف لنصر خيبر */}
        <div className="inline-block px-10 py-4 bg-[#10b981]/10 rounded-full">
          <p className="text-[#10b981] text-2xl font-tufuli">{t("battlesDetail.khaybar.khaybarDuel.closing")}</p>
        </div>
      <div className="absolute inset-0 bg-[#10b981]/5 blur-[120px] -z-10" />
    </motion.div>

  </div>
</section>
<section className="relative py-32 px-6 bg-[#020202] overflow-hidden text-right">
  {/* خلفية فنية توحي بالعلم (نقط ضوء خافتة كأنها نجوم أو أفكار) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(30,58,138,0.1),transparent)] pointer-events-none" />

  <div className="max-w-5xl mx-auto space-y-24 relative z-10">
    
    {/* العنوان الرئيسي */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <h2 className="text-[#d4af37] text-xl font-tufuli tracking-[0.3em] uppercase opacity-80">
        المنبع الفكري
      </h2>
      <h1 className="text-white text-5xl md:text-8xl font-tufuli leading-tight">
        {t("knowledge.title")}
      </h1>
      <div className="h-1 w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
    </motion.div>

    {/* المقدمة العميقة */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <p className="text-2xl md:text-4xl font-amiri text-slate-300 leading-[2.2] text-justify italic border-r-2 border-[#d4af37]/30 pr-8">
        {t("knowledge.intro")}
      </p>
    </motion.div>

    {/* موقف عمر الفاروق (تصميم مميز) */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="p-10 bg-blue-900/5 border border-blue-900/10 rounded-[2.5rem] relative"
      >
        <div className="absolute -top-5 right-10 bg-[#020202] px-4 text-blue-400 font-tufuli text-xl">
          {t("knowledge.umarSection.title")}
        </div>
        <p className="text-2xl font-amiri text-slate-200 leading-relaxed mb-6">
          {t("knowledge.umarSection.text")}
        </p>
        <span className="text-blue-400 font-tufuli italic opacity-70">
          — {t("knowledge.umarSection.impact")}
        </span>
      </motion.div>

      {/* سيكشن القضاء والحكمة */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="space-y-6"
      >
        <h3 className="text-[#d4af37] text-3xl font-tufuli">
          {t("knowledge.judgement.title")}
        </h3>
        <p className="text-xl md:text-2xl font-amiri text-slate-400 leading-loose">
          {t("knowledge.judgement.text")}
        </p>
      </motion.div>
    </div>

    {/* قول مأثور ختامي للسيكشن */}
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="text-center py-16 border-y border-white/5"
    >
      <p className="text-3xl md:text-5xl font-amiri text-white leading-snug">
        {t("knowledge.quote")}
      </p>
    </motion.div>

  </div>
</section>
<section className="relative py-32 px-6 bg-[#050505] overflow-hidden text-right border-y border-white/5">
  {/* إضاءة "خافتة" جداً توحي بالتواضع */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

  <div className="max-w-4xl mx-auto space-y-24 relative z-10">
    
    {/* رأس السيكشن */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center"
    >
      <h2 className="text-slate-500 text-lg font-tufuli tracking-widest uppercase mb-4">
        فلسفة الاستغناء
      </h2>
      <h1 className="text-white text-5xl md:text-7xl font-tufuli leading-tight">
        {t("zuhd.title")}
      </h1>
    </motion.div>

    {/* المقدمة القصصية */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="p-10 border-r-2 border-slate-800 bg-white/[0.01]"
    >
      <p className="text-2xl md:text-3xl font-amiri text-slate-300 leading-[2.2] text-justify">
        {t("zuhd.intro")}
      </p>
    </motion.div>

    {/* تفاصيل الزهد (Grid) */}
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="space-y-6"
      >
        <h3 className="text-slate-400 text-2xl font-tufuli border-b border-slate-800 pb-2">
          {t("zuhd.baytAlMal.title")}
        </h3>
        <p className="text-xl font-amiri text-slate-500 leading-loose">
          {t("zuhd.baytAlMal.text")}
        </p>
      </motion.div>

      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="space-y-6"
      >
        <h3 className="text-slate-400 text-2xl font-tufuli border-b border-slate-800 pb-2">
          {t("zuhd.theGarment.title")}
        </h3>
        <p className="text-xl font-amiri text-slate-500 leading-loose">
          {t("zuhd.theGarment.text")}
        </p>
      </motion.div>
    </div>

    {/* الكلمة الخالدة في الدنيا */}
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="py-16 px-8 rounded-[3rem] bg-gradient-to-b from-white/[0.02] to-transparent text-center"
    >
      <p className="text-3xl md:text-5xl font-amiri text-white leading-relaxed italic opacity-90">
        {t("zuhd.quote")}
      </p>
    </motion.div>

  </div>
</section>
<section className="relative py-32 px-6 bg-[#020202] text-right overflow-hidden">
  {/* إضاءة خلفية بلون ذهبي ملكي */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

  <div className="max-w-6xl mx-auto relative z-10">
    
    {/* مقدمة السيكشن */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-24 space-y-6"
    >
      <h1 className="text-white text-5xl md:text-8xl font-tufuli leading-tight">
        {t("eloquence.title")}
      </h1>
      <p className="text-2xl font-amiri text-slate-400 max-w-3xl mx-auto leading-relaxed">
        {t("eloquence.intro")}
      </p>
    </motion.div>

    {/* شبكة الأقوال (Grid) */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(t.raw("eloquence.quotes")).map(([key, quote], idx) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -10 }}
          className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all duration-500"
        >
          {/* علامة الاقتباس كديكور خلفي */}
          <span className="absolute top-4 left-6 text-7xl text-white/[0.03] font-serif group-hover:text-[#d4af37]/10 transition-colors"></span>
          
          <div className="space-y-6 relative z-10">
            <span className="inline-block px-4 py-1 rounded-full border border-[#d4af37]/20 text-[#d4af37] text-sm font-tufuli">
              {quote.tag}
            </span>
            <p className="text-2xl md:text-3xl font-amiri text-white leading-snug font-bold">
              {quote.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* تذييل السيكشن */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-20 text-center"
    >
      <p className="text-xl font-amiri text-slate-500 italic">
        {t("eloquence.footer")}
      </p>
      <div className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto" />
    </motion.div>

  </div>
</section>
<section className="relative py-40 px-6 bg-[#020202] overflow-hidden text-right">
  {/* تأثيرات خلفية درامية */}
  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

  <div className="max-w-5xl mx-auto relative z-10 space-y-32">
    
    {/* الجزء الأول: الخلافة والعدل */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="text-[#d4af37] text-3xl md:text-5xl font-tufuli">{t("martyrdom.khilafa.title")}</h2>
      <p className="text-2xl md:text-4xl font-amiri text-slate-300 leading-[2] text-justify">
        {t("martyrdom.khilafa.text")}
      </p>
    </motion.div>

    {/* الجزء الثاني: لحظة الاستشهاد (تصميم مركز) */}
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className="relative p-12 bg-red-950/10 border-y border-red-900/20 rounded-[4rem] text-center"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#020202] px-8 text-red-500 font-tufuli text-2xl">
        {t("martyrdom.theNight.title")}
      </div>
      <p className="text-2xl md:text-3xl font-amiri text-slate-200 leading-loose mb-10">
        {t("martyrdom.theNight.text")}
      </p>
      {/* الكلمة الأيقونية */}
      <h3 className="text-4xl md:text-7xl font-tufuli text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        فُزتُ وربِّ الكعبة
      </h3>
    </motion.div>

    {/* الجزء الثالث: الوصية والرحيل */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h3 className="text-slate-400 text-3xl font-tufuli mb-6">{t("martyrdom.will.title")}</h3>
        <p className="text-xl md:text-2xl font-amiri text-slate-400 leading-relaxed italic border-r-4 border-slate-700 pr-6">
          {t("martyrdom.will.text")}
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center md:text-left"
      >
        <p className="text-3xl md:text-5xl font-amiri text-white leading-snug opacity-90">
          {t("martyrdom.closing")}
        </p>
      </motion.div>
    </div>

    {/* مسك الختام - خط تلاشي */}
    <div className="pt-20 text-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="inline-block mt-8 text-slate-600 font-tufuli tracking-[0.5em] uppercase">تمت السيرة</span>
    </div>

  </div>
</section>
    </main>
  );
}