'use client';

import ThreeDPortal from './ThreeDPortal';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8">
      
      <h1 className="text-4xl md:text-6xl text-amber-500 font-bold mb-16 text-center font-arabic">
        نخبة الصحابة
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* دلوقتي الـ name والـ image هيشتغلوا بدون أخطاء */}
        <ThreeDPortal 
          name="سيدنا أبو بكر الصديق" 
          image="/abubakr.jpg" 
        />
      </div>

      <p className="mt-16 text-neutral-600 text-sm font-arabic">
        مشروع العشرة المبشرين بالجنة - لله عز وجل
      </p>
    </main>
  );
}