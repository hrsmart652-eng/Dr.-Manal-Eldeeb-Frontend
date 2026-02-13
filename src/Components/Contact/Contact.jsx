import React from 'react'
import contact from '../../assets/Lettering Contact Us with the support girl text.png'
import { User, Mail, Phone, ChevronDown, MessageSquare } from 'lucide-react'

const Contact = () => {
  return (
    <div className="pb-20" dir="rtl"> 
      {/* الهيدر */}
      <div className='text-right m-10 max-w-[1200px] mx-auto px-6'>
        <h2 className='text-[#CE9F2B] font-bold text-[32px] mb-4'>تواصل معنا</h2>
        <p className='font-bold text-[20px] max-w-[600px] leading-relaxed'>
          سواء كان لديك استفسار، طلب خدمة، أو رغبة في التسجيل بدوراتنا — فريقنا هنا لخدمتك
        </p>
      </div>

      {/* الحاوية الكبيرة (الفورم والصورة) - ضفنا relative هنا */}
      <div className='relative max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center mb-16 bg-[#E6ECEF] p-10 lg:p-20 rounded-3xl'>
        
        {/* الفورم يمين */}
        <div className='flex-1 w-full'>
          <form className='space-y-4'>
            {/* الاسم الكامل */}
            <div className='flex flex-col gap-2'>
              <label className='text-[#6B7280] text-sm'>الاسم الكامل</label>
              <div className='relative'>
                <input 
                  type="text" 
                  placeholder="الاسم الكامل" 
                  className='w-full p-3 border border-gray-300 rounded-xl text-right pl-10 focus:outline-[#CE9F2B] text-sm bg-[#F0EBE5] placeholder:text-gray-400' 
                />
                <User className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={18} strokeWidth={4}/>
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div className='flex flex-col gap-2'>
              <label className='text-[#6B7280] text-sm'>البريد الإلكتروني</label>
              <div className='relative'>
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className='w-full p-3 border border-gray-300 rounded-xl text-right pl-10 focus:outline-[#CE9F2B] text-sm bg-[#F0EBE5] placeholder:text-gray-400' 
                />
                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={18} strokeWidth={4}/>
              </div>
            </div>

            {/* رقم الهاتف */}
            <div className='flex flex-col gap-2'>
              <label className='text-[#6B7280] text-sm'>رقم الهاتف</label>
              <div className='flex gap-2'>
                <div className='relative flex-1'>
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف" 
                    className='w-full p-3 border border-gray-300 rounded-xl text-right pl-10 focus:outline-[#CE9F2B] text-sm bg-[#F0EBE5] placeholder:text-gray-400' 
                  />
                  <Phone className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={18} strokeWidth={4}/>
                </div>
                <div className='flex flex-row items-center gap-2 border border-gray-300 rounded-xl px-3 bg-transparent min-w-[90px] justify-center text-sm font-bold text-[#2B416A] cursor-pointer'>
                   <span dir="ltr">+ 20</span>
                   <ChevronDown size={16} strokeWidth={3} className="text-[#87A1BD]" />
                </div>
              </div>
            </div>

            {/* الموضوع */}
            <div className='flex flex-col gap-2 w-1/2'>
              <label className='text-[#2B416A] font-bold text-sm'>الموضوع</label>
              <div className='relative'>
                <select 
                  defaultValue=""
                  className='w-full p-3 border border-gray-300 rounded-xl appearance-none bg-transparent focus:outline-[#CE9F2B] pr-4 text-sm font-bold text-[#2B416A] cursor-pointer'
                >
                  <option value="" disabled hidden>الموضوع</option>
                  <option value="inquiry">استفسار عام</option>
                  <option value="course">تسجيل في دورة</option>
                </select>
                <ChevronDown className='absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]' size={18} strokeWidth={4} />
              </div>
            </div>

            {/* الرسالة */}
            <div className='flex flex-col gap-2 pb-10'>
              <div className='relative'>
                <textarea 
                  placeholder="الرسالة" 
                  rows="10"
                  className='w-full p-3 border border-gray-300 rounded-xl text-right pl-10 focus:outline-[#CE9F2B] text-sm font-bold bg-[#F0F2ED] placeholder:text-[#87A1BD] resize-none'
                ></textarea>
              </div>
              <p className='text-right w-full text-[#87A1BD] text-xs font-bold'>
                * عادة ما يتم الرد خلال 24 ساعة
              </p>
            </div>
          </form>
        </div>

        <div className='flex-1 w-full flex justify-center items-center'>
          <img src={contact} alt="contact support" className='w-full max-w-[450px] object-contain' />
        </div>
        <div className='absolute bottom-10 left-0 right-0 flex justify-center'>
          <button 
            type="submit" 
            className='w-full md:w-[400px] bg-[#2B416A] text-white font-bold py-3 rounded-xl hover:bg-[#1e2e4d] transition-all text-lg shadow-md'
          >
            إرسال
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-14 w-full mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 24 24" fill="#2B416A">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 24 24" fill="#2B416A">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 24 24" fill="#2B416A" fillRule="evenodd">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 24 24" fill="#2B416A" fillRule="evenodd">
          <path d="M21.8 8s-.2-1.4-.8-2a2.8 2.8 0 0 0-2-0.8C16.2 5 12 5 12 5s-4.2 0-7 .2a2.8 2.8 0 0 0-2 .8c-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2a2.8 2.8 0 0 0 2 0.8c2.8.2 7 .2 7 .2s4.2 0 7-.2a2.8 2.8 0 0 0 2-.8c.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM10 15V9l5 3-5 3z" />
        </svg>
      </div>
      
      <p className='text-[#CE9F2B] text-center text-[22px] p-8 font-bold'>
        تابعنا عبر وسائل التواصل الاجتماعي لتبقى على اطلاع بآخر الدورات والفعاليات
      </p>
    </div>
  )
}

export default Contact