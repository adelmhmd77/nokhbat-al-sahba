'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
export default function Home() {
    const t = useTranslations('Index');
  return (
    <main className="min-h-screen bg-[#050505] relative overflow-x-hidden" dir="rtl">
      
      {/* 1. منطقة الـ Hero - أول حاجة المستخدم بيشوفها */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        
        {/* الحاوية اللي فيها الزخرفة والنص */}
        <div className="relative w-full max-w-5xl aspect-[1/1] flex flex-col items-center justify-center">
          {/* النص الجامد في الفراغ اللي في النص */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className=" text-8xl font-bold text-amber-500 mb-8 font-tufuli leading-tight">
              {t('title')} <br/> 
            </h1>
            <p className=" text-neutral-400 text-xl max-w-xl font-tufuli leading-relaxed">
              {t('hero_subtitle')}
            </p>
          </div>
        </div>

        {/* لمسة فنية: توهج ذهبي خفي */}
        <div className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[200px] z-0 pointer-events-none"></div>
      </section>

      {/* 2. قسم التعريف بالموقع - بيظهر وأنت بتعمل Scroll */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative py-32 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#050505] via-zinc-900/10 to-[#050505]"
      >
        {/* خط زخرفي فوق الكلام */}
        <div className="mb-8 w-24 h-[1px] bg-amber-500/50"></div>

        <h2 className="text-3xl md:text-5xl font-bold text-amber-500 mb-8 font-tufuli">
          {t('why_title')}
        </h2>

        <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed font-tufuli antialiased px-4">
          {t('why_description')}
        </p>

        {/* مؤشر النزول */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-500 text-sm tracking-widest">{t('start_journey')}</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
        </motion.div>
      </motion.section>

<motion.div 
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="bg-zinc-900/40 p-10 rounded-3xl border border-amber-500/20 backdrop-blur-sm relative overflow-hidden"
>
  {/* تأثير ضوئي متحرك خلف النص */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>

  <p className="text-2xl md:text-3xl font-tufuli leading-loose text-white text-center">
    {t('intro_quote')}
  </p>
  
  <p className="mt-8 text-xl text-zinc-500 font-tufuli text-center">
    {t('intro_footer')}
  </p>
</motion.div>

{/* كارت الصحابي الأول: أبو بكر الصديق */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
    
    {/* 1. الجانب البصري (الصورة أو الـ 3D) */}
    <motion.div 
      initial={{ opacity: 0, x: 100, rotateY: -20 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      {/* هالة ضوئية خلف الكارت */}
      <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-[100px] group-hover:bg-amber-500/30 transition-all duration-700"></div>
      
      {/* هنا بنستدعي الـ Component اللي إنت عامله ThreeDPortal أو صورة */}
      <div className="relative z-10 w-full h-full border border-amber-500/30 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/20">
<div className="relative z-10 w-full h-full border border-amber-500/30 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/20 flex items-center justify-center p-12 group">
   {/* الصورة الرمزية في المنتصف */}
   <Image 
      src="/abubakr.jpg"
      alt="زخرفة رمزية لأبي بكر الصديق"
      width={400}
      height={400}
      className="object-contain opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out border border-amber-500/20 rounded-full" 
   />
   
   {/* تدرج لوني أسود في الأسفل عشان الكلام يبان */}
   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
   
   {/* الكلام في الأسفل */}
   <div className="absolute bottom-10 right-10 z-20">
      <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.abu_bakr.order')}</span>
      <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.abu_bakr.nickname')}</h3>
   </div>
</div>
      </div>
    </motion.div>

    {/* 2. الجانب النصي (التعريف) */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.abu_bakr.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.abu_bakr.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.abu_bakr.bio')}
      </p>
      <Link 
  href="/abu-bakr-al-siddiq" 
  className="inline-block px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full"
>
  {t('companions.abu_bakr.btn')}
</Link>
    </motion.div>

  </div>
</section>

{/* كارت الصحابي الثاني: عمر بن الخطاب */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
    
    {/* 1. الجانب البصري (الصورة على اليمين المرة دي) */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-600/10 rounded-full blur-[120px] group-hover:bg-amber-600/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/omar_farouk.png"
            alt="عمر بن الخطاب"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.omar.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.omar.nickname')}</h3>
         </div>
      </div>
    </motion.div>

    {/* 2. الجانب النصي (الكلام على الشمال) */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.omar.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.omar.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.omar.bio')}
      </p>
  <Link 
  href="/umar-ibn-al-khattab" 
  className="inline-block px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full"
>
  {t('companions.omar.btn')}
</Link>
    </motion.div>

  </div>
</section>

{/* كارت الصحابي الثالث: عثمان بن عفان */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
    
    {/* 1. الجانب البصري - رجعنا لليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/othman.png"
            alt="عثمان بن عفان"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.othman.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.othman.nickname')}</h3>
         </div>
      </div>
    </motion.div>

    {/* 2. الجانب النصي - الكلام على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.othman.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.othman.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.othman.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.othman.btn')}
      </button>
    </motion.div>
  </div>
</section>

{/* كارت الصحابي الرابع: علي بن أبي طالب */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
    
    {/* 1. الجانب النصي - على اليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.ali.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.ali.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.ali.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.ali.btn')}
      </button>
    </motion.div>

    {/* 2. الجانب البصري - على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-600/10 rounded-full blur-[120px] group-hover:bg-amber-600/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/ali.png"
            alt="علي بن أبي طالب"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.ali.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.ali.nickname')}</h3>
         </div>
      </div>
    </motion.div>
  </div>
</section>

{/* كارت الصحابي الخامس: طلحة بن عبيد الله */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
    
    {/* 1. الجانب البصري - على اليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/talha.png"
            alt="طلحة بن عبيد الله"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.talha.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.talha.nickname')}</h3>
         </div>
      </div>
    </motion.div>

    {/* 2. الجانب النصي - على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.talha.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.talha.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.talha.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.talha.btn')}
      </button>
    </motion.div>
  </div>
</section>

{/* كارت الصحابي السادس: الزبير بن العوام */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
    
    {/* 1. الجانب النصي - على اليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.zubair.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.zubair.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.zubair.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.zubair.btn')}
      </button>
    </motion.div>

    {/* 2. الجانب البصري - على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/zubair.png"
            alt="الزبير بن العوام"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.zubair.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.zubair.nickname')}</h3>
         </div>
      </div>
    </motion.div>
  </div>
</section>

{/* كارت الصحابي السابع: عبد الرحمن بن عوف */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
    
    {/* 1. الجانب البصري - على اليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/abdurrahman.png"
            alt="عبد الرحمن بن عوف"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.abdurrahman.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.abdurrahman.nickname')}</h3>
         </div>
      </div>
    </motion.div>

    {/* 2. الجانب النصي - على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.abdurrahman.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.abdurrahman.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.abdurrahman.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.abdurrahman.btn')}
      </button>
    </motion.div>
  </div>
</section>

{/* كارت الصحابي الثامن: سعد بن أبي وقاص */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
    
    {/* 1. الجانب النصي - على اليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.saad.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.saad.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.saad.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.saad.btn')}
      </button>
    </motion.div>

    {/* 2. الجانب البصري - على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      <div className="absolute inset-0 bg-emerald-900/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/saad.png"
            alt="سعد بن أبي وقاص"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.saad.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.saad.nickname')}</h3>
         </div>
      </div>
    </motion.div>
  </div>
</section>

{/* كارت الصحابي التاسع: سعيد بن زيد */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
    
    {/* 1. الجانب البصري - على اليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/saeed.png"
            alt="سعيد بن زيد"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.saeed.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.saeed.nickname')}</h3>
         </div>
      </div>
    </motion.div>

    {/* 2. الجانب النصي - على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.saeed.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.saeed.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.saeed.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.saeed.btn')}
      </button>
    </motion.div>
  </div>
</section>

{/* كارت الصحابي العاشر: أبو عبيدة بن الجراح */}
<section className="relative min-h-screen flex items-center justify-center py-20">
  <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
    
    {/* 1. الجانب النصي - على اليمين */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full md:w-1/2 text-right"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white font-tufuli mb-6 leading-tight">
        {t('companions.abu_ubaida.name_part1')} <br/>
        <span className="text-amber-500">{t('companions.abu_ubaida.name_part2')}</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        {t('companions.abu_ubaida.bio')}
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        {t('companions.abu_ubaida.btn')}
      </button>
    </motion.div>

    {/* 2. الجانب البصري - على الشمال */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-full md:w-1/2 aspect-square group"
    >
      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/abou_obaida.png"
            alt="أبو عبيدة بن الجراح"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">{t('companions.abu_ubaida.order')}</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">{t('companions.abu_ubaida.nickname')}</h3>
         </div>
      </div>
    </motion.div>
  </div>
</section>

{/* قسم الختام والتحفيز */}
<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/10 to-black"></div>
  
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 text-center px-6 max-w-4xl"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-white font-tufuli mb-8">
        {t('footerout')}
    </h2>
    <p className="text-xl md:text-2xl text-zinc-300 font-tufuli leading-relaxed mb-12">
              {t('footerp')}

    </p>
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-12 py-4 bg-amber-500 text-black font-bold font-tufuli rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all"
    >
      {t('read_more')}
    </motion.button>
  </motion.div>
</section>

{/* الـ Footer */}
<footer className="relative bg-black border-t border-amber-500/20 py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      
      {/* اللوجو أو اسم المشروع */}
      <div className="text-right">
        <h3 className="text-2xl font-bold text-amber-500 font-tufuli tracking-wider">نُخبةُ الصَّحابة</h3>
        <p className="text-zinc-500 font-tufuli mt-2 italic">رضي الله عنهم وأرضاهم</p>
      </div>

      {/* حقوق الملكية وأصحاب الموقع */}
      <div className="text-center md:text-right border-r-0 md:border-r border-amber-500/30 pr-0 md:pr-8">
        <p className="text-zinc-400 font-tufuli text-lg">صُنع بحب وإخلاص بواسطة:</p>
        <div className="flex gap-4 mt-2 justify-center md:justify-end">
          <span className="text-white font-bold font-tufuli hover:text-amber-500 transition-colors cursor-default">حازم النمر</span>
          <span className="text-amber-500 opacity-50">|</span>
          <span className="text-white font-bold font-tufuli hover:text-amber-500 transition-colors cursor-default">عادل محمد</span>
        </div>
      </div>

    </div>

    {/* السطر الأخير */}
    <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
      <p className="text-zinc-600 text-sm font-sans tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Nokhbat Al-Sahaba. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}