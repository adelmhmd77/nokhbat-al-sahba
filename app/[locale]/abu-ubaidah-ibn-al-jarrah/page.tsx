'use client';
import HadithQuote from "../../components/HadithQuote";
import TextReveal from "../../components/TextReveal";
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import OpeningAnimation from '../../components/OpeningAnimation';




export default function AbuUbaidahEpicPage() {
  const t = useTranslations();

  const customEase = [0.22, 1, 0.36, 1] as const;

  const slideLeft = {
    hidden: {
        opacity: 0,
        x: -120,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: customEase,
        },
    },
};

const slideRight = {
    hidden: {
        opacity: 0,
        x: 120,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: customEase,
        },
    },
};

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.4,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        // custom cubic bezier easing
        ease: customEase,
      },
    },
  };

  const reveal = {
    hidden: {
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)',
    },
    show: {
      opacity: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1.2,
        // custom cubic bezier easing
        ease: customEase,
      },
    },
  };

  const divider = {
    hidden: {
      scaleX: 0,
    },
    show: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: customEase,
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050608] text-white selection:bg-cyan-500/20">

      <OpeningAnimation />

      {/* ================= Hero ================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden px-6">

        {/* Background */}

        <div className="absolute inset-0 -z-10">

          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-[160px]" />

          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[180px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-7xl flex-col items-center text-center"
        >

          {/* Tag */}

          <motion.div
            variants={fadeUp}
            className="
              mt-5
              inline-block
              rounded-full
              border
              border-cyan-400/30
              px-6
              py-2
              text-sm
              uppercase
              tracking-widest
              text-cyan-400
            "
          >
            {t('abu_ubaidah_story.intro.tag')}
          </motion.div>
          {/* Title */}
<TextReveal
    text={t("abu_ubaidah_story.intro.title")}
    className="
        mt-10
        font-tufuli
        text-5xl
        md:text-7xl
        lg:text-8xl
        font-bold
        leading-tight
        tracking-tight
        text-white
    "
/>

          {/* Divider */}

          <motion.div
            variants={divider}
            style={{ originX: 0.5 }}
            className="my-10 flex w-full max-w-md items-center"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/30" />

            <div className="mx-5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />
          </motion.div>

          {/* Subtitle */}

          <motion.p
            variants={fadeUp}
            className="
              max-w-3xl
              text-2xl
              italic
              text-slate-400
            "
          >
            {t('abu_ubaidah_story.intro.subtitle')}
          </motion.p>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="
              mt-10
              max-w-4xl
              font-amiri
              text-2xl
              leading-[2.2]
              text-slate-300
            "
          >
            {t('abu_ubaidah_story.intro.desc')}
          </motion.p>

          {/* Scroll */}

          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-col items-center gap-5"
          >

            <span
              className="
                font-mono
                text-xs
                uppercase
                tracking-[.3em]
                text-cyan-400
              "
            >
          
              {t('abu_ubaidah_story.intro.scroll')}
            </span>

            <div className="flex h-14 w-8 justify-center rounded-full border border-cyan-400/20">

              <motion.div
                animate={{
                  y: [0, 18, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
              />

            </div>

          </motion.div>

        </motion.div>

      </section>
{/* ================= Origins ================= */}

<section className="relative py-40 px-6">

    <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.8}}
            className="mb-24"
        >

            <span className="font-mono text-xs tracking-[.35em] uppercase text-cyan-400">

                {t("abu_ubaidah_story.detailed_chapters.section_tag")}

            </span>

            <h2
                className="
                    mt-6
                    max-w-4xl
                    font-tufuli
                    text-4xl
                    md:text-6xl
                    leading-tight
                "
            >

                {t("abu_ubaidah_story.detailed_chapters.section_title")}

            </h2>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-12">

            {/* Left */}

            <motion.div

                initial={{opacity:0,x:-60}}

                whileInView={{opacity:1,x:0}}

                viewport={{once:true}}

                transition={{duration:.8}}

                className="
                    md:col-span-5
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-10
                    backdrop-blur-xl
                "

            >

                <h3
                    className="
                        mb-8
                        text-3xl
                        font-bold
                        text-cyan-300
                    "
                >

                    {t("abu_ubaidah_story.detailed_chapters.lineage_title")}

                </h3>

                <p
                    className="
                        font-amiri
                        text-2xl
                        leading-[2.2]
                        text-slate-300
                    "
                >

                    {t("abu_ubaidah_story.detailed_chapters.lineage_desc1")}

                </p>

            </motion.div>

            {/* Right */}

            <motion.div

                initial={{opacity:0,x:60}}

                whileInView={{opacity:1,x:0}}

                viewport={{once:true}}

                transition={{duration:.8}}

                className="
                    md:col-span-7
                    rounded-3xl
                    border
                    border-cyan-500/10
                    bg-gradient-to-br
                    from-cyan-500/5
                    to-transparent
                    p-10
                "

            >

                <p
                    className="
                        font-amiri
                        text-2xl
                        leading-[2.2]
                        text-slate-300
                    "
                >

                    {t("abu_ubaidah_story.detailed_chapters.lineage_desc2")}

                </p>

            </motion.div>

        </div>

    </div>

</section>
{/* ================= First Muslims ================= */}

<section className="relative py-44 px-6 overflow-hidden">

    {/* Glow */}

    <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[170px]" />

    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl"
    >

        {/* Number */}

        <div className="mb-10 font-mono text-sm tracking-[.45em] text-cyan-400">

            01

        </div>

        {/* Huge Title */}

        <h2
            className="
                max-w-4xl
                font-tufuli
                text-5xl
                md:text-7xl
                leading-tight
                text-white
            "
        >
            {t("abu_ubaidah_story.detailed_chapters.first_muslims.title")}
        </h2>

        {/* line */}

        <div className="my-12 h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

        {/* paragraph */}

        <motion.p
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1
            }}
            className="
                max-w-5xl
                font-amiri
                text-2xl
                leading-[2.3]
                text-slate-300
            "
        >

            {t("abu_ubaidah_story.detailed_chapters.first_muslims.desc")}

        </motion.p>

    </motion.div>

