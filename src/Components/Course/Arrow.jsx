import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Arrow = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mt-20" dir="ltr">
        <button 
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="p-3 rounded border border-[#6B7280] text-[#6B7280] transition disabled:opacity-30"
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        <div className="flex items-center gap-3">
          {[1, 2, 3].map(num => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-12 h-14 rounded font-bold transition-all text-[20px] ${
                currentPage === num 
                ? "bg-[#CE9F2B] text-black shadow-lg scale-110"
                : "bg-transparent border border-[#6B7280] text-[#6B7280] hover:text-[#CE9F2B]" 
              }`}
            >
              {num}
            </button>
          ))}
          <span className="text-[#6B7280] font-bold text-xl px-1">...</span>
        </div>
        <button 
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="p-3 rounded bg-[#CE9F2B] text-black transition disabled:opacity-30"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}

export default Arrow;