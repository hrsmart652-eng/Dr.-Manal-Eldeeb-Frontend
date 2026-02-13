import { ArrowLeft } from "lucide-react";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F7F9FC] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <svg
          width="320"
          height="320"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-[#2F5EA0]"
        >
          <circle cx="7" cy="17" r="3" />
          <path d="M10 17h11v2h-2v2h-2v-2h-2v-2" />
          <path d="M10 17a7 7 0 1 1 2-5" />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {children}
      </div>
      <button className="absolute bottom-6 left-6 text-[#2F5EA0]">
        <ArrowLeft size={22} />
      </button>
    </div>
  );
};

export default AuthLayout;