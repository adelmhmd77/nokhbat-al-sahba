'use client';
import { motion, px } from 'framer-motion'; 
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
export default function UmarIbnAlKhattab() {
    const t = useTranslations('umarIbnAlKhattab');

    return (
        <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen bg-[#050000] text-white overflow-hidden relative"
            style={{
                background: "radial-gradient(circle at top, #1a0505 0%, #050000 100%)"
            }}
        >
            {/* الهالة الحمراء الخلفية - تأكد إنها z-0 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7b001c] opacity-[0.1] blur-[120px] rounded-full pointer-events-none z-0" />

            <section className="relative z-10 flex flex-col items-center justify-center pt-40 px-6">
                {/* العنوان الرئيسي */}
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-4xl md:text-7xl text-[#7b001c] font-bold font-amiri drop-shadow-[0_0_20px_rgba(123,0,28,0.4)] transition-all duration-500 hover:text-[#a50024] hover:drop-shadow-[0_0_35px_rgba(165,0,36,0.7)] cursor-pointer text-center"
                >
                    {t.rich("hero.title", {
                        tag: (w) => <span className='text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]'>{w}</span>
                    })}
                </motion.h1>

                {/* النص الفرعي */}
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-xl md:text-2xl mt-10 text-zinc-400 max-w-3xl text-center leading-relaxed font-amiri"
                >
                    {t.rich("hero.subtitle", {
                        gold: (w) => <span className='text-[#fbbf24] font-bold drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] cursor-pointer hover:text-white transition-colors'>{w}</span>,
                        ds: (a) => <span className='text-white font-medium drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]'>{a}</span>
                    })}
                </motion.p>
<motion.div 
    initial={{ opacity: 0, y: 20 }} // ضفنا حركة لفوق مع الـ Opacity
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="w-full max-w-[800px] max-h-[300px] mt-20 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(123,0,28,0.3)] border-2 border-[#7b001c]/30"
>
    <Image 
        src="/umar-ibn-al-khattab.jpg" // اتأكد إن الاسم ده صح في فولدر public
        alt="Umar Ibn Al-Khattab Emblem"
        fill // عشان الصورة تملا الـ div الأب
        className="object-cover object-center hover:scale-110 transition-transform duration-500" // عشان الصورة تكون مركزة ومغطية بالكامل
        priority // عشان يحمل الصورة دي بسرعة لأنها في الهيرو
    />
</motion.div>
            </section>

            <section className="relative z-10 flex flex-col items-center justify-center py-20 px-6">
              <motion.p 
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    // التعديلات الجديدة في الحجم واللون والمسافات
    className="
        text-2xl md:text-3xl 
        mt-12 
        text-slate-100 
        max-w-4xl 
        text-center 
        leading-relaxed 
        font-medium 
        font-amiri 
        mx-auto
        border-t border-[#7b001c]/20 
        pt-12
        shadow-[0_0_30px_rgba(255,255,255,0.05)]
    "
>
    {t.rich("info.story", {
        // الـ Tags اللي إنت عملتها بنفسك
        paradise: (w) => <span className="text-[#fbbf24] font-bold drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">{w}</span>,
        faruq: (w) => <span className="text-[#7b001c] font-bold drop-shadow-[0_0_15px_rgba(123,0,28,0.4)]">{w}</span>,
        mecca: (w) => <span className="text-[#fbbf24] font-medium">{w}</span>,
        quraish: (w) => <span className="text-white border-b border-[#7b001c]">{w}</span>
    })}
    
    <br />
    
    {/* جملة الـ Start */}
    <motion.span 
        animate={{ opacity: [0.6, 1, 0.6] }} 
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="block mt-10 text-[#7b001c] font-bold text-3xl font-amiri cursor-pointer hover:scale-110 transition-transform"
    >
        {t("info.start")}
    </motion.span>
</motion.p>
            </section>
            <section className="relative z-10 flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
    {/* عنوان السيكشن بنفحة تاريخية */}
    <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl text-[#7b001c] font-bold font-amiri drop-shadow-[0_0_15px_rgba(123,0,28,0.3)] text-center mb-16"
    >
        {t("startStory.title")}
    </motion.h2>

    {/* محتوى القصة: كبير، واضح، وفخم */}
    <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
    >
        <p className="text-2xl md:text-4xl text-slate-100 leading-[1.8] font-amiri font-medium px-4">
            {t.rich("startStory.story", {
                mecca: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">{w}</span>,
                quraish: (w) => <span className="text-white border-b-2 border-[#7b001c]/60">{w}</span>
            })}
        </p>

        {/* سيكشن التراث (Heritage): شكل مميز كأنه ملاحظة تاريخية */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 p-8 bg-[#1a0505]/40 border-r-8 border-[#7b001c] rounded-l-xl backdrop-blur-sm"
        >
            <p className="text-xl md:text-2xl text-slate-300 italic font-amiri leading-relaxed text-right">
                <span className="text-[#7b001c] text-3xl font-bold ml-2"></span>
                {t("startStory.heritage")}
                <span className="text-[#7b001c] text-3xl font-bold mr-2"></span>
            </p>
        </motion.div>
    </motion.div>

    {/* هالة ضوئية خفيفة جداً تحت السيكشن عشان تفصل بينه وبين اللي بعده */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7b001c]/40 to-transparent" />
</section>
<section className="relative p-[2rem] flex flex-col items-center justify-center overflow-hidden">
    {/* خلفية مضيئة خافتة جداً تحت الكلام */}
    <div className="absolute w-[800px] h-[300px] bg-[#7b001c]/10 blur-[150px] rounded-full z-0" />

    <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl px-6 text-center"
    >
        {/* النص الملحمي بحجم ضخم ولون أبيض ثلجي */}
        <h3 className="text-6xl md:text-5xl lg:text-4xl font-amiri font-bold leading-tight text-slate-100 italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {t.rich("transition.quote", {
                start: (w) => <span className="text-[#7b001c] drop-shadow-[0_0_15px_rgba(123,0,28,0.5)]"> {w} </span>,
                big: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]"> {w} </span>
            })}
        </h3>

        {/* خط مزخرف بسيط تحت الكلام */}
        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#7b001c] to-transparent mx-auto mt-12"
        />
    </motion.div>
</section>
<section className="relative z-10 flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
    {/* عنوان السيكشن */}
    <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-[#7b001c] font-bold font-amiri drop-shadow-[0_0_15px_rgba(123,0,28,0.3)] text-center mb-16"
    >
        {t("FindOutWhy.title")}
    </motion.h2>

    {/* الـ Grid Container للكروت */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
        
        {/* الكارت الأول (السبب) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1a0505]/40 border border-[#7b001c]/20 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl shadow-[#7b001c]/10 backdrop-blur-sm group hover:border-[#7b001c]/50 transition-all duration-500"
        >
            <p className="text-xl md:text-2xl text-slate-100 leading-[1.8] font-amiri font-medium px-4">
                {t.rich("FindOutWhy.sectionOne", {
                    blood: (w) => <span className="text-[#7b001c] font-bold">{w}</span>
                })}
            </p>
        </motion.div>

        {/* الكارت الثاني (الأفعال) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#1a0505]/40 border border-[#7b001c]/20 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl shadow-[#7b001c]/10 backdrop-blur-sm group hover:border-[#7b001c]/50 transition-all duration-500"
        >
            <p className="text-xl md:text-2xl text-slate-100 leading-[1.8] font-amiri font-medium px-4">
                {t.rich("FindOutWhy.sectionTwo", {
                    blood: (w) => <span className="text-[#7b001c] font-bold">{w}</span>
                })}
            </p>
        </motion.div>

        {/* الكارت الثالث (الذروة) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#1a0505]/40 border border-[#7b001c]/20 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl shadow-[#7b001c]/10 backdrop-blur-sm group hover:border-[#7b001c]/50 transition-all duration-500 col-span-1 md:col-span-2 lg:col-span-1"
        >
            <p className="text-xl md:text-2xl text-slate-100 leading-[1.8] font-amiri font-medium px-4">
                {t.rich("FindOutWhy.sectionThree", {
                    focus: (w) => <span className="text-[#fbbf24] font-bold drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">{w}</span>
                })}
            </p>
        </motion.div>
    </div>
</section>
<section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center overflow-hidden">
    
    {/* 🎬 الخلفية السينمائية */}
    <div className="absolute inset-0 z-0">
        <Image 
            src="/umar-enlightenment.png"
            alt="Umar Enlightenment"
            fill
            className="object-cover object-center opacity-100 "
            priority
        />

        {/* طبقات الظلام + الأحمر */}
        <div className="absolute inset-0 bg-[#050000] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-[#7b001c]/20 to-[#050000]" />
    </div>

    {/* ✨ المحتوى */}
    <div className="relative z-10 max-w-5xl mx-auto text-center space-y-20">

        {/* 🏆 العنوان */}
        <motion.h2 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-[#7b001c] font-bold font-amiri drop-shadow-[0_0_25px_rgba(123,0,28,0.5)]"
        >
            {t("storyTime.title")}
        </motion.h2>

        {/* 🧱 sectionOne */}
        <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-slate-100 leading-[1.9] font-amiri px-4"
        >
            {t.rich("storyTime.sectionOne", {
                light: (w) => (
                    <span className="text-[#fbbf24] font-bold drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">
                        {w}
                    </span>
                )
            })}
        </motion.p>

        {/* 🧱 sectionTwo */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-slate-100 leading-[2] font-amiri font-bold pt-12 border-t border-[#7b001c]/20"
        >
            {t.rich("storyTime.sectionTwo", {
                light: (w) => <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{w}</span>,
                gold: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">{w}</span>
            })}
        </motion.p>

        {/* 💥 sectionThree */}
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-slate-200 leading-[2] font-amiri"
        >
            {t.rich("storyTime.sectionThree", {
                highlight: (w) => (
                    <span className="text-[#fbbf24] font-bold animate-pulse">
                        {w}
                    </span>
                )
            })}
        </motion.p>

        {/* ⚡ sectionFour (قرار التحول) */}
        <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-white font-amiri leading-[2.2]"
        >
            {t.rich("storyTime.sectionFour", {
                glow: (w) => (
                    <span className="text-[#fbbf24] font-bold drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] animate-[pulse_2s_infinite]">
                        {w}
                    </span>
                )
            })}
        </motion.p>

        {/* 🧱 sectionFive */}
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-slate-300 leading-[2] font-amiri"
        >
            {t("storyTime.sectionFive")}
        </motion.p>

        {/* 🔥 sectionSix (الشهادة) */}
        <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-white font-amiri leading-[2.2] border-t pt-10 border-[#fbbf24]/20"
        >
            {t.rich("storyTime.sectionSix", {
                glow: (w) => (
                    <span className="text-[#fbbf24] font-bold drop-shadow-[0_0_25px_rgba(251,191,36,1)]">
                        {w}
                    </span>
                )
            })}
        </motion.p>

        {/* ⚡ sectionSeven */}
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-slate-300 leading-[2] font-amiri"
        >
            {t.rich("storyTime.sectionSeven", {
                highlight: (w) => (
                    <span className="text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                        {w}
                    </span>
                )
            })}
        </motion.p>

        {/* 🏁 النهاية */}
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[#fbbf24]/80 font-amiri italic"
        >
            {t("storyTime.sectionEight")}
        </motion.p>

    </div>
</section>
{/* ما بعد نطق الشهادة */}
<section className="relative min-h-screen py-32 px-6 flex items-center justify-center overflow-hidden">

    {/* 🔥 خلفية درامية (أحمر + ظلال قوية) */}
    <div className="absolute inset-0 z-0">
        <Image 
            src="/umar-power.png"
            alt="Umar Strength"
            fill
            className="object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#7b001c]/20 to-black" />
    </div>

    {/* ⚡ المحتوى */}
    <div className="relative z-10 max-w-6xl mx-auto space-y-24 text-center">

        {/* 🏆 العنوان */}
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white font-amiri tracking-wide"
        >
            {t("afterGuidance.title")}
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#fbbf24]/80 font-amiri"
        >
            {t("afterGuidance.subtitle")}
        </motion.p>

        {/* ⚔️ Grid Layout (قوة + توازن) */}
        <div className="grid md:grid-cols-2 gap-12">

            {/* 🧱 Card 1 */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#fbbf24]/40 transition"
            >
                <p className="text-2xl text-slate-200 leading-[2] font-amiri">
                    {t("afterGuidance.sectionOne")}
                </p>
            </motion.div>

            {/* 🧱 Card 2 */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#fbbf24]/40 transition"
            >
                <p className="text-2xl text-slate-200 leading-[2] font-amiri">
                    {t("afterGuidance.sectionTwo")}
                </p>
            </motion.div>

            {/* 🧱 Card 3 */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#fbbf24]/40 transition"
            >
                <p className="text-2xl text-slate-200 leading-[2] font-amiri">
                    {t("afterGuidance.sectionThree")}
                </p>
            </motion.div>

            {/* 💥 Card 4 (التحدي - مميز) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="p-12 rounded-3xl bg-[#7b001c]/20 border border-[#7b001c]/40 shadow-[0_0_40px_rgba(123,0,28,0.5)]"
            >
                <p className="text-3xl md:text-4xl text-white font-bold leading-[2] font-amiri">
                    {t.rich("afterGuidance.sectionFour", {
                        glow: (w) => (
                            <span className="text-[#fbbf24] drop-shadow-[0_0_25px_rgba(251,191,36,1)] animate-pulse">
                                {w}
                            </span>
                        )
                    })}
                </p>
            </motion.div>

        </div>

        {/* 🏁 النهاية */}
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-[#fbbf24] font-amiri leading-[2] max-w-3xl mx-auto"
        >
            {t("afterGuidance.sectionFive")}
        </motion.p>

    </div>
</section>
<section className="relative min-h-screen py-32 px-6 overflow-hidden">

    {/* 🏆 Title */}
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold text-white font-tufuli text-center"
    >
        {t("firstBattle.title")}
    </motion.h2>

    {/* ⚔️ Layout */}
    <div className="text-center max-w-6xl mx-auto relative z-10 mt-20">

        {/* 📜 النص */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/1 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
        >
            <p className="text-2xl text-slate-200 leading-[2] font-amiri">
                {t("firstBattle.sectionOne")}
            </p>
        </motion.div>
    </div>

    {/* ⚔️ Layout */}
    <div className="flex flex-row flex-wrap justify-center items-center gap-12 mt-20 max-w-full max-h-full relative z-10">

        {/* 🖼️ الصورة */}
<motion.div 
    initial={{ opacity: 0, y: 20 }} // ضفنا حركة لفوق مع الـ Opacity
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className=" max-w-[650px] max-h-[500px] mt-20 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(123,0,28,0.3)] border-2 border-[#7b001c]/30"
>
    <Image 
        src="/firstBattle.png" // اتأكد إن الاسم ده صح في فولدر public
        alt="First Battle"
        width={8000}
        height={100}
        className="object-contain object-center hover:scale-110 transition-transform duration-500" // عشان الصورة تكون مركزة ومغطية بالكامل
        priority // عشان يحمل الصورة دي بسرعة لأنها في الهيرو
    />
</motion.div>
        {/* 📜 النص */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[auto] max-h-[100%] md:w-1/2 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
        >
            <p className=" text-2xl text-slate-200 leading-[2] font-amiri">
                {t("firstBattle.sectionOne")}
            </p>
        </motion.div>
    </div>
</section>
        </motion.main>
    );
}