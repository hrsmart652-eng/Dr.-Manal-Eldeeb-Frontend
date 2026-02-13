import React from 'react'
import Shared from '../Shared/Shared'
import BooksGrid from '../Library/BooksGrid'
import { ChevronDown } from 'lucide-react'
import Arrow from '../Course/Arrow'

const Books = () => {
  return (
    <div className="pb-20">
      <Shared />
      <div className="flex flex-row-reverse items-center justify-center gap-6 md:gap-10 mt-12 px-6">
        <h3 className="font-bold text-[28px] text-[#CE9F2B]">البحث حسب</h3>
        {["نوع الكتاب", "عنوان الكتاب "].map((item) => (
          <div key={item} className="flex flex-row-reverse items-center font-bold gap-2 cursor-pointer group border border-[#6B7280] rounded-xl py-2 px-6 bg-transparent shadow-sm hover:border-[#CE9F2B] transition-all">
            <p className="text-[#2B416A] font-bold text-[18px]">{item}</p>
            <ChevronDown size={20} className="text-[#87A1BD]" strokeWidth={4}/>
          </div>
        ))}
      </div>

      
     <div className="max-w-[1200px] mx-auto mt-16 px-6 flex flex-col gap-16"> 
  <h2 className='text-center text-[32px] text-[#2B416A] font-bold m-10'>كتب علم النفس</h2>
  <BooksGrid />
  <BooksGrid />
</div>
      <Arrow />

  <div className="max-w-[1200px] mx-auto mt-16 px-6 flex flex-col gap-16"> 
  <h2 className='text-center text-[32px] text-[#2B416A] font-bold m-10'>كتب برمجة الأعصاب</h2>
  <BooksGrid />
  <BooksGrid />
</div>
      <Arrow />
    </div>
  )
}

export default Books