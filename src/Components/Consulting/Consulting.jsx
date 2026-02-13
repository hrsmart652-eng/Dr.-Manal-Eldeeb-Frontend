import React, { useState } from 'react';
import Shared from '../Shared/Shared';
import { User, Mail, Phone, ChevronDown, Calendar, Clock, CreditCard, Video } from 'lucide-react';

const Consulting = () => {
  // State للأسئلة الشائعة (عشان تفتح وتقفل)
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    { q: "هل يمكن تعديل الموعد بعد الحجز؟", a: "نعم، يمكنك تعديل الموعد قبل 24 ساعة من بدء الجلسة." },
    { q: "هل الاستشارة حضوري أو أونلاين؟", a: "الاستشارات تتم أونلاين عبر برنامج Zoom أو Google Meet لراحتك." },
    { q: "كم مدة الجلسة؟", a: "تتراوح مدة الجلسة بين 45 إلى 60 دقيقة حسب نوع الاستشارة المختارة." },
  ];

  return (
    <div dir="rtl" className="min-h-screen pb-20">
      <Shared />
      <div className='max-w-[1200px] mx-auto px-6 mt-16 text-right'>
        <h2 className='text-[#CE9F2B] text-[32px] font-bold mb-4'>احجز استشارة مع الدكتورة منال الديب</h2>
        <div className='space-y-1 text-[#212121] text-lg font-bold'>
          <p>جلسة مخصصة لمساعدتك على تطوير ذاتك، اكتشاف قدراتك، و تحقيق أهدافك</p>
          <p>اختر نوع الاستشارة و احجز الوقت المناسب بسهولة، نحن هنا لمساعدتك</p>
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto px-6 mt-12 flex flex-col lg:flex-row gap-8 items-center bg-[#E6ECEF] rounded-3xl p-8'>
  <div className='flex-1 w-full'>
    <form className='space-y-4'>
      <div className='flex flex-col gap-1'>
        <label className=' text-[#6B7280] text-sm'>الاسم الكامل</label>
        <div className='relative'>
          <input type="text" placeholder="الاسم الكامل" className='w-full p-4 border rounded-xl text-right pr-10 focus:outline-[#CE9F2B] text-sm' />
          <User className='absolute left-4 top-1/2 -translate-y-1/2 text-[#87A1BD] font-bold' size={20} strokeWidth={4}/>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label className=' text-[#6B7280] text-sm'>البريد الإلكتروني</label>
        <div className='relative'>
          <input type="email" placeholder="example@mail.com" className='w-full p-4 border rounded-xl text-right pr-10 focus:outline-[#CE9F2B] text-sm' />
          <Mail className='absolute left-4 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={20} strokeWidth={4}/>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-[#6B7280] text-sm'>رقم الهاتف</label>
        <div className='flex gap-2'>
          <div className='relative'>
  <input 
    type="tel" 
    placeholder="رقم الهاتف" 
    className='w-[360px] p-4 border border-[#6B7280] rounded-xl text-right pr-10 focus:outline-[#CE9F2B] text-sm bg-[#F0EBE5]' 
  />
  <Phone 
    className='absolute left-4 top-1/2 -translate-y-1/2 text-[#87A1BD]' 
    size={20} strokeWidth={3}
  />
</div>
          <div className='flex items-center gap-2 border rounded-xl px-3 bg-gray-50 cursor-pointer min-w-[80px] justify-center text-sm'>
           <span dir="ltr" className="font-bold text-[#2B416A] text-[22px]">+ 20</span>
          <ChevronDown size={20} className="text-[#87A1BD]"strokeWidth={4} />
         </div>
        </div>
      </div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
  <div className='relative'>
    <select 
      defaultValue="" 
      className='w-full p-2 border border-gray-300 rounded-xl appearance-none bg-transparent focus:outline-[#CE9F2B] pr-4 text-[20px] text-[#2B416A] font-bold cursor-pointer'
    >
      <option value="" disabled hidden>نوع الاستشارة</option>
      <option value="psychological">استشارة نفسية</option>
      <option value="development">تطوير ذات</option>
    </select>
    <ChevronDown className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={16} strokeWidth={4}/>
  </div>

  <div className='relative'>
    <select 
      defaultValue="" 
      className='w-full p-2 border border-gray-300 rounded-xl appearance-none bg-transparent focus:outline-[#CE9F2B] pr-4 text-[20px] text-[#2B416A] font-bold cursor-pointer'
    >
      <option value="" disabled hidden>مدة الاستشارة</option>
      <option value="30">30 دقيقة</option>
      <option value="60">60 دقيقة</option>
    </select>
    <ChevronDown className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={16} strokeWidth={4}/>
  </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
  <div className='relative'>
    <input 
      type="text" 
      placeholder="تاريخ الاستشارة" 
      className='w-full p-2 border border-gray-300 rounded-xl text-right pr-4 focus:outline-[#CE9F2B] text-[20px] text-[#2B416A] font-bold bg-transparent placeholder:text-[#2B416A]' 
    />
    <ChevronDown className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={16} strokeWidth={3}/>
  </div>

  <div className='relative'>
    <input 
      type="text" 
      placeholder="حدد الوقت" 
      className='w-full p-2 border border-gray-300 rounded-xl text-right pr-4 focus:outline-[#CE9F2B] text-[20px] text-[#2B416A] font-bold bg-transparent placeholder:text-[#2B416A]' 
    />
    <ChevronDown className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={16} strokeWidth={4}/>
  </div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
  <div className='relative'>
    <select 
      defaultValue="" 
      className='w-full p-2 border border-gray-300 rounded-xl appearance-none bg-transparent focus:outline-[#CE9F2B] pr-4 text-[20px] text-[#2B416A] font-bold cursor-pointer'
    >
      <option value="" disabled hidden>طريقة الدفع</option>
      <option value="card">بطاقة ائتمان</option>
      <option value="cash">فودافون كاش</option>
    </select>
    <ChevronDown className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={16} strokeWidth={3}/>
  </div>

  <div className='relative'>
    <select 
      defaultValue="" 
      className='w-full p-2 border border-gray-300 rounded-xl appearance-none bg-transparent focus:outline-[#CE9F2B] pr-4 text-[20px] text-[#2B416A] font-bold cursor-pointer'
    >
      <option value="" disabled hidden>طريقة الجلسة</option>
      <option value="online">أونلاين (فيديو)</option>
      <option value="voice">مكالمة صوتية</option>
    </select>
    <ChevronDown className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={16} strokeWidth={4}/>
  </div>
</div>

      <div className='flex justify-center w-full'>
        <button type="submit" className='w-full md:w-[400px] bg-[#2B416A] text-white font-bold py-3 rounded-xl hover:bg-[#1e2e4d] transition-all text-lg shadow-lg mt-8'>
          تأكيد الحجز
        </button>
      </div>
    </form>
  </div>
  <div className='w-full lg:w-[350px] flex justify-center items-center'>
    <img src="/calendar.png" alt="consulting schedule" className='w-full max-w-[300px] object-contain' />
  </div>
</div>
      <div className='max-w-[800px] mx-auto px-6 mt-24'>
        <h2 className='text-[#CE9F2B] text-[32px] font-bold text-center mb-12'>الأسئلة الشائعة</h2>
        <div className='space-y-4 bg-[#E6ECEF]'>
          {faqData.map((item, index) => (
            <div key={index} className=' rounded-2xl overflow-hidden'>
              <button 
                onClick={() => toggleQuestion(index)}
                className='w-full p-6 text-right flex justify-between items-center hover:bg-gray-50 transition-all'
              >
                <span className='font-bold text-[#2B416A] text-lg'>{item.q}</span>
                <ChevronDown className={`text-[#87A1BD] font-bold transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`} size={24} />
              </button>
              {openQuestion === index && (
                <div className='px-6 pb-6 text-gray-600 animate-in slide-in-from-top-2 duration-300'>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* الجملة الختامية */}
      <div className=' mx-auto px-6 mt-24 text-center'>
        <p className='text-[30px] md:text-[40px] text-[#2B416A] font-bold'>
           ✨"لا تؤجل تطوير ذاتك – احجز الآن أول خطوة نحو التغيير"
        </p>
      </div>
    </div>
  );
};

export default Consulting;