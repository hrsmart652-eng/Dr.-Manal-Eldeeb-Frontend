import React from 'react';
import { useLocation } from 'react-router-dom';
import visa from '../../assets/download 1.png';
import EXP from '../../assets/am_amex_06 1.png';
import P from '../../assets/Group 307.png';
import finger from "../../assets/Finger Pointing Right.png";
import courseImage1 from '../../assets/Component 14.png';
import courseImage2 from '../../assets/Component 14.png';
import courseImage3 from '../../assets/Component 14.png';

const promoCourses = [
  {
    id: 1,
    image: courseImage1,
    discount: '10%',
    title: 'كورس القيادة الفعالة',
    subtitle: 'أوقات تناسب الطلاب',
    description: 'بخصم يتناسب مع الجميع',
  },
  {
    id: 2,
    image: courseImage2,
    discount: '15%',
    title: 'كورس تطوير الذات',
    subtitle: 'أوقات تناسب الطلاب ',
    description: 'بخصم يتناسب مع الجميع',
  },
  {
    id: 3,
    image: courseImage3,
    discount: '20%',
    title: 'كورس مهارات التواصل',
    subtitle: 'أوقات تناسب الطلاب ',
    description: 'بخصم يتناسب مع الجميع',
  },
];
const Payment = () => {
  const location = useLocation();
  const { course } = location.state || {}; 
  const priceNumber = parseInt(course?.price) || 0;
  const discountRate = 0; 
  const discountAmount = priceNumber * discountRate;
  const finalPrice = priceNumber - discountAmount;

  if (!course) return <div className="text-center py-20">برجاء اختيار كورس أولاً</div>;

  return (
    <div className="min-h-screen py-12 px-6 md:px-20" dir="rtl">
      <h2 className='text-[#2B416A] text-[40px] font-bold mb-10'>عملية الدفع</h2>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:flex-1 bg-[#E6ECEF] p-8 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex gap-20 mt-8 justify-center">
             <img src={visa} alt="visa" className="h-20 object-contain" />
             <img src={EXP} alt="express" className="h-20 object-contain" />
             <img src={P} alt="paypal" className="h-20 object-contain" />
           </div>
           <div className="mt-12 w-full max-w-2xl mx-auto">
  <form className="space-y-6" dir="rtl">
    <div className="flex flex-col gap-2">
      <label className="text-[#6B7280] text-lg">الاسم على البطاقة</label>
      <input 
        type="text" 
        className="w-full p-4 rounded-xl border border-[#6B7280] bg-[#F0EBE5] focus:outline-none focus:ring-2 focus:ring-[#CE9F2B] transition-all"
        placeholder="" 
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-[#6B7280] text-lg">رقم البطاقة</label>
      <input 
        type="text" 
        className="w-full p-4 rounded-xl border border-[#6B7280] bg-[#F0EBE5] focus:outline-none focus:ring-2 focus:ring-[#CE9F2B] transition-all"
        placeholder=""
      />
    </div>

    <div className="flex flex-row gap-6">
      <div className="flex-1 flex flex-col gap-2">
        <label className="text-[#6B7280] text-lg">تاريخ نهاية البطاقة</label>
        <input 
          type="text" 
          className="w-full p-4 rounded-xl border border-[#6B7280] bg-[#F0EBE5] focus:outline-none focus:ring-2 focus:ring-[#CE9F2B] transition-all text-center"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <label className="text-[#6B7280] text-lg">رقم CVC</label>
        <input 
          type="text" 
          className="w-full p-4 rounded-xl border border-[#6B7280] bg-[#F0EBE5] focus:outline-none focus:ring-2 focus:ring-[#CE9F2B] transition-all text-center"
        />
      </div>
    </div>

    <div className="flex items-center gap-3 mt-8">
<input 
  type="checkbox" 
  id="save-info"
  className="
    w-8 h-8 cursor-pointer 
    appearance-none
    rounded-md 
    border-2 border-[#6B7280] 
    bg-[#F0EBE5]
    checked:bg-[#2B416A]
    relative transition-all
    before:content-[''] 
    before:absolute 
    before:left-1/2 before:top-[45%]
    before:w-[8px] before:h-[15px]
    before:border-white 
    before:border-b-[3px] before:border-r-[3px] 
    before:-translate-x-1/2 before:-translate-y-1/2 
    before:rotate-45 
    before:opacity-0 
    checked:before:opacity-100
  "
/>
      <label htmlFor="save-info" className=" text-[#6B7280] font-bold cursor-pointer select-none">
        حفظ المعلومات لعملية دفع أسرع 
      </label>
    </div>
    <div className="flex justify-center">
      <button 
        type="submit"
        className=" mt-16 bg-[#2B416A] text-white font-extrabold text-xl px-16 py-4 rounded-2xl shadow-lg transition-all active:scale-95 min-w-[480px]"
      >
        تأكيد الدفع
      </button>
    </div>

  </form>
</div>
        </div>
        <div className="w-full lg:w-[600px] bg-[#F5F7FA] text-[#212121] p-6 rounded-3xl shadow-xl">
<div className="flex flex-row items-center justify-between w-full gap-6">
  <div className="flex flex-col text-right">
    <div className='flex flex-row'>
      <h4 className=" text-lg">{course.title}</h4>
      <p className='font-bold'>.....</p>
      <p className="text-lg">المدربة: {course.trainer}</p>
    </div>
    <p className="text-[#212121] mt-1">السعر:{course.price}</p>
  </div>
  <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 rounded-2xl overflow-hidden border-2 border-[#87A1BD] shadow-lg">
    <img 
      src={course.image} 
      alt={course.title} 
      className="w-full h-full object-cover" 
    />
  </div>

</div>

          <hr className="border-[#87A1BD] my-6" />
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span >السعر الكلي :</span>
              <span className="font-bold">{priceNumber}</span>
            </div>
            
            <hr className="border-[#87A1BD]" />
            
            <div className="flex justify-between items-center text-[#212121]">
              <span>نسبة الحسم:</span>
              <span className="font-bold">{discountAmount}</span>
            </div>

            <hr className="border-[#87A1BD]" />

            <div className="flex justify-between items-center text-xl mt-6">
              <span>السعر النهائي :</span>
              <span className="text-[#212121]">{finalPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-[#2B416A] font-bold text-[40px] m-16'>أفضل العروض المتوفرة</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {promoCourses.map((course) => (
    <div 
      key={course.id} 
      className="relative rounded-3xl shadow-xl overflow-hidden 
                 transform transition-transform duration-500 hover:scale-[1.03]
                 group cursor-pointer h-[400px]"
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
      <div className="absolute top-4 left-4 bg-[#CE9F2B] text-black text-lg font-bold px-4 py-2 rounded-lg shadow-md z-10">
        {course.discount}
      </div>
      <div className="absolute bottom-6 right-6 text-right z-10 left-6">
        <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
          {course.title}
        </h3>
        <p className="text-[#F0EBE5] text-base mb-1">
          {course.subtitle}
        </p>
        <p className="text-[#F0EBE5] text-base font-bold w-[160px]">
          {course.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
      <div className="flex items-center gap-4 mt-16 cursor-pointer hover:opacity-80 transition-opacity">
        <img src={finger} alt="أيقونة" className="w-14" />
        <h2 className="text-[#2F5EA0] font-bold text-[22px]">
          عرض الكل
        </h2>
      </div>
    </div>
  );
}

export default Payment;