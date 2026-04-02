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
                    <br/>
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
    <section className=" relative z-10 flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
    {/* عنوان السيكشن بنفحة تاريخية */}
    <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-5xl md:text-7xl font-bold font-tufuli text-center bg-gradient-to-r from-[#7b001c] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(123,0,28,0.5)]"
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
        <p className="text-2xl md:text-2xl text-slate-100 leading-[1.8] font-amiri font-medium px-4">
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
        <h3 className="text-2xl md:text-5xl lg:text-3xl font-amiri font-bold leading-tight text-slate-100 italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
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
        className="text-5xl mb-12 p-10 md:text-6xl font-bold font-tufuli text-center bg-gradient-to-r from-[#7b001c] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(123,0,28,0.5)]"
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
            className="text-5xl md:text-6xl font-bold font-tufuli text-center bg-gradient-to-r from-[#7b001c] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(123,0,28,0.5)]"
            >
            {t("storyTime.title")}
        </motion.h2>

        {/* 🧱 sectionOne */}
        <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-2xl text-slate-100 leading-[1.9] font-amiri px-4"
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
            className="text-2xl md:text-2xl text-slate-100 leading-[2] font-amiri font-bold pt-12 border-t border-[#7b001c]/20"
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
            className="text-3xl md:text-3xl text-white font-amiri leading-[2.2]"
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
            className="text-3xl md:text-3xl text-white font-amiri leading-[2.2] border-t pt-10 border-[#fbbf24]/20"
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
            className="text-5xl md:text-7xl font-bold font-tufuli text-center bg-gradient-to-r from-[#7b001c] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(123,0,28,0.5)]"
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
<section className="relative min-h-screen py-32 px-6 overflow-hidden bg-gradient-to-bl from-black via-[#7b001c]/20 to-black">

    {/* 🏆 Title */}
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold font-tufuli text-center bg-gradient-to-r from-[#7b001c] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(123,0,28,0.5)]"
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
                {t("firstBattle.sectionTwo")}
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-300 max-h-[100%] md:w-1/1 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
        >
            <p className=" text-2xl text-slate-200 leading-[2] font-amiri">
                {t("firstBattle.sectionThree")}
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-300 max-h-[100%] md:w-1/1 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
        >
            <p className="text-2xl text-slate-200 leading-[2] font-amiri">
                {t("firstBattle.highlight")}
            </p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 1, y: 50 }}
        whileInView={{opacity: 1, y: 3}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-300 max-h-[100%] md:w-1/1 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
        >
         <p className='text-2xl text-slate-200 leading-[2] font-amiri'>
            {t("firstBattle.outro")}
         </p>
        </motion.div>
    </div>
</section>
<section className="bg-gradient-to-br from-black via-[#7b001c]/20 to-black relative min-h-screen py-32 px-6 overflow-hidden">
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold font-tufuli text-center bg-gradient-to-r from-[#7b001c] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(123,0,28,0.5)]"
    >
        {t.rich("medinaLife.title",{
                highlight: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">{w}</span>
            })}
    </motion.h2>
    <div className='flex flex-row flex-wrap justify-start items-center gap-12 mt-20 max-w-full max-h-full relative z-10'>
        
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-300 max-h-[100%] md:w-1/2 p-10 rounded-3xl  bg-white/5 backdrop-blur-md border border-white/10"
            >
            <p className=" text-2xl text-slate-200 leading-[2]  font-amiri">
                {t.rich("medinaLife.sectionOne", {
                    highlight: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">{w}</span>,
                    focus: (w) => <span className="text-[#7b001c] font-bold">{w}</span>,
                    soft: (w) => <span className="text-[#cbd5e1] italic">{w}</span>,
                    gold: (w) => <span className="text-[#d4af37] font-bold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">{w}</span>
                })}
            </p>
            </motion.div>
    </div>
    <div className='flex flex-wrap justify-end items-center gap-12 mt-20 max-w-full max-h-full relative z-10'>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[auto] max-h-[100%] md:w-1/2 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
            >
            <p className=" text-2xl text-slate-200 leading-[2] font-amiri">
                {t.rich("medinaLife.sectionTwo", {
                    highlight: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">{w}</span>,
                    focus: (w) => <span className="text-[#7b001c] font-bold">{w}</span>,
                    gold: (w) => <span className="text-[#d4af37] font-bold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">{w}</span>,
                    light: (w) => <span className="text-[#f9fafb] italic">{w}</span>
                })}
            </p>
            </motion.div>
    </div>
    <div className='flex flex-wrap justify-start items-center gap-12 mt-20 max-w-full max-h-full relative z-10'>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[auto] max-h-[100%] md:w-1/2 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
            >
            <p className=" text-2xl text-slate-200 leading-[2] font-amiri">
                {t.rich("medinaLife.sectionThree", {
                    highlight: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">{w}</span>,
                    focus: (w) => <span className="text-[#7b001c] font-bold">{w}</span>,
                    gold: (w) => <span className="text-[#d4af37] font-bold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">{w}</span>,
                    light: (w) => <span className="text-[#f9fafb] italic">{w}</span>
                })}
            </p>
        </motion.div>
    </div>
    <div className='flex flex-wrap justify-end items-center gap-12 mt-20 max-w-full max-h-full relative z-10'>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[auto] max-h-[100%] md:w-1/2 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
            >
            <p className=" text-2xl text-slate-200 leading-[2] font-amiri">
                {t.rich("medinaLife.sectionFour", {
                    highlight: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">{w}</span>,
                    focus: (w) => <span className="text-[#7b001c] font-bold">{w}</span>,
                    gold: (w) => <span className="text-[#d4af37] font-bold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">{w}</span>,
                    light: (w) => <span className="text-[#f9fafb] italic">{w}</span>,
                    soft: (w) => <span className="text-[#cbd5e1] italic">{w}</span>
                })}
            </p>
        </motion.div>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-12 mt-20 max-w-full max-h-full relative z-10'>
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[auto] max-h-[100%] md:w-1/2 p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
            >
            <p className=" text-2xl text-slate-200 leading-[2] font-amiri">
                {t.rich("medinaLife.closing", {
                    highlight: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">{w}</span>,
                    focus: (w) => <span className="text-[#7b001c] font-bold">{w}</span>,
                    gold: (w) => <span className="text-[#d4af37] font-bold drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">{w}</span>,
                    light: (w) => <span className="text-[#f9fafb] italic">{w}</span>,
                    soft: (w) => <span className="text-[#cbd5e1] italic">{w}</span> 
                })}
            </p>
        </motion.div>
    </div>
</section>
<section className="relative min-h-screen py-24 px-6 overflow-hidden bg-black flex flex-col items-center justify-center">
    {/* تأثير ضوء "خافت" يوحي ببداية عصر جديد */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#fbbf24]/50 to-transparent" />
    
    <div className="max-w-6xl mx-auto relative z-10">
        
        {/* العنوان الرئيسي: يوم تغيّر كل شيء */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-32"
        >
            <h2 className="text-6xl md:text-8xl font-tufuli leading-tight">
                {t.rich("caliphateStart.title", {
                    focus: (w) => <span className="bg-gradient-to-t from-[#7b001c] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">{w}</span>
                })}
            </h2>
        </motion.div>

        {/* شبكة النصوص (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            
            {/* الفقرة الأولى: وفاة أبي بكر */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl border-r-4 border-[#7b001c] bg-gradient-to-l from-[#7b001c]/5 to-transparent"
            >
                <p className="text-2xl md:text-3xl text-slate-200 font-amiri leading-[2] text-right">
                    {t.rich("caliphateStart.sectionOne", {
                        highlight: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>,
                        focus: (w) => <span className="text-[#7b001c] font-black drop-shadow-[0_0_10px_rgba(123,0,28,0.6)] uppercase">{w}</span>,
                        gold: (w) => <span className="text-[#d4af37] font-semibold">{w}</span>,
                        soft: (w) => <span className="text-slate-400 italic opacity-80">{w}</span>
                    })}
                </p>
            </motion.div>

            {/* الفقرة الثانية: تولي عمر */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl border-l-4 border-[#fbbf24] bg-gradient-to-r from-[#fbbf24]/5 to-transparent md:mt-24"
            >
                <p className="text-2xl md:text-3xl text-slate-200 font-amiri leading-[2] text-right">
                    {t.rich("caliphateStart.sectionTwo", {
                        highlight: (w) => <span className="text-[#fbbf24] font-bold underline decoration-[#fbbf24]/30 underline-offset-8">{w}</span>,
                        focus: (w) => <span className="text-[#7b001c] font-bold text-4xl">{w}</span>,
                        gold: (w) => <span className="text-[#d4af37] font-bold drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">{w}</span>,
                        soft: (w) => <span className="inline-block px-2 py-1 bg-white/5 rounded italic text-slate-300">{w}</span>
                    })}
                </p>
            </motion.div>

        </div>
    </div>

    {/* حركة ذرات غبار خلفية (اختياري لزيادة السينمائية) */}
    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/dust.png')] mix-blend-screen animate-pulse" />
</section>
<section className="relative min-h-screen py-32 px-6 flex items-center justify-center bg-black overflow-hidden border-b border-[#7b001c]/20">
    {/* خلفية بتأثير الورق القديم أو الجلد */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/paper-texture.png')] mix-blend-overlay" />
    
    <div className="max-w-6xl w-full z-10">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-tufuli text-center mb-24"
        >
            {t.rich("appointment.title", {
                gold: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]">{w}</span>
            })}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* الفقرة الأولى - اختيار الصديق */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-2xl bg-gradient-to-br from-[#d4af37]/10 to-transparent border-r-2 border-[#d4af37]/30 shadow-[20px_0_40px_-20px_rgba(212,175,55,0.1)]"
            >
                <p className="text-2xl md:text-3xl text-slate-200 font-amiri leading-[2.2] text-right">
                    {t.rich("appointment.sectionOne", {
                        highlight: (w) => <span className="text-[#fbbf24] font-bold border-b border-[#fbbf24]/40">{w}</span>
                    })}
                </p>
            </motion.div>

            {/* الفقرة الثانية - رؤية الصديق والكلمة الخالدة */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-2xl bg-gradient-to-bl from-[#7b001c]/10 to-transparent border-l-2 border-[#7b001c]/30 md:mt-20"
            >
                <p className="text-2xl md:text-3xl text-slate-100 font-amiri leading-[2.2] text-right">
                    {t.rich("appointment.sectionTwo", {
                        focus: (w) => <span className="text-[#7b001c] font-black text-4xl">{w}</span>,
                        light: (w) => <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">{w}</span>,
                        gold: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>,
                        soft: (w) => <span className="block mt-6 text-3xl md:text-4xl text-[#fbbf24] font-bold italic text-center leading-relaxed">{w}</span>
                    })}
                </p>
            </motion.div>
        </div>
    </div>
</section>
<section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#0a0a0a]">
    {/* تأثير "الدخان" أو الضباب في الأسفل لزيادة الدراما */}
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#7b001c]/10 to-transparent pointer-events-none" />

    <div className="max-w-4xl text-center z-10">
        <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-tufuli mb-20"
        >
            {t.rich("burden.title", {
                focus: (w) => <span className="text-[#7b001c] drop-shadow-[0_0_25px_rgba(123,0,28,0.7)]">{w}</span>
            })}
        </motion.h2>

        <div className="space-y-16">
            {/* الفقرة الأولى - خوف عمر */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative"
            >
                <p className="text-2xl md:text-4xl text-slate-300 font-amiri leading-[2.2]">
                    {t.rich("burden.sectionOne", {
                        highlight: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>,
                        gold: (w) => <span className="text-[#d4af37] font-semibold underline decoration-wavy decoration-[#7b001c]">{w}</span>
                    })}
                </p>
            </motion.div>

            {/* الفاصل الزمني - عبدٌ يرتجف */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                className="h-px bg-gradient-to-r from-transparent via-[#7b001c] to-transparent mx-auto"
            />

            {/* الفقرة الثانية - الخطبة والعدالة */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/5"
            >
                <p className="text-2xl md:text-4xl text-slate-200 font-amiri leading-[2.3]">
                    {t.rich("burden.sectionTwo", {
                        light: (w) => <span className="text-white font-bold tracking-widest">{w}</span>,
                        soft: (w) => <span className="block my-8 text-[#fbbf24] text-3xl md:text-5xl font-bold leading-snug">{w}</span>,
                        gold: (w) => <span className="text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] font-black uppercase">{w}</span>
                    })}
                </p>
            </motion.div>
        </div>
    </div>
</section>
<section className="relative min-h-screen py-32 px-6 flex items-center justify-center bg-black overflow-hidden">
    {/* خطوط طولية خفيفة توحي بالنظام والقانون */}
    <div className="absolute inset-0 flex justify-around opacity-[0.02] pointer-events-none">
        {[...Array(5)].map((_, i) => <div key={i} className="w-px h-full bg-white" />)}
    </div>

    <div className="max-w-6xl w-full z-10">
        {/* العنوان: عدل لا يعرف المجاملة */}
        <motion.h2 
            initial={{ opacity: 0, letterSpacing: "-5px" }}
            whileInView={{ opacity: 1, letterSpacing: "2px" }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-tufuli text-center mb-28"
        >
            {t.rich("firstSteps.title", {
                highlight: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">{w}</span>
            })}
        </motion.h2>

        <div className="flex flex-col space-y-12">
            {/* الفقرة الأولى: القانون الواحد */}
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="self-start max-w-3xl p-10 bg-gradient-to-r from-[#7b001c]/10 to-transparent border-l-4 border-[#7b001c]"
            >
                <p className="text-2xl md:text-4xl text-slate-200 font-amiri leading-[2]">
                    {t.rich("firstSteps.sectionOne", {
                        highlight: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>,
                        focus: (w) => <span className="text-white font-black bg-[#7b001c] px-4 py-1 rotate-[-2deg] inline-block">{w}</span>
                    })}
                </p>
            </motion.div>

            {/* الفقرة الثانية: العين والقلب والسيف */}
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="self-end max-w-3xl p-10 bg-gradient-to-l from-[#fbbf24]/5 to-transparent border-r-4 border-[#fbbf24] text-right"
            >
                <p className="text-2xl md:text-4xl text-slate-200 font-amiri leading-[2]">
                    {t.rich("firstSteps.sectionTwo", {
                        soft: (w) => <span className="text-slate-400 italic underline decoration-[#7b001c]/40 underline-offset-8">{w}</span>,
                        light: (w) => <span className="text-white drop-shadow-[0_0_10px_white]">{w}</span>,
                        focus: (w) => <span className="text-[#7b001c] font-black text-5xl inline-block mx-2">{w}</span>
                    })}
                </p>
            </motion.div>
        </div>
    </div>
</section>
<section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center bg-black text-center overflow-hidden">
    {/* توهج ذهبي عملاق في الخلفية لرمزية "الفاروق" */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbbf24]/10 blur-[180px] rounded-full pointer-events-none" />

    <div className="max-w-5xl z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-9xl font-tufuli mb-16"
        >
            {t.rich("legacyStart.title", {
                gold: (w) => <span className="bg-gradient-to-b from-[#fbbf24] to-[#d4af37] bg-clip-text text-transparent drop-shadow-2xl">{w}</span>
            })}
        </motion.h2>

        <div className="space-y-12">
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-3xl md:text-5xl text-slate-300 font-amiri leading-[2] max-w-4xl mx-auto"
            >
                {t.rich("legacyStart.sectionOne", {
                    highlight: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>,
                    gold: (w) => <span className="text-[#d4af37] border-b-2 border-[#d4af37]">{w}</span>,
                    focus: (w) => <span className="text-[#7b001c] font-black">{w}</span>
                })}
            </motion.p>

            <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-4xl md:text-6xl font-amiri text-white pt-10"
            >
                {t.rich("legacyStart.sectionTwo", {
                    light: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>,
                    soft: (w) => <span className="text-slate-400 italic">{w}</span>,
                    gold: (w) => (
                        <span className="block mt-8 text-7xl md:text-[10rem] font-tufuli bg-gradient-to-r from-[#fbbf24] via-[#7b001c] to-[#fbbf24] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.5)]">
                            {w}
                        </span>
                    )
                })}
            </motion.p>
        </div>
    </div>

    {/* سهم نزول هادي لو فيه لسه كمالة */}
    <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
    >
        <div className="w-6 h-10 border-2 border-[#fbbf24]/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#fbbf24] rounded-full" />
        </div>
    </motion.div>
</section>
<section className="relative min-h-screen py-32 px-6 flex items-center justify-center bg-gradient-to-b from-black via-[#0f172a] to-black overflow-hidden">
    {/* تأثير "ضوء الفانوس" المتحرك */}
    <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], x: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#fbbf24]/10 blur-[100px] rounded-full" 
    />

    <div className="max-w-5xl z-10 text-right">
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-tufuli mb-20 text-center"
        >
            {t.rich("nightPatrol.title", {
                focus: (w) => <span className="text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">{w}</span>
            })}
        </motion.h2>

        <div className="space-y-16 border-r-2 border-[#fbbf24]/20 pr-8 md:pr-16">
            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-4xl text-slate-300 font-amiri leading-[2.2]"
            >
                {t.rich("nightPatrol.sectionOne", {
                    highlight: (w) => <span className="text-white font-bold">{w}</span>,
                    light: (w) => <span className="text-[#fbbf24]">{w}</span>,
                    gold: (w) => <span className="block mt-4 text-[#d4af37] italic text-3xl font-bold">{w}</span>
                })}
            </motion.p>

            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl text-slate-200 font-amiri leading-[2.2]"
            >
                {t.rich("nightPatrol.sectionTwo", {
                    focus: (w) => <span className="text-[#7b001c] font-black">{w}</span>,
                    highlight: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>
                })}
            </motion.p>
        </div>
    </div>
</section>
<section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center bg-black">
    {/* خلفية توحي بـ "الصرامة" - خطوط حادة */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7b001c]/5 skew-x-[-15deg] pointer-events-none" />



        <div className="relative mt-40">
            <motion.h2 className="text-5xl md:text-8xl font-tufuli text-center mb-16 relative z-20">
                {t.rich("universalJustice.title", {
                    focus: (w) => <span className="text-[#fbbf24]">{w}</span>
                })}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-8 border-t border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <p className="text-2xl md:text-3xl text-slate-300 font-amiri leading-relaxed">
                        {t.rich("universalJustice.sectionOne", {
                            highlight: (w) => <span className="text-white font-bold">{w}</span>,
                            focus: (w) => <span className="text-[#7b001c] font-bold">{w}</span>,
                            gold: (w) => <span className="text-[#fbbf24]">{w}</span>
                        })}
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-8 border-t border-[#fbbf24]/40 bg-[#7b001c]/10 backdrop-blur-md"
                >
                    <p className="text-2xl md:text-3xl text-slate-100 font-amiri leading-relaxed">
                        {t.rich("universalJustice.sectionTwo", {
                            light: (w) => <span className="text-white underline decoration-[#fbbf24]">{w}</span>,
                            gold: (w) => <span className="block my-6 text-[#fbbf24] text-4xl font-black italic">{w}</span>,
                            focus: (w) => <span className="text-[#7b001c] font-bold underline">{w}</span>
                        })}
                    </p>
                </motion.div>
            </div>
        </div>
</section>
<section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center bg-black overflow-hidden">
    {/* تأثير "الدم والشروق" - هالة حمراء خافتة جداً في الأسفل */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-[#7b001c]/20 to-transparent pointer-events-none opacity-40" />

    <div className="max-w-5xl z-10 text-center">
        
        {/* العنوان: الفجر الأحمر */}
        <motion.h2 
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="text-7xl md:text-9xl font-tufuli mb-24 tracking-tighter"
        >
            {t.rich("martyrdom.title", {
                focus: (w) => <span className="bg-gradient-to-b from-white via-[#7b001c] to-[#7b001c] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(123,0,28,0.8)]">{w}</span>
            })}
        </motion.h2>

        <div className="space-y-24">
            
            {/* مشهد الطعنة والحمد */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative"
            >
                <div className="absolute -right-4 top-0 h-full w-1 bg-gradient-to-b from-[#7b001c] to-transparent" />
                <p className="text-3xl md:text-5xl text-slate-300 font-amiri leading-[2.2] px-8 text-right">
                    {t.rich("martyrdom.sectionOne", {
                        highlight: (w) => <span className="text-white font-bold">{w}</span>,
                        focus: (w) => <span className="text-[#7b001c] font-black">{w}</span>,
                        gold: (w) => <span className="block my-6 text-[#fbbf24] italic drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">{w}</span>
                    })}
                </p>
            </motion.div>

            {/* الرحيل الأبدي */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 2 }}
                className="p-12 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm"
            >
                <p className="text-3xl md:text-5xl text-slate-100 font-amiri leading-[2.2]">
                    {t.rich("martyrdom.sectionTwo", {
                        highlight: (w) => <span className="text-[#fbbf24] font-bold">{w}</span>,
                        light: (w) => <span className="text-white underline decoration-[#fbbf24]/50">{w}</span>,
                        focus: (w) => <span className="text-[#7b001c] font-bold">{w}</span>,
                        gold: (w) => <span className="text-[#d4af37] font-black tracking-widest">{w}</span>,
                        soft: (w) => <span className="text-slate-400 italic">{w}</span>
                    })}
                </p>
            </motion.div>

            {/* الخاتمة النهائية (Credits Style) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="pt-20"
            >
                <div className="w-24 h-1 bg-[#fbbf24] mx-auto mb-8 shadow-[0_0_15px_#fbbf24]" />
                <h3 className="text-4xl md:text-6xl font-tufuli text-white/40 tracking-[15px] uppercase">
                    تمت
                </h3>
            </motion.div>

        </div>
    </div>
    {/* تأثير "الرماد" أو الغبار المتطاير في النهاية */}
    <div className="absolute inset-0 pointer-events-none bg-[url('/dust-final.png')] opacity-10" />
</section>
    </motion.main>
    );
}