import AuthPage from "./AuthPage";
import AuthForm from "./AuthForm";
import { Mail, LockKeyhole, User, Phone, ChevronDown } from "lucide-react";

function Register() {
  return (
    <AuthPage>
      <AuthForm
        title="Leaders Academy"
        buttonText="تسجيل دخول"
        showRemember={false}
        showForget={false}
        footerLink="/login"
        footerLinkText="لدي حساب بالفعل"
        targetPath="/login"
      >
        <div className="mb-4 text-right">
          <label className="block text-sm font-medium text-[#6B7280] mb-1">الاسم الثلاثي</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]" size={20} />
            <input
              type="text"
              placeholder="الاسم الثلاثي"
              className="bg-[#F0EBE5] w-full pl-10 pr-3 py-2 rounded-md text-right border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B416A]"
            />
          </div>
        </div>
        <div className="mb-4 text-right">
          <label className="block text-sm font-medium mb-1 text-[#6B7280] ">رقم الهاتف</label>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center gap-1 px-2 py-2 border border-gray-300 rounded-md text-gray-700 cursor-pointer min-w-[70px]">
              <ChevronDown size={22} className=" text-[#87A1BD]"/>
              <span className=" font-bold text-[#2B416A]">+20</span>
            </div>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]" size={20} />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="bg-[#F0EBE5] w-full pl-10 pr-3 py-2 rounded-md text-right border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B416A]"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 text-right">
          <label className="block text-sm font-medium mb-1 text-[#6B7280] ">البريد الإلكتروني</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]" size={20} />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="bg-[#F0EBE5] w-full pl-10 pr-3 py-2 rounded-md text-right border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B416A]"
            />
          </div>
        </div>
        <div className="mb-4 text-right">
          <label className="block text-sm font-medium mb-1 text-[#6B7280] ">كلمة السر</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]" size={20} />
            <input
              type="password"
              placeholder="كلمة السر"
              className="bg-[#F0EBE5] w-full pl-10 pr-3 py-2 rounded-md text-right border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B416A]"
            />
          </div>
        </div>
        <div className="mb-4 text-right">
          <label className="block text-sm font-medium mb-1 text-[#6B7280] ">إعادة كتابة كلمة السر</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87A1BD]" size={20} />
            <input
              type="password"
              placeholder="إعادة كتابة كلمة السر"
              className="bg-[#F0EBE5] w-full pl-10 pr-3 py-2 rounded-md text-right border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2B416A]"
            />
          </div>
        </div>
        <div className="mb-6 text-right">
          <label className="flex flex-row-reverse items-center justify-start gap-2 cursor-pointer group text-[#6B7280] ">
           
            <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
              أوافق على شروط جميع الخدمات
            </span>
             <input 
              type="checkbox" 
              className="w-6 h-6 bg-[#E6ECEF] cursor-pointer " 
            />
          </label>
        </div>

      </AuthForm>
    </AuthPage>
  );
}

export default Register;