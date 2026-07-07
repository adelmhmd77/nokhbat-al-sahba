'use strict';

import React from 'react';
import Link from 'next/link';

// افترضت هنا وجود مكون التتبع المضيء اللي بنستخدمه للكروت
// لو اسمه مختلف عندك (زي TrackedCard) غير الاسم علطول
function TrackedCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-8 rounded-3xl border border-white/[0.05] bg-zinc-900/10 backdrop-blur-md transition-all duration-500 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export default function AbuUbaidahEpicPage() {
  // هنا دالة الترجمة t الخاصة بمشروعك (تأكد من ربطها بـ "abu_ubaidah_story")
  // سأحاكي الاستدعاء المباشر لتبسيط الكود وتجهيزه لك
  const t = (key: string) => {
    // هذه دالة افتراضية، استخدم دالة useTranslations أو custom hook اللي عندك في المشروع
    return key; 
  };

  return (
    <main className="relative min-h-screen bg-[#060608] text-white overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* 🌌 الخلفية الملحمية والنيون الشفاف */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[130px]" />
      </div>

      {/* 🎬 الهيدر الرئيسي والمقدمة (Intro Section) */}
      <section className="relative pt-40 pb-20 px-6 z-20 max-w-5xl mx-auto text-center space-y-8">
        <span className="text-xs font-mono text-cyan-400 font-bold tracking-[0.3em] uppercase block animate-pulse">
          TRUSTEE OF THIS UMMAH // أمين الأمة
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-tufuli tracking-tight text-white leading-tight">
          أبو عبيدة عامر بن الجراح
        </h1>
        <p className="text-xl sm:text-2xl font-mono text-zinc-400 max-w-3xl mx-auto italic">
          "القامة التي انحنت متواضعة وعزّت بها رايات الإسلام"
        </p>
        <p className="text-2xl font-amiri text-zinc-300 leading-[2.2] max-w-4xl mx-auto text-justify md:text-center pt-6 border-t border-white/[0.05]">
          لم يكن مجرد قائد عسكري هز عروش القياصرة، بل كان تجسيداً حياً للأمانة والزهد الكوني. الرجل الذي اشتاقت له الجنة، وفرّ من بريق السلطة والمال ليظل جندياً مخلصاً تحت راية التوحيد.
        </p>
      </section>

      {/* 🎬 الفصل 1 & 2: النشأة وقصة اللقب (الكروت المتفرقة العشوائية) */}
      <section className="relative py-20 px-6 z-20 max-w-7xl mx-auto space-y-24">
        
        {/* عنوان السيكشن الفرعي */}
        <div className="space-y-4 text-center md:text-right border-r-2 border-cyan-500/30 pr-6 max-w-2xl">
          <span className="text-xs font-mono text-cyan-400 font-bold block uppercase tracking-[0.2em]">
            ORIGINS & THE TITLES // الجذور واللقب الخالد
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-tufuli text-white">
            من طهارة مكة إلى صك النبوة الأسطوري
          </h2>
        </div>

        {/* شبكة الكروت المتفرقة العشوائية */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* كارت 1: النسب والنشأة */}
          <TrackedCard className="md:col-span-5 flex flex-col justify-between hover:border-cyan-500/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-tufuli text-white">
                النسب والنشأة.. طهارة الفطرة
              </h3>
              <p className="text-2xl font-amiri text-zinc-300 leading-[2.4] text-justify">
                هو عامر بن عبد الله بن الجراح الفهري القرشي، وُلِد في مكة ونشأ بها في بيت شرف وأدب. تميز منذ شبابه الباكر برزانة العقل، وحسن السمت، والهدوء الشديد الذي كان يخفي وراءه شجاعة فولاذية لا تتزلزل.
              </p>
            </div>
          </TrackedCard>

          {/* كارت 2: السابقين للإسلام */}
          <TrackedCard className="md:col-span-7 border-l-blue-500/20 bg-gradient-to-bl from-blue-950/5 via-transparent to-transparent flex items-center">
            <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic">
              عندما أشرق نور الإسلام في مكة، كان أبو عبيدة من الرعيل الأول وسابق السباقين؛ إذ أسلم على يد أبي بكر الصديق في الأيام الأولى للدعوة (قبل أن يدخل النبي ﷺ دار الأرقم بن أبي الأرقم)، فكان أحد الخمسة الذين أسلموا في يوم واحد ليعلنوا ميلاد جيل قرآني فريد.
            </p>
          </TrackedCard>

          {/* كارت 3: قصة لقب أمين الأمة (ضخم وعريض) */}
          <TrackedCard className="md:col-span-12 hover:border-cyan-500/30 bg-gradient-to-r from-cyan-950/5 via-transparent to-transparent">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 space-y-4">
                <div className="inline-block px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-sm font-mono rounded-md">
                  THE PROPHETIC CERTIFICATE // صك النبوة
                </div>
                <h3 className="text-2xl md:text-4xl font-bold font-tufuli text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  أمين هذه الأمة
                </h3>
              </div>
              <div className="md:col-span-8 space-y-4">
                <p className="text-2xl font-amiri text-zinc-200 leading-[2.4] text-justify">
                  جاء وفدُ نجران إلى النبي ﷺ وطلبوا منه أن يبعث معهم رجلاً أميناً يعلمهم الإسلام ويقضي بينهم، فقال النبي ﷺ كلمته الأسطورية التي زلزلت قلوب الصحابة تمنياً لها: "لأبعثنّ معكم رجلاً أميناً، حقّ أمين, حقّ أمين!".
                </p>
                <p className="text-2xl font-amiri text-zinc-400 leading-[2.4] text-justify italic border-t border-white/[0.03] pt-4">
                  يروي عمر بن الخطاب أنه ما أحب الإمارة قط ولا تطلع إليها إلا في ذلك اليوم، رجاء أن يكون هو الموصوف بالأمانة المطلقة. فلما صلى النبي ﷺ الظهر، جعل يتصفح الوجوه، ثم نادى: "قم يا أبا عبيدة بن الجراح". فأخذه بيده وقال: "لكل أمة أمين، وأمين هذه الأمة أبو عبيدة".
                </p>
              </div>
            </div>
          </TrackedCard>

        </div>
      </section>

    </main>
  );
}