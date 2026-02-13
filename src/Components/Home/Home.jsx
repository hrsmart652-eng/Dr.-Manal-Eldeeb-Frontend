import React from "react";
import { useNavigate } from 'react-router-dom';
import { Search , Twitter,Facebook,Instagram,Youtube} from "lucide-react";
import Dr from '../../assets/Component 12.png'
import Academic from "../Academic/Academic";
import CustomButton from "../CustomButton";
const Home = () => {
  const navigate = useNavigate();
  return (
<div className=" max-w-8xl mx-auto px-6 ">
  <div className=" w-full md:w-[712px] mx-auto relative">
    <input
      type="text"
      placeholder="البحث"
      className="w-full pr-12 pl-4 py-2 text-right bg-[#F5F7FA] border border-[#87A1BD] rounded-lg outline-none"
    />
    <Search
      size={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87A1BD]"
    />
  </div>

<div className="flex flex-col gap-12 p-4 max-w-7xl mx-auto mt-20">

        <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col items-center gap-6">
  <img
    src={Dr}
    alt="الدكتورة منال الديب"
    className="w-full max-w-[500px] lg:w-[500px] h-auto lg:h-[700px] rounded-lg object-cover"
  />
  <div className="flex justify-center items-center gap-14 w-full">
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
</div>

         <div className="w-full flex justify-end">
  <div className="max-w-[700px] text-right">

            <h1 className="text-3xl md:text-5xl font-bold text-[#CE9F2B] mb-4 text-right">
              الدكتورة: منال الديب
            </h1>

  <div className="text-[18px] md:text-[22px] font-[Tajawal] font-bold text-right text-[#2F5EA0] w-full  mt-8">

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">استشاري التدريب و التطوير الذاتي</span>
    
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">الابنة الروحية للدكتور الراحل إبراهيم الفقي رحمه الله</span>
    
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">صاحبة المكتبة الشخصية الخاصة بالدكتور إبراهيم الفقي رحمه الله</span>
    
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">عميد كلية التنمية و العلوم الإنسانية في جامعة باشن العالمية</span>
    
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">من أكفأ المدربين المعتمدين لدى المجلس الوطني للتدريب و التعليم</span>
    
  </div>


  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl"> استشاري الصحة النفسية و الارشاد الأسري </span>
    
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">    خبير تدريب دولي معتمد  من الهيئة الدولية لعلماء التنمية البشرية   </span>
    
  </div>

 <div className="flex flex-row-reverse gap-2">
  <span>-</span>

  <span dir="rtl" className="inline">
    رئيس قسم علوم التنمية البشرية و الاشراف على رسائل الأبحاث
    العلمية بمجلس علماء و مبدعي مصر و العرب
   
  </span>

</div>


  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">   كبير المدربين المساعدين للخبير العالمي د. إبراهيم الفقي 
في جميع برامجه التدريبية الكبرى </span>
  
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl"> مؤسس و رئيس مجلس إدارة شركة قادة التغيير للتدريب 
و تنمية المهارات البشرية </span>
    
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">استشاري التدريب و التطوير الذاتي</span>
   
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">  استشاري التنمية البشرية و العلاقة الأسرية</span>
   
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl"> العضو المنتدب لشركة زهراء حلوان للاستثمار العقاري </span>
  
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl">  عضو الاتحاد الدولي للصحافة العربية</span>
  
  </div>

  <div className="flex flex-row-reverse gap-2">
    <span>-</span>
    <span dir="rtl"> كبير مدربين معتمد من المجلس الوطني للتدريب و التطوير </span>
  
  </div>


</div>

<div className="flex gap-4 mt-8 flex-row-reverse">
  <CustomButton 
    text="اشترك الان" 
    type="primary" 
    onClick={() => console.log("اشترك")} 
  />
  
  <CustomButton 
    text="التفاصيل" 
    type="secondary" 
    onClick={() => navigate("/dr-profile")}
  />
</div>
          </div>

        </div>
      </div>
</div>
<Academic />
</div>
  );
};

export default Home;