</section>
{/* ================= Trustee Scene ================= */}

<section className="relative overflow-hidden py-52">

    {/* Background */}

    <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[220px]" />

    </div>

    <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Tag */}

        <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="font-mono text-xs uppercase tracking-[.45em] text-cyan-400"
        >
            {t("abu_ubaidah_story.title_story.scene_tag")}
        </motion.span>

        {/* Title */}

        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="mt-10 font-tufuli text-5xl leading-tight text-white md:text-7xl"
        >
            {t("abu_ubaidah_story.title_story.scene_title")}
        </motion.h2>

        {/* Intro */}

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className="mt-16 font-amiri text-3xl leading-[2.2] text-slate-300"
        >
            {t("abu_ubaidah_story.title_story.scene_intro")}
        </motion.p>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .5 }}
            className="mt-12 font-amiri text-3xl leading-[2.2] text-slate-300"
        >
            {t("abu_ubaidah_story.title_story.scene_desc")}
        </motion.p>

        {/* الحديث الأول */}

        <div className="mt-20">

            <HadithQuote>

                قال رسول الله ﷺ

                <br />
                <br />

                «لأبعثنّ معكم رجلًا أمينًا، حقَّ أمين، حقَّ أمين.»

            </HadithQuote>

        </div>

        {/* عمر */}

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .4 }}
            className="
                mx-auto
                mt-20
                max-w-4xl
                rounded-3xl
                border
                border-cyan-500/10
                bg-white/[0.02]
                p-8
            "
        >

            <p className="font-amiri text-2xl italic leading-[2.1] text-cyan-100">

                {t("abu_ubaidah_story.title_story.umar_quote")}

            </p>

        </motion.div>

        {/* اللحظة */}

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .5 }}
            className="mt-28 font-amiri text-3xl leading-[2.2] text-slate-300"
        >
            {t("abu_ubaidah_story.title_story.the_moment")}
        </motion.p>

        {/* الاسم */}

        <motion.h1
            initial={{
                opacity: 0,
                y: 80,
                scale: .9
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
            }}
            viewport={{ once: true }}
            transition={{
                duration: 1
            }}
            className="
                mt-10
                font-tufuli
                text-6xl
                text-cyan-300
                drop-shadow-[0_0_40px_rgba(34,211,238,.45)]
                md:text-8xl
            "
        >
            {t("abu_ubaidah_story.title_story.the_name")}
        </motion.h1>

        {/* الحديث الثاني */}

        <div className="mt-24">

            <HadithQuote>

                «إنَّ لكلِّ أمةٍ أمينًا،

                <br />

                وأمينُ هذه الأمة

                <br />

                أبو عبيدة بن الجراح.»

            </HadithQuote>

        </div>

        {/* النهاية */}

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .5 }}
            className="
                mx-auto
                mt-20
                max-w-4xl
                border-t
                border-white/10
                pt-12
                font-amiri
                text-3xl
                leading-[2.2]
                text-slate-300
            "
        >
            {t("abu_ubaidah_story.title_story.ending")}
        </motion.p>

    </div>
