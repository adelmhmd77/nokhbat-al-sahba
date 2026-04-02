"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export default function UthmanIbnAffan() {
  const t = useTranslations("uthmanBinAffan");

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
        className="relative bg-[url('/uthman-hero.png')] bg-cover bg-center h-screen w-full"
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
            { key: "fullLineage", detail: "lineageDetail", delay: 0.1, darkTitle: false },
            { key: "nicknameTitle", detail: "nicknameDetail", delay: 0.3, darkTitle: true },
            { key: "birthTitle", detail: "birthDetail", delay: 0.5, darkTitle: false },
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
              <h3 className={`font-bold text-2xl mb-4 transition-colors ${card.darkTitle ? "text-white group-hover:text-[#D4AF37]" : "text-[#D4AF37]"}`}>
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
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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
            src="/uthman-sadaka.png"
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
    </div>
  );
}