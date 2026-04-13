"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Sword,
  Shield,
  Ship,
  Flag,
  Trophy,
  Gavel,
  Users,
  BookOpen,
  Coins,
  Map,
  Home,
  Droplets,
  Heart,
  Scale,
  ChevronRight,
  ArrowRightCircle,
  CircleUser,
  Settings,
  CheckCircle2,
  LayoutGrid,
  Layers,
  ShieldAlert,
  Quote,
} 
from "lucide-react";
export default function UthmanIbnAffan() {
  const t = useTranslations("uthmanIbnAffan");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-hidden text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="relative bg-[url('/uthman/uthman-hero.png')] bg-cover bg-center h-screen w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0a] flex flex-col justify-center items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center px-4 w-full flex flex-col items-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              animate={{
                textShadow: [
                  "0px 0px 8px rgba(212, 175, 55, 0.2)",
                  "0px 0px 25px rgba(212, 175, 55, 0.8)",
                  "0px 0px 8px rgba(212, 175, 55, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl md:text-5xl font-semibold text-[#D4AF37] mt-8"
            >
              {t("subtitle")}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-300 mt-10 max-w-3xl leading-[1.8] text-center font-light"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 2, duration: 2, repeat: Infinity }}
              className="mt-16"
            >
              <div className="w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full shadow-[0_0_10px_#D4AF37]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Lineage Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-[90%] lg:w-[80%] p-8 md:p-12 m-auto my-[80px]"
      >
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("lineageSection.title")}
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[#D4AF37] to-transparent opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              key: "fullLineage",
              detail: "lineageDetail",
              delay: 0.1,
              darkTitle: false,
            },
            {
              key: "nicknameTitle",
              detail: "nicknameDetail",
              delay: 0.3,
              darkTitle: true,
            },
            {
              key: "birthTitle",
              detail: "birthDetail",
              delay: 0.5,
              darkTitle: false,
            },
          ].map((card, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "#D4AF37",
              }}
              transition={{ delay: card.delay, duration: 0.6 }}
              className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border-l-4 border-[#D4AF37]/50 shadow-xl transition-all duration-300 group cursor-default"
            >
              <h3
                className={`font-bold text-2xl mb-4 transition-colors ${card.darkTitle ? "text-white group-hover:text-[#D4AF37]" : "text-[#D4AF37]"}`}
              >
                {t(`lineageSection.${card.key}`)}
              </h3>
              <p className="text-xl leading-[1.8] text-gray-400 group-hover:text-gray-200 transition-colors italic">
                {t(`lineageSection.${card.detail}`)}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Islam And Marriage Section (Timeline) */}
      <section className="w-[90%] lg:w-[70%] m-auto my-[100px] relative px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          {t("islamAndMarriage.title")}
        </motion.h2>

        <div className="absolute right-[31px] md:right-1/2 top-[120px] bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent hidden md:block" />

        <div className="space-y-12">
          {[1, 2, 3, 4].map((step) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: step % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-8 relative ${step % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:border-[#D4AF37]/50 transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
                    {t(`islamAndMarriage.step${step}_title`)}
                  </h3>
                  <p className="text-xl leading-[1.8] text-gray-300 font-light">
                    {t(`islamAndMarriage.step${step}_desc`)}
                  </p>
                </motion.div>
              </div>

              {/* Step Circle - Removed Bold/Special Fonts */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  className="w-16 h-16 rounded-full bg-[#0a0a0a] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-2xl shadow-[0_0_15px_rgba(212,175,55,0.4)] font-sans"
                >
                  {step}
                </motion.div>
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-[95%] lg:w-[90%] m-auto my-[120px] px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            {t("paradiseSection.title")}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            className="h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full shadow-[0_0_20px_#D4AF37]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (item % 3) * 0.15, duration: 0.7 }}
              whileHover={{
                y: -12,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(212, 175, 55, 0.6)",
              }}
              className="relative p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] transition-all duration-500 group flex flex-col min-h-[350px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Card Badge - Removed Bold */}
              <div className="w-16 h-16 rounded-2xl border border-[#D4AF37]/30 bg-[#0a0a0a] flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-[#D4AF37] transition-colors">
                <span className="text-[#D4AF37] text-2xl relative z-10 font-sans">
                  {item}
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:10px_10px]"
                />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                {t(`paradiseSection.card${item}_title`)}
              </h3>

              <p className="text-lg lg:text-xl leading-[1.8] text-gray-400 font-light group-hover:text-gray-200 transition-colors duration-300 italic">
                {t(`paradiseSection.card${item}_desc`)}
              </p>

              <div className="mt-auto pt-8">
                <div className="w-12 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-transparent transition-all duration-700 rounded-full" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-[90%] lg:w-[80%] m-auto my-[120px] px-4"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative group p-1 md:p-2 rounded-[32px] md:rounded-[45px] bg-gradient-to-b from-[#D4AF37]/30 to-transparent shadow-2xl"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[28px] md:rounded-[40px] bg-[#0a0a0a] border border-white/10">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={t("video")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute -inset-1 bg-[#D4AF37]/5 blur-2xl rounded-[50px] -z-10 group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />
        </motion.div>
      </motion.section>

      {/* Tajer Al-Rahman Big Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/uthman/uthman-sadaka.png"
            alt="Tajer Al-Rahman"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-radial-gradient from-black/50 via-black/60 to-[#0a0a0a] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/70 z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 container mx-auto px-6 text-center max-w-5xl"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "fit-content" }}
            className="mx-auto overflow-hidden whitespace-nowrap border-b border-[#D4AF37]/50 mb-6"
          >
            <span className="text-[#D4AF37] text-sm md:text-lg tracking-[0.3em] font-medium uppercase px-4 pb-2 block">
              {t("tajerAlRahman.label")}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-extrabold text-white mb-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            {t("tajerAlRahman.title")}
          </h2>

          <p className="text-2xl md:text-4xl text-gray-100 leading-[2.2] md:leading-[2.4] font-light max-w-4xl mx-auto mb-16 drop-shadow-md italic">
            {t("tajerAlRahman.description")}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-black/40 backdrop-blur-md px-12 py-8 rounded-full border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <span className="text-[#D4AF37] text-3xl md:text-5xl font-serif">
              {t("tajerAlRahman.callout")}
            </span>
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full lg:w-[90%] m-auto my-[150px] px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* 1. The Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 aspect-[3/4] md:aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <figure className="w-full h-full relative">
              <Image
                src="/uthman/uthman-mushaf.jpg"
                alt="Uthman bin Affan Quran Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Elegant Figcaption Overlay */}
              <figcaption className="absolute bottom-6 right-6 z-20 text-white/60 text-sm md:text-base font-light tracking-wide bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                {t("quranCollection.figcaption")}
              </figcaption>

              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent z-10" />
            </figure>
          </motion.div>

          {/* 2. The Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-right"
          >
            <span className="text-[#D4AF37] font-sans tracking-[0.2em] text-sm md:text-base mb-4 block uppercase opacity-80">
              {t("quranCollection.label")}
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {t("quranCollection.title")}
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-[2.2] font-light mb-12 italic">
              {t("quranCollection.description")}
            </p>

            <motion.div
              whileHover={{ x: -10 }}
              className="border-r-4 border-[#D4AF37] pr-6 py-2"
            >
              <span className="text-[#D4AF37] text-2xl md:text-3xl font-serif">
                {t("quranCollection.callout")}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden py-20 px-6">
        {/* الخلفية - الصورة التي قمت بتوليدها */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/uthman/uthman-achivments.png"
            alt="Uthman Achievements Landscape"
            fill
            className="object-cover object-center"
            priority
          />
          {/* طبقات التدرج اللوني لضمان وضوح النص */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black/20 to-[#0a0a0a] z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* المحتوى النصي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 text-center max-w-4xl"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full shadow-[0_0_15px_#D4AF37]"
          />

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
            {t("sec-title")}
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 leading-[2] font-light italic drop-shadow-md">
            {t("sec-dec")}
          </p>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-24 text-center px-4"
      >
        {/* الخط العلوي المزخرف */}
        <div className="flex items-center gap-4 mb-6 mt-6 w-full max-w-2xl justify-center">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#D4AF37] opacity-40" />
          <span className="text-[#D4AF37] tracking-[0.4em] text-xs md:text-sm uppercase font-medium">
            {t("wars.secc-des")}
          </span>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#D4AF37] opacity-40" />
        </div>

        {/* العنوان الرئيسي */}
        <h2 className="text-5xl md:text-7xl font-bold text-white relative group">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            {t("wars.secc-title")}
          </span>

          {/* توهج خلفي خفيف (Glow) */}
          <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2 h-20 bg-[#D4AF37]/5 blur-[60px] rounded-full -z-10" />
        </h2>

        {/* الزخرفة السفلية */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "180px" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة الصورة - تأخذ مساحة أقل (4 أعمدة من 12) لتركيز الانتباه على النص */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/mashriq-a-fares.webp"
                alt={t("wars.list.0.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            {/* تسمية توضيحية للصورة */}
            <figcaption className="absolute bottom-6 right-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              تصور فني للمعارك التاريخية
            </figcaption>
          </motion.div>

          {/* 2. جهة النص - المساحة الأكبر (7 أعمدة من 12) مع تحسين العناوين */}
          <div className="lg:col-span-7 text-right">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            {/* العنوان الرئيسي الضخم */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.0.name")}
            </h2>

            {/* القصة والمقدمة بتباعد أسطر مريح */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.0.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة - تكبير العناوين الفرعية (Sub-titles) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.0.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.0.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة في شريط جانبي */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-white block text-base mb-1">
                    قيادة الجيش:
                  </strong>
                  {t("wars.list.0.content.leaders.0")} &{" "}
                  {t("wars.list.0.content.leaders.1")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة النصر
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.0.content.results")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* العنصر الثاني - Index 1 (Zig-Zag: النص يسار والصورة يمين) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة النص - الآن تأخذ الترتيب الأول في الموبايل والثاني في الشاشات الكبيرة */}
          <div className="lg:col-span-7 text-right lg:order-1">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            {/* العنوان الرئيسي الضخم */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.1.name")}
            </h2>

            {/* القصة والمقدمة */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.1.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.1.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.1.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الجيش:
                  </strong>
                  {t("wars.list.1.content.leaders.0")} &{" "}
                  {t("wars.list.1.content.leaders.1")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة النصر
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.1.content.results")}
                </p>
              </div>
            </div>
          </div>

          {/* 2. جهة الصورة - الآن تأخذ الترتيب الثاني في الموبايل والأول في الشاشات الكبيرة */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group lg:order-2"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/armenia.png" // تأكد من تغيير مسار الصورة للصورة الثانية
                alt={t("wars.list.1.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 left-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              فتوحات إفريقية والمغرب
            </figcaption>
          </motion.div>
        </div>
      </motion.div>

      {/* العنصر الثالث - Index 2 (Zig-Zag: الصورة يمين والنص يسار) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة الصورة - (العودة لليمين lg:col-span-5) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/tunis.png" // تأكد من تسمية الصورة المرفوعة بهذا الاسم
                alt={t("wars.list.2.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 right-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              جبال القوقاز وأسوار أرمينيا
            </figcaption>
          </motion.div>

          {/* 2. جهة النص - (المساحة الأكبر lg:col-span-7) */}
          <div className="lg:col-span-7 text-right">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            {/* العنوان الرئيسي الضخم */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.2.name")}
            </h2>

            {/* القصة والمقدمة */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.2.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة - العناوين الفرعية المكبرة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.2.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.2.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الجيش:
                  </strong>
                  {t("wars.list.2.content.leaders.0")} &{" "}
                  {t("wars.list.2.content.leaders.1")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة النصر
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.2.content.results")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* العنصر الرابع - Index 3 (Zig-Zag: النص يمين والصورة يسار) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة النص - (تأخذ الترتيب الأول في الشاشات الكبيرة lg:order-1) */}
          <div className="lg:col-span-7 text-right lg:order-1">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            {/* العنوان الرئيسي الضخم */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.3.name")}
            </h2>

            {/* القصة والمقدمة */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.3.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة - العناوين الفرعية المكبرة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.3.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.3.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الجيش:
                  </strong>
                  {t("wars.list.3.content.leaders.0")} &{" "}
                  {t("wars.list.3.content.leaders.1")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة النصر
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.3.content.results")}
                </p>
              </div>
            </div>
          </div>

          {/* 2. جهة الصورة - (تأخذ الترتيب الثاني lg:order-2 لتظهر على اليسار) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group lg:order-2"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/sea-war.png" // تأكد من استخدام هذا الاسم للصورة المولدة
                alt={t("wars.list.3.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 left-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              أسوار سبيطلة وفتوح إفريقية
            </figcaption>
          </motion.div>
        </div>
      </motion.div>

      {/* العنصر الخامس - Index 4 (Zig-Zag: الصورة يمين والنص يسار) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة الصورة - (العودة لليمين lg:col-span-5) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/sham.png" // تأكد من حفظ صورة السفن بهذا الاسم
                alt={t("wars.list.4.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 right-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              أول أسطول بحري في تاريخ الإسلام
            </figcaption>
          </motion.div>

          {/* 2. جهة النص - (المساحة الأكبر lg:col-span-7) */}
          <div className="lg:col-span-7 text-right">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                السيادة البحرية
              </span>
            </div>

            {/* العنوان الرئيسي الضخم */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.4.name")}
            </h2>

            {/* القصة والمقدمة */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.4.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة - تم تغيير الأيقونات لتناسب البحرية */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Ship className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.4.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.4.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الأسطول:
                  </strong>
                  {t("wars.list.4.content.leaders.0")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة النصر
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.4.content.results")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* العنصر السادس - Index 5 (Zig-Zag: النص يمين والصورة يسار) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة النص - (تأخذ الترتيب الأول في الشاشات الكبيرة lg:order-1) */}
          <div className="lg:col-span-7 text-right lg:order-1">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            {/* العنوان الرئيسي الضخم */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.5.name")}
            </h2>

            {/* القصة والمقدمة */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.5.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة - العناوين الفرعية المكبرة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.5.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.5.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الجيش:
                  </strong>
                  {t("wars.list.5.content.leaders.0")} &{" "}
                  {t("wars.list.3.content.leaders.1")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة النصر
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.5.content.results")}
                </p>
              </div>
            </div>
          </div>

          {/* 2. جهة الصورة - (تأخذ الترتيب الثاني lg:order-2 لتظهر على اليسار) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group lg:order-2"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/egypt.png" // تأكد من استخدام هذا الاسم للصورة المولدة
                alt={t("wars.list.3.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 left-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              أسوار سبيطلة وفتوح إفريقية
            </figcaption>
          </motion.div>
        </div>
      </motion.div>

      {/* العنصر السابع - Index 6 (Zig-Zag: النص يسار والصورة يمين) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة الصورة - (تظهر على اليمين في RTL لأنها تأخذ الترتيب الأول lg:order-1) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group lg:order-1"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/karman.png"
                alt={t("wars.list.6.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 right-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              مشهد من الفتوحات الإسلامية
            </figcaption>
          </motion.div>

          {/* 2. جهة النص - (تظهر على اليسار في RTL لأنها تأخذ الترتيب الثاني lg:order-2) */}
          <div className="lg:col-span-7 text-right lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.6.name")}
            </h2>

            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.6.content.introduction")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.6.content.causes")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.6.content.events")}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الجيش:
                  </strong>
                  {t("wars.list.6.content.leaders.0")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة النصر
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.6.content.results")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* العنصر الثامن - Index 7 (Zig-Zag: النص يمين والصورة يسار) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة النص - (تأخذ الترتيب الأول lg:order-1 لتظهر على اليمين) */}
          <div className="lg:col-span-7 text-right lg:order-1">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            {/* العنوان الرئيسي */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.7.name")}
            </h2>

            {/* القصة والمقدمة */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.7.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.7.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.7.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <CircleUser className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الحملة:
                  </strong>
                  {t("wars.list.7.content.leaders.0")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة الفتح
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.7.content.results")}
                </p>
              </div>
            </div>
          </div>

          {/* 2. جهة الصورة - (تظهر على اليسار في RTL لأنها تأخذ الترتيب الثاني lg:order-2) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group lg:order-2"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/khorasan.png"
                alt={t("wars.list.7.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 left-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              جبال القوقاز وفتوح أرمينية
            </figcaption>
          </motion.div>
        </div>
      </motion.div>

      {/* العنصر التاسع - Index 8 (Zig-Zag: الصورة يمين والنص يسار) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-[95rem] mx-auto my-32 px-6 lg:px-20"
        dir="rtl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* 1. جهة الصورة - (تأخذ الترتيب الأول lg:order-1 لتظهر على اليمين في نظام RTL) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-5 relative group lg:order-1"
          >
            <div className="relative aspect-video lg:aspect-[3/5] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/uthman/sajastan.png"
                alt={t("wars.list.8.name")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <figcaption className="absolute bottom-6 right-8 z-20 text-white/70 text-xs font-light tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
              سهول المشرق وفتوح خراسان
            </figcaption>
          </motion.div>

          {/* 2. جهة النص - (تأخذ الترتيب الثاني lg:order-2 لتظهر على اليسار في نظام RTL) */}
          <div className="lg:col-span-7 text-right lg:order-2">
            {/* التاج العلوي */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.4em] font-bold uppercase">
                فتوحات ذي النورين
              </span>
            </div>

            {/* العنوان الرئيسي */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.1] drop-shadow-2xl">
              {t("wars.list.8.name")}
            </h2>

            {/* القصة والمقدمة */}
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light italic border-r-4 border-[#D4AF37]/40 pr-8">
                {t("wars.list.8.content.introduction")}
              </p>
            </div>

            {/* تفاصيل المعركة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
              {/* الدوافع */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Sword className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    لماذا بدأت؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.8.content.causes")}
                </p>
              </div>

              {/* الأحداث */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Shield className="text-[#D4AF37] w-8 h-8" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    ماذا حدث؟
                  </h4>
                </div>
                <p className="text-xl text-gray-400 leading-relaxed font-light pr-4">
                  {t("wars.list.8.content.events")}
                </p>
              </div>
            </div>

            {/* القادة والنتيجة */}
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                  <Users className="text-[#D4AF37] w-7 h-7" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed text-right">
                  <strong className="text-white block text-base mb-1">
                    قيادة الجيش:
                  </strong>
                  {t("wars.list.8.content.leaders.0")}
                </p>
              </div>

              <div className="flex-grow md:flex-grow-0 py-4 px-8 bg-gradient-to-l from-[#D4AF37]/20 to-transparent rounded-2xl border-r-4 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.1)] text-right">
                <span className="text-[#D4AF37] text-xs font-bold block mb-1 uppercase tracking-widest">
                  خلاصة الفتح
                </span>
                <p className="text-white font-serif text-2xl italic tracking-wide">
                  {t("wars.list.8.content.results")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-24 text-center px-4"
      >
        {/* العنوان الرئيسي */}
        <h2 className="text-5xl md:text-7xl font-bold text-white relative group">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            {t("wars.seccc-title")}
          </span>

          {/* توهج خلفي خفيف (Glow) */}
          <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2 h-20 bg-[#D4AF37]/5 blur-[60px] rounded-full -z-10" />
        </h2>

        {/* الزخرفة السفلية */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "180px" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        />
      </motion.div>

      {/* قائمة الإنجازات - Achievements Vertical List */}
      <div
        className="flex flex-col items-center gap-12 px-4 lg:px-20 w-full mx-auto pb-32"
        dir="rtl"
      >
        {/* الإنجاز الأول: سياسة الاتباع */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="group relative p-10 rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden flex flex-col w-full lg:w-[70%]"
        >
          {/* الرقم - بدون تنسيق خط خاص */}
          <span className="absolute -top-4 -left-4 text-9xl text-white/[0.02] group-hover:text-[#D4AF37]/[0.05] transition-colors pointer-events-none">
            01
          </span>

          <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mb-8 shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform text-[#D4AF37]">
            <Settings className="w-8 h-8" />
          </div>

          <h3 className="relative z-10 text-3xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
            {t("achievements.0.name")}
          </h3>

          <p className="relative z-10 text-xl text-gray-400 leading-relaxed font-light mb-8">
            {t("achievements.0.content.description")}
          </p>

          <div className="relative z-10 mt-auto pt-8 border-t border-white/5">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block mb-2">
              الأثر الحضاري:
            </span>
            <p className="text-gray-300 italic leading-relaxed">
              {t("achievements.0.content.impact")}
            </p>
          </div>
        </motion.div>

        {/* الإنجاز الثاني: مجلس الشورى */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="group relative p-10 rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden flex flex-col w-full lg:w-[70%]"
        >
          <span className="absolute -top-4 -left-4 text-9xl text-white/[0.02] group-hover:text-[#D4AF37]/[0.05] transition-colors pointer-events-none">
            02
          </span>
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mb-8 text-[#D4AF37]">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-3xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
            {t("achievements.1.name")}
          </h3>
          <p className="relative z-10 text-xl text-gray-400 leading-relaxed font-light mb-6">
            {t("achievements.1.content.description")}
          </p>

          <div className="mb-8 p-6 bg-black/20 rounded-2xl border border-white/5 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                {" "}
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />{" "}
                {t("achievements.1.content.members.0")}{" "}
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />{" "}
                {t("achievements.1.content.members.1")}{" "}
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />{" "}
                {t("achievements.1.content.members.2")}{" "}
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />{" "}
                {t("achievements.1.content.members.3")}{" "}
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-8 border-t border-white/5">
            <span className="text-[#D4AF37] text-xs font-bold uppercase block mb-2">
              الأثر الحضاري:
            </span>
            <p className="text-gray-300 italic leading-relaxed">
              {t("achievements.1.content.impact")}
            </p>
          </div>
        </motion.div>

        {/* الإنجاز الثالث: النظام القضائي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="group relative p-10 rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden flex flex-col w-full lg:w-[70%]"
        >
          <span className="absolute -top-4 -left-4 text-9xl text-white/[0.02] group-hover:text-[#D4AF37]/[0.05] transition-colors pointer-events-none">
            03
          </span>
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mb-8 text-[#D4AF37]">
            <Scale className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-3xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
            {t("achievements.2.name")}
          </h3>
          <p className="relative z-10 text-xl text-gray-400 leading-relaxed font-light mb-8">
            {t("achievements.2.content.description")}
          </p>
          <div className="relative z-10 mt-auto pt-8 border-t border-white/5">
            <span className="text-[#D4AF37] text-xs font-bold uppercase block mb-2">
              الأثر الحضاري:
            </span>
            <p className="text-gray-300 italic leading-relaxed">
              {t("achievements.2.content.impact")}
            </p>
          </div>
        </motion.div>

        {/* الإنجاز الرابع: إدارة الولايات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="group relative p-10 rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden flex flex-col w-full lg:w-[70%]"
        >
          <span className="absolute -top-4 -left-4 text-9xl text-white/[0.02] group-hover:text-[#D4AF37]/[0.05] transition-colors pointer-events-none">
            04
          </span>
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mb-8 text-[#D4AF37]">
            <LayoutGrid className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-3xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
            {t("achievements.3.name")}
          </h3>
          <p className="relative z-10 text-xl text-gray-400 leading-relaxed font-light mb-8">
            {t("achievements.3.content.description")}
          </p>
          <div className="relative z-10 mt-auto pt-8 border-t border-white/5">
            <span className="text-[#D4AF37] text-xs font-bold uppercase block mb-2">
              الأثر الحضاري:
            </span>
            <p className="text-gray-300 italic leading-relaxed">
              {t("achievements.3.content.impact")}
            </p>
          </div>
        </motion.div>

        {/* الإنجاز الخامس: ضم الولايات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="group relative p-10 rounded-[40px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 overflow-hidden flex flex-col w-full lg:w-[70%]"
        >
          <span className="absolute -top-4 -left-4 text-9xl text-white/[0.02] group-hover:text-[#D4AF37]/[0.05] transition-colors pointer-events-none">
            05
          </span>
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mb-8 text-[#D4AF37]">
            <Layers className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-3xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors">
            {t("achievements.4.name")}
          </h3>
          <p className="relative z-10 text-xl text-gray-400 leading-relaxed font-light mb-8">
            {t("achievements.4.content.description")}
          </p>
          <div className="relative z-10 mt-auto pt-8 border-t border-white/5">
            <span className="text-[#D4AF37] text-xs font-bold uppercase block mb-2">
              الأثر الحضاري:
            </span>
            <p className="text-gray-300 italic leading-relaxed">
              {t("achievements.4.content.impact")}
            </p>
          </div>
        </motion.div>
      </div>

      {/* قسم الفتنة والشهادة - هيكلية المسار المتداخل */}
      <section
        className="w-full max-w-[95rem] mx-auto py-40 px-6 lg:px-20 bg-[#0a0a0a]"
        dir="rtl"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          {/* الجانب الأيمن: الصورة التعبيرية بإطار فني */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 group"
          >
            {/* هالة ضوئية خلف الصورة لتعزيز الثيم */}
            <div className="absolute -inset-4 bg-red-900/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />

            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[60px] border border-white/10 shadow-2xl">
              <img
                src="/uthman/death.png"
                alt="The Martyrdom Scene"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              {/* تدرج لوني خفيف فوق الصورة لدمجها مع الخلفية السوداء */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>

            {/* لمسة فنية: رقم القسم خلف الصورة */}
          </motion.div>

          {/* الجانب الأيسر: المحتوى النصي بتنسيق عمودي فخم */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <header className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-red-700" />
                <span className="text-red-700 tracking-[.3em] font-bold text-sm uppercase">
                  النهاية العظيمة
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white italic leading-tight">
                {t("fitna_and_martyrdom.title")}
              </h2>
            </header>

            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] border-r-4 border-[#D4AF37] pr-6">
                {t("fitna_and_martyrdom.events.1.name")}
              </h3>

              <p className="text-2xl md:text-3xl text-gray-300 leading-[1.8] font-light text-justify">
                {t("fitna_and_martyrdom.events.1.content.description")}
              </p>
            </div>

            {/* شبكة المعلومات الفرعية بتصميم مربعات أنيقة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              <div className="p-8 rounded-[30px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                <span className="text-red-600 text-lg font-bold block mb-3 uppercase italic">
                  اللحظات الأخيرة
                </span>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {t("fitna_and_martyrdom.events.1.content.final_moments")}
                </p>
              </div>

              <div className="p-8 rounded-[30px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors">
                <span className="text-[#D4AF37] text-lg font-bold block mb-3 uppercase italic">
                  أثر الثبات
                </span>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {t("fitna_and_martyrdom.events.1.content.legacy")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="w-full py-32 px-6 lg:px-20 bg-[#0a0a0a]" dir="rtl">
        <div className="max-w-[90rem] mx-auto">
          {/* عنوان القسم - نص مباشر */}
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white italic mb-6 leading-tight">
              المكتبة المرئية
            </h2>
            <div className="flex items-center justify-center gap-6">
              <div className="h-[1px] w-24 bg-red-900 opacity-40"></div>
              <p className="text-[#D4AF37] text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
                سيرة ذي النورين
              </p>
              <div className="h-[1px] w-24 bg-red-900 opacity-40"></div>
            </div>
          </div>

          {/* شبكة المشغلات (Iframes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* مشغل 1 */}
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/5 bg-[#111] shadow-2xl group hover:border-[#D4AF37]/40 transition-all duration-700">
              <iframe
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://www.youtube.com/embed/vSzr1V_Y5_U"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* مشغل 2 */}
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/5 bg-[#111] shadow-2xl group hover:border-[#D4AF37]/40 transition-all duration-700">
              <iframe
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://www.youtube.com/embed/3hkBYs8dZig"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* مشغل 3 */}
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/5 bg-[#111] shadow-2xl group hover:border-[#D4AF37]/40 transition-all duration-700">
              <iframe
                className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="https://www.youtube.com/embed/ktch93ysjqs"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* مشغل 4 - قائمة التشغيل */}
            <div className="relative aspect-video rounded-[40px] overflow-hidden border-2 border-[#D4AF37]/10 bg-[#111] shadow-[0_0_60px_rgba(212,175,55,0.05)] group hover:border-[#D4AF37]/60 transition-all duration-700">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PLATlJNRzYr-A-2FFrdl50N6shXQ_CFhsy"
                title="YouTube playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-32 px-6 lg:px-20 bg-[#0a0a0a]" dir="rtl">
        <div className="max-w-[85rem] mx-auto">
          {/* عنوان القسم */}
          <div className="mb-20 border-r-8 border-[#D4AF37] pr-6">
            <h2 className="text-5xl md:text-7xl font-black text-white italic leading-tight">
              المصادر والمراجع
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl mt-4 font-light italic">
              توثيق تاريخي من أمهات الكتب والمواقع الرسمية
            </p>
          </div>

          {/* شبكة الروابط */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* مصدر 1: الجزيرة */}
            <a
              href="https://www.aljazeera.net/encyclopedia/2023/3/5/%D8%B9%D8%AB%D9%85%D8%A7%D9%86-%D8%A8%D9%86-%D8%B9%D9%81%D8%A7%D9%86-%D8%AB%D8%A7%D9%84%D8%AB-%D8%A7%D9%84%D8%AE%D9%84%D9%81%D8%A7%D8%A1-%D8%A7%D9%84%D8%B1%D8%A7%D8%B4%D8%AF%D9%8A%D9%86"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] p-8 rounded-[30px] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col gap-4"
            >
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">
                موسوعة الجزيرة
              </span>
              <h3 className="text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                عثمان بن عفان.. ثالث الخلفاء الراشدين
              </h3>
              <div className="mt-auto flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-[#D4AF37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </div>
            </a>

            {/* مصدر 2: ويكيبيديا */}
            <a
              href="https://ar.wikipedia.org/wiki/%D8%B9%D8%AB%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B9%D9%81%D8%A7%D9%86"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] p-8 rounded-[30px] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col gap-4"
            >
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">
                ويكيبيديا العربية
              </span>
              <h3 className="text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                سيرة ذي النورين الكاملة والفتوحات
              </h3>
              <div className="mt-auto flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-[#D4AF37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </div>
            </a>

            {/* مصدر 3: إسلام ويب */}
            <a
              href="https://www.islamweb.net/ar/library/content/60/6486/%D8%AA%D8%B1%D8%AC%D9%85%D8%A9-%D8%B0%D9%8I-%D8%A7%D9%84%D9%86%D9%88%D8%B1%D9%8A%D9%86-%D8%B9%D8%AB%D9%85%D8%A7%D9%86-%D9%88%D9%85%D9%86%D8%A7%D9%82%D8%A8%D9%87"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] p-8 rounded-[30px] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col gap-4"
            >
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">
                إسلام ويب - المكتبة الإسلامية
              </span>
              <h3 className="text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                ترجمة ذي النورين عثمان ومناقبه
              </h3>
              <div className="mt-auto flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-[#D4AF37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </div>
            </a>

            {/* مصدر 4: الأوقاف المصرية */}
            <a
              href="https://awkafonline.gov.eg/content-sections/131/3464/%D8%B9%D8%AB%D9%85%D8%A7%D9%86-%D8%A8%D9%86-%D8%B9%D9%81%D8%A7%D9%86"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] p-8 rounded-[30px] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col gap-4"
            >
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">
                وزارة الأوقاف
              </span>
              <h3 className="text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                عثمان بن عفان.. رائد السخاء والحياء
              </h3>
              <div className="mt-auto flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-[#D4AF37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </div>
            </a>

            {/* مصدر إضافي 5: الدرر السنية */}
            <a
              href="https://dorar.net/history/serah/24"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] p-8 rounded-[30px] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col gap-4"
            >
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">
                موسوعة الدرر السنية
              </span>
              <h3 className="text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                خلافة عثمان بن عفان رضي الله عنه
              </h3>
              <div className="mt-auto flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-[#D4AF37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </div>
            </a>

            {/* مصدر إضافي 6: قصة الإسلام */}
            <a
              href="https://islamstory.com/ar/artical/20042"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111] p-8 rounded-[30px] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col gap-4"
            >
              <span className="text-[#D4AF37] text-sm font-bold tracking-widest">
                قصة الإسلام
              </span>
              <h3 className="text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors">
                عثمان بن عفان.. ذو النورين
              </h3>
              <div className="mt-auto flex justify-end">
                <svg
                  className="w-6 h-6 text-gray-600 group-hover:text-[#D4AF37] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
