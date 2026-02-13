import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';
const Arr = () => {
  return (
    <div>
        
           <div className="mt-12 flex justify-start gap-8 items-center pr-2">
                <button className="p-4 bg-[#CE9F2B] text-black rounded-2xl hover:bg-[#b88e26] transition-all shadow-md">
                  <ChevronRight size={35} strokeWidth={3} />
                </button>
                <button className="p-4 bg-transparent text-[#6B7280] border-2 border-[#6B7280] rounded-2xl hover:bg-gray-50 transition-all">
                  <ChevronLeft size={35} strokeWidth={3} />
                </button>
              </div>
    </div>
  )
}

export default Arr