import React from 'react';
import { ChevronLeft } from 'lucide-react';

const CustomButton = ({ text, type = "primary", onClick }) => {
  const isPrimary = type === "primary";

  return (
    <button 
      onClick={onClick}
      className={`flex flex-row-reverse items-center justify-between gap-8 px-8 py-3 rounded-md transition-transform active:scale-95 
        ${isPrimary 
          ? "bg-[#CE9F2B] text-black min-w-[330px]" 
          : "bg-transparent text-[#6B7280] border border-[#6B7280] min-w-[240px]"
        }`}
    >
      <span className="font-bold">{text}</span>
      <ChevronLeft className="w-5 h-5 stroke-[4]" />
    </button>
  );
};

export default CustomButton;