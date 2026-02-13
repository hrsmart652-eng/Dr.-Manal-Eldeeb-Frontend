import React from 'react';
import { useParams } from 'react-router-dom';
import { booksData } from '../Library/booksData';
import { Download,ChevronLeft, Star } from 'lucide-react';
import BooksGrid from '../Library/BooksGrid';
import Arrow from '../Course/Arrow';

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((item) => item.id === parseInt(id));
  const reviews = [
    { id: 1, name: "ناصر محمد 32 سنة:", rating: 5, comment: "كتاب غير حياتي، ساعدني أفكر بإيجابية وأواجه الصعوبات بثقة أكبر. أنصح به لكل شخص يبحث عن تطوير ذاته." },
    { id: 2, name: "سارة 32 سنة:", rating: 4, comment: "الكتاب مليء بالأفكار الملهمة، لكن تمنيت وجود أمثلة عملية أكثر. مع ذلك استفدت كثيرًا من النصائح." },
    { id: 3, name: "محمد 26 سنة:", rating: 5, comment:" افضل كتاب قرأته في مجال التفكير الإيجابي. أشعر أنه أضاء لي الطريق لتحقيق أهدافي"},
  ];

  if (!book) {
    return <div className="text-center py-20 text-2xl">عذراً، الكتاب غير موجود!</div>;
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-10" dir="rtl">
<div className="flex flex-col lg:flex-row gap-24 items-stretch mb-20">
  <div className="w-full lg:w-[540px] min-h-[600px] flex flex-col items-center justify-center bg-gradient-to-b from-[#CE9F2BCC] from-[40%] to-white to-[60%] p-8 rounded-2xl shadow-md border border-gray-100">
    <div className="w-full flex justify-center mb-8">
      <img 
        src={book.cover} 
        alt={book.title} 
        className="w-full max-w-[280px] object-contain drop-shadow-2xl" 
      />
    </div>
    <h3 className="font-bold text-[28px] text-[#2B416A] text-center leading-tight">
      {book.title}
    </h3>
  </div>
  <div className="flex-1 flex flex-col justify-between text-right py-4">
    <div>
      <h1 className="text-[#2B416A] text-[45px] font-bold mb-8 leading-tight">{book.title}</h1>
      <div className="space-y-6 text-[32px]">
        <p className="text-[#2B416A] font-bold">المؤلف: <span>د. منال الديب</span></p>
        <p className="text-[#2B416A] font-bold">سنة النشر: <span>2000</span></p>
        <p className="text-[#2B416A] font-bold">عدد الصفحات: <span>200 صفحة</span></p>
        <p className="text-[#2B416A] font-bold">التصنيف: <span>تنمية بشرية</span></p>
        <p className="text-[#2B416A] font-bold">الصيغة: <span>PDF</span></p>
      </div>
    </div>
    <div className="flex flex-row gap-6 mt-12">
      <a 
        href={book.downloadLink} 
        download={`${book.title}.pdf`}
        className="flex-1 flex items-center justify-between bg-[#CE9F2B] text-black px-8 py-3 rounded-2xl font-black text-xl hover:bg-[#b88e26] transition-all shadow-lg"
      >
        <span>تحميل الكتاب</span>
        <Download size={26} strokeWidth={3}/>
      </a>

      <button className="flex-1 flex items-center justify-between border-2 border-[#6B7280] text-[#6B7280] px-8 py-3 rounded-2xl font-bold text-xl hover:bg-[#CE9F2B] hover:text-white transition-all">
        <span>معاينة مجانية</span>
        <ChevronLeft size={26} strokeWidth={4}/>
      </button>
    </div>
  </div>
</div>
      <div className="mb-20 text-right">
        <h3 className='text-[#CE9F2B] text-[28px] font-bold mb-4'>نبذة عن الكتاب:</h3>
        <p className="text-[#212121] font-bold text-lg leading-relaxed">
         يأخذك هذا الكتاب في رحلة لاكتشاف قوة التفكير الإيجابي، ويقدم استراتيجيات عملية لتطوير ذاتك وتحقيق أهدافك.
        </p>
      </div>
      <div className="mb-20">
        <h3 className='text-center text-[#2B416A] text-[32px] font-bold mb-10'>مراجعة القرّاء</h3>
        <div className="space-y-6">
          {reviews.map((rev) => (
            <div key={rev.id} className=" p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#2B416A] font-bold text-xl">{rev.name}</span>
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#E53935" color="#E53935" />
                  ))}
                </div>
              </div>
              <p className="text-[#212121] font-bold text-right">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32">
        <h2 className='text-[#2B416A] text-[32px] font-bold text-right mb-10'>قد يعجبك أيضاً</h2>
        <BooksGrid />
        <div className="mt-10">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;