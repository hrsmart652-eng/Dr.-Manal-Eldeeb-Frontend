import React from 'react'
import BooksGrid from './BooksGrid'

const Library = () => {
  return (
    <div className="w-full mx-auto py-10 px-6" dir="rtl">
      <div className="text-right mb-16">
        <h2 className="text-[#212121] text-[45px] font-bold">مكتبة د.إبراهيم الفقي</h2>
        <p className="text-[#6B7280] font-bold mt-4 text-lg">
          في هذا القسم سيتم عرض كتب الدكتور إبراهيم الفقي والتي رافقته خلال مسيرته العلمية لفترة 25 عاماً
        </p>
      </div>
      <BooksGrid />
    </div>
  )
}

export default Library