</section>
{/* ================= Migration To Abyssinia ================= */}

<section className="relative py-44">

{/* ================= Migration To Abyssinia ================= */}

<motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="relative overflow-hidden py-44"
>

    {/* Background */}

    <div className="absolute inset-0">

        <div className="absolute left-[-10%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[170px]" />

        <div className="absolute right-[-15%] bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[180px]" />

    </div>

    <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <motion.div

                initial={{
                    opacity:0,
                    x:-80
                }}

                whileInView={{
                    opacity:1,
                    x:0
                }}

                viewport={{
                    once:true
                }}

                transition={{
                    duration:1
                }}

                className="sticky top-32 self-start"

            >

                <span
                    className="
                        font-mono
                        text-xs
                        uppercase
                        tracking-[.45em]
                        text-cyan-400
                    "
                >

                    {t("abu_ubaidah_story.migration_to_abyssinia.tag")}

                </span>

                <h2
                    className="
                        mt-8
                        font-tufuli
                        text-5xl
                        leading-tight
                        text-white
                        md:text-7xl
                    "
                >

                    {t("abu_ubaidah_story.migration_to_abyssinia.title")}

                </h2>

                <div
                    className="
                        mt-10
                        h-px
                        w-40
                        bg-gradient-to-r
                        from-cyan-400
                        to-transparent
                    "
                />

                <div
                    className="
                        mt-16
                        rounded-3xl
                        border
                        border-cyan-500/10
                        bg-cyan-500/5
                        p-8
                    "
                >

                    <p
                        className="
                            font-amiri
                            text-3xl
                            italic
                            leading-[2]
                            text-cyan-200
                        "
                    >

                        {t("abu_ubaidah_story.migration_to_abyssinia.quote")}

                    </p>

                </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div

                variants={container}

                initial="hidden"

                whileInView="show"

                viewport={{
                    once:true
                }}

                className="space-y-24"

            >

                <motion.p

                    variants={fadeUp}

                    className="
                        font-amiri
                        text-2xl
                        leading-[2.4]
                        text-slate-300
                    "

                >

                    {t("abu_ubaidah_story.migration_to_abyssinia.desc1")}

                </motion.p>

                <motion.p

                    variants={fadeUp}

                    className="
                        font-amiri
                        text-2xl
                        leading-[2.4]
                        text-slate-300
                    "

                >

                    {t("abu_ubaidah_story.migration_to_abyssinia.desc2")}

                </motion.p>

                <motion.p

                    variants={fadeUp}

                    className="
                        font-amiri
                        text-2xl
                        leading-[2.4]
                        text-slate-300
                    "

                >

                    {t("abu_ubaidah_story.migration_to_abyssinia.desc3")}

                </motion.p>

            </motion.div>

        </div>

    </div>

</motion.section>

</section>
<section>
  {/* ================= Life In Abyssinia ================= */}

<motion.section
    className="relative overflow-hidden py-52"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
>

    {/* Background */}

    <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-15%] top-20 h-[650px] w-[650px] rounded-full bg-emerald-500/10 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[700px] w-[700px] rounded-full bg-cyan-500/5 blur-[200px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,.05),transparent_70%)]" />

    </div>

    <div className="mx-auto max-w-7xl px-6">

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-14 text-center"
        >

            <motion.span
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[.45em] text-emerald-400"
            >
                {t("abu_ubaidah_story.abyssinia_life.tag")}
            </motion.span>

            <motion.h2
                variants={reveal}
                className="font-tufuli text-5xl md:text-7xl text-white"
            >
                {t("abu_ubaidah_story.abyssinia_life.title")}
            </motion.h2>

            <motion.div
                variants={divider}
                className="mx-auto h-px w-52 origin-center bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            />

        </motion.div>

        {/* Story */}

        <div className="mx-auto mt-28 max-w-5xl space-y-24">

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-amiri text-2xl leading-[2.5] text-slate-300"
            >
                {t("abu_ubaidah_story.abyssinia_life.desc1")}
            </motion.p>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-amiri text-2xl leading-[2.5] text-slate-300"
            >
                {t("abu_ubaidah_story.abyssinia_life.desc2")}
            </motion.p>

            {/* Quote */}

            <motion.div
                initial={{
                    opacity: 0,
                    scale: .92
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1
                }}
                viewport={{ once: true }}
                transition={{ duration: .9 }}
                className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-emerald-400/20
                    bg-gradient-to-br
                    from-emerald-500/10
                    to-transparent
                    p-12
                    text-center
                "
            >

                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,.15),transparent_70%)]" />

                <p className="relative font-amiri text-4xl italic leading-[2] text-emerald-200">

                    {t("abu_ubaidah_story.abyssinia_life.quote")}

                </p>

            </motion.div>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-amiri text-2xl leading-[2.5] text-slate-300"
            >
                {t("abu_ubaidah_story.abyssinia_life.desc3")}
            </motion.p>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-amiri text-2xl leading-[2.5] text-slate-300"
            >
                {t("abu_ubaidah_story.abyssinia_life.desc4")}
            </motion.p>

        </div>

    </div>

