import { useNavigate } from "react-router-dom";
import key from '../../assets/Key.png';
import { ArrowLeft } from "lucide-react";

const VerifyCode = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full bg-[#F0EBE5] flex flex-col items-center justify-center px-6 relative overflow-hidden" 
      dir="rtl"
      style={{
        backgroundImage: `linear-gradient(rgba(240, 235, 229, 0.8), rgba(240, 235, 229, 0.8)), url(${key})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '300px',
      }}
    >
     
      <div className="w-full max-w-[750px] flex flex-col items-center text-center z-10">
        
        
        <h2 className="text-[35px] md:text-[50px] font-bold text-[#2F5EA0] mb-4">
            التحقق
        </h2>

      
        <p className="text-[#212121] text-xl md:text-2xl font-bold mb-12">
          أدخل الكود الذي وصل على عنوان بريدك الإلكتروني لإعادة تعيين كلمة السر
        </p>

       
        <div className="flex flex-row-reverse justify-center gap-4 md:gap-4 mb-12 w-full">
          {[...Array(8)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-10 md:w-14 md:h-16 text-center text-2xl font-bold bg-transparent border-2 border-[#CE9F2B] rounded-2xl focus:border-[#2B416A] focus:outline-none focus:ring-2 focus:ring-[#2B416A] shadow-md transition-all"
            />
          ))}
        </div>

        
        <button
          onClick={() => navigate("/new-password")}
          className="w-full bg-[#2B416A] text-white py-5 rounded-xl font-bold text-2xl shadow-lg hover:bg-[#1e2e4d] transition-all"
        >
          تأكيد
        </button>
      </div>

    
      <div 
        onClick={() => navigate("/forgot-password")} 
       className="absolute bottom-10 left-10 p-4 text-[#87A1BD] cursor-pointer hover:scale-110 transition-all"
      >
        <ArrowLeft size={30} />
      </div>
    </div>
  );
};

export default VerifyCode;