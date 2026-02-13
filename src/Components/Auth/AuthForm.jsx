import { Link ,useNavigate} from "react-router-dom";
import back from "../../assets/university building.png";
import insta from "../../assets/Group.png";
import face from "../../assets/bi_facebook.png";
import google from "../../assets/Group 2212.png";

function AuthForm({
  buttonText,
  showRemember,
  showForget,
  footerText,
  footerLink,
  footerLinkText,
  children,
  targetPath,
}) {
    const navigate = useNavigate();
  return (
   <div
      className="w-full max-w-1xl p-12 rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="space-y-6">{children}</div>

      {showRemember && (
        <div className="flex justify-between items-center text-sm mt-6">
          {showForget && (
            <Link
              to="/forgot-password"
              className="text-blue-600 cursor-pointer order-1 hover:underline"
            >
              نسيت كلمة السر؟
            </Link>
          )}
          <label className="flex items-center gap-2 order-2">
            <input type="checkbox" />
            تذكر كلمة السر
          </label>
        </div>
      )}

     
      <button 
        onClick={() => navigate(targetPath)} 
        className="w-full mt-6 bg-[#2B416A] text-white rounded py-2 font-bold hover:bg-[#1e2e4d] transition"
      >
        {buttonText}
      </button>

      <div className="flex items-center my-6">
        <span className="flex-1 h-px bg-[#6B7280]  mt-5"></span>
        <span className="px-3 text-bold text-[#212121] mt-5">تسجيل دخول عبر</span>
        <span className="flex-1 h-px bg-[#6B7280]  mt-5"></span>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button className="p-3 rounded-full flex items-center justify-center hover:scale-105 transition">
          <img src={google} alt="google" className="w-[24px]" />
        </button>

        <button className="p-3 rounded-full flex items-center justify-center hover:scale-105 transition">
          <img src={face} alt="facebook" className="w-[24px]" />
        </button>

        <button className="p-3 rounded-full flex items-center justify-center hover:scale-105 transition">
          <img src={insta} alt="instagram" className="w-[24px]" />
        </button>
      </div>

    
      <p className="text-center mt-8 text-sm">
        {footerText}{" "}
        <Link to={footerLink} className="text-[#2F5EA0] font-bold mr-1 hover:underline">
          {footerLinkText}
        </Link>
      </p>
    </div>
  );
}

export default AuthForm;