</motion.section>
</section>
<section>
  {/* ================= Return To Mecca ================= */}

<motion.section
    className="relative overflow-hidden py-56"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
>

    {/* Background */}

    <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[220px]" />

        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,.04),transparent_70%)]" />

    </div>

    <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
        >

            <motion.span
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[.45em] text-orange-300"
            >
                {t("abu_ubaidah_story.return_to_mecca.tag")}
            </motion.span>

            <motion.h2
                variants={reveal}
                className="mt-8 font-tufuli text-5xl text-white md:text-7xl"
            >
                {t("abu_ubaidah_story.return_to_mecca.title")}
            </motion.h2>

            <motion.div
                variants={divider}
                className="mx-auto mt-10 h-px w-56 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            />

        </motion.div>

        {/* Story */}

        <div className="mx-auto mt-28 max-w-6xl space-y-20">

            {/* desc1 */}

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="ml-auto max-w-4xl rounded-[32px] border border-white/5 bg-white/[0.03] p-10 backdrop-blur-xl"
            >
                <p className="font-amiri text-[30px] leading-[2.3] text-slate-300">
                    {t("abu_ubaidah_story.return_to_mecca.desc1")}
                </p>
            </motion.div>

            {/* desc2 */}

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mr-auto max-w-4xl rounded-[32px] border border-orange-500/10 bg-orange-500/5 p-10 backdrop-blur-xl"
            >
                <p className="font-amiri text-[30px] leading-[2.3] text-slate-300">
                    {t("abu_ubaidah_story.return_to_mecca.desc2")}
                </p>
            </motion.div>

            {/* Quote */}

            <motion.div
                initial={{ opacity: 0, scale: .85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-orange-400/20
                    bg-gradient-to-br
                    from-orange-500/10
                    via-red-500/5
                    to-transparent
                    px-16
                    py-24
                    text-center
                "
            >

                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,.12),transparent_70%)]" />

                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/10 blur-[120px]" />

                <p className="relative font-amiri text-5xl italic leading-[2] text-orange-100">
                    {t("abu_ubaidah_story.return_to_mecca.quote")}
                </p>

            </motion.div>

            {/* desc3 */}

            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="ml-auto max-w-4xl rounded-[32px] border border-red-500/15 bg-red-500/5 p-10 backdrop-blur-xl"
            >
                <p className="font-amiri text-[30px] leading-[2.3] text-slate-200">
                    {t("abu_ubaidah_story.return_to_mecca.desc3")}
                </p>
            </motion.div>

            {/* desc4 */}

            <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mr-auto max-w-4xl rounded-[32px] border border-cyan-400/15 bg-cyan-500/5 p-10 backdrop-blur-xl"
            >
                <p className="font-amiri text-[30px] leading-[2.3] text-slate-200">
                    {t("abu_ubaidah_story.return_to_mecca.desc4")}
                </p>
            </motion.div>

        </div>

    </div>

</motion.section>
</section>
<section>
  {/* ================= Migration To Madinah ================= */}

<motion.section
    className="relative overflow-hidden py-56"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
>

    {/* Background */}

    <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.05),transparent_70%)]"/>

    </div>

    <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
        >

            <motion.span
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[.45em] text-cyan-300"
            >
                {t("abu_ubaidah_story.migration_to_madinah.tag")}
            </motion.span>

            <motion.h2
                variants={reveal}
                className="mt-8 font-tufuli text-5xl md:text-7xl text-white"
            >
                {t("abu_ubaidah_story.migration_to_madinah.title")}
            </motion.h2>

            <motion.div
                variants={divider}
                className="mx-auto mt-10 h-px w-56 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            />

        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-28 max-w-5xl">

            <div className="absolute right-5 top-0 h-full w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent"/>

            {[1,2,3,4].map((item)=>(
                <motion.div
                    key={item}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true }}
                    className="relative mb-20 pr-20"
                >

                    <div className="absolute right-0 top-5 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

                    <div className="rounded-[30px] border border-cyan-500/10 bg-white/[0.03] p-10 backdrop-blur-xl">

                        <p className="font-amiri text-[30px] leading-[2.3] text-slate-300">

                            {t(`abu_ubaidah_story.migration_to_madinah.desc${item}`)}

                        </p>

                    </div>

                </motion.div>
            ))}

        </div>

        {/* Quote */}

        <motion.div

            initial={{opacity:0,scale:.85}}

            whileInView={{opacity:1,scale:1}}

            viewport={{once:true}}

            className="
                mx-auto
                mt-24
                max-w-5xl
                rounded-[40px]
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-500/10
                to-transparent
                px-16
                py-24
                text-center
            "

        >

            <p className="font-amiri text-5xl italic leading-[2] text-cyan-100">

                {t("abu_ubaidah_story.migration_to_madinah.quote")}

            </p>

        </motion.div>

    </div>

