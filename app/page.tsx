'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] relative overflow-x-hidden" dir="rtl">
      
      {/* 1. منطقة الـ Hero - أول حاجة المستخدم بيشوفها */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        
        {/* الحاوية اللي فيها الزخرفة والنص */}
        <div className="relative w-full max-w-5xl aspect-[1/1] flex flex-col items-center justify-center">
          
          {/* الصورة الذهبية كخلفية ثابتة */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/gold_banner.png" 
              alt="زخرفة ذهبية إسلامية - نخبة الصحابة" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>

          {/* النص الجامد في الفراغ اللي في النص */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center mt-4">
            <h1 className="text-6xl md:text-8xl font-bold font-tufuli text-white leading-none">
              نُخْبَةُ <br/> 
              <span className="text-amber-500 tracking-wider">الصَّحَابَة</span>
            </h1>
            <p className="mt-12 text-neutral-400 text-xl max-w-xl font-tufuli leading-relaxed">
              استكشف سِيَر خيار الأمة من خلال تجربة بصرية تفاعلية فريدة
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
          لماذا نُخبة الصحابة؟
        </h2>

        <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed font-tufuli antialiased px-4">
          في زمنٍ تتسارع فيه الأحداث، نعودُ لنستلهم الثبات من جيلٍ صاغ التاريخ بصدقه، 
          وجعل من الإيمانِ منهجاً ومن التضحيةِ طريقاً. نخبة الصحابة ليس مجرد موقع، 
          بل هو رحلةٌ بصرية نبحر فيها بين سِيَر العشرة المبشرين بالجنة، 
          لنقف على أعتابِ مواقفهم التي غيَّرت وجه العالم.
        </p>

        {/* مؤشر النزول */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-500 text-sm tracking-widest">ابدأ الرحلة</span>
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
    هُم الذينَ جَمعوا بينَ <span className="text-amber-500">الأرضِ والسَّماء</span>.. <br className="hidden md:block"/>
    رجالٌ لم يكتفوا بصناعةِ التاريخ، بل كانوا هُم <span className="text-amber-500 font-bold">التَّاريخَ ذاتَه</span>. <br/>
    عشرةُ أقمارٍ أضاءت مَسارَ الأمة، لكلِّ واحدٍ منهم قصةٌ تُروى، وأثرٌ لا يُمحى.
  </p>
  
  <p className="mt-8 text-xl text-zinc-500 font-tufuli text-center">
    تَهيَّأ.. فنحنُ الآن على أعتابِ حَضرةِ <span className="text-amber-200">الخالدين</span>.
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
      src="/abubakr.jpg" // تأكد إن الصورة دي هي الزخرفة الذهبية اللي رفعتها
      alt="زخرفة رمزية لأبي بكر الصديق"
      width={400} // عرض الصورة
      height={400} // طول الصورة
      className="object-contain opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out border border-amber-500/20 rounded-full" 
   />
   
   {/* تدرج لوني أسود في الأسفل عشان الكلام يبان */}
   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
   
   {/* الكلام في الأسفل */}
   <div className="absolute bottom-10 right-10 z-20">
      <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي الأول</span>
      <h3 className="text-4xl font-bold text-white font-tufuli mt-2">عَتِيقُ اللهِ مِنَ النَّار</h3>
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
        أبو بكر <br/>
        <span className="text-amber-500">الصِّدِّيق</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        لو وُزن إيمان أبي بكر بإيمان أهل الأرض لرجح بهم <br/>
        أول من آمن من الرجال، ورفيق الهجرة، والرجل الذي ثبتت به الأمة يوم وفاة النبي ﷺ. 
        بذل ماله كله لله، وقاد الأمة في أصعب لحظاتها بقلبٍ يملؤه اليقين.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        اقرأ السيرة كاملة
      </button>
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
            src="/omar_farouk.png" // ارفع صورة الفاروق وسميها كده
            alt="عمر بن الخطاب"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full   "
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي الثاني</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">الفاروق</h3>
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
        عمر بن <br/>
        <span className="text-amber-500">الخَطَّاب</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        لو كان نبيٌّ بعدي لكان عمر <br/>
        الذي أعزَّ الله به الإسلام، وفرَّق به بين الحق والباطل. 
        عملاق الإسلام الذي شهدت له الأرض بالعدل، وارتعدت منه قصور كسرى وقيصر.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        استكشف عَدل الفاروق
      </button>
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
            src="/othman.png" // ارفع صورة ذو النورين وسميها كده
            alt="عثمان بن عفان"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full   "
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي الثالث</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">ذو النُّورين</h3>
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
        عثمان بن <br/>
        <span className="text-amber-500">عَفَّان</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        ألا أستحي من رجلٍ تستحي منه الملائكة <br/>
        تستحي منه الملائكة لشدة حيائه، وبذل ماله كله في سبيل الله وفي جيش العسرة. 
        جامع القرآن الكريم، وصاحب الهجرتين، الذي أنار الله قلبه بنور الإيمان وبنور ابنتي رسول الله ﷺ.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        سيرة ذي النورين
      </button>
    </motion.div>

  </div>
</section>
    </main>
  );
}