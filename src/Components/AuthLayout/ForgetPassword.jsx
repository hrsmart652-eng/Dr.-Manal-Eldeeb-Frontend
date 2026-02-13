import { useNavigate } from "react-router-dom";
import key from '../../assets/Key.png';
import { ArrowLeft, Mail } from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full bg-[#F0EBE5] flex flex-col items-center justify-center px-6 relative overflow-hidden" 
      dir="rtl"
      style={{
        backgroundImage: `linear-gradient(rgba(240, 235, 229, 0.8), rgba(240, 235, 229, 0.8)), url(${key})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '480px', 
      }}
    >
      
      <div className="w-full max-w-[700px] flex flex-col items-center text-center z-10">
        
       
        <h2 className="text-[35px] md:text-[50px] font-bold text-[#2F5EA0] mb-4">
          هل نسيت كلمة السر؟
        </h2>

       
        <p className="text-[#212121] text-xl md:text-2xl font-bold mb-12">
          أدخل عنوان بريدك الإلكتروني لإرسال رمز إعادة تعيين كلمة السر
        </p>

       
        <div className="mb-8 w-full text-right">
          <label className="block text-lg font-bold mb-1 text-[#6B7280]">
            البريد الإلكتروني
          </label>
          <div className="relative">
           
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full bg-[#F0EBE5] border border-gray-300 rounded-xl pl-12 pr-6 py-3 text-right text-lg focus:outline-none focus:ring-2 focus:ring-[#2B416A] shadow-md"
            />
          </div>
        </div>

       
        <button
          onClick={() => navigate("/verify-code")}
          className="w-full bg-[#2B416A] text-white py-2 rounded-xl font-bold text-2xl shadow-lg hover:bg-[#1e2e4d] transition-all"
        >
          تأكيد
        </button>
      </div>

      <div 
        onClick={() => navigate("/login")} 
        className="absolute bottom-10 left-10 p-4 text-[#87A1BD] cursor-pointer hover:scale-110 transition-all"
      >
        <ArrowLeft size={30} />
      </div>
    </div>
  );
};

export default ForgotPassword;