</motion.section>
</section>
<section>
  {/* ================= New Beginning In Madinah ================= */}

<motion.section
    className="relative overflow-hidden py-56"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
>

    {/* Background */}

    <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-10%] top-0 h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-[200px]" />

        <div className="absolute right-[-10%] bottom-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03),transparent_70%)]" />

    </div>

    <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div

            variants={container}

            initial="hidden"

            whileInView="show"

            viewport={{ once: true }}

            className="text-center"

        >

            <motion.span

                variants={fadeUp}

                className="font-mono text-xs uppercase tracking-[.45em] text-emerald-400"

            >

                {t("abu_ubaidah_story.madinah_new_beginning.tag")}

            </motion.span>

            <motion.h2

                variants={reveal}

                className="mt-8 font-tufuli text-5xl text-white md:text-7xl"

            >

                {t("abu_ubaidah_story.madinah_new_beginning.title")}

            </motion.h2>

            <motion.div

                variants={divider}

                className="mx-auto mt-10 h-px w-52 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"

            />

        </motion.div>

        {/* Content */}

        <div className="relative mx-auto mt-32 grid max-w-6xl grid-cols-1 gap-20 lg:grid-cols-12">

            {/* Timeline */}

            <div className="hidden lg:flex lg:col-span-2 justify-center">

                <div className="relative">

                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400 via-cyan-400 to-transparent"/>

                    <div className="space-y-32">

                        <div className="h-5 w-5 rounded-full bg-emerald-400 shadow-[0_0_25px_#34d399]" />

                        <div className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]" />

                        <div className="h-5 w-5 rounded-full bg-white shadow-[0_0_25px_white]" />

                    </div>

                </div>

            </div>

            {/* Story */}

            <div className="space-y-24 lg:col-span-10">

                <motion.p

                    variants={slideLeft}

                    initial="hidden"

                    whileInView="show"

                    viewport={{ once: true }}

                    className="font-amiri text-2xl leading-[2.5] text-slate-300"

                >

                    {t("abu_ubaidah_story.madinah_new_beginning.desc1")}

                </motion.p>

                <motion.p

                    variants={fadeUp}

                    initial="hidden"

                    whileInView="show"

                    viewport={{ once: true }}

                    className="font-amiri text-center text-2xl leading-[2.5] text-slate-300"

                >

                    {t("abu_ubaidah_story.madinah_new_beginning.desc2")}

                </motion.p>

                <motion.p

                    variants={slideRight}

                    initial="hidden"

                    whileInView="show"

                    viewport={{ once: true }}

                    className="font-amiri text-right text-2xl leading-[2.5] text-slate-300"

                >

                    {t("abu_ubaidah_story.madinah_new_beginning.desc3")}

                </motion.p>

                {/* Quote */}

                <motion.div

                    initial={{
                        opacity:0,
                        scale:.9
                    }}

                    whileInView={{
                        opacity:1,
                        scale:1
                    }}

                    whileHover={{
                        scale:1.02
                    }}

                    animate={{
                        scale:[1,1.015,1]
                    }}

                    transition={{
                        duration:6,
                        repeat:Infinity
                    }}

                    viewport={{ once:true }}

                    className="
                        relative
                        overflow-hidden
                        rounded-[45px]
                        border
                        border-emerald-400/20
                        bg-white/[0.03]
                        p-14
                        text-center
                        backdrop-blur-2xl
                    "

                >

                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(16,185,129,.15),transparent_70%)]"/>

                    <span className="absolute left-8 top-4 text-7xl text-emerald-400/30">

                        ❝

                    </span>

                    <span className="absolute bottom-4 right-8 text-7xl text-emerald-400/30">

                        ❞

                    </span>

                    <p className="relative font-amiri text-4xl italic leading-[2] text-emerald-200">

                        {t("abu_ubaidah_story.madinah_new_beginning.quote")}

                    </p>

                </motion.div>

            </div>

        </div>

    </div>

