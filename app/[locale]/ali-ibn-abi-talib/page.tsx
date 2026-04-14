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
    </main>
  );
}