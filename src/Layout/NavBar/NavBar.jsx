import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
const getLinkStyle = (path) => {
    const currentPath = location.pathname;
    const isActive = 
      currentPath === path || 
      (path === "/course" && currentPath.includes("course-details")) ||
      (path === "/books" && currentPath.includes("book-details"));

    return `pb-1 transition font-bold ${
      isActive 
      ? "border-b-2 border-[#CE9F2B] text-[#CE9F2B]" 
      : "text-[#2B416A] hover:text-[#CE9F2B]"
    }`;
  };

  return (
    <nav className="w-full " dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-4 relative  flex items-center justify-between">
        <div className="z-20">
          <img src={logo} alt="logo" className="h-16" />
        </div>
        <ul className="hidden md:flex gap-12 text-[#2B416A]">
          <li><Link to="/" className={getLinkStyle("/")}>الرئيسية</Link></li>
          <li><Link to="/course" className={getLinkStyle("/course")}>الكورسات</Link></li>
          <li><Link to="/consulting" className={getLinkStyle("/consulting")}>الاستشارات</Link></li>
          <li><Link to="/books" className={getLinkStyle("/books")}>الكتب</Link></li>
          <li><Link to="/contact" className={getLinkStyle("/contact")}>تواصل معنا</Link></li>
        </ul>
        <div className="flex items-center gap-4 z-20">
          <Link to="/login" className="hidden md:block">
            <button className="bg-[#2B416A] text-white px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition">
              تسجيل الدخول
            </button>
          </Link>
          <button className="md:hidden text-[#2B416A]" onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

      </div>
      {open && (
        <div className="md:hidden bg-white w-full border-t flex flex-col gap-6 py-8 px-6 font-bold shadow-xl animate-in fade-in slide-in-from-top">
          <Link onClick={() => setOpen(false)} to="/" className={getLinkStyle("/")}>الرئيسية</Link>
          <Link onClick={() => setOpen(false)} to="/course" className={getLinkStyle("/course")}>الكورسات</Link>
          <Link onClick={() => setOpen(false)} to="/consulting" className={getLinkStyle("/consulting")}>الاستشارات</Link>
          <Link onClick={() => setOpen(false)} to="/books" className={getLinkStyle("/books")}>الكتب</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className={getLinkStyle("/contact")}>تواصل معنا</Link>
          
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#2B416A] text-white py-3 rounded-lg">تسجيل الدخول</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;