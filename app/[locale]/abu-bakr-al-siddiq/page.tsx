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
            <section className="relative w-full max-w-7xl mx-auto px-6 py-32 z-10 border-t border-white/5">

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
        </main>
    );
  

}