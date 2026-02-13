import React from 'react'
import logo from '../../assets/logo.png'
import { Linkedin, Twitter, Facebook, Instagram, PhoneCall, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div dir="rtl">
      <footer className="bg-[#87A1BD] text-[#2B416A] py-16 px-6 sm:px-12">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          <div className="space-y-4 text-right">
            <h3 className="font-bold text-xl mb-4  w-fit pb-1">اشترك</h3>
            <p className="text-sm font-medium leading-relaxed">اشترك في نشرتنا البريدية لتصلك أحدث العروض.</p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email" 
                  placeholder="Email" 
                  className="text-[#6B7280] font-bold w-full pr-12 pl-4 py-2 rounded-lg bg-transparent border border-[#2B416A] focus:ring-2 focus:ring-[#CE9F2B] outline-none text-left placeholder:text-left"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              </div>
              <button className="py-10 px-10 bg-[#CE9F2B] text-[#2B416A] font-bold py-2 rounded-lg hover:bg-[#b88e26] transition-all">
                اشترك
              </button>
            </form>
          </div>

          <div className="text-right">
            <h3 className="font-bold text-xl mb-6  w-fit pb-1">المعلومات القانونية</h3>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="hover:underline">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:underline">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:underline">شروط التقسيط</a></li>
              <li><a href="#" className="hover:underline">شروط الدفع</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h3 className="font-bold text-xl mb-6  w-fit pb-1">اكتشف</h3>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="hover:underline">الكورسات الجديدة</a></li>
              <li><a href="#" className="hover:underline">عروض جديدة</a></li>
              <li><a href="#" className="hover:underline">الكتب الجديدة</a></li>
              <li><a href="#" className="hover:underline">الحسومات</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h3 className="font-bold text-xl mb-6  w-fit pb-1">موقعنا</h3>
            <ul className="space-y-3 font-medium">
              <li><a href="#" className="hover:underline">من نحن</a></li>
              <li><a href="#" className="hover:underline">المدونة</a></li>
              <li><a href="#" className="hover:underline">المهن</a></li>
              <li><a href="#" className="hover:underline">فريقنا</a></li>
            </ul>
          </div>

         <div className="space-y-4 flex flex-col items-start lg:items-start text-left" dir="ltr">
    <div className="flex items-center gap-2 mb-2">
        <img src={logo} alt="Logo" className="h-10" />
        <span className='font-bold text-xl whitespace-nowrap text-[#2B416A]'>Leaders Academy</span>
    </div>

    <div className="space-y-3 font-bold">
        <p className="flex items-center gap-3">
            <PhoneCall size={18} className="text-[#2B416A]" /> 
            <span>(+022) 123-456</span> 
        </p>
        <p className="flex items-center gap-3">
            <Mail size={18} className="text-[#2B416A]" />  
            <span>Dr.ManalAlDeeb@example.com</span> 
        </p>
        <p className="flex items-center gap-3">
            <MapPin size={18} className="text-[#2B416A]" /> 
            <span>Egypt, Cairo, 1234 streetname</span>
        </p>
    </div>

   
    <div className="flex gap-3 mt-4">
        <div className="p-2 border border-[#2B416A] rounded-lg cursor-pointer hover:bg-[#2B416A] hover:text-white transition-all">
            <Linkedin size={30} />
        </div>
        <div className="p-2 cursor-pointer hover:bg-[#2B416A] hover:text-white transition-all">
            <Instagram size={30} />
        </div>
        <div className="p-2 border border-[#2B416A] rounded-full cursor-pointer hover:bg-[#2B416A] hover:text-white transition-all">
            <Facebook size={30} />
        </div>
        <div className="p-2 cursor-pointer hover:bg-[#2B416A] hover:text-white transition-all">
            <Twitter size={30} />
        </div>
    </div>
</div>

        </div>
      </footer>
    </div>
  )
}

export default Footer