</motion.section>
</section>
<section>
  {/* ================= Brotherhood ================= */}

<motion.section
    className="relative overflow-hidden py-56"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
>

    {/* Background */}

    <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-15%] top-20 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute right-[-15%] bottom-0 h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-[220px]" />

    </div>

    <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
        >

            <motion.span
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[.45em] text-cyan-400"
            >
                {t("abu_ubaidah_story.brotherhood.tag")}
            </motion.span>

            <motion.h2
                variants={reveal}
                className="mt-8 font-tufuli text-5xl md:text-7xl text-white"
            >
                {t("abu_ubaidah_story.brotherhood.title")}
            </motion.h2>

        </motion.div>

        {/* Cards */}

        <div className="mt-28 grid gap-10 lg:grid-cols-2">

            {/* Muhajireen */}

            <motion.div

                initial={{
                    opacity:0,
                    x:-150,
                    rotate:-4
                }}

                whileInView={{
                    opacity:1,
                    x:0,
                    rotate:0
                }}

                transition={{
                    duration:1
                }}

                viewport={{
                    once:true
                }}

                whileHover={{
                    y:-8,
                    scale:1.02
                }}

                className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-cyan-400/20
                    bg-cyan-500/5
                    p-12
                    backdrop-blur-xl
                "
            >

                <h3 className="mb-8 font-tufuli text-4xl text-cyan-300">

                    المهاجرون

                </h3>

                <p className="font-amiri text-2xl leading-[2.4] text-slate-300">

                    {t("abu_ubaidah_story.brotherhood.scene1")}

                </p>

                <p className="mt-10 font-amiri text-2xl leading-[2.4] text-slate-300">

                    {t("abu_ubaidah_story.brotherhood.scene2")}

                </p>

            </motion.div>

            {/* Ansar */}

            <motion.div

                initial={{
                    opacity:0,
                    x:150,
                    rotate:4
                }}

                whileInView={{
                    opacity:1,
                    x:0,
                    rotate:0
                }}

                transition={{
                    duration:1
                }}

                viewport={{
                    once:true
                }}

                whileHover={{
                    y:-8,
                    scale:1.02
                }}

                className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-emerald-400/20
                    bg-emerald-500/5
                    p-12
                    backdrop-blur-xl
                "
            >

                <h3 className="mb-8 font-tufuli text-4xl text-emerald-300">

                    الأنصار

                </h3>

                <p className="font-amiri text-2xl leading-[2.4] text-slate-300">

                    {t("abu_ubaidah_story.brotherhood.scene3")}

                </p>

            </motion.div>

        </div>

        {/* Connection */}

        <motion.div

            initial={{
                opacity:0,
                scale:.7
            }}

            whileInView={{
                opacity:1,
                scale:1
            }}

            viewport={{
                once:true
            }}

            transition={{
                delay:.5,
                duration:1
            }}

            className="my-24 flex items-center justify-center"

        >

            <div className="h-px w-32 bg-cyan-400"/>

            <motion.div

                animate={{
                    scale:[1,1.2,1],
                    boxShadow:[
                        "0 0 20px #22d3ee",
                        "0 0 60px #22d3ee",
                        "0 0 20px #22d3ee"
                    ]
                }}

                transition={{
                    repeat:Infinity,
                    duration:3
                }}

                className="mx-8 h-6 w-6 rounded-full bg-white"

            />

            <div className="h-px w-32 bg-emerald-400"/>

        </motion.div>

        {/* Quote */}

        <motion.div

            initial={{
                opacity:0,
                y:60
            }}

            whileInView={{
                opacity:1,
                y:0
            }}

            viewport={{
                once:true
            }}

            className="
                mx-auto
                max-w-5xl
                rounded-[45px]
                border
                border-white/10
                bg-white/[0.03]
                p-14
                text-center
                backdrop-blur-2xl
            "

        >

            <span className="text-7xl text-cyan-400/30">

                ❝

            </span>

            <p className="font-amiri text-4xl italic leading-[2] text-cyan-100">

                {t("abu_ubaidah_story.brotherhood.quote")}

            </p>

            <span className="text-7xl text-cyan-400/30">

                ❞

            </span>

        </motion.div>

        {/* Ending */}

        <motion.div

            variants={container}

            initial="hidden"

            whileInView="show"

            viewport={{ once:true }}

            className="
                mx-auto
                mt-24
                max-w-5xl
                rounded-[40px]
                border
                border-white/10
                bg-gradient-to-br
                from-cyan-500/5
                via-transparent
                to-emerald-500/5
                p-14
                backdrop-blur-xl
            "

        >

            <motion.p

                variants={slideLeft}

                className="font-amiri text-2xl leading-[2.5] text-slate-300"

            >

                {t("abu_ubaidah_story.brotherhood.scene4")}

            </motion.p>

            <motion.p

                variants={slideRight}

                className="mt-10 font-amiri text-2xl leading-[2.5] text-slate-300"

            >

                {t("abu_ubaidah_story.brotherhood.scene5")}

            </motion.p>

        </motion.div>

    </div>

