import React from 'react';
import Dr from "../../assets/dr 1 (1).png";
import CustomButton from '../CustomButton';
import VideoCard from '../VideoCard/VideoCard';
import dr1 from '../../assets/dr_m1.png'
import dr2 from '../../assets/dr_m2.png'
import dr3 from '../../assets/dr_m3.png'
import dr4 from '../../assets/dr_m4.png'
import Arr from './Arr';
import person2 from "../../assets/Frame 19.png";
const DoctorProfile = () => {
  const videosData = [
    { id: 1, youtubeId: "e21SWXXrqsM", title: "ازاى اوظف الطاقة لتقليل وزنى", lecturer: "منال الديب", duration: "2:15", views: 1520 },
    { id: 2, youtubeId: "Su6nNSUJScw", title: "كيفية تحويل الطاقه السلبية إلي طاقة إيجابية ", lecturer: "منال الديب", duration: "08:20", views: 980 },
    { id: 3, youtubeId: "1Cs1xVqg49Y", title: "التخلص من السمنة والدهون الذائدة بالتنفس السليم", lecturer: "منال الديب", duration: "15:10", views: 2100 },
  ];

  return (
    <div className="flex flex-col gap-12 p-4 max-w-7xl mx-auto mt-20 mb-20" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        <div className="flex-1 w-full flex flex-col items-start text-right">
          <div className="flex flex-col mb-8 mr-40">
            <h1 className="text-3xl md:text-5xl font-bold text-[#CE9F2B] mb-4">
              الدكتورة: منال الديب
            </h1>
            <h2 className="text-2xl md:text-3xl font-[Reem Kufi Fun] font-bold text-[#2B416A] tracking-wide text-left">
              Dr. Manal El-Deeb
            </h2>
          </div>

          <div className="text-[20px] md:text-[20px] font-bold text-right text-[#2F5EA0] w-full">
            {[
              "استشاري التدريب و التطوير الذاتي",
              "الابنة الروحية للدكتور الراحل إبراهيم الفقي رحمه الله",
              "صاحبة المكتبة الشخصية الخاصة بالدكتور إبراهيم الفقي رحمه الله",
              "عميد كلية التنمية و العلوم الإنسانية في جامعة باشن العالمية",
              "من أكفأ المدربين المعتمدين لدى المجلس الوطني للتدريب و التعليم",
              "استشاري الصحة النفسية و الارشاد الأسري",
              "خبير تدريب دولي معتمد من الهيئة الدولية لعلماء التنمية البشرية",
              "رئيس قسم علوم التنمية البشرية و الاشراف على رسائل الأبحاث العلمية بمجلس علماء و مبدعي مصر و العرب",
              "كبير المدربين المساعدين للخبير العالمي د. إبراهيم الفقي في جميع برامجه التدريبية الكبرى",
              "مؤسس و رئيس مجلس إدارة شركة قادة التغيير للتدريب و تنمية المهارات البشرية"
            ].map((text, index) => (
              <div key={index} className="flex flex-row gap-3 items-start">
                <span className="text-[#2F5EA0] font-black text-2xl">-</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
<div className="flex flex-row gap-6 mt-12 w-full justify-start items-center">
  <button 
    onClick={() => console.log("حجز استشارة")}
    className="group flex flex-row items-center justify-between gap-4 bg-[#CE9F2B] text-black px-8 py-4 rounded font-bold min-w-[330px] shadow-lg hover:bg-[#b88e26] transition-all active:scale-95"
  >
    <span className="text-lg">حجز استشارة</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="group-hover:-translate-x-1 transition-transform"
    >
      <path d="m15 18-6-6 6-6"/>
    </svg>
  </button>
  <button 
    onClick={() => console.log("التسجيل بالدورة")}
    className="group flex flex-row items-center justify-between gap-4 bg-transparent text-[#212121] border-2 border-[#6B7280] px-8 py-4 rounded font-bold min-w-[330px] hover:bg-[#CE9F2B] transition-all active:scale-95"
  >
    <span className="text-lg">التسجيل بالدورة</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="group-hover:-translate-x-1 transition-transform"
    >
      <path d="m15 18-6-6 6-6"/>
    </svg>
  </button>

</div>
        </div>
        <div className="w-full lg:w-[450px]">
          <img
            src={Dr}
            alt="الدكتورة منال الديب"
            className="w-full aspect-[4/5] rounded-[40px] object-cover shadow-2xl border-4 border-[#CE9F2B]/10"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
        <div className="text-right text-[#2F5EA0] text-lg font-bold">
          <h2 className="text-4xl font-bold text-[#CE9F2B] mb-10">البرامج التدريبية التي تقدمها</h2>
          <p>- مدرب معتمد في تدريب البرمجة اللغوية العصبية من الاتحاد العالمي لمدربي البرمجة اللغوية العصبية ”INLPTA”</p>
          <p>- مدرب معتمد دولياً في الأكاديمية الدولية للتدريب و الاستشارات ”IATC”</p>
          <p>- ممارس أول في البرمجة اللغوية العصبية من المركز الكندي للبرمجة اللغوية العصبية. NLP</p>
          <p>- ممارس معتمد في قوة الطاقة البشرية PHE المرحلة الأولى و الثانية و حاصلة على حق تدريبه من المركز الكندي لقوة الطاقة البشرية PHE</p>
          <p>- ممارس معتمد في ديناميكية التكيف العصبي و حاصلة على حق تدريبه من المركز الكندي لديناميكية التكيف العصبي NCD</p>
          <p>- مدرب محترف معتمد من المركز الكندي للتنمية البشرية - كندا C.C.T</p>
          <p>- عضو المؤسسة العربية الكندية للتنمية البشرية-كندا</p>
          <p>- استشاري ارشاد أسري معتمد من البورد الأمريكي</p>
          <p>- ممارس معتمد في التنويم بالإيحاء من المركز الكندي بالتنويم بالإيحاء</p>
          <p>- مدرب معتمد من جامعة القاهرة TOT</p>
          <p>حاصلة على دبلوم الجودة الشاملة معتمدة من جامعة القاهرة TQM</p>
          <p>ممارس متقدم PRANIC HEALING معتمد من المؤسسة العالمية للعلاج بالطاقة الحيوية WORLD PRANIC HEALING FOUNDATION,INC.</p>
          <p>جتازت الدورة التدريبية في مهارات العلاج النفسي الجماعي</p>
          <p>دورة تدريبية في العلاج النفسي الغير شخصي holotropic technique.</p>
          <p>دورة تدريبية في الاضطرابات الجنسية و علاجها</p>
          <p>دورة تدريبية في المهارات العامة في العلاج المعرفي السلوكي.
         -دبلوم الصحة النفسية</p> 
         <p>ورشة عمل سيكو دراما (Psychodrama).</p>
         <p>دبلوم إرشاد أسري</p>
         <p>دبلوم مدرب حياة (Life Coach Diploma)</p>
         <p>دبلوم علاج نفسي (Psychtherapy).</p>
         <p>-دبلوم علاج الاضطرابات النفسية</p>
        </div>

        <div className="grid grid-cols-2 gap-4 h-fit self-center">
          <img src={dr1} className="w-full hover:scale-105 transition-transform" alt="cert1" />
          <img src={dr2} className="w-full hover:scale-105 transition-transform" alt="cert2" />
          <img src={dr3} className="w-full hover:scale-105 transition-transform" alt="cert3" />
          <img src={dr4} className="w-full  hover:scale-105 transition-transform" alt="cert4" />
        </div>
      </div>
      <h2 className='text-[#CE9F2B] font-bold text-[32px]'>الكورسات التي تقدمها</h2>
<div 
  className="py-12 w-full bg-[#F5F7FA]" 
  style={{
    boxShadow: '0 0 0 100vmax #F5F7FA',
    clipPath: 'inset(0 -100vmax)'
  }}
>
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {videosData.map((video) => (
        <div key={video.id} className="flex flex-col h-full p-4 rounded-2xl shadow-sm">
          <div className="flex-1">
            <VideoCard video={video} />
          </div>
          
          <div className="mt-6 w-full">
            <button 
              onClick={() => console.log("اشترك الآن")}
              className="w-full flex flex-row items-center justify-between px-6 py-4 bg-[#CE9F2B] text-black rounded-xl font-bold hover:bg-[#CE9F2B] transition-all active:scale-95"
              dir="rtl"
            >
              <span className="text-lg">اشترك الآن</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
 
  <Arr />

  <h className='text-4xl font-bold text-[#CE9F2B] '>ماذا قال المتدربون لدى د.منال؟</h>
<div className=" w-full px-4" dir="rtl">
  <div className="max-w-7xl mx-auto">
    <div className="relative p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 rounded-[40px] bg-gradient-to-b from-[#2B416A80] to-[#F0EBE5] shadow-2xl overflow-hidden group">
      
      {/* الصورة المربعة */}
      <div className="w-48 h-48 md:w-60 md:h-60 shrink-0 rounded-[30px] overflow-hidden border-4 border-white/30 shadow-xl z-10">
        <img
          src={person2}
          alt="صورة المتدرب"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* المحتوى النصي */}
      <div className="flex flex-col text-right z-10">
        <h3 className="text-[#2B416A] font-bold text-2xl md:text-3xl mb-2">
          المتدربة : منى خالد
        </h3>
        
        <p className="text-white md:text-[#2B416A] font-bold text-2xl mb-6">
          مهندسة برمجيات - إسكندرية
        </p>

        <div className="relative">
          <span className="absolute -top-6 -right-8 text-8xl text-white/10 font-serif select-none">“</span>
          <p className="text-[#6B7280] text-1xl font-bold leading-relaxed italic relative z-10">
            "الدكتورة منال شرحت كل حاجة ببساطة، حسيت بثقة كبيرة في التطبيق العملي بعد الورشة."
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2B416A]/10 rounded-full blur-2xl"></div>
    </div>
  </div>
</div>
  <Arr />
    </div>
  );
};

export default DoctorProfile;