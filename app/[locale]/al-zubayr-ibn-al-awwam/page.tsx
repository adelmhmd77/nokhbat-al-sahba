'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function ZubayrPage() {
  const t = useTranslations('zubayr');

  return (
    <main className="min-h-screen bg-[#070709]">
      
      {/* ⚔️ السيكشن الأول: الـ Hero Section ⚔️ */}
      <section className="relative h-screen w-full bg-[#070709] overflow-hidden flex items-center justify-center text-right border-b border-zinc-800">
        
        {/* 📸 الصورة الخلفية السينمائية الناتجة عن البرومبت */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/al-zubayr-hero.jpg" 
            alt="Al-Zubayr ibn al-Awwam Art"
            fill
            className="object-cover object-center filter grayscale contrast-125"
            priority
          />
          {/* ماسك وتدرج سينمائي حاد للتلاشي */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709]" />
        </div>

        {/* 🔴 لمسة العمامة الحمراء */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-red-950/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          
          {/* شارة حديدية حادة مستطيلة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 border border-zinc-700 bg-zinc-900/50 backdrop-blur-md"
          >
            <span className="text-zinc-400 font-sans tracking-[0.4em] text-xs uppercase font-medium">
              {t('hero.label')}
            </span>
          </motion.div>

          {/* العنوان الحاد الضخم */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-tufuli tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            {t('hero.title')}
          </motion.h1>

          {/* خط فاصل حاد ممتد */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[1px] bg-red-800 mx-auto"
          />

          {/* الحديث النبوي الشريف بالخط الأميري الفخم */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-zinc-300 text-2xl md:text-3xl font-amiri max-w-3xl mx-auto leading-relaxed border-x border-zinc-800/40 px-8 py-2"
          >
            {t('hero.quote')}
          </motion.p>

        </div>

        {/* 🧭 مؤشر حركة للأسفل حاد وبسيط */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

{/* 🛡️ السيكشن الثاني: لوحات وثائقية منشطرة (Split Layout) - ستايل حديث فريد 🛡️ */}
      <section className="relative min-h-screen bg-[#121214] border-b border-zinc-900 text-right">
        
        {/* خلفية سينمائية ناعمة جداً بدون تعقيد */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#200505_0%,_#050506_70%,_#000000_100%)]" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-red-950/[0.03] blur-[130px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            
            {/* 📌 الجانب الأيمن: لوحة العنوان الثابتة (Sticky Panel) */}
            <div className="md:col-span-4 md:sticky md:top-32 space-y-6 border-r-2 border-red-900/30 pr-6 md:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-red-500 font-mono text-xs tracking-wider uppercase">
                <span>01 // CHRONICLES</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-tufuli text-white leading-tight">
                {t('chronicles_one.title')}
              </h2>
              
              <p className="text-lg md:text-xl font-amiri text-zinc-500 leading-relaxed">
                {t('chronicles_one.subtitle')}
              </p>
            </div>


            {/* 📜 الجانب الأيسر: مسار السرد المنزلق المتفاعل (Scrolling Narrative) */}
            <div className="md:col-span-8 space-y-40 md:pt-4">

              {/* القصة الأولى: تربية الصعاب */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                className="group relative space-y-6"
              >
                {/* مؤشر جانبي ناعم يضيء عندما تكون الفقرة في حيز الرؤية */}
                <div className="absolute -right-6 top-2 bottom-2 w-[1px] bg-transparent group-hover:bg-red-800 transition-colors duration-500" />
                
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-red-700/60 font-bold">CHAPTER I</span>
                  <div className="h-[1px] w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-red-900/60 transition-all duration-500" />
                  <h3 className="text-xl md:text-2xl font-tufuli text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {t('chronicles_one.stories.upbringing.title')}
                  </h3>
                </div>

                <p className="text-xl md:text-2xl font-amiri text-zinc-400 group-hover:text-zinc-200 leading-[2.2] text-justify transition-all duration-500">
                  {t('chronicles_one.stories.upbringing.desc')}
                </p>
              </motion.div>


              {/* القصة الثانية: أول سيف سل */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                className="group relative space-y-6"
              >
                {/* مؤشر جانبي ناعم */}
                <div className="absolute -right-6 top-2 bottom-2 w-[1px] bg-transparent group-hover:bg-red-800 transition-colors duration-500" />

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-red-700/60 font-bold">CHAPTER II</span>
                  <div className="h-[1px] w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-red-900/60 transition-all duration-500" />
                  <h3 className="text-xl md:text-2xl font-tufuli text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {t('chronicles_one.stories.firstSword.title')}
                  </h3>
                </div>

                <p className="text-xl md:text-2xl font-amiri text-zinc-400 group-hover:text-zinc-200 leading-[2.2] text-justify transition-all duration-500">
                  {t('chronicles_one.stories.firstSword.desc')}
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
      {/* 🛡️ السيكشن الثالث: الفصل الثاني - زحف الفرسان وصناعة الفتوحات 🛡️ */}
      <section className="relative min-h-screen bg-[#000000] border-b border-zinc-900 text-right">
        
        {/* 🌌 الخلفية الفاحمة المدمجة باللمسة الحمراء الدموية المكتومة */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_#200505_0%,_#050506_70%,_#000000_100%)] opacity-95" />
          {/* لمسة إضاءة حمراء إضافية في الزاوية السفلية لتعزيز الهيبة */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-950/[0.08] blur-[120px]" />
          <div className="absolute right-12 w-[1px] top-0 bottom-0 bg-gradient-to-b from-transparent via-zinc-800/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            
            {/* 📌 الجانب الأيمن: لوحة الفصل الثاني الثابتة */}
            <div className="md:col-span-4 md:sticky md:top-32 space-y-6 border-r-2 border-red-900/30 pr-6 md:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-red-500 font-mono text-xs tracking-wider uppercase">
                <span>02 // CHRONICLES</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-tufuli text-white leading-tight">
                {t('chronicles_two.title')}
              </h2>
              
              <p className="text-lg md:text-xl font-amiri text-zinc-400 leading-relaxed">
                {t('chronicles_two.subtitle')}
              </p>
            </div>


            {/* 📜 الجانب الأيسر: مسار السرد العسكري المنزلق */}
            <div className="md:col-span-8 space-y-40 md:pt-4">

              {/* القصة الأولى: زلزال اليرموك */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                className="group relative space-y-6"
              >
                <div className="absolute -right-6 top-2 bottom-2 w-[1px] bg-transparent group-hover:bg-red-800 transition-colors duration-500" />
                
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-red-700/60 font-bold">CHAPTER III</span>
                  <div className="h-[1px] w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-red-900/60 transition-all duration-500" />
                  <h3 className="text-xl md:text-2xl font-tufuli text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {t('chronicles_two.stories.yarmouk.title')}
                  </h3>
                </div>

                <p className="text-xl md:text-2xl font-amiri text-zinc-300 group-hover:text-white leading-[2.2] text-justify transition-all duration-500">
                  {t('chronicles_two.stories.yarmouk.desc')}
                </p>
              </motion.div>


              {/* القصة الثانية: اقتحام حصن بابليون */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                className="group relative space-y-6"
              >
                <div className="absolute -right-6 top-2 bottom-2 w-[1px] bg-transparent group-hover:bg-red-800 transition-colors duration-500" />

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-red-700/60 font-bold">CHAPTER IV</span>
                  <div className="h-[1px] w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-red-900/60 transition-all duration-500" />
                  <h3 className="text-xl md:text-2xl font-tufuli text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {t('chronicles_two.stories.babylon.title')}
                  </h3>
                </div>

                <p className="text-xl md:text-2xl font-amiri text-zinc-300 group-hover:text-white leading-[2.2] text-justify transition-all duration-500">
                  {t('chronicles_two.stories.babylon.desc')}
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
            {/* 🛡️ الفصل الجديد: ملاحم الغزوات الكبرى (بدر وأحد والخندق) - سيكشن مصور 🛡️ */}
      <section className="relative min-h-screen bg-[#000000] border-b border-zinc-900 py-32 px-6 overflow-hidden text-right">
        
        {/* 🌌 الخلفية الفاحمة واللمسة القرمزية */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0404_0%,_#050506_80%,_#000000_100%)] opacity-95" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-red-950/[0.04] blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-48">
          
          {/* 🏢 رأس الفصل المصور */}
          <div className="max-w-3xl border-r-2 border-red-700 pr-6 mb-24">
            <span className="text-red-700 font-sans tracking-[0.5em] text-xs uppercase block font-bold">
              CAMPAIGNS // THE GREAT BATTLES
            </span>
            <h2 className="text-4xl md:text-6xl font-tufuli text-white leading-tight">
              {t('zubayr_battles.title')}
            </h2>
          </div>

          {/* ⚔️ الموقف 1: يوم بدر وعمامة الملائكة (توزيعة: صورة يسار، نص يمين) */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-red-600 font-bold">01 // THE YELLOW TURBAN</span>
                <h3 className="text-2xl md:text-4xl font-tufuli text-white">
                  {t('zubayr_battles.badr.title')}
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-amiri text-zinc-400 leading-[2.2] text-justify">
                {t('zubayr_battles.badr.desc')}
              </p>
            </motion.div>

            {/* إطار الصورة التفاعلي */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative h-[450px] overflow-hidden rounded-xl border border-zinc-900 group"
            >
              {/* ماسك متدرج لدمج الصورة بالخلفية الفاحمة */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-10 opacity-80" />
              <div className="absolute inset-0 bg-red-950/10 mix-blend-color z-10 pointer-events-none" />
              <img 
                src="/zubayr-badr.jpg" 
                alt="عمامة الزبير في معركة بدر" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 ease-in-out"

              />
            </motion.div>
          </div>

          {/* 🛡️ الموقف 2: جدار أُحد البشري (توزيعة معكوسة: صورة يمين، نص يسار) */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* إطار الصورة التفاعلي يمين */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 order-last md:order-first relative h-[450px] overflow-hidden rounded-xl border border-zinc-900 group"
            >
{/* 🖼️ الصورة بألوانها الطبيعية الواضحة بدون أي إضافات */}
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
  <img 
    src="/zubayr-uhud.jpg" 
    alt="الذود عن النبي في أحد" 
    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 ease-in-out"
  />
</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-red-600 font-bold">02 // THE LIVING SHIELD</span>
                <h3 className="text-2xl md:text-4xl font-tufuli text-white">
                  {t('zubayr_battles.uhud.title')}
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-amiri text-zinc-400 leading-[2.2] text-justify">
                {t('zubayr_battles.uhud.desc')}
              </p>
            </motion.div>
          </div>

          {/* 🏹 الموقف 3: ليلة الخندق المرعبة (توزيعة: بنمط لوحة سينمائية كاملة العرض) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full rounded-2xl border border-zinc-900/80 overflow-hidden p-8 md:p-16 group"
          >
            {/* خلفية الصورة الساقطة وراء النص تماماً */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent z-10" />
            <img 
              src="/zubayr-khandaq.jpg" 
              alt="تسلل الزبير في ليلة الخندق" 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-100 "
            />
            
            <div className="relative z-20 max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-red-600 font-bold">03 // THE NIGHT SCOUT</span>
                <h3 className="text-2xl md:text-4xl font-tufuli text-white">
                  {t('zubayr_battles.khandaq.title')}
                </h3>
              </div>
              <p className="text-xl md:text-2xl font-amiri text-zinc-300 leading-[2.2] text-justify">
                {t('zubayr_battles.khandaq.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* 🛡️ السيكشن السابع: يوميات الحواري وكلام الصحابة (ستايل اللوحات المتداخلة) 🛡️ */}
      <section className="relative min-h-screen bg-[#000000] border-b border-zinc-900 py-52 px-6 overflow-hidden text-right">
        
        {/* 🌌 الخلفية الفاحمة الصافية بلمسة حمراء مكتومة في الزاوية */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#160303_0%,_#050506_85%,_#000000_100%)] opacity-95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* 🏢 رأس السيكشن */}
          <div className="max-w-3xl mb-36 space-y-4 border-r-2 border-red-700 pr-6">
            <span className="text-red-700 font-sans tracking-[0.5em] text-xs uppercase block font-bold">
              DAILY LIFE // THE MAN BEHIND THE SWORD
            </span>
            <h2 className="text-4xl md:text-6xl font-tufuli text-white leading-tight">
              {t('daily_zubayr.title')}
            </h2>
            <p className="text-xl md:text-2xl font-amiri text-zinc-400 max-w-2xl leading-relaxed">
              {t('daily_zubayr.subtitle')}
            </p>
          </div>

          {/* 🏛️ اللوحات المتداخلة غير المتناظرة */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* اللوحة الأولى: كيف يبدأ يومه؟ (عرض 7 أعمدة من 12) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7 relative overflow-hidden border border-zinc-900/80 bg-[#040405] p-8 md:p-12 group hover:border-red-950 transition-all duration-500 flex flex-col justify-between min-h-[450px]"
            >
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <img 
                  src="/images/medina-dawn.jpg" 
                  alt="فجر المدينة المنورة" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="relative z-10 space-y-4">
                <span className="text-xs font-mono text-red-600 font-bold block">01 // THE DAWN ROUTINE</span>
                <h3 className="text-2xl md:text-3xl font-tufuli text-white group-hover:text-red-500 transition-colors duration-300">
                  {t('daily_zubayr.sections.dawn.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-300 leading-[2.1] text-justify">
                  {t('daily_zubayr.sections.dawn.desc')}
                </p>
              </div>
            </motion.div>

            {/* اللوحة الثانية: تجارته وعفته في السوق (عرض 5 أعمدة من 12) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-5 relative overflow-hidden border border-zinc-900/80 bg-[#040405] p-8 md:p-12 group hover:border-red-950 transition-all duration-500 flex flex-col justify-between min-h-[450px]"
            >
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <img 
                  src="/images/ancient-market.jpg" 
                  alt="سوق المدينة القديم" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="relative z-10 space-y-4">
                <span className="text-xs font-mono text-red-600 font-bold block">02 // THE TRUSTED MERCHANT</span>
                <h3 className="text-2xl md:text-3xl font-tufuli text-white group-hover:text-red-500 transition-colors duration-300">
                  {t('daily_zubayr.sections.market.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-300 leading-[2.1] text-justify">
                  {t('daily_zubayr.sections.market.desc')}
                </p>
              </div>
            </motion.div>

            {/* اللوحة الثالثة ممتدة بالكامل في السطر التالي: ماذا قال عنه الصحابة؟ */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:col-span-12 relative overflow-hidden border border-zinc-900/80 bg-[#040405] p-8 md:p-12 group hover:border-red-950 transition-all duration-500 mt-4"
            >
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <img 
                  src="/images/companions-council.jpg" 
                  alt="مجالس الصحابة" 
                  className="w-full h-full object-cover opacity-15 group-hover:opacity-35 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="relative z-10 space-y-6">
                <span className="text-xs font-mono text-red-600 font-bold block">03 // WHAT THEY SAID</span>
                <h3 className="text-2xl md:text-3xl font-tufuli text-white group-hover:text-red-500 transition-colors duration-300">
                  {t('daily_zubayr.sections.companions.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-8 pt-2">
                  <div className="border-r border-zinc-800 pr-4 space-y-2">
                    <p className="text-lg font-amiri text-zinc-300 leading-[1.9]">
                      {t('daily_zubayr.sections.companions.quote1')}
                    </p>
                    <span className="text-xs font-mono text-red-700 block">— سيدنا علي بن أبي طالب</span>
                  </div>
                  <div className="border-r border-zinc-800 pr-4 space-y-2">
                    <p className="text-lg font-amiri text-zinc-300 leading-[1.9]">
                      {t('daily_zubayr.sections.companions.quote2')}
                    </p>
                    <span className="text-xs font-mono text-red-700 block">— سيدنا حسان بن ثابت</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
      {/* 🛡️ السيكشن الثامن: سفر الحكمة والجسارة - الأقوال الممتدة وحالة الحرب (ستايل السرد الملحمي المطول) 🛡️ */}
      <section className="relative min-h-screen bg-[#000000] border-b border-zinc-900 py-52 px-6 overflow-hidden text-right">
        
        {/* 🌌 الخلفية الفاحمة العميقة */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_#1c0404_0%,_#050506_85%,_#000000_100%)] opacity-95" />
          <div className="absolute right-0 left-0 h-[1px] bg-zinc-900/40 top-1/3" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* 🏢 رأس السيكشن الملحمي */}
          <div className="max-w-3xl mb-40 space-y-4 border-r-2 border-red-700 pr-6">
            <span className="text-red-700 font-sans tracking-[0.5em] text-xs uppercase block font-bold">
              THE EXTENDED CHRONICLES // WORDS & WARFARE
            </span>
            <h2 className="text-4xl md:text-6xl font-tufuli text-white leading-tight">
              {t('extended_zubayr.title')}
            </h2>
            <p className="text-xl md:text-2xl font-amiri text-zinc-400 max-w-2xl leading-relaxed">
              {t('extended_zubayr.subtitle')}
            </p>
          </div>

          {/* 📜 اللوحات السردية الكبرى الممتدة */}
          <div className="space-y-24">

            {/* اللوحة الأولى: حالته في الحروب (وصف فيزيائي ونفسي دقيق ومطول) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden border border-zinc-900 bg-[#040405] p-8 md:p-16 group hover:border-red-950 transition-all duration-500"
            >
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <img 
                  src="/zubayr-fury.jpg" 
                  alt="ثورة فارس في الميدان" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-45 transition-all duration-700 ease-in-out scale-102 group-hover:scale-100"
                />
              </div>
              <div className="relative z-10 space-y-6">
                <span className="text-xs font-mono text-red-600 font-bold block">CHAPTER VIII / I // WARFARE STATE</span>
                <h3 className="text-2xl md:text-4xl font-tufuli text-white group-hover:text-red-500 transition-colors duration-300">
                  {t('extended_zubayr.sections.war_state.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-300 leading-[2.3] text-justify whitespace-pre-line">
                  {t('extended_zubayr.sections.war_state.desc')}
                </p>
              </div>
            </motion.div>

            {/* اللوحة الثانية: الأقوال الخالدة والحكم المستنيرة (العمق الفلسفي والأخلاقي) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden border border-zinc-900 bg-[#040405] p-8 md:p-16 group hover:border-red-950 transition-all duration-500"
            >
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <img 
                  src="/ancient-scrolls.jpg" 
                  alt="مخطوطات الحكمة القديمة" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-45 transition-all duration-700 ease-in-out scale-102 group-hover:scale-100"
                />
              </div>
              <div className="relative z-10 space-y-6">
                <span className="text-xs font-mono text-red-600 font-bold block">CHAPTER VIII / II // IMMORTAL WISDOM</span>
                <h3 className="text-2xl md:text-4xl font-tufuli text-white group-hover:text-red-500 transition-colors duration-300">
                  {t('extended_zubayr.sections.wisdom.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-300 leading-[2.3] text-justify whitespace-pre-line">
                  {t('extended_zubayr.sections.wisdom.desc')}
                </p>
              </div>
            </motion.div>

            {/* اللوحة الثالثة: مواقفه الأخلاقية العميقة مع أكابر الصحابة */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden border border-zinc-900 bg-[#040405] p-8 md:p-16 group hover:border-red-950 transition-all duration-500"
            >
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <img 
                  src="/companions-gathering.jpg" 
                  alt="مجالس كبار الصحابة" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-45 transition-all duration-700 ease-in-out scale-102 group-hover:scale-100"
                />
              </div>
              <div className="relative z-10 space-y-6">
                <span className="text-xs font-mono text-red-600 font-bold block">CHAPTER VIII / III // THE BROTHERHOOD</span>
                <h3 className="text-2xl md:text-4xl font-tufuli text-white group-hover:text-red-500 transition-colors duration-300">
                  {t('extended_zubayr.sections.fellowship.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-300 leading-[2.3] text-justify whitespace-pre-line">
                  {t('extended_zubayr.sections.fellowship.desc')}
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
      {/* 🛡️ السيكشن الخامس: الفصل الرابع - ديوان الرفقة والأسرار (ستايل الأعمدة الشاقولية المتداخلة) 🛡️ */}
      <section className="relative min-h-screen bg-[#000000] border-b border-zinc-900 py-52 px-6 overflow-hidden text-right">
        
        {/* 🌌 الخلفية الفاحمة بلمسات الإضاءة الحركية */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0404_0%,_#050506_80%,_#000000_100%)] opacity-95" />
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-red-950/[0.04] blur-[150px]" />
          <div className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full bg-zinc-900/[0.05] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* 🏢 رأس الفصل الرابع */}
          <div className="max-w-3xl mb-40 space-y-4 border-r-2 border-red-800 pr-6">
            <span className="text-red-700 font-sans tracking-[0.5em] text-xs uppercase block font-bold">
              CHAPTER IV // THE BROTHERHOOD & THE MYSTIQUE
            </span>
            <h2 className="text-4xl md:text-6xl font-tufuli text-white leading-tight">
              {t('chronicles_four.title')}
            </h2>
            <p className="text-xl md:text-2xl font-amiri text-zinc-400 max-w-2xl leading-relaxed">
              {t('chronicles_four.subtitle')}
            </p>
          </div>

          {/* 🏛️ شبكة الأعمدة الشاقولية المتداخلة (Interlocking Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            
            {/* العمود الأول: موقفه العجيب مع سيدنا طلحة وبشرى الخلافة */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 bg-[#050507] border border-zinc-900 hover:border-red-950/50 hover:scale-[1.02] transition-all duration-500 group"
            >
              <div className="absolute -inset-x-2 -inset-y-2 bg-red-950/[0.01] group-hover:bg-red-950/[0.03] blur-xl rounded-xl transition-all duration-500 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-2 font-mono text-xs text-red-600">
                  <span>04 / A</span>
                  <div className="h-[1px] w-6 bg-zinc-800" />
                </div>
                <h3 className="text-2xl font-tufuli text-zinc-300 group-hover:text-white transition-colors">
                  {t('chronicles_four.stories.talha.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-400 group-hover:text-zinc-200 leading-[2.1] text-justify transition-colors duration-500">
                  {t('chronicles_four.stories.talha.desc')}
                </p>
              </div>
            </motion.div>

            {/* العمود الثاني: سر ثروة وعفة الزبير (نازل لتحت سنة بالـ md:mt-16 لكسر الملل) */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 bg-[#050507] border border-zinc-900 hover:border-red-950/50 hover:scale-[1.02] transition-all duration-500 md:mt-16 group"
            >
              <div className="absolute -inset-x-2 -inset-y-2 bg-red-950/[0.01] group-hover:bg-red-950/[0.03] blur-xl rounded-xl transition-all duration-500 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-2 font-mono text-xs text-red-600">
                  <span>04 / B</span>
                  <div className="h-[1px] w-6 bg-zinc-800" />
                </div>
                <h3 className="text-2xl font-tufuli text-zinc-300 group-hover:text-white transition-colors">
                  {t('chronicles_four.stories.wealth.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-400 group-hover:text-zinc-200 leading-[2.1] text-justify transition-colors duration-500">
                  {t('chronicles_four.stories.wealth.desc')}
                </p>
              </div>
            </motion.div>

            {/* العمود الثالث: كفنه يوم بدر وغبطة الصحابة */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-8 bg-[#050507] border border-zinc-900 hover:border-red-950/50 hover:scale-[1.02] transition-all duration-500 group"
            >
              <div className="absolute -inset-x-2 -inset-y-2 bg-red-950/[0.01] group-hover:bg-red-950/[0.03] blur-xl rounded-xl transition-all duration-500 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-2 font-mono text-xs text-red-600">
                  <span>04 / C</span>
                  <div className="h-[1px] w-6 bg-zinc-800" />
                </div>
                <h3 className="text-2xl font-tufuli text-zinc-300 group-hover:text-white transition-colors">
                  {t('chronicles_four.stories.badr.title')}
                </h3>
                <p className="text-lg md:text-xl font-amiri text-zinc-400 group-hover:text-zinc-200 leading-[2.1] text-justify transition-colors duration-500">
                  {t('chronicles_four.stories.badr.desc')}
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
      {/* 🛡️ السيكشن السادس: الفصل الخامس - ملاحم النصال والمهابة (ستايل النصال المتقاطعة) 🛡️ */}

      {/* 🛡️ السيكشن الرابع: الفصل الثالث - الختام وشرف الشهادة والتسليم 🛡️ */}
      <section className="relative min-h-screen bg-[#000000] border-b border-zinc-900 py-52 px-6 overflow-hidden text-right">
        
        {/* 🌌 الخلفية الفاحمة بالتدرج الأحمر المدمج الصافي */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0404_0%,_#050506_75%,_#000000_100%)] opacity-95" />
          <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-red-950/[0.05] blur-[140px]" />
          <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-red-950/[0.05] blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* 🏢 رأس السيكشن الختامي */}
          <div className="text-center max-w-3xl mx-auto mb-48 space-y-4 border-b border-zinc-900/80 pb-12">
            <span className="text-red-700 font-sans tracking-[0.6em] text-xs uppercase block font-bold">
              FINAL CHAPTER // THE ULTIMATE SACRIFICE
            </span>
            <h2 className="text-4xl md:text-6xl font-tufuli text-white leading-tight">
              {t('chronicles_three.title')}
            </h2>
            <p className="text-xl md:text-2xl font-amiri text-zinc-400 pt-2 max-w-2xl mx-auto leading-relaxed">
              {t('chronicles_three.subtitle')}
            </p>
          </div>

          {/* 📜 مسار السرد المتناوب */}
          <div className="space-y-56">

            {/* القصة الأولى: موقف يوم الجمل */}
            <div className="grid md:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-8 md:col-start-1 space-y-6 group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-red-600 font-bold">03 //</span>
                  <h3 className="text-2xl md:text-4xl font-tufuli text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {t('chronicles_three.stories.jamal.title')}
                  </h3>
                </div>
                <div className="relative pr-6 border-r border-zinc-800 group-hover:border-red-800 transition-colors duration-500">
                  <p className="text-xl md:text-2xl font-amiri text-zinc-300 group-hover:text-white leading-[2.3] text-justify transition-colors duration-500">
                    {t('chronicles_three.stories.jamal.desc')}
                  </p>
                </div>
              </motion.div>
              <div className="hidden md:block md:col-span-4" />
            </div>

            {/* القصة الثانية: غدر وشهادة */}
            <div className="grid md:grid-cols-12 gap-8">
              <div className="hidden md:block md:col-span-4" />
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-8 space-y-6 group" 
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-red-600 font-bold">04 //</span>
                  <h3 className="text-2xl md:text-4xl font-tufuli text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {t('chronicles_three.stories.martyrdom.title')}
                  </h3>
                </div>
                <div className="relative pr-6 border-r border-zinc-800 group-hover:border-red-800 transition-colors duration-500">
                  <p className="text-xl md:text-2xl font-amiri text-zinc-300 group-hover:text-white leading-[2.3] text-justify transition-colors duration-500">
                    {t('chronicles_three.stories.martyrdom.desc')}
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* 📜 💬 سيكشن المقولة الختامية الأثرية (The Epilogue Quote) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-64 max-w-4xl mx-auto border-y border-zinc-900 bg-[#040405]/50 py-16 px-8 text-center space-y-6"
          >
            <p className="text-2xl md:text-4xl font-amiri text-zinc-200 italic leading-relaxed tracking-wide">
              {t('chronicles_three.quote.text')}
            </p>
            <span className="text-sm font-sans tracking-[0.3em] text-red-700 block uppercase font-semibold">
              {t('chronicles_three.quote.author')}
            </span>
          </motion.div>
        </div>
      </section>
{/* 🪙 السيكشن السابع والأخير: بوابة الانتقال للفصل القادم (تاجر الرحمن) 🪙 */}
      <section className="relative min-h-[80vh] bg-[#000000] py-40 px-6 overflow-hidden text-right flex flex-col justify-center items-center">
        
        {/* 🌌 التدرج اللوني الكهرماني الخافت (تيمة الثراء والعفة) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#120b02_0%,_#050506_80%,_#000000_100%)] opacity-95" />
          <div className="absolute bottom-0 w-[500px] h-[300px] rounded-full bg-amber-950/[0.08] blur-[120px] left-1/2 transform -translate-x-1/2" />
          {/* خطوط أفقية ناعمة توحي بملمس الدواوين القديمة */}
          <div className="absolute inset-x-0 h-[1px] top-10 bg-zinc-900/50" />
          <div className="absolute inset-x-0 h-[1px] bottom-10 bg-zinc-900/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          
          {/* 📜 التوطئة والتمهيد */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-amber-600 font-sans tracking-[0.5em] text-xs uppercase block font-bold animate-pulse">
              {t('chronicles_three.next_chapter.tag')}
            </span>
            <p className="text-xl md:text-2xl font-amiri text-zinc-400 leading-[2.1]">
              {t('chronicles_three.next_chapter.desc')}
            </p>
          </div>

          {/* 🚪 ➡️ بوابة العبور - الرابط التفاعلي الفخم */}
          <div className="pt-8 flex justify-center">
            <Link href="/abd-al-rahman-ibn-awf" className="group relative inline-block px-12 py-8 border border-zinc-900 bg-[#040405] hover:border-amber-950/50 transition-all duration-500 rounded-xl">
              
              {/* توهج كهرماني متفاعل خلف الزرار */}
              <div className="absolute inset-0 bg-amber-500/[0.02] rounded-xl group-hover:bg-amber-500/[0.05] blur-xl transition-all duration-500 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">
                
                {/* اسم الصحابي القادم بالحركة */}
                <h2 className="relative text-3xl md:text-5xl font-tufuli text-zinc-400 group-hover:text-amber-400 transition-colors duration-500 leading-none">
                  {t('chronicles_three.next_chapter.title')}
                </h2>

                {/* السهم الحركي المتفاعل مع الـ Hover لجهة اليسار */}
                <svg 
                  className="w-8 h-8 md:w-10 md:h-10 text-zinc-600 group-hover:text-amber-500 transform group-hover:translate-x-[-12px] transition-all duration-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>

              </div>

              {/* خط ديكوري سفلي يتمدد عند الوقوف بالماوس */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] w-0 bg-amber-700 group-hover:w-5/6 transition-all duration-700" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}