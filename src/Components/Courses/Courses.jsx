import React from 'react'
import { ChevronRight } from "lucide-react";
import finger from "../../assets/Finger Pointing Right.png"
import Library from '../Library/Library';
import dr from '../../assets/Frame 6 (2).png'

const doctorsData = [
  {
    id: 1,
    name: "الدكتور عمار الحسيني",
    description: "خبيرة برمجة عصبية سلوكية مع خبرة 10 سنوات في التدريب والتطوير الشخصي.",
    sessionDuration: "60 دقيقة",
    price: "500 ",
    img: dr
  },
  {
    id: 2,
    name: "الدكتور عمار الحسيني",
    description: "أخصائي تطوير ذاتي وتقويم سلوكي، يساعدك على تحقيق أهدافك المهنية.",
    sessionDuration: "45 دقيقة",
    price: "400 ",
    img: dr
  },
  {
    id: 3,
    name: "الدكتور عمار الحسيني",
    description: "مدربة معتمدة في البرمجة العصبية وتقنيات التفكير الإيجابي.",
    sessionDuration: "50 دقيقة",
    price: "450 ",
    img: dr
  },
]

const Courses = () => {
  return (
    <div className="w-full px-6 py-10" dir="rtl">
        {/* Header */}
        <h2 className="text-[#212121] text-[40px] font-bold mt-10 text-right">
          الكورسات المميزة عبر موقعنا
        </h2>
        <p className="text-[#6B7280] mt-2 font-bold text-right">
          أبرز الكورسات التي يتم تقديمها عبر موقع القادة من قبل نخبة من أطباء البرمجة العصبية والتقويم السلوكي
        </p>

        {/* Cards Container - التعديل هنا لتوسيط الـ 3 كروت في النص */}
        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {doctorsData.map((doctor) => (
            <div 
              key={doctor.id} 
              className="bg-[#F0F2ED] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-full sm:w-[320px] border border-gray-100"
            >
              {/* الصورة مربعة في النص */}
              <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* المحتوى في النص */}
              <h3 className="font-bold text-xl text-[#2B416A] mb-3">{doctor.name}</h3>
              <p className="text-[#2B416A] text-sm mb-4 leading-relaxed line-clamp-2">
                {doctor.description}
              </p>

              <div className="space-y-1 mb-6">
                <p className="text-[#2B416A] font-bold">مدة الجلسة: {doctor.sessionDuration}</p>
                <p className="text-[#2B416A] font-bold">سعر الجلسة: {doctor.price} $</p>
              </div>

              {/* زر حجز الموعد - الكلمة يمين والسهم شمال وعرض أكبر */}
              <button className="mt-auto w-full flex items-center justify-between bg-[#CE9F2B] text-[#2B416A] font-bold px-6 py-3 rounded-lg hover:bg-[#b88e26] transition-all shadow-md">
                <span>احجز موعدا</span>
                <ChevronRight size={35} className="rotate-180 font-bold" /> 
                {/* ملحوظة: عملت rotate-180 للسهم عشان يشاور شمال في الـ RTL */}
              </button>
            </div>
          ))}
        </div>

        {/* عرض المزيد */}
        <div className="flex flex-row items-center justify-start gap-4 mt-12 pr-4">
          <img src={finger} alt="أيقونة" className="w-14" />
          <h2 className="text-[#CE9F2B] font-bold text-[18px] cursor-pointer hover:underline">
            عرض المزيد من الكورسات
          </h2>
        </div>

        <Library />
    </div>
  )
}

export default Courses