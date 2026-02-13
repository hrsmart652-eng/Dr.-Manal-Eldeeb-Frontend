import AuthPage from "./AuthPage";
import AuthForm from "./AuthForm";
import { Mail, LockKeyhole } from "lucide-react"; 

function Login() {
  return (
    <AuthPage>
      <AuthForm
        title="Leaders Academy" 
        buttonText="تسجيل دخول"
        showRemember={true}
        showForget={true}
        footerLink="/register"
        footerLinkText="إنشئ حساب جديد"
        targetPath="/"
      >
      
        <div className="mb-4 text-right">
          <label className="block text-sm text-[#6B7280] font-medium mb-1">البريد الإلكتروني</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="bg-[#F0EBE5] w-full pl-10 pr-3 py-2 border border-[#6B7280] rounded-md text-right "
            />
          </div>
        </div>

      
        <div className="mb-4 text-right">
          <label className="block text-sm font-medium mb-1 text-[#6B7280]">كلمة السر</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="كلمة السر"
              className="bg-[#F0EBE5] w-full pl-10 pr-3 py-2 border border-[#6B7280] rounded-md text-right "
            />
          </div>
        </div>

 

      </AuthForm>
    </AuthPage>
  );
}

export default Login;