import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import backgroud from "../../assets/Component 14.png";
import Work from "../Work/Work";

const Ad = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 px-4" dir="rtl">
      <h2 className="text-[#212121] font-bold text-[38px] mb-2 text-right">
        إعلانات و أخبار
      </h2>
      <p className="text-[#6B7280] font-bold text-right mb-8">
        كل جديد بانتظارك هنا — فعاليات، فرص، وإعلانات مهمة أول بأول!
      </p>

      
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={backgroud}
          alt="إعلان"
          className="w-full h-full object-cover"
        />

       
        <div className="absolute inset-0 flex flex-col items-start mt-16 px-12 text-right">
          <div className="flex flex-col items-center max-w-fit">
            <div className="w-full mb-6">
              <h3 className="text-[#F0EBE5] font-bold text-[36px] mb-2">
                ورشة استراتيجيات القيادة – 12 أيلول
              </h3>
              <h3 className="text-[#F0EBE5] font-semibold text-[42px] leading-tight">
                “ محاضرة مجانية بعنوان “تطوير المهارات”
              </h3>
            </div>

           
            <button className="flex flex-row items-center justify-between gap-8 mt-20 bg-[#CE9F2B] text-black font-bold px-10 py-4 rounded-lg min-w-[360px] hover:scale-105 transition-transform">
              <span>سجل الان</span>
              <ChevronLeft className="w-6 h-6 stroke-[4]" />
            </button>
          </div>
        </div>
      </div>

   
      <div className="mt-12 flex justify-start gap-8 items-center pr-2">
        <button className="p-4 bg-[#CE9F2B] text-black rounded-2xl hover:bg-[#b88e26] transition-all shadow-md">
          <ChevronRight size={35} strokeWidth={3} />
        </button>
        <button className="p-4 bg-transparent text-[#6B7280] border-2 border-[#6B7280] rounded-2xl hover:bg-gray-50 transition-all">
          <ChevronLeft size={35} strokeWidth={3} />
        </button>
      </div>

      <Work />
    </div>
  );
};

export default Ad;