</motion.section>
</section>
<section>
  {/* ================= Before Badr ================= */}

<motion.section
  className="relative overflow-hidden py-52"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>

  {/* Background */}

  <div className="absolute inset-0 -z-10">

    <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-red-500/5 blur-[220px]" />

    <div className="absolute bottom-0 left-[-10%] h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[180px]" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,.06),transparent_70%)]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

  </div>

  <div className="mx-auto max-w-7xl px-6">

    {/* Header */}

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center space-y-10"
    >

      <motion.span
        variants={fadeUp}
        className="font-mono text-xs uppercase tracking-[.45em] text-red-400"
      >
        {t("abu_ubaidah_story.pre_badr.tag")}
      </motion.span>

      <motion.h2
        variants={reveal}
        className="font-tufuli text-5xl md:text-7xl text-white"
      >
        {t("abu_ubaidah_story.pre_badr.title")}
      </motion.h2>

      <motion.div
        variants={divider}
        className="mx-auto h-px w-56 bg-gradient-to-r from-transparent via-red-400 to-transparent"
      />

    </motion.div>

    {/* Timeline */}

    <div className="relative mx-auto mt-28 max-w-5xl">

      <div className="absolute right-5 top-0 h-full w-px bg-gradient-to-b from-red-500 via-red-300/20 to-transparent" />

      {/* Paragraph 1 */}

      <motion.div
        initial={{ opacity:0,x:80 }}
        whileInView={{ opacity:1,x:0 }}
        viewport={{ once:true }}
        transition={{ duration:.9 }}
        className="relative mb-24 pr-16"
      >

        <div className="absolute right-0 top-4 h-4 w-4 rounded-full bg-red-400 shadow-[0_0_25px_rgba(248,113,113,.8)]"/>

        <p className="font-amiri text-2xl leading-[2.5] text-slate-300">
          {t("abu_ubaidah_story.pre_badr.desc1")}
        </p>

      </motion.div>

      {/* Paragraph 2 */}

      <motion.div
        initial={{ opacity:0,x:-80 }}
        whileInView={{ opacity:1,x:0 }}
        viewport={{ once:true }}
        transition={{ duration:.9 }}
        className="relative mb-24 pr-16"
      >

        <div className="absolute right-0 top-4 h-4 w-4 rounded-full bg-orange-400 shadow-[0_0_25px_rgba(251,146,60,.8)]"/>

        <p className="font-amiri text-2xl leading-[2.5] text-slate-300">
          {t("abu_ubaidah_story.pre_badr.desc2")}
        </p>

      </motion.div>

      {/* Paragraph 3 */}

      <motion.div
        initial={{ opacity:0,x:80 }}
        whileInView={{ opacity:1,x:0 }}
        viewport={{ once:true }}
        transition={{ duration:.9 }}
        className="relative mb-24 pr-16"
      >

        <div className="absolute right-0 top-4 h-4 w-4 rounded-full bg-red-500 shadow-[0_0_30px_rgba(239,68,68,.8)]"/>

        <p className="font-amiri text-2xl leading-[2.5] text-slate-300">
          {t("abu_ubaidah_story.pre_badr.desc3")}
        </p>

      </motion.div>

      {/* Paragraph 4 */}

      <motion.div
        initial={{ opacity:0,x:-80 }}
        whileInView={{ opacity:1,x:0 }}
        viewport={{ once:true }}
        transition={{ duration:.9 }}
        className="relative mb-24 pr-16"
      >

        <div className="absolute right-0 top-4 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.8)]"/>

        <p className="font-amiri text-2xl leading-[2.5] text-slate-300">
          {t("abu_ubaidah_story.pre_badr.desc4")}
        </p>

      </motion.div>

      {/* Paragraph 5 */}

      <motion.div
        initial={{ opacity:0,scale:.9 }}
        whileInView={{ opacity:1,scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="relative pr-16"
      >

        <div className="absolute right-0 top-4 h-4 w-4 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,.8)]"/>

        <p className="font-amiri text-2xl leading-[2.5] text-slate-200">
          {t("abu_ubaidah_story.pre_badr.desc5")}
        </p>

      </motion.div>

    </div>

    {/* Final Quote */}

    <motion.div

      initial={{
        opacity:0,
        scale:.85,
        filter:"blur(15px)"
      }}

      whileInView={{
        opacity:1,
        scale:1,
        filter:"blur(0px)"
      }}

      viewport={{ once:true }}

      transition={{
        duration:1.2
      }}

      className="
        relative
        mx-auto
        mt-36
        max-w-4xl
        overflow-hidden
        rounded-[40px]
        border
        border-red-500/20
        bg-gradient-to-br
        from-red-500/10
        via-transparent
        to-transparent
        p-14
        text-center
      "

    >

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(239,68,68,.12),transparent_70%)]"/>

      <p className="relative font-amiri text-5xl italic leading-[2] text-red-200">

        {t("abu_ubaidah_story.pre_badr.quote")}

      </p>

    </motion.div>

  </div>

