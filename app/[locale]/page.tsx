'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
          <div className="relative z-10 flex flex-col items-center justify-center text-center mt-4">
            <h1 className="text-6xl md:text-8xl font-bold font-tufuli text-white leading-none">
                          {t('title')} <br/> 
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
        علي بن <br/>
        <span className="text-amber-500">أبي طَالِب</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        أما ترضى أن تكون مني بمنزلة هارون من موسى <br/>
        بوابة مدينة العلم، وفارس خيبر، وأول من آمن من الصبيان. 
        الذي نام في فراش النبي ﷺ مضحياً بنفسه، وجمع بين الشجاعة في الميدان والبلاغة في اللسان، 
        أسد الله الغالب وأبو السبطين.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        بلاغة أبي تراب
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
      {/* هالة ضوئية زرقاء خفيفة ممزوجة بالذهبي تليق بمقام الحكمة والشجاعة */}
      <div className="absolute inset-0 bg-blue-900/10 rounded-full blur-[120px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/ali.png" // ارفع صورة سيدنا علي وسميها كده
            alt="علي بن أبي طالب"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full   "
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي الرابع</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">أسد الله الغالب</h3>
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
            src="/talha.png" // ارفع صورة سيدنا طلحة وسميها كده
            alt="طلحة بن عبيد الله"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 border-amber-500/20 rounded-full   "
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي الخامس</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">طَلْحَةُ الخَيْر</h3>
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
        طلحة بن <br/>
        <span className="text-amber-500">عُبَيْد الله</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        من أراد أن ينظر إلى شهيد يمشي على وجه الأرض، فلينظر إلى طلحة <br/>
        أحد السابقين إلى الإسلام، والفارس الذي وقى النبي ﷺ بنفسه يوم أحد حتى شُلّت يده. 
        سماه النبي ﷺ طلحة الخير وطلحة الفياض لجوده وكرمه الذي لم يعرف الحدود.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        سيرة طلحة الخير
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
        الزُّبَيْر بن <br/>
        <span className="text-amber-500">العَوَّام</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        لكل نبي حواري، وحواريَّ الزبير <br/>
        ابن عمة النبي ﷺ وأول من سلَّ سيفاً في سبيل الله. 
        فارسٌ لا يُشق له غبار، كان في المعارك كأنه جيشٌ كامل، 
        أحد الستة أصحاب الشورى، والجار الملازم للنبي ﷺ في الجنة.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        سيرة الحواريّ
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
            src="/zubair.png" // ارفع صورة سيدنا الزبير وسميها كده
            alt="الزبير بن العوام"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي السادس</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">حَوَارِيُّ رَسولِ الله</h3>
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
            src="/abdurrahman.png" // ارفع صورته وسميها كده
            alt="عبد الرحمن بن عوف"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي السابع</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">السَّخيُّ الأَمِين</h3>
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
        عبدالرحمن <br/>
        <span className="text-amber-500">بن عَوف</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        بارك الله لك فيما أعطيت، وبارك الله لك فيما أمسكت <br/>
        أحد الستة أصحاب الشورى، والتاجر الذي جعل ماله كله في خدمة الإسلام. 
        هاجر إلى المدينة لا يملك شيئاً، فأصبح أغنى الصحابة ببركة دعاء النبي ﷺ، 
        عاش زاهداً رغم ثرائه، ومات وهو أحد المبشرين بالجنة.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        سيرة أغنى الصحابة
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
        سعد بن <br/>
        <span className="text-amber-500">أبي وقَّاص</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        ارْمِ سَعْدُ فِدَاكَ أَبِي وَأُمِّي <br/>
        خال النبي ﷺ، والوحيد الذي جمع له الرسول أبويه في الفداء. 
        أول من رمى بسهم في سبيل الله، وفارس القادسية الذي أطفأ نيران الفرس للأبد، 
        كان مستجاب الدعوة، صادق الإيمان، وأحد الستة أصحاب الشورى.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        بطولاتُ الفارس
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
      {/* هالة ضوئية خضراء خفيفة (لون القادسية والنصر) ممزوجة بالذهبي */}
      <div className="absolute inset-0 bg-emerald-900/10 rounded-full blur-[100px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 w-full h-full border border-amber-500/20 rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-900/10">
         <Image 
            src="/saad.png" // ارفع صورة سيدنا سعد وسميها كده
            alt="سعد بن أبي وقاص"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8 "
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي الثامن</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">خالُ الرَّسول</h3>
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
            src="/saeed.png" // ارفع صورة سيدنا سعيد وسميها كده
            alt="سعيد بن زيد"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 right-10">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي التاسع</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">مُستَجَابُ الدَّعوة</h3>
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
        سعيد بن <br/>
        <span className="text-amber-500">زَيْد</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        اللهم إن كان حبس مالي ظلماً فأعم بصرها <br/>
        أحد السابقين إلى الإسلام، وابن زيد بن عمرو الذي كان على الحنيفية قبل البعثة. 
        فارس اليرموك الذي نصر الله به دينه، الرجل الزاهد الذي استجاب الله دعوته على من ظلمته، 
        أحد العشرة الذين شهد لهم النبي ﷺ بالجنة وهو يمشي على الأرض.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        سيرة الزاهد
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
        أبو عبيدة <br/>
        <span className="text-amber-500">بن الجَرَّاح</span>
      </h2>
      
      <div className="h-1 w-20 bg-amber-500 mb-8 mr-auto md:mr-0 ml-auto"></div>

      <p className="text-2xl text-zinc-300 font-tufuli leading-relaxed mb-8">
        إنَّ لِكُلِّ أُمَّةٍ أَمِينًا، وأَمِينُ هذِه الأُمَّةِ أَبُو عُبَيْدَةَ بنُ الجَرَّاحِ <br/>
        فاتح الشام، والقائد الزاهد الذي نزع حلقتي المغفر من وجنتي النبي ﷺ يوم أحد بأسنانه حتى سقطت ثناياه. 
        الذي ترك الدنيا وراءه، وعاش خادماً للإسلام بصدق وأمانة، حتى شهد له الجميع بطهارة القلب وعمق الإيمان.
      </p>

      <button className="px-8 py-3 border border-amber-500/50 text-amber-500 font-tufuli hover:bg-amber-500 hover:text-black transition-all duration-300 rounded-full">
        سيرة أمين الأمة
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
            src="/abou_obaida.png" // ارفع صورة سيدنا أبو عبيدة وسميها كده
            alt="أبو عبيدة بن الجراح"
            fill
            className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-1000 p-8"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         <div className="absolute bottom-10 left-10 text-left">
            <span className="text-amber-500 text-sm tracking-[0.3em] font-tufuli uppercase">الصحابي العاشر</span>
            <h3 className="text-4xl font-bold text-white font-tufuli mt-2">أَمِينُ الأُمَّة</h3>
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
      أُولَٰئِكَ الَّذِينَ <span className="text-amber-500">هَدَى اللَّهُ</span>
    </h2>
    <p className="text-xl md:text-2xl text-zinc-300 font-tufuli leading-relaxed mb-12">
      ليست هذه مجرد أسماء في كتب التاريخ، بل هم مناراتٌ أضاءت للبشرية طريق الحق والعدل. 
      سيرتهم عطاءٌ لا ينضب، وقصصهم زادٌ للأرواح.. ندعوك لتبحر في تفاصيل حياتهم، 
      لتستلهم من شجاعتهم، حلمهم، وكرمهم ما يضيء لك دربك.
    </p>
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-12 py-4 bg-amber-500 text-black font-bold font-tufuli rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all"
    >
      ابدأ رحلة القراءة الآن
    </motion.button>
  </motion.div>
</section>
{/* الـ Footer */}
<footer className="relative bg-black border-t border-amber-500/20 py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      
      {/* اللوجو أو اسم المشروع */}
      <div className="text-right">
        <h3 className="text-2xl font-bold text-amber-500 font-tufuli tracking-wider">نُخبةُ الصَّحابة</h3>
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