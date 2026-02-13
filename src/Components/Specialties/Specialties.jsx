import React from "react";
import family from "../../assets/Happy family out on a walk.png";
import planning from "../../assets/Young woman planning her workday.png";
import sec from "../../assets/Woman deleting documents with shredder.png";
import cot from "../../assets/People at business analysis and consulting.png";
import sin from "../../assets/stock market chart.png";
import think from "../../assets/Businessman in glasses thinking about statistics.png";
import prog from "../../assets/Prompt-driven generative artificial intelligence for work.png";
import finger from "../../assets/Finger Pointing Right.png";
import Ad from "../Ad/Ad";

const Specialties = () => {
  const items = [
    { title: "إرشاد أسري", img: family },
    { title: " التخطيط", img: planning },
    { title: "السكرتارية", img: sec },
    { title: "الكوتشينج", img: cot },
    { title: "العلوم التسويقية", img: sin },
    { title: "التفكير المتقدم", img: think },
    { title: "البرمجة العصبية", img: prog },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto mt-20 px-6" dir="rtl">
        <h2 className="text-[#2F5EA0] text-center font-bold text-[40px] mb-12">
          تخصصات الكلية
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full sm:w-[calc(50%-40px)] md:w-[calc(25%-40px)] h-[140px] bg-[#E6ECEF] border border-[#E6738E] rounded-xl shadow-md flex items-center justify-center text-center mb-10"
            >
              <h3 className="text-[#2B416A] font-bold text-[18px]">
                {item.title}
              </h3>
              <img
                src={item.img}
                alt={item.title}
                className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[120px]"
              />
            </div>
          ))}
        </div>

<div className="flex items-center gap-4 mt-16 w-full justify-start">
  <img src={finger} alt="أيقونة" className="w-14" />
  <h2 className="text-[#CE9F2B] font-bold text-[18px] cursor-pointer">
    عرض باقي التخصصات
  </h2>
</div>
</div>
      <Ad />
    </>
  );
};

export default Specialties;