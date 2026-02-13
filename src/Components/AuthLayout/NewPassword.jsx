import { useNavigate } from "react-router-dom";
import key from '../../assets/Key.png';
import { ArrowLeft, LockKeyhole } from "lucide-react";

const NewPassword = () => {
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
     
      <div className="w-full max-w-[700px] flex flex-col items-center text-center z-10">
        
      
        <h2 className="text-[35px] md:text-[50px] font-bold text-[#2F5EA0] mb-12">
          كلمة السر الجديدة
        </h2>

     
        <div className="mb-6 w-full text-right">
          <label className="block text-lg mb-2 text-[#6B7280]">
            كلمة السر الجديدة
          </label>
          <div className="relative">
           
            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87A1BD] font-bold" size={24} />
            <input
              type="password"
              placeholder="كلمة السر الجديدة"
              className="w-full bg-[#F0EBE5] border border-gray-300 rounded-xl pl-12 pr-6 py-3 text-right text-lg focus:outline-none focus:ring-2 focus:ring-[#2B416A] shadow-md"
            />
          </div>
        </div>

        
        <div className="mb-10 w-full text-right">
          <label className="block text-lg mb-2 text-[#6B7280]">
            إعادة كتابة كلمة السر
          </label>
          <div className="relative">
            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87A1BD] font-bold" size={24} />
            <input
              type="password"
              placeholder="إعادة كتابة كلمة السر"
              className="w-full bg-[#F0EBE5] border border-gray-300 rounded-xl pl-12 pr-6 py-3 text-right text-lg focus:outline-none focus:ring-2 focus:ring-[#2B416A] shadow-md"
            />
          </div>
        </div>

       
        <button
          onClick={() => navigate("/login")} // يرجع للوجن بعد الحفظ
          className="w-full bg-[#2B416A] text-white py-2 rounded-xl font-bold text-2xl shadow-lg hover:bg-[#1e2e4d] transition-all"
        >
          تعيين كلمة السر
        </button>
      </div>

      
      <div 
        onClick={() => navigate("/verify-code")} 
       className="absolute bottom-10 left-10 p-4 text-[#87A1BD] cursor-pointer hover:scale-110 transition-all"
      >
        <ArrowLeft size={30} />
      </div>
    </div>
  );
};

export default NewPassword;