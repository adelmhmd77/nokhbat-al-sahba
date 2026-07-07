'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SaadPage() {
  const t = useTranslations();

  // إعدادات حركة السلم والظهور عند التمرير
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <main className="relative bg-[#030304] min-h-screen text-right overflow-hidden select-none selection:bg-blue-950/60">
      
      {/* ☄️ الخلفية الحية النبضية (توهج ميتاليك أزرق وفضي يليق بالفارس) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[150px] animate-[pulse_8s_infinite_ease-in-out]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-zinc-700/[0.08] blur-[130px] animate-[pulse_10s_infinite_ease-in-out_1s]" />
      </div>

      {/* 🪙 1. سيكشن الـ Hero الافتتاحي بتأثير النور الماسي */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-32 z-20 border-b border-zinc-900/40">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#030304_85%)] opacity-95" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/[0.02] blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-blue-400 font-bold tracking-widest block uppercase tracking-[0.2em] animate-pulse">
            {t('saad_intro.tag')}
          </span>
          
          {/* 💎 الستايل الماسي اللامع عالي التباين الذي اعتمدته 💎 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {t('saad_intro.title')}
          </h1>

          <p className="text-xl md:text-2xl font-amiri text-zinc-400 max-w-3xl mx-auto leading-relaxed pt-2">
            {t('saad_intro.subtitle')}
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce duration-1000">
          <div className="w-[1px] h-14 bg-blue-600/30" />
        </div>
      </section>

      {/* 🪙 2. سيكشن منظومة البطاقات التفاعلية الفخمة 🪙 */}
      <section className="relative min-h-screen py-32 px-6 z-20 max-w-7xl mx-auto">
        
        {/* شبكة البطاقات (2 في كل صف على الشاشات الكبيرة) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* البطاقة 1: النسب الشريف */}
          <div className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden">
            {/* خط التوهج السفلي عند الـ Hover */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="space-y-4">
              <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">01 // THE BLOODLINE</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                {t('saad_intro.cards.lineage_title')}
              </h3>
              <p className="text-lg md:text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.1] text-justify tracking-wide">
                {t('saad_intro.cards.lineage_desc')}
              </p>
            </div>
          </div>

          {/* البطاقة 2: فروسية الشباب */}
          <div className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="space-y-4">
              <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">02 // THE ARCHERY</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                {t('saad_intro.cards.youth_title')}
              </h3>
              <p className="text-lg md:text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.1] text-justify tracking-wide">
                {t('saad_intro.cards.youth_desc')}
              </p>
            </div>
          </div>

          {/* البطاقة 3: ملحمة الأم والصلابة */}
          <div className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="space-y-4">
              <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">03 // THE SACRIFICE</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                {t('saad_intro.cards.mother_title')}
              </h3>
              <p className="text-lg md:text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.1] text-justify tracking-wide">
                {t('saad_intro.cards.mother_desc')}
              </p>
            </div>
          </div>

          {/* البطاقة 4: الدعوة المستجابة والمكانة */}
          <div className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="space-y-4">
              <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">04 // THE ANSWERED PRAYER</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                {t('saad_intro.cards.status_title')}
              </h3>
              <p className="text-lg md:text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.1] text-justify tracking-wide">
                {t('saad_intro.cards.status_desc')}
              </p>
            </div>
          </div>

        </div>
      </section>
<section className="relative min-h-screen py-32 px-6 z-20 max-w-7xl mx-auto border-t border-zinc-900/40">
        
        {/* عنوان السيكشن بالاستدعاء الجديد المعتمد من طرفك */}
        <div className="space-y-4 mb-24 text-right">
          <span className="text-xs font-mono text-blue-400 font-bold tracking-widest block uppercase tracking-[0.2em]">
            {t('saad_intro.saad_faith.tag')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {t('saad_intro.saad_faith.title')}
          </h2>
        </div>

        {/* شبكة بطاقات السلم (تفاوت العمود الثاني بالـ md:translate-y-20 هو اللي بيعمل شكل السلم الجمالي) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:pb-32">
          
          {/* العمود الأول (يبدأ طبيعي) */}
          <div className="space-y-12">
            
            {/* البطاقة 1: أول دم أُريق */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden"
            >
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">01 // THE FIRST BLOOD</span>
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                  {t('saad_intro.saad_faith.cards.first_blood_title')}
                </h3>
                <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify tracking-wide">
                  {t('saad_intro.saad_faith.cards.first_blood_desc')}
                </p>
              </div>
            </motion.div>

            {/* البطاقة 3: فداك أبي وأمي */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden"
            >
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">03 // THE ROYAL HONOR</span>
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                  {t('saad_intro.saad_faith.cards.fida_title')}
                </h3>
                <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify tracking-wide">
                  {t('saad_intro.saad_faith.cards.fida_desc')}
                </p>
              </div>
            </motion.div>

          </div>

          {/* العمود الثاني (مُزاح لأسفل لخلق شكل السلم المتموج) */}
          <div className="space-y-12 md:translate-y-24">
            
            {/* البطاقة 2: أول سهم رُمي */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden"
            >
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">02 // THE FIRST ARROW</span>
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                  {t('saad_intro.saad_faith.cards.first_arrow_title')}
                </h3>
                <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify tracking-wide">
                  {t('saad_intro.saad_faith.cards.first_arrow_desc')}
                </p>
              </div>
            </motion.div>

            {/* البطاقة 4: حارس النبوة */}
            <motion.div 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] overflow-hidden"
            >
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400 font-bold tracking-wider block">04 // THE NIGHT GUARDIAN</span>
                <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 transition-all duration-500 group-hover:from-white group-hover:to-blue-100">
                  {t('saad_intro.saad_faith.cards.protection_title')}
                </h3>
                <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify tracking-wide">
                  {t('saad_intro.saad_faith.cards.protection_out')}
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>
      {/* 🪙 4. سيكشن ملحمة القادسية والمدائن (نمط العرض الطولي المتناوب) 🪙 */}
      <section className="relative min-h-screen py-32 px-6 z-20 max-w-7xl mx-auto border-t border-zinc-900/40">
        
        {/* عنوان السيكشن الفخم بنفس التنسيق المعتمد */}
        <div className="space-y-4 mb-28 text-right">
          <span className="text-xs font-mono text-blue-400 font-bold tracking-widest block uppercase tracking-[0.2em]">
            {t('saad_intro.saad_qadisiyyah.tag')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {t('saad_intro.saad_qadisiyyah.title')}
          </h2>
        </div>

        {/* الكروت الطولية الكبيرة بالتناوب لتعميق السرد التاريخي */}
        <div className="space-y-16">
          
          {/* كارت 1: تولية القيادة */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative border border-zinc-900 bg-[#050506]/40 backdrop-blur-md p-10 md:p-14 transition-all duration-500 hover:border-blue-900/40 hover:bg-[#07070a]/80 shadow-2xl overflow-hidden"
          >
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="space-y-4 max-w-4xl">
              <span className="text-xs font-mono text-blue-500 font-bold block">SCENE 01 // THE APPOINTMENT</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100 transition-colors">
                {t('saad_intro.saad_qadisiyyah.cards.command_title')}
              </h3>
              <p className="text-xl font-amiri text-zinc-300 leading-[2.3] text-justify">
                {t('saad_intro.saad_qadisiyyah.cards.command_desc')}
              </p>
            </div>
          </motion.div>

          {/* كارت 2: الجسد العليل والقيادة الذكية */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative border border-zinc-900 bg-[#050506]/40 backdrop-blur-md p-10 md:p-14 transition-all duration-500 hover:border-blue-900/40 hover:bg-[#07070a]/80 shadow-2xl overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="space-y-4 max-w-4xl mr-auto text-right md:text-right">
              <span className="text-xs font-mono text-blue-500 font-bold block">SCENE 02 // THE STRATEGY FROM ABOVE</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100 transition-colors">
                {t('saad_intro.saad_qadisiyyah.cards.illness_title')}
              </h3>
              <p className="text-xl font-amiri text-zinc-300 leading-[2.3] text-justify">
                {t('saad_intro.saad_qadisiyyah.cards.illness_desc')}
              </p>
            </div>
          </motion.div>

          {/* كارت 3: معركة القادسية وسقوط رستم */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative border border-zinc-900 bg-[#050506]/40 backdrop-blur-md p-10 md:p-14 transition-all duration-500 hover:border-blue-900/40 hover:bg-[#07070a]/80 shadow-2xl overflow-hidden"
          >
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="space-y-4 max-w-4xl">
              <span className="text-xs font-mono text-blue-500 font-bold block">SCENE 03 // THE FALL OF AN EMPIRE</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100 transition-colors">
                {t('saad_intro.saad_qadisiyyah.cards.rustom_title')}
              </h3>
              <p className="text-xl font-amiri text-zinc-300 leading-[2.3] text-justify">
                {t('saad_intro.saad_qadisiyyah.cards.rustom_desc')}
              </p>
            </div>
          </motion.div>

          {/* كارت 4: عبور دجلة الأسطوري */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative border border-zinc-900 bg-[#050506]/40 backdrop-blur-md p-10 md:p-14 transition-all duration-500 hover:border-blue-900/40 hover:bg-[#07070a]/80 shadow-2xl overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="space-y-4 max-w-4xl mr-auto text-right">
              <span className="text-xs font-mono text-blue-500 font-bold block">SCENE 04 // THE MIRACLE OF THE RIVER</span>
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100 transition-colors">
                {t('saad_intro.saad_qadisiyyah.cards.mada_in_title')}
              </h3>
              <p className="text-xl font-amiri text-zinc-300 leading-[2.3] text-justify">
                {t('saad_intro.saad_qadisiyyah.cards.mada_in_desc')}
              </p>
            </div>
          </motion.div>

        </div>
      </section>
      {/* 🪙 6. سيكشن يوميات الفارس ومواقفه مع الصحابة (نمط السلم المرقم المتناوب) 🪙 */}
      <section className="relative min-h-screen py-32 px-6 z-20 max-w-7xl mx-auto border-t border-zinc-900/40">
        
        {/* عنوان السيكشن */}
        <div className="space-y-4 mb-32 text-center md:text-right">
          <span className="text-xs font-mono text-blue-400 font-bold tracking-widest block uppercase tracking-[0.2em]">
            {t('saad_intro.saad_daily.tag')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {t('saad_intro.saad_daily.title')}
          </h2>
        </div>

        {/* حاوية السلم المتناوب الجديد */}
        <div className="relative">
          
          {/* الخط المركزي الممتد */}
          <div className="absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600/40 via-zinc-800 to-transparent hidden md:block" />

          <div className="space-y-24 md:space-y-0">

            {/* كارت 1: اليمين - مع الصديق والفاروق */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/40 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                01
              </div>
              
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl overflow-hidden"
              >
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100">
                    {t('saad_intro.saad_daily.cards.brotherhood_title')}
                  </h3>
                  <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify">
                    {t('saad_intro.saad_daily.cards.brotherhood_desc')}
                  </p>
                </div>
              </motion.div>
              <div className="hidden md:block" />
            </div>

            {/* كارت 2: اليسار - تفاصيل اليوم والعبادة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative md:mt-16">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/40 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                02
              </div>
              
              <div className="hidden md:block" />
              
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl overflow-hidden"
              >
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100">
                    {t('saad_intro.saad_daily.cards.day_routine_title')}
                  </h3>
                  <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify">
                    {t('saad_intro.saad_daily.cards.day_routine_desc')}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* كارت 3: اليمين - الستة أصحاب الشورى */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative md:mt-16">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/40 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                03
              </div>
              
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl overflow-hidden"
              >
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100">
                    {t('saad_intro.saad_daily.cards.shura_title')}
                  </h3>
                  <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify">
                    {t('saad_intro.saad_daily.cards.shura_title_sub')}
                  </p>
                </div>
              </motion.div>
              <div className="hidden md:block" />
            </div>

            {/* كارت 4: اليسار - الرفق بالضعفاء */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative md:mt-16">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/40 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                04
              </div>
              
              <div className="hidden md:block" />
              
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-blue-900/60 hover:bg-[#07070a]/90 shadow-xl overflow-hidden"
              >
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white group-hover:text-blue-100">
                    {t('saad_intro.saad_daily.cards.kindness_title')}
                  </h3>
                  <p className="text-xl font-amiri text-[#f4f4f6] font-medium leading-[2.2] text-justify">
                    {t('saad_intro.saad_daily.cards.kindness_desc')}
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* 🪙 7. سيكشن أقوال سعد المأثورة (كروت متفرقة عشوائية + خلفية زرقاء بلورية متوهجة بالكامل) 🪙 */}
      <section className="relative min-h-screen py-32 px-6 z-20 w-full overflow-hidden border-t border-zinc-900/40 bg-[#020203]">
        
        {/* 🌟 الإشعاع الأزرق اللامع والواضح في عمق الخلفية 🌟 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tr from-blue-600/25 to-cyan-500/10 blur-[140px] md:blur-[180px] animate-pulse duration-[8s]" />
        </div>
        <div className="absolute left-10 top-1/3 w-[300px] h-[300px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none z-0" />
        <div className="absolute right-10 bottom-1/3 w-[350px] h-[350px] rounded-full bg-blue-700/10 blur-[130px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* عنوان السيكشن */}
          <div className="space-y-4 mb-32 text-center md:text-right relative">
            <span className="text-xs font-mono text-blue-400 font-bold tracking-widest block uppercase tracking-[0.2em]">
              {t('saad_intro.saad_quotes.tag')}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-200 drop-shadow-[0_0_50px_rgba(59,130,246,0.4)]">
              {t('saad_intro.saad_quotes.title')}
            </h2>
          </div>

          {/* شبكة الكروت المتفرقة والموزعة عشوائياً بارتفاعات وحركات مختلفة */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative min-h-[900px]">
            
            {/* الكارت 1: أعلى اليمين - عائم */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="md:col-span-6 lg:col-span-5 group relative border border-blue-500/20 bg-black/30 backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 rounded-2xl h-fit self-start"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400/70 block tracking-wider">QUOTE // 01</span>
                <h3 className="text-2xl font-bold font-tufuli text-white group-hover:text-blue-300 transition-colors">
                  {t('saad_intro.saad_quotes.cards.quote1_title')}
                </h3>
                <p className="text-xl font-amiri text-blue-50/90 font-medium leading-[2.2] text-justify italic">
                  {t('saad_intro.saad_quotes.cards.quote1_desc')}
                </p>
              </div>
            </motion.div>

            {/* كارت فارغ للموازنة البصرية وتوزيع الفراغ العشوائي */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* الكارت 2: أعلى اليسار ومائل لأسفل قليلاً */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="md:col-span-6 lg:col-span-5 group relative border border-blue-500/20 bg-black/30 backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 rounded-2xl h-fit md:mt-24"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400/70 block tracking-wider">QUOTE // 02</span>
                <h3 className="text-2xl font-bold font-tufuli text-white group-hover:text-blue-300 transition-colors">
                  {t('saad_intro.saad_quotes.cards.quote2_title')}
                </h3>
                <p className="text-xl font-amiri text-blue-50/90 font-medium leading-[2.2] text-justify italic">
                  {t('saad_intro.saad_quotes.cards.quote2_desc')}
                </p>
              </div>
            </motion.div>

            {/* الكارت 3: أسفل اليمين - متأخر في الارتفاع */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="md:col-span-6 lg:col-span-5 lg:offset-1 group relative border border-blue-500/20 bg-black/30 backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 rounded-2xl h-fit md:-mt-12"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400/70 block tracking-wider">QUOTE // 03</span>
                <h3 className="text-2xl font-bold font-tufuli text-white group-hover:text-blue-300 transition-colors">
                  {t('saad_intro.saad_quotes.cards.quote3_title')}
                </h3>
                <p className="text-xl font-amiri text-blue-50/90 font-medium leading-[2.2] text-justify italic">
                  {t('saad_intro.saad_quotes.cards.quote3_desc')}
                </p>
              </div>
            </motion.div>

            {/* كارت فارغ للموازنة */}
            <div className="hidden md:block md:col-span-1" />

            {/* الكارت 4: أسفل اليسار ومتطرف جداً لإبراز العشوائية الفخمة */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="md:col-span-5 lg:col-span-5 group relative border border-blue-500/20 bg-black/30 backdrop-blur-2xl p-8 md:p-10 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 rounded-2xl h-fit md:mt-16"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="space-y-4">
                <span className="text-xs font-mono text-blue-400/70 block tracking-wider">QUOTE // 04</span>
                <h3 className="text-2xl font-bold font-tufuli text-white group-hover:text-blue-300 transition-colors">
                  {t('saad_intro.saad_quotes.cards.quote4_title')}
                </h3>
                <p className="text-xl font-amiri text-blue-50/90 font-medium leading-[2.2] text-justify italic">
                  {t('saad_intro.saad_quotes.cards.quote4_desc')}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* 🪙 8. سيكشن القول الخالد (مزخرف وفخم في السنتر) 🪙 */}
      <section className="relative py-40 px-6 z-20 w-full overflow-hidden border-t border-zinc-950 bg-[#020203]">
        {/* توهج نيون مركزي خلف القول مباشرة */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative space-y-12">
          {/* شارة علوية مزخرفة */}
          <div className="flex items-center justify-center space-x-4 space-x-reverse opacity-80">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-xs font-mono text-blue-400 font-bold tracking-[0.25em] uppercase">
              {t('saad_intro.saad_immortal_quote.tag')}
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>

          {/* إطار القول المزخرف الفخم */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative border border-zinc-900/80 bg-black/40 backdrop-blur-3xl px-8 py-16 md:p-20 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden rounded-3xl"
          >
            {/* زوايا مضيئة ومزخرفة للكارت */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500/50" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500/50" />

            {/* النص القرآني/القول الكبير والمزخرف */}
            <p className="text-3xl sm:text-4xl md:text-5xl font-amiri font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 leading-[2.2] md:leading-[2.4] text-center drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              {t('saad_intro.saad_immortal_quote.quote')}
            </p>
          </motion.div>
        </div>
      </section>
{/* 🪙 8. سيكشن اللحظات الأخيرة (نمط السلم المرقم) 🪙 */}
      <section className="relative min-h-screen py-32 px-6 z-20 max-w-7xl mx-auto border-t border-zinc-900/40">
        
        <div className="space-y-4 mb-32 text-center md:text-right">
          <span className="text-xs font-mono text-blue-400 font-bold tracking-widest block uppercase tracking-[0.2em]">
            {t('saad_intro.saad_final_journey.tag')}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200">
            {t('saad_intro.saad_final_journey.title')}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600/20 via-zinc-800 to-transparent hidden md:block" />

          <div className="space-y-24 md:space-y-0">

            {/* كارت 1: الكفن (يمين) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/30 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold">01</div>
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between hover:border-blue-900/60 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200">{t('saad_intro.saad_final_journey.cards.cloak_title')}</h3>
                <p className="text-xl font-amiri text-[#e0e0e0] leading-[2.2] text-justify">{t('saad_intro.saad_final_journey.cards.cloak_desc')}</p>
              </motion.div>
              <div className="hidden md:block" />
            </div>

            {/* كارت 2: الأهل (يسار) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative md:mt-16">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/30 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold">02</div>
              <div className="hidden md:block" />
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between hover:border-blue-900/60 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200">{t('saad_intro.saad_final_journey.cards.family_title')}</h3>
                <p className="text-xl font-amiri text-[#e0e0e0] leading-[2.2] text-justify">{t('saad_intro.saad_final_journey.cards.family_desc')}</p>
              </motion.div>
            </div>

            {/* كارت 3: الوفاة (يمين) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative md:mt-16">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/30 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold">03</div>
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between hover:border-blue-900/60 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200">{t('saad_intro.saad_final_journey.cards.death_title')}</h3>
                <p className="text-xl font-amiri text-[#e0e0e0] leading-[2.2] text-justify">{t('saad_intro.saad_final_journey.cards.death_desc')}</p>
              </motion.div>
              <div className="hidden md:block" />
            </div>

            {/* كارت 4: الدفن (يسار) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative md:mt-16">
              <div className="absolute right-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-[#030304] border border-blue-500/30 hidden md:flex items-center justify-center z-30 font-mono text-sm text-blue-400 font-bold">04</div>
              <div className="hidden md:block" />
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative border border-zinc-900 bg-[#050506]/60 backdrop-blur-md p-10 space-y-6 flex flex-col justify-between hover:border-blue-900/60 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200">{t('saad_intro.saad_final_journey.cards.burial_title')}</h3>
                <p className="text-xl font-amiri text-[#e0e0e0] leading-[2.2] text-justify">{t('saad_intro.saad_final_journey.cards.burial_desc')}</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* 🪙 9. كود الخاتمة والنهاية للـ Page (الـ Footer الفخم) 🪙 */}
      <footer className="relative py-24 px-6 z-20 w-full border-t border-zinc-900/50 bg-[#010102] text-center overflow-hidden">
        {/* لمعان خفيف أخير */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        
        <div className="max-w-3xl mx-auto space-y-6 relative">
          <h4 className="text-xl md:text-2xl font-bold font-tufuli text-zinc-400">
            {t('saad_intro.saad_footer.title')}
          </h4>
          <p className="text-base md:text-lg font-amiri text-zinc-500 leading-relaxed max-w-xl mx-auto">
            {t('saad_intro.saad_footer.desc')}
          </p>
          
          <div className="pt-8 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
            © 2026 THE ISLAMIC HISTORY PROJECT // ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
{/* 🪙 10. سيكشن الجسر البوابي للانتقال من سيدنا سعد إلى سيدنا سعيد بن زيد 🪙 */}
      <section className="relative min-h-[80vh] py-32 px-6 z-20 w-full overflow-hidden border-t-2 border-blue-900/20 bg-[#020203]">
        
        {/* هالة التوهج الأزرق النيون الممتدة خلف بوابه الانتقال */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[600px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/5 to-transparent blur-[150px] animate-pulse duration-[8s]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
          
          {/* شارة علوية ذكية تحدد المسار */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-blue-400 font-bold tracking-[0.25em] block uppercase">
              {t('saad_intro.saad_to_said_bridge.tag')}
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-tufuli text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              {t('saad_intro.saad_to_said_bridge.title')}
            </h2>
            <p className="text-base md:text-xl font-mono text-zinc-400 font-medium">
              {t('saad_intro.saad_to_said_bridge.subtitle')}
            </p>
          </div>

          {/* الكارت الزجاجي العائم الذي يمهد للدخول */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative border border-blue-500/10 bg-black/40 backdrop-blur-3xl px-8 py-12 md:p-16 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden rounded-3xl max-w-4xl mx-auto space-y-10"
          >
            {/* الزوايا المضيئة للكارت النيوني */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500/40" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500/40" />

            <p className="text-lg md:text-2xl font-amiri font-medium text-zinc-300 leading-[2.1] md:leading-[2.3] text-center max-w-3xl mx-auto">
              {t('saad_intro.saad_to_said_bridge.desc')}
            </p>

            {/* زرار الانتقال المتوهج التفاعلي */}
            <div className="pt-4 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // هنا يسطا بتخليه يغير حالة الـ active صحابي أو يمرر السكرول لبداية سيرة سعيد
                  // مثلاً: setActiveSahabi('said') أو window.scrollTo
                }}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-tufuli text-lg md:text-xl font-bold rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.3)] border border-blue-400/40 transition-all duration-300 flex items-center space-x-3 space-x-reverse"
              >
                
                <Link href="/said-ibn-zayd" className="absolute inset-0 z-10" />
                <span>{t('saad_intro.saad_to_said_bridge.button_text')}</span>
                
                {/* سهم أيقوني يتوهج مع الزرار */}
                <svg className="w-5 h-5 transform rotate-180 text-blue-100 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}