</motion.section>
</section>
<section>
  {/* ================= Battle Of Badr ================= */}

<motion.section
    className="relative overflow-hidden py-56"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
>

    {/* Background */}

    <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[220px]" />

        <div className="absolute right-[-10%] bottom-0 h-[700px] w-[700px] rounded-full bg-orange-500/10 blur-[200px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,.06),transparent_70%)]"/>

    </div>

    <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center space-y-10"
        >

            <motion.span
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[.45em] text-red-400"
            >
                {t("abu_ubaidah_story.battle_of_badr.tag")}
            </motion.span>

            <motion.h2
                variants={reveal}
                className="font-tufuli text-5xl md:text-7xl text-white"
            >
                {t("abu_ubaidah_story.battle_of_badr.title")}
            </motion.h2>

            <motion.div
                variants={divider}
                className="mx-auto h-px w-64 bg-gradient-to-r from-transparent via-red-400 to-transparent"
            />

        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-32 max-w-5xl">

            {/* Line */}

            <div className="absolute right-5 top-0 h-full w-[2px] bg-gradient-to-b from-red-500 via-orange-400 to-red-500"/>

            {Array.from({ length: 10 }).map((_, index) => (

                <motion.div

                    key={index}

                    initial={{
                        opacity:0,
                        x:index%2===0?80:-80
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.9
                    }}

                    className="relative mb-24 pr-16"

                >

                    {/* Node */}

                    <motion.div

                        whileInView={{
                            scale:[0,1.4,1],
                            rotate:[0,180,360]
                        }}

                        transition={{
                            duration:.8
                        }}

                        className="
                        absolute
                        right-0
                        top-5
                        h-5
                        w-5
                        rounded-full
                        bg-red-400
                        shadow-[0_0_30px_rgba(248,113,113,.9)]
                        "

                    />

                    {/* Card */}

                    <motion.div

                        whileHover={{
                            scale:1.02,
                            borderColor:"rgba(248,113,113,.5)"
                        }}

                        className="
                        rounded-[35px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        backdrop-blur-xl
                        p-10
                        transition-all
                        "

                    >

                        <p className="font-amiri text-2xl leading-[2.5] text-slate-300">

                            {t(`abu_ubaidah_story.battle_of_badr.desc${index+1}`)}

                        </p>

                    </motion.div>

                </motion.div>

            ))}

        </div>

        {/* Quote */}

        <motion.div

            initial={{
                opacity:0,
                scale:.85,
                filter:"blur(15px)"
            }}

            whileInView={{
                opacity:1,
                scale:1,
                filter:"blur(0px)"
            }}

            viewport={{
                once:true
            }}

            transition={{
                duration:1.2
            }}

            className="
            relative
            mx-auto
            mt-40
            max-w-5xl
            overflow-hidden
            rounded-[45px]
            border
            border-red-500/20
            bg-gradient-to-br
            from-red-500/10
            via-transparent
            to-transparent
            p-16
            text-center
            "

        >

            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(239,68,68,.15),transparent_70%)]"/>

            <motion.p

                animate={{
                    opacity:[.6,1,.6]
                }}

                transition={{
                    duration:3,
                    repeat:Infinity
                }}

                className="
                relative
                font-amiri
                text-5xl
                italic
                leading-[2]
                text-red-200
                "

            >

                {t("abu_ubaidah_story.battle_of_badr.quote")}

            </motion.p>

        </motion.div>

    </div>

</motion.section>
</section>
    </main>
  );
}