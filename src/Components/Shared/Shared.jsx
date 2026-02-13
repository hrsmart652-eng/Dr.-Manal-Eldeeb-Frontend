import React from 'react';
import { Search } from 'lucide-react';
import bg from '../../assets/bg.jpg';

const Shared = ({ title }) => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="absolute inset-0 bg-gray-600/40 backdrop-grayscale-[0.4]"></div>
      <div className="relative z-10 w-[90%] md:w-[880px] p-8 md:p-12 rounded-2xl 
                      bg-[#CE9F2B80] 
                      border border-white/30 shadow-2xl backdrop-blur-md
                      flex flex-col items-center justify-center text-center">
        
        <p className="text-[#F5F7FA] font-bold text-lg md:text-2xl mb-8 leading-relaxed">
          {title || "أقوى الكورسات التدريبية نقدمها لك من قبل متخصصين عالميين عبر منصة قادة التغيير بإدارة الدكتورة منال الديب."}
        </p>

        <div className="w-full md:w-[600px] mx-auto relative">
          <input
            type="text"
            placeholder="البحث"
            className="w-full pr-12 pl-4 py-3 text-right bg-[#F5F7FA] border border-[#87A1BD] rounded-lg outline-none focus:ring-2 focus:ring-[#CE9F2B]"
          />
          <Search
            size={24}
            className="absolute left-10 top-1/2 -translate-y-1/2 text-[#87A1BD]"
          />
        </div>
      </div>
    </div>
  );
};

export default Shared;