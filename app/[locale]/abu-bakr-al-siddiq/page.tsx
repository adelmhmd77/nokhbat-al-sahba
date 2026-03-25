"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AbuBakrAlSiddiq() {
  return (
    <main className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex flex-col items-center py-20">
      
      {/* 1. تأثير الخلفية (نور الهجرة المتوهج) */}
      <div className="fixed inset-0 -z-10">
        {/* توهج أزرق ملكي في الخلفية */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full" />
        {/* تأثير الـ "Grain" عشان ندي إحساس المخطوطات القديمة */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      {/* 2. اسم الصحابي (باللون اللؤلؤي المتلألئ) */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-6"
      >
        <span className="text-amber-400/80 font-tufuli tracking-[0.5em] text-xs md:text-sm uppercase mb-6 block border-b border-amber-400/20 pb-2 max-w-fit mx-auto">
          أوّلُ مَنْ آمَنَ مِنَ الرِّجَال
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          أبو بكر الصديق
        </h1>
        
        <p className="text-lg md:text-xl font-tufuli text-blue-100/70 max-w-2xl mx-auto leading-relaxed italic">
          ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ
        </p>
      </motion.div>
{/* 3. الشعار (قطعة نورانية عائمة بدون صندوق) */}
<motion.div 
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.6, duration: 1 }}
  className="mt-20 relative group"
>
  {/* الهالة */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] bg-amber-600/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />
  
  {/* التوهج */}
  <div className="absolute inset-[-20px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

  {/* الدايرة */}
  <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] p-2 bg-black/40 backdrop-blur-sm rounded-full border-[6px] border-amber-500/50 shadow-[0_0_60px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_90px_rgba(251,191,36,0.5)] transition-all duration-700 overflow-hidden flex items-center justify-center">
      
    {/* توهج داخلي */}
    <div className="absolute inset-2 bg-gradient-to-br from-amber-600/20 via-transparent to-white/10 rounded-full blur-xl pointer-events-none" />
    
    {/* الصورة */}
    <Image 
      src="/abu_bakr_symbol.png" 
      alt="شعار الصديق"
      width={300}
      height={300}
      priority
      className="object-contain w-[100%] h-[100%] transition-transform duration-500 scale-110  border-amber-500/50 rounded-full"
    />
  </div>
</motion.div>
      {/* 4. إضافة لمسة "نخبة" (الخط الزمني البسيط) */}
      <div className="mt-24 w-full max-w-4xl px-6">
        <div className="flex items-center gap-4 text-amber-400/60 font-tufuli text-sm mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/20" />
          <span>رِحْلَةُ الصِّدْقِ وَالعَطَاء</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/20" />
        </div>
      </div>
{/* 4. قسم السيرة والنشأة (تفاصيل عميقة) */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-32 z-10 border-t border-white/5">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            مَنْ هُوَ الصِّدِّيق؟
          </h2>
          <div className="w-40 h-1.5 bg-amber-500 mx-auto rounded-full shadow-[0_0_15px_#f59e0b]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          
          {/* كارت 1: النسب والبيت */}
{/* كارت 1: النسب والبيت (مع إضافة صورة جنب الكلام) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative p-10 rounded-[4rem] bg-[#0A0F1E] border-2 border-amber-500/20 shadow-2xl overflow-hidden"
          >
            {/* استخدام Flexbox عشان الكلام والصورة يبقوا جنب بعض على الـ Desktop وتحت بعض على الـ Mobile */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              
              {/* 1. جزء الكلام (Text Portion) */}
              <div className="flex-1">
                <h3 className="text-3xl font-tufuli text-amber-400 mb-8 border-r-4 border-amber-500 pr-4">النسب والمولد</h3>
                <p className="text-lg md:text-xl font-tufuli text-white leading-[1.8] text-justify">
                  وُلِدَ عبد الله بن أبي قحافة في <span className="text-amber-400 font-bold">مكة المكرمة</span> بعد عام الفيل بسنتين وستة أشهر. نشأ في بيتٍ من أعرق بيوت قريش نسباً، وهو بيت <span className="text-amber-400">بني تيم</span>. كان والده أبو قحافة ووالدته أم الخير من الوجهاء، وقد تربى على مكارم الأخلاق حتى في الجاهلية؛ فلم يشرب خمرًا قط، ولم يسجد لصنمٍ أبداً، لعلمه بفطرته السليمة أن هذه الأوثان لا تنفع ولا تضر.
                </p>
              </div>

              {/* 2. جزء الصورة (Image Portion) */}
              {/* التوهج الخلفي للصورة */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
              
              {/* حاوية الصورة مع أنيميشن وتأثير حركي */}
              <div className="relative w-64 h-64 p-2 bg-black/40 backdrop-blur-sm rounded-full border-4 border-amber-500/50 shadow-lg overflow-hidden flex items-center justify-center">
                 <Image 
                    src="/abu_bakr_childhood.png" 
                    alt="إيحاء بالطفولة الكهرمانية"
                    fill
                    className="object-cover object-[center_-150px] scale-100 group-hover:scale-110 transition-transform duration-700" // Padding عشان الصورة متلمسش الإطار
                    priority
                 />
              </div>

            </div>

            {/* توهج خلفي خفيف للكارت كله */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/5 blur-[100px] group-hover:bg-amber-500/10 transition-colors" />
          </motion.div>

{/* كارت 2: حياته قبل الإسلام (التجارة والجاه) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative p-10 rounded-[4rem] bg-[#0A0F1E] border-2 border-white/10 shadow-2xl overflow-hidden mt-10"
          >
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-12">
              
              {/* 1. جزء الكلام */}
              <div className="flex-1">
                <h3 className="text-3xl font-tufuli text-white mb-8 border-r-4 border-white pr-4">مكانته في قريش</h3>
                <p className="text-lg md:text-xl font-tufuli text-zinc-100 leading-[1.8] text-justify">
                  كان الصديق <span className="text-amber-400 font-bold">تاجرًا للأقمشة</span> ناجحًا ووافر الثراء، عُرف بصدقه وأمانته، فكان مقصداً للناس لرجاحة عقله وعلمه بأنساب العرب. كانت قريش تستشيره في الدِيّات والمغارم، فإذا تحمل شيئاً صدّقوه. كان رفيقاً للنبي ﷺ قبل البعثة بفضل تشابه أخلاقهما، فكان الصاحب قبل الرسالة.
                </p>
              </div>

              {/* 2. جزء الصورة (مع التحكم في موضع الصورة داخلها) */}
              <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] shrink-0">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative w-full h-full rounded-full border-[6px] border-white/20 overflow-hidden shadow-2xl">
                  <Image 
                    src="/abu_bakr_merchant.png" // الصورة اللي هتطلع من البرومت
                    alt="تجارة الصديق"
                    fill
                    // هنا السحر: object-top لرفع الصورة، أو استخدم object-[center_top]
                    className="object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

            </div>
          </motion.div>
          {/* كارت 3: وصفه الخَلقي واللقب */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative p-10 rounded-[3rem] bg-[#0A0F1E] border-2 border-amber-500/20 shadow-2xl overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-tufuli text-amber-400 mb-8 border-r-4 border-amber-500 pr-4">أوصافه وألقابه</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl font-tufuli text-white">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <span className="text-amber-500 block mb-2 font-bold underline">صفاته:</span>
                  كان نحيف الجسم، أبيض البشرة، خفيف العارضين (اللحية على الخدين)، يغلب عليه الوقار والهيبة مع رقة القلب والرحمة.
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <span className="text-amber-500 block mb-2 font-bold underline">ألقابه:</span>
                  سُمي بـ <span className="text-amber-400">العتيق</span> لجمال وجهه وقيل لعتقه من النار، وسُمي بـ <span className="text-amber-400">الصديق</span> لسبقه في تصديق النبي ﷺ دون تردد.
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* المصادر الموثقة (Footer القسم) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[2rem] bg-black/60 border-2 border-amber-500/40 backdrop-blur-xl"
        >
          <div className="flex items-center gap-4 mb-4 text-amber-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <h4 className="text-2xl font-tufuli font-bold uppercase tracking-widest">المصادر التاريخية المعتمدة</h4>
          </div>
          <p className="text-xl text-blue-100/60 font-tufuli">
             تم استقاء هذه المعلومات من: <br />
             ١. <span className="text-white italic">البداية والنهاية</span> - الإمام ابن كثير (مجلدات السيرة). <br />
             ٢. <span className="text-white italic">سير أعلام النبلاء</span> - الإمام الذهبي (ترجمة الصديق رضي الله عنه). <br />
             ٣. <span className="text-white italic">تاريخ الخلفاء</span> - الإمام السيوطي.
          </p>
        </motion.div>
      </section>
      {/* 5. قسم بداية الإيمان (إسلام الصديق) */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-32 z-10 border-t border-white/5">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-tufuli text-white mb-6">
            فَجْرُ <span className="text-amber-500">الإِيمَانِ</span>
          </h2>
          <p className="text-xl md:text-2xl font-tufuli text-zinc-400">ما دعوتُ أحداً إلى الإسلام إلا كانت له عنه كبوة.. إلا أبا بكر</p>
        </motion.div>

        <div className="space-y-16">
          
          {/* كارت 1: اللقاء الأول والقرار الحاسم */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[3rem] bg-[#0A0F1E] border-l-8 border-amber-500 shadow-2xl"
          >
            <h3 className="text-3xl font-tufuli text-amber-500 mb-8 border-r-4 border-amber-500 pr-4">إسلامٌ بلا تردد</h3>
            <p className="text-lg md:text-xl font-tufuli text-white leading-[1.8] text-justify">
              لم يكن إسلام أبي بكر حدثاً عابراً، بل كان نتيجة سنوات من الصداقة العميقة مع النبي ﷺ. عندما نزل الوحي، ذهب إليه النبي ﷺ وعرض عليه الأمر، فما لبث أن <span className="text-amber-400 font-bold">آمن مكانه</span> دون أن يسأل عن آية أو يطلب معجزة. قال عنه النبي ﷺ: ما دعوتُ أحداً إلى الإسلام إلا كانت له عنه كبوة (تردد) ونظر وتردد، إلا أبا بكر ما عكم عنه (ما تأخر) حين ذكرته له وما تردد فيه.
            </p>
          </motion.div>

          {/* كارت 2: الداعية الأول (الثمار الأولى) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[3rem] bg-[#0A0F1E] border-r-8 border-white/20 shadow-2xl text-right"
          >
            <h3 className="text-3xl font-tufuli text-amber-500 mb-8 border-r-4 border-amber-500 pr-4">الرجل الذي أتى بأمة</h3>
            <p className="text-lg md:text-xl font-tufuli text-white leading-[1.8] text-justify">
              لم يكتفِ الصديق بإيمانه الشخصي، بل انطلق فوراً ليدعو من يثق فيهم. وبسببه، دخل في الإسلام العمالقة الذين زلزلوا الأرض لاحقاً، وهم خمسة من <span className="text-amber-400">العشرة المبشرين بالجنة</span>: عثمان بن عفان، والزبير بن العوام، وعبد الرحمن بن عوف، وسعد بن أبي وقاص， وطلحة بن عبيد الله. هؤلاء جميعاً كانوا في ميزان حسناته لأنه كان المفتاح الذي فتح قلوبهم للنور.
            </p>
          </motion.div>

          {/* كارت 3: التضحية بالمال (تحرير العبيد) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[3rem] bg-[#0A0F1E] border-l-8 border-amber-500 shadow-2xl"
          >
            <h3 className="text-3xl font-tufuli text-amber-500 mb-8 border-r-4 border-amber-500 pr-4">إنفاقٌ لا يخشى الفقر</h3>
            <p className="text-lg md:text-xl font-tufuli text-white leading-[1.8] text-justify">
              في مكة، كان المستضعفون يُعذَّبون، فكان الصديق يستخدم سلاحه الأقوى: <span className="text-amber-400">تجارته وماله</span>. اشترى وأعتق سبعة من المعذبين في الله، وعلى رأسهم <span className="text-amber-400 font-bold">بلال بن رباح</span> مؤذن الرسول ﷺ. حينها قال أبوه أبو قحافة: يا بني أراك تعتق رقاباً ضعافاً، فلو أعتقت رجالاً جلداً (أقوياء) يمنعونك، فرد الصديق بيقين: يا أبتِ، إنما أريد ما عند الله.
            </p>
          </motion.div>

        </div>

        {/* مراجع ومصادر القسم الثاني */}
        <motion.div 
          className="mt-16 p-8 rounded-[2rem] bg-black/40 border-2 border-amber-500/40"
        >
          <div className="flex items-center gap-4 mb-4 text-amber-500">
             <span className="text-2xl font-bold">●</span>
             <h4 className="text-2xl font-tufuli font-bold">توثيق القسم (المصادر)</h4>
          </div>
          <p className="text-xl text-zinc-400 font-tufuli italic leading-relaxed">
             ١. <span className="text-white">السيرة النبوية</span> - ابن هشام (ذكر إسلام أبي بكر). <br />
             ٢. <span className="text-white">الرحيق المختوم</span> - صفي الرحمن المباركفوري. <br />
             ٣. <span className="text-white">أسد الغابة في معرفة الصحابة</span> - ابن الأثير.
          </p>
        </motion.div>
      </section>
      {/* 5.5 قسم نبض الوفاء (بين التعريف والرحلة) */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-24 z-10">
        
        {/* خلفية جمالية خفيفة (توهج داخلي) */}
        <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-10"
        >
          {/* أيقونة القلب النوراني */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-amber-500/30 flex items-center justify-center animate-pulse">
               <div className="w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_15px_#f59e0b]" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-tufuli text-white leading-tight">
            لِمَاذَا <span className="text-amber-500">الصِّدِّيق؟</span> <br />
            <span className="text-xl md:text-2xl text-blue-100/60 block mt-4 tracking-[0.2em]">قِصَّةُ حُبٍّ سَبَقَتِ الرِّحْلَة</span>
          </h2>

          <div className="relative p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-md">
            {/* علامات الاقتباس الكبيرة */}
            <span className="absolute top-6 right-8 text-8xl font-serif text-white/5 italic"></span>
            
            <p className="text-xl md:text-2xl font-tufuli text-blue-50/90 leading-[2] text-justify">
              لم يكن اختيار الصديق للهجرة صدفة، بل كان قراراً اتخذه القلب قبل أن يأذن به الوحي. حين سأل النبي ﷺ: <span className="text-amber-400">الصحبة يا أبا بكر؟</span>، انفجر الصديق بكاءً من شدة الفرح؛ لم يبكِ خوفاً من الموت الذي يتربص بهما، بل بكى لأنه اختير ليكون ظِلَّ رسول الله ﷺ.
              <br /><br />
              كان يفكر في كل خطوة: <span className="italic text-zinc-400">لو قُتلتُ أنا، فأنا رجلٌ واحد، أما لو قُتل هو ﷺ لضاعت الأمة</span>. لهذا كان يمشى تارة أمام النبي وتارة خلفه، وعن يمينه وعن شماله، يفديه بكل نبضة في قلبه، ويحمل في صدره أمانة لا تطيقها الجبال. 
            </p>

            <span className="absolute bottom-6 left-8 text-8xl font-serif text-white/5 italic"></span>
          </div>

          {/* لمسة فنية ختامية للقسم */}
          <div className="pt-10">
            <p className="text-amber-500/60 font-tufuli italic text-lg">
              أَمِنَ الحبِّ ما بَكَى الصِّدِّيقُ؟ .. نعم، ومِنَ الفداءِ ما ذَهَلَت بهِ العقول.
            </p>
          </div>
        </motion.div>
      </section>
      {/* 6. قسم رفيق الهجرة (ثاني اثنين) */}
{/* 6. قسم معجزة الغار (ثاني اثنين) */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-40 z-10 border-t border-white/5">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* جزء الصورة: الغار والنور (صندوق عملاق لإظهار تفاصيل رجلين الكفار) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full lg:w-[50%] aspect-[4/3] md:aspect-[20/20] rounded-[4rem] overflow-hidden border-[3px] border-amber-500/30 shadow-[0_0_80px_rgba(251,191,36,0.15)] group"
          >
            <Image 
              src="/hijra_cavee.png" 
              alt="ثاني اثنين في الغار"
              fill
              // object-top عشان نضمن إن "أقدام المشركين" اللي في البرومت تظهر بوضوح
              className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-in-out"
              priority
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-black/20 opacity-70" />
            <div className="absolute inset-0 border-[1px] border-white/10 rounded-[4rem] pointer-events-none" />
          </motion.div>

          {/* جزء المحتوى الكتابي (القصة والمشاعر) */}
          <div className="flex-1 space-y-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-500 font-tufuli tracking-widest text-sm uppercase border-b border-amber-500/30 pb-2"
            >
              لحظة حبست أنفاس التاريخ
            </motion.span>
            
            <h2 className="text-4xl md:text-6xl font-bold font-tufuli leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200">
              ثَانِيَ اثْنَيْنِ <br />
              <span className="text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">إِذْ هُمَا فِي الْغَارِ</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl font-tufuli text-blue-100/80 leading-relaxed text-justify">
              <p>
                في عتمة غار ثور، لم يكن الصديق يخشى على حياته، بل كان قلبه يرتجف خوفاً على <span className="text-white font-bold">نور النبوة</span>. حين اقتربت أقدام المشركين حتى رآها من بين شقوق الصخر، همس بدموع الوفاء: يا رسول الله، لو نظر أحدهم تحت قدميه لرآنا.ل
              </p>
              <p className="border-r-2 border-amber-500/50 pr-4 italic bg-white/5 py-4 rounded-l-2xl">
                في تلك اللحظة، لم يكن الصديق يفكر في تجارته أو ولده، بل كان يفكر: كيف يحمي بصدده جسد النبي ﷺ؟ فجاءه صوت السكينة الذي زلزل جبال مكة: <span className="text-amber-400 font-bold">لا تحزن إن الله معنا</span>.
              </p>
              <p>
                لقد تحول الخوف إلى طمأنينة، وأصبح الضيق مخرجاً، ليعلم العالم أن الله إذا كان معك، فلا مكان للمستحيل.
              </p>
            </div>

            {/* إحصائيات سريعة للموقف */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-amber-500 font-bold mb-1">الرابطة</p>
                <p className="text-sm text-zinc-400">صحبةٌ في الشدة والرخاء</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-amber-500 font-bold mb-1">النتيجة</p>
                <p className="text-sm text-zinc-400">نزول السكينة والنصر</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* 7. قسم أنوار المدينة (الوصول والسكينة) */}
      <section className="relative max-w-5xl w-full py-32 overflow-hidden border-t border-white/5">
        
        {/* خلفية ضوئية ذهبية */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col space-y-16">
            
            {/* عنوان القسم بتأثير الشروق */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-tufuli font-bold font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                أَنْوَارُ المَدِينَة
              </h2>
              <p className="text-xl font-tufuli  tracking-widest uppercase font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                بِدَايَةُ العَهْدِ الجَدِيد
              </p>
            </motion.div>

            {/* الصورة البانورامية العملاقة */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border-2 border-amber-500/20 shadow-[0_0_100px_rgba(245,158,11,0.1)] group"
            >
              <Image 
                src="/medina_arrivall.png" // الصورة اللي هتطلع من برومت المدينة
                alt="الوصول للمدينة المنورة"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[5000ms]"
              />
              {/* Overlay متدرج من الأطراف عشان يركز العين عالنص */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/40" />
            </motion.div>

            {/* النص القصصي (الوفاء في المدينة) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm"
              >
                <p className="text-xl md:text-2xl font-tufuli text-white leading-[1.8] text-justify">
                  وصل الركب المبارك إلى قُباء، فكان يوماً لم تشهد المدينة مثله. وقف الصديق يظلل على النبي ﷺ بردائه من حر الشمس، والناس تقبل بلهفة لا تعرف أيهما الرسول، حتى رأوا ظل الصديق فعرفوا مكانة الصاحب من المصحوب. 
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl font-tufuli text-blue-100/70 leading-[1.8] text-justify">
                  لم تكن المدينة مجرد محطة، بل كانت موطناً بناه الصديق بماله وجهده. اشترى أرض المسجد، وأسس مع النبي ﷺ قواعد الدولة، وظل الظِل الذي لا يفارق، والمستشار الذي لا يسبقه أحد في رأي أو مشورة.
                </p>
                <div className="flex gap-4">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-500/50 to-transparent self-center" />
                  <span className="text-amber-500 font-bold italic">نُخبة الوفاء</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* 8. قسم بناء المدينة (المؤسس والسند) */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-40 z-10 border-t border-white/5">
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* صندوق الصورة: بناء المسجد (صندوق فخم بستايل معماري) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full lg:w-1/2 aspect-square md:aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-amber-500/20 shadow-2xl group"
          >
            <Image 
              src="/building_medina.png" // صورة بناء المسجد
              alt="بناء المسجد النبوي"
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-[3000ms]"
            />
            {/* Overlay ناعم جداً */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-50" />
          </motion.div>

          {/* جزء المحتوى: الوزير والممول الأول */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
               <span className="text-amber-500 font-tufuli tracking-[0.3em] text-xs uppercase">تأسيس الأمة</span>
               <h2 className="text-4xl md:text-6xl font-tufuli font-bold font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                
                <span className=" font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"> المُؤَسِّسُ </span> <br  /> 
                
                 <span className="text-amber-500 font-bold font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">وَالوَزِيرُ الأَوَّل</span>
               </h2>
            </div>

            <div className="space-y-6 text-xl font-tufuli text-blue-50/80 leading-relaxed text-justify">
              <p>
                لم يكن استقرار المدينة ليتم لولا مال الصديق الذي بارك الله فيه. حين أراد النبي ﷺ بناء مسجده، اشترى أبو بكر الأرض من اليتيمين، ليكون هو <span className="text-amber-400">الممول الأول</span> لأعظم صرح في تاريخ الإسلام.
              </p>
              
              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden"> 
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/40" />
                <p className="italic text-zinc-300">
                  كان الصديق في المدينة كظله الذي لا يفارقه، ويده التي يبني بها، وعقله الذي يستشيره في كل نازلة. لم يسبقه أحد في حفر بئر، أو إطعام جائع، أو تأليف القلوب.
                </p>
              </div>

              <p>
                في كل زاوية من زوايا المدينة، كان لأبي بكر أثر؛ من تنظيم السوق إلى إدارة شؤون المسلمين، فكان الوزير الصادق الذي حمل عبء الدولة الناشئة على كتفيه بكل حب وتواضع.
              </p>
            </div>

            {/* أيقونات الإنجازات في المدينة */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                <span className="text-sm text-white/60">شراء أرض المسجد</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                <span className="text-sm text-white/60">المستشار الأول</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* 9. قسم الثبات العظيم (لحظة الوفاة) */}
      <section className="relative w-full py-40 overflow-hidden border-t border-white/5 bg-[#020617]/50">
        
        {/* خلفية ضوئية خافتة (دراما) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/10 blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            
            {/* صندوق الصورة الدرامية */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full lg:w-[55%] aspect-video rounded-[3rem] overflow-hidden border-2 border-red-950/20 shadow-[0_0_80px_rgba(110,13,13,0.15)] group"
            >
              <Image 
                src="/nabawi_hujra.png" // صورة خلوة الصديق وحجرته
                alt="الثبات في الحجرة النبوية"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[4000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* النص القصصي (الجبل الذي ثبت) */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4 text-center lg:text-right">
                 <span className="text-red-600 font-tufuli tracking-[0.3em] text-xs uppercase">الموقف الأصعب</span>
                 <h2 className="text-4xl md:text-6xl font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                   الجَبَلُ <br />
                   <span className="text-amber-500 text-shadow-glow font-tufuli leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-50 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">الذِي لَمْ يَهْتَزّ</span>
                 </h2>
              </div>

              <div className="relative p-10 md:p-14 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <span className="absolute top-4 right-6 text-8xl font-serif text-white/5 italic"></span>
                
                <p className="text-xl md:text-2xl font-tufuli text-blue-50/90 leading-[2.1] text-justify">
                  اهتزت المدينة، وبكى الرجال، وذهلت العقول، حتى خرج الصديق. بقلبٍ ملؤه اليقين، قال كلمته الخالدة: <span className="text-amber-400 font-bold">مَن كانَ يَعْبُدُ مُحَمَّدًا فَإنَّ مُحَمَّدًا قدْ مَاتَ، ومَن كانَ يَعْبُدُ اللَّهَ فإنَّ اللَّهَ حَيٌّ لا يَمُوتُ</span>. في تلك اللحظة، كان هو السند الذي حمى الأمة من التفكك، وأعادها إلى جادة الحق بثبات الأنبياء.
                </p>

                <span className="absolute bottom-4 left-6 text-8xl font-serif text-white/5 italic"></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. قسم الملحمة (الخلافة وحروب الردة) */}
      <section className="relative w-full py-32 border-t border-white/5 bg-[#020617]">
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col space-y-20">
            
            {/* عنوان القسم الملحمي */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-tufuli font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 mb-6 drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                خِلَافَةُ الصِّدِّيق
              </h2>
              <p className="text-2xl font-tufuli text-blue-100/60 uppercase border-b border-amber-500/30 pb-3 max-w-fit mx-auto">
                الملحمة والإنجاز
              </p>
            </motion.div>

            {/* الصورة البانورامية الملحمية (رايات الإسلام) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border-4 border-amber-500/20 shadow-[0_0_100px_rgba(245,158,11,0.1)] group"
            >
              <Image 
                src="/khalifa_bkr.png" // صورة جيوش الإسلام
                alt="خلافة الصديق وحروب الردة"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[6000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/50 via-transparent to-[#020617]/50" />
            </motion.div>

            {/* النص القصصي (حروب الردة وجمع القرآن) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-2xl"
              >
                <p className="text-xl md:text-2xl font-tufuli text-white leading-[1.8] text-justify font-medium">
                  حمل عبء الخلافة، فكان القائد الحازم الذي لا تلين له قناة. أنفذ جيش أسامة بن زيد رغم كل التحديات، وخاض <span className="text-amber-400">حروب الردة</span> بقلب أسد، ووحد كلمة المسلمين حين ظن الجميع أن دولتهم قد انتهت. لم يكن يبغى جاهاً أو سلطاناً، بل كان يفي بعهد حبيبه ﷺ.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl font-tufuli text-zinc-100 leading-[1.8] text-justify font-medium">
                  وفي غمرة الانشغال بالحروب، لم ينسَ <span className="text-amber-400">جمع القرآن الكريم</span>. خشي ضياع القرآن باستشهاد حفظته، فأمر بجمعه في مصحف واحد، ليكون هذا العمل هو النور الذي أنار درب الأمة طوال القرون. لقد كان خلافة الصديق ملحمة بناء وتوحيد، رسخت قواعد الدولة وحفظت الأمة.
                </p>
              </motion.div>
            </div>
 
          </div>
        </div>
      </section>

      {/* 11. قسم الرحيل واللقاء (الخاتمة) */}
      <section className="relative w-full py-48 overflow-hidden border-t border-white/5 bg-[#020617]">
        
        {/* خلفية جمالية بيضاء ودهبية (ختام مسك) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 blur-[200px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            {/* عنوان الخاتمة النوراني */}
            <h2 className="text-4xl md:text-6xl font-tufuli font-bold text-white leading-tight">
              الرَّحِيلُ وَاللِّقَاء <br />
              <span className="text-xl md:text-2xl text-blue-100/60 block mt-4 tracking-[0.3em]">بِجِوَارِ الحَبِيب ﷺ</span>
            </h2>

            {/* الصورة البانورامية الهادية */}
            <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden border-2 border-amber-500/20 shadow-[0_0_100px_rgba(245,158,11,0.1)] group">
              <Image 
                src="/final_medina.png" // صورة غروب الشمس فوق المدينة
                alt="دفن الصديق بجوار النبي"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[5000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 via-transparent to-[#020617]/40" />
            </div>

            {/* النص القصصي (الخاتمة) */}
            <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative shadow-3xl">
              {/* علامة التوثيق */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-amber-500/10 border-2 border-amber-500/30">
                <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
              </div>

              <p className="text-xl md:text-2xl font-tufuli text-white leading-[2.2] text-justify font-medium">
                في ليلة من ليالي المدينة الهادئة، فاضت روح الصديق إلى بارئها. اندفن بجوار حبيبه ﷺ، ليكون <span className="text-amber-400">ثاني اثنين في الغار، وثاني اثنين في القبر</span>. ترك وراءه أمة موحدة، ودولة راسخة، وسيرة عطرة تملأ الدنيا نوراً وهدى. لقد كان خير خلف لخير سلف، فرحمه الله رحمة واسعة وجزاه عن الإسلام والمسلمين خير الجزاء.
              </p>
            </div>

            {/* لمسة فنية ختامية (المراجع) */}
            <div className="pt-10 flex gap-4 items-center justify-center">
              <div className="h-px w-10 bg-amber-500/30" />
              <p className="text-amber-500/60 font-tufuli italic text-lg uppercase tracking-widest">نُخبة الصحابة - أبو بكر الصديق</p>
              <div className="h-px w-10 bg-amber-500/30" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}