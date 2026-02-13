// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Shared from "../Shared/Shared";
// import CustomButton from "../CustomButton";
// import VideoCard from "../VideoCard/VideoCard";
// import certificate from "../../assets/Certificate.png";
// import drimg from "../../assets/manal.png";
// import time from "../../assets/Time.png";
// import calender from "../../assets/Date.png";
// import online from "../../assets/dribbble.png";
// import analytics from "../../assets/analytics.png";
// import { ChevronRight, ChevronLeft } from "lucide-react";
// const CourseDetails = () => {
//   const { id } = useParams();
//   if (id) console.log("Current Course ID:", id);

//   const [activeTab, setActiveTab] = useState("details");

//   const courseInfo = {
//     title: "البرمجة اللغوية العصبية (NLP) لفهم الدماغ و تحسين السلوك",
//     description:
//       "يقدم هذا الكورس المفاهيم الأساسية للسلوك و اللغة و الإدراك و فهم الأسس العصبية,بالإضافة تعلم تقنيات البرمجة اللغوية العصبية لتعديل أنماط التفكير السلبية و ربط تقنيات NLO بالطب النفسي و العلاج السلوكي المعرفي , ادريب عملي على أدوات تساعد في إدارة التوتر, القلق, وتحسين الأداء, اكتساب القدرة على تطبيق مهارات NLP في الممارسات الطبية و الاستشارات.",
//     target: [
//       "الأطباء النفسيون و المعالجون",
//       "طلاب كليات الطب و علم النفس",
//       "المدربون و المتخصصون في التنمية البشرية",
//       "أي شخص يسعى لفهم أعمق لكيفية عمل الدماغ و التأثير على السلوك",
//     ],
//     outcomes: [
//       "1-شهادة معتمدة بإتمام الكورس",
//       "2-كتيب إلكتروني يتضمن ملخص الأدوات و التقنيات ",
//       "3-خطة عمل شخصية لاستخدام  NLP في الحياة اليومية أو الممارسة الطبية ",
//       "4-ثقة عملية في تطبيق أدوات NLP على نفسك أو على الآخرين",
//     ],
//     trainer: "د. منال الديب",
//     content: [
//       "مقدمة في القيادة",
//       "التواصل الفعال",
//       "حل النزاعات",
//       "إدارة الوقت",
//     ],
//   };

//   const tabs = [
//     { id: "details", label: "تفاصيل الكورس" },
//     { id: "instructor", label: "مقدم الكورس" },
//     { id: "sections", label: "أقسام الكورس" },
//     { id: "related", label: "كورسات ذات صلة" },
//   ];
//   const videosData = [
//     {
//       id: 1,
//       youtubeId: "e21SWXXrqsM",
//       youtubeUrl: "https://youtu.be/e21SWXXrqsM?si=mr88W3JsOy669fnb",
//       title: "ازاى اوظف الطاقة لتقليل وزنى",
//       lecturer: "منال الديب",
//       duration: "2:15",
//       views: 1520,
//       isShort: true,
//     },
//     {
//       id: 2,
//       youtubeId: "Su6nNSUJScw",
//       youtubeUrl: "https://youtu.be/Su6nNSUJScw?si=foVRBFD_n9vP5KhL",
//       title: "كيفية تحويل الطاقه السلبية إلي طاقة إيجابية ",
//       lecturer: "منال الديب",
//       duration: "08:20",
//       views: 980,
//       isShort: true,
//     },
//     {
//       id: 3,
//       youtubeId: "1Cs1xVqg49Y",
//       youtubeUrl: "https://youtu.be/1Cs1xVqg49Y?si=eu49OngGhNhfAcH3",
//       title: "التخلص من السمنة والدهون الذائدة بالتنفس السليم",
//       lecturer: "منال الديب",
//       duration: "15:10",
//       views: 2100,
//       isShort: true,
//     },
//   ];
//   return (
//     <div className="min-h-screen pb-20" dir="rtl">
//       <Shared />

//       <div className="max-w-[1200px] mx-auto px-6 mt-12 text-right">
//         <div className="flex flex-row items-center justify-center gap-8 md:gap-12 pb-4 mb-10 overflow-x-auto border-b border-gray-200">
//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className="cursor-pointer relative whitespace-nowrap"
//             >
//               <p
//                 className={`text-lg font-bold pb-2 transition-colors ${
//                   activeTab === tab.id
//                     ? "text-[#CE9F2B]"
//                     : "text-[#2B416A] hover:text-[#CE9F2B]"
//                 }`}
//               >
//                 {tab.label}
//               </p>
//               {activeTab === tab.id && (
//                 <div className="absolute bottom-0 w-full h-[3px] bg-[#CE9F2B] rounded-full" />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="p-2">
//           {activeTab === "details" && (
//             <div className="animate-in fade-in duration-500">
//               <h1 className="text-4xl font-bold text-[#CE9F2B] mb-6">
//                 {courseInfo.title}
//               </h1>
//               <p className="text-[#2B416A] text-lg leading-relaxed mb-12">
//                 {courseInfo.description}
//               </p>
//               <div className="mb-16">
//                 <h2 className="text-4xl font-bold text-[#CE9F2B] mb-6">
//                   يستهدف الكورس
//                 </h2>
//                 <ul className="space-y-4">
//                   {courseInfo.target.map((item, index) => (
//                     <li
//                       key={index}
//                       className="flex items-center gap-2 text-[#2B416A] text-xl font-medium"
//                     >
//                       <span className="text-[#CE9F2B] font-bold">-</span>
//                       <span>{item}.</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-[#E6ECEF] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-[#87A1BD] shadow-sm">
//                 <div className="flex-1 text-right">
//                   <h2 className="text-4xl font-bold text-[#CE9F2B] mb-4">
//                     على ماذا ستحصل بعد الكورس ؟
//                   </h2>

//                   <ul className="space-y-4">
//                     {courseInfo.outcomes.map((item, index) => (
//                       <li key={index} className="flex items-center gap-4">
//                         <span className="text-[#2B416A] text-xl font-bold">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="w-full md:w-1/3 flex justify-center">
//                   <img
//                     src={certificate}
//                     alt="Success Ribbon"
//                     className="w-full max-w-[280px] rounded-3xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "instructor" && (
//             <div className="animate-in fade-in duration-500">
//               <h2 className="text-4xl font-bold text-[#2F5EA0] mb-4">
//                 عن مقدم الكورس
//               </h2>
//               <p className="text-[#2B416A] text-xl font-bold">
//                 {courseInfo.trainer}
//               </p>
//             </div>
//           )}
//         </div>
//         <div
//           className="mt-20 flex flex-col md:flex-row justify-between items-start w-full gap-10"
//           dir="rtl"
//         >
//           <div className="flex flex-col items-start w-[280px] shrink-0">
//             <h2 className="text-[#CE9F2B] font-bold text-4xl mb-8 w-full text-right">
//               مُقدِّم الكورس
//             </h2>
//             <div className="flex flex-col items-center w-full">
//               <img
//                 src={drimg}
//                 alt="Doctor"
//                 className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white mb-6"
//               />
//               <h3 className="text-[#2B416A] text-2xl font-bold text-center">
//                 {courseInfo.trainer}
//               </h3>
//               <p className="text-[#CE9F2B] text-lg font-medium mt-2 text-center">
//                 {courseInfo.trainerTitle ||
//                   "دكتورة في الصحة النفسية وتعديل السلوك"}
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-10 pt-20 md:mr-auto max-w-[500px]">
//             <div className="flex flex-col items-start text-right gap-3">
//               <div className="flex items-center gap-4">
//                 <img src={time} alt="time" className="w-6 h-6 object-contain" />
//                 <h4 className="text-[#2F5EA0] font-bold text-2xl">
//                   موعد الكورس
//                 </h4>
//               </div>
//               <p className="text-[#212121] text-m leading-relaxed ">
//                 {courseInfo.courseTimeDetails || "8-6 م بتوقيت القاهرة"}
//               </p>
//             </div>

//             <div className="flex flex-col items-start text-right gap-3">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={calender}
//                   alt="date"
//                   className="w-6 h-6 object-contain"
//                 />
//                 <h4 className="text-[#2F5EA0] font-bold text-2xl">
//                   أيام الكورس
//                 </h4>
//               </div>
//               <p className="text-[#212121] text-m leading-relaxed ">
//                 {courseInfo.courseDaysDetails ||
//                   "أيام الأحد - الثلاثاء- الخميس-مدة 12 أسبوع"}
//               </p>
//             </div>

//             <div className="flex flex-col items-start text-right gap-3">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={online}
//                   alt="online"
//                   className="w-6 h-6 object-contain"
//                 />
//                 <h4 className="text-[#2F5EA0] font-bold text-2xl">
//                   {" "}
//                   أونلاين 100%
//                 </h4>
//               </div>
//               <p className="text-[#212121] text-m leading-relaxed ">
//                 من أي مكان في العالم يمكنك أن تسجل في دوراتنا
//               </p>
//             </div>

//             <div className="flex flex-col items-start text-right gap-3">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={analytics}
//                   alt="level"
//                   className="w-6 h-6 object-contain"
//                 />
//                 <h4 className="text-[#2F5EA0] font-bold text-2xl">
//                   {" "}
//                   المستوى المتقدم
//                 </h4>
//               </div>
//               <p className="text-[#212121] text-m leading-relaxed  border-r-4 border-gray-100">
//                 {courseInfo.trainerAbout ||
//                   "في هذا المستوى تحتاج للمعرفة أسس البرمجة العصبية و السلوكيات"}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-24 w-full px-4 flex flex-col items-center" dir="rtl">
//           <h2 className="text-[#CE9F2B] font-bold text-4xl mb-12 text-center">
//             محتويات الكورس:
//           </h2>
//           <div className="w-full max-w-[920px] flex flex-col gap-10">
//             {[
//               {
//                 label: "الوحدة الأولى",
//                 desc:
//                   courseInfo.unit1 ||
//                   "مدخل إلى البرمجة اللغوية العصبية-التعريف العلمي ل NLP-تمرين عملي: التعرف على الخرائط الذهنية .",
//               },
//               {
//                 label: "الوحدة الثانية",
//                 desc:
//                   courseInfo.unit2 ||
//                   "مدخل إلى البرمجة اللغوية العصبية-التعريف العلمي ل NLP-تمرين عملي: التعرف على الخرائط الذهنية .",
//               },
//               {
//                 label: "الوحدة الثالثة",
//                 desc:
//                   courseInfo.unit3 ||
//                   "مدخل إلى البرمجة اللغوية العصبية-التعريف العلمي ل NLP-تمرين عملي: التعرف على الخرائط الذهنية .",
//               },
//               {
//                 label: "الوحدة الرابعة",
//                 desc:
//                   courseInfo.unit4 ||
//                   "مدخل إلى البرمجة اللغوية العصبية-التعريف العلمي ل NLP-تمرين عملي: التعرف على الخرائط الذهنية .",
//               },
//               {
//                 label: "الوحدة الخامسة",
//                 desc:
//                   courseInfo.unit5 ||
//                   "مدخل إلى البرمجة اللغوية العصبية-التعريف العلمي ل NLP-تمرين عملي: التعرف على الخرائط الذهنية .",
//               },
//             ].map((unit, index) => (
//               <div key={index} className="w-full">
//                 <div className="w-full h-[1px] bg-gray-300"></div>
//                 <div className="py-6 flex flex-col md:flex-row items-baseline gap-4 text-right px-2">
//                   <span className="text-[#CE9F2B] text-2xl font-bold min-w-[150px]">
//                     {unit.label} :
//                   </span>
//                   <p className="text-[#2B416A] text-m font-bold">{unit.desc}</p>
//                 </div>
//                 <div
//                   className={`w-full ${index === 4 ? "h-[5px] bg-gray-400" : "h-[1px] bg-gray-300"}`}
//                 ></div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-20 w-full">
//             <button className="bg-[#2B416A] text-[#F5F7FA] text-2xl font-bold py-4 px-20 rounded-xl hover:bg-[#1e2e4d] transition-all shadow-lg min-w-[620px]">
//               اشتراك
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="mt-24 w-full" dir="rtl">
//         <div className="max-w-[1200px] mx-auto px-4">
//           <h3 className="text-4xl font-bold text-[#CE9F2B] mb-12 mr-2">
//             كورسات ذات صلة
//           </h3>
//         </div>
//         <div className="bg-[#F5F7FA] py-16">
//           <div className="max-w-[1200px] mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
//               {videosData.slice(0, 3).map((video) => (
//                 <div key={video.id} className="flex flex-col h-full">
//                   <div className="flex-1">
//                     <VideoCard video={video} image={video.image} />
//                   </div>
//                   <div className="mt-6 w-full px-2">
//                     <div className="mt-6 w-full px-0">
//                       <div
//                         className="flex w-full 
//                         [&>button]:!w-full 
//                         [&>button]:!flex-row 
//                         [&>button]:!flex 
//                         [&>button]:!justify-between 
//                         [&>button]:!items-center 
//                         [&>button]:!px-6"
//                       >
//                         <CustomButton
//                           text="اشترك الآن"
//                           className="!w-full bg-[#2B416A] text-white rounded-xl font-bold hover:bg-[#CE9F2B] transition-all"
//                           style={{ direction: "ltr" }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="m-12 flex justify-start gap-6 pr-2">
//         <button className="p-4 bg-[#CE9F2B] rounded-2xl text-[#212121] transition-all shadow-md">
//           <ChevronRight size={30} strokeWidth={3} />
//         </button>
//         <button className="p-4 bg-transparent text-[#6B7280] border-2 border-[#6B7280] rounded-2xl hover:bg-gray-50 transition-all">
//           <ChevronLeft size={30} strokeWidth={3} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;



import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Shared from "../Shared/Shared";
import CustomButton from "../CustomButton";
import VideoCard from "../VideoCard/VideoCard";
import certificate from "../../assets/Certificate.png";
import drimg from "../../assets/manal.png";
import time from "../../assets/Time.png";
import calender from "../../assets/Date.png";
import online from "../../assets/dribbble.png";
import analytics from "../../assets/analytics.png";
import { ChevronRight, ChevronLeft } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  if (id) console.log("Current Course ID:", id);

  const [activeTab, setActiveTab] = useState("details");

  // تعريف مراجع (Refs) لكل قسم لتمكين السكرول
  const detailsRef = useRef(null);
  const instructorRef = useRef(null);
  const sectionsRef = useRef(null);
  const relatedRef = useRef(null);

  // دالة التعامل مع الضغط على التاب (تغيير الخط + سكرول)
  const handleTabClick = (tabId, ref) => {
    setActiveTab(tabId);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const courseInfo = {
    title: "البرمجة اللغوية العصبية (NLP) لفهم الدماغ و تحسين السلوك",
    description:
      "يقدم هذا الكورس المفاهيم الأساسية للسلوك و اللغة و الإدراك و فهم الأسس العصبية,بالإضافة تعلم تقنيات البرمجة اللغوية العصبية لتعديل أنماط التفكير السلبية و ربط تقنيات NLO بالطب النفسي و العلاج السلوكي المعرفي , ادريب عملي على أدوات تساعد في إدارة التوتر, القلق, وتحسين الأداء, اكتساب القدرة على تطبيق مهارات NLP في الممارسات الطبية و الاستشارات.",
    target: [
      "الأطباء النفسيون و المعالجون",
      "طلاب كليات الطب و علم النفس",
      "المدربون و المتخصصون في التنمية البشرية",
      "أي شخص يسعى لفهم أعمق لكيفية عمل الدماغ و التأثير على السلوك",
    ],
    outcomes: [
      "1-شهادة معتمدة بإتمام الكورس",
      "2-كتيب إلكتروني يتضمن ملخص الأدوات و التقنيات ",
      "3-خطة عمل شخصية لاستخدام  NLP في الحياة اليومية أو الممارسة الطبية ",
      "4-ثقة عملية في تطبيق أدوات NLP على نفسك أو على الآخرين",
    ],
    trainer: "د. منال الديب",
  };

  const tabs = [
    { id: "details", label: "تفاصيل الكورس", ref: detailsRef },
    { id: "instructor", label: "مقدم الكورس", ref: instructorRef },
    { id: "sections", label: "أقسام الكورس", ref: sectionsRef },
    { id: "related", label: "كورسات ذات صلة", ref: relatedRef },
  ];

  const videosData = [
    { id: 1, youtubeId: "e21SWXXrqsM", title: "ازاى اوظف الطاقة لتقليل وزنى", lecturer: "منال الديب", duration: "2:15", views: 1520 },
    { id: 2, youtubeId: "Su6nNSUJScw", title: "كيفية تحويل الطاقه السلبية إلي طاقة إيجابية ", lecturer: "منال الديب", duration: "08:20", views: 980 },
    { id: 3, youtubeId: "1Cs1xVqg49Y", title: "التخلص من السمنة والدهون الذائدة بالتنفس السليم", lecturer: "منال الديب", duration: "15:10", views: 2100 },
  ];

  return (
    <div className="min-h-screen pb-20" dir="rtl">
      <Shared />
      <div className=" mt-10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-row items-center justify-center gap-8 md:gap-12 overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.ref)}
              className="cursor-pointer relative whitespace-nowrap"
            >
              <p className={`text-lg font-bold pb-1 transition-colors ${activeTab === tab.id ? "text-[#CE9F2B]" : "text-[#2B416A] hover:text-[#CE9F2B]"}`}>
                {tab.label}
              </p>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 w-full h-[3px] bg-[#CE9F2B] rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-12 text-right">
        
        {/* قسم التفاصيل */}
        <section ref={detailsRef} className="pt-10 mb-20">
          <h1 className="text-4xl font-bold text-[#CE9F2B] mb-6">{courseInfo.title}</h1>
          <p className="text-[#2B416A] text-lg leading-relaxed mb-12">{courseInfo.description}</p>
          
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#CE9F2B] mb-6">يستهدف الكورس</h2>
            <ul className="space-y-4">
              {courseInfo.target.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-[#2B416A] text-xl font-medium">
                  <span className="text-[#CE9F2B] font-bold">-</span>
                  <span>{item}.</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#E6ECEF] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-[#87A1BD] shadow-sm">
            <div className="flex-1 text-right">
              <h2 className="text-4xl font-bold text-[#CE9F2B] mb-4">على ماذا ستحصل بعد الكورس ؟</h2>
              <ul className="space-y-4">
                {courseInfo.outcomes.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="text-[#2B416A] text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img src={certificate} alt="Success" className="w-full max-w-[280px] rounded-3xl" />
            </div>
          </div>
        </section>

        {/* قسم مقدم الكورس */}
        <section ref={instructorRef} className="pt-20 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10">
            <div className="flex flex-col items-start w-[280px] shrink-0">
              <h2 className="text-[#CE9F2B] font-bold text-4xl mb-8 w-full text-right">مُقدِّم الكورس</h2>
              <div className="flex flex-col items-center w-full">
                <img src={drimg} alt="Doctor" className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white mb-6" />
                <h3 className="text-[#2B416A] text-2xl font-bold text-center">{courseInfo.trainer}</h3>
                <p className="text-[#CE9F2B] text-lg font-medium mt-2 text-center">دكتورة في الصحة النفسية وتعديل السلوك</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 pt-20 md:mr-auto max-w-[500px]">
              <div className="flex flex-col items-start text-right gap-3">
                <div className="flex items-center gap-4">
                  <img src={time} alt="time" className="w-6 h-6 object-contain" />
                  <h4 className="text-[#2F5EA0] font-bold text-2xl">موعد الكورس</h4>
                </div>
                <p className="text-[#212121]">8-6 م بتوقيت القاهرة</p>
              </div>

              <div className="flex flex-col items-start text-right gap-3">
                <div className="flex items-center gap-4">
                  <img src={calender} alt="date" className="w-6 h-6 object-contain" />
                  <h4 className="text-[#2F5EA0] font-bold text-2xl">أيام الكورس</h4>
                </div>
                <p className="text-[#212121]">أيام الأحد - الثلاثاء- الخميس-مدة 12 أسبوع</p>
              </div>

              <div className="flex flex-col items-start text-right gap-3">
                <div className="flex items-center gap-4">
                  <img src={online} alt="online" className="w-6 h-6 object-contain" />
                  <h4 className="text-[#2F5EA0] font-bold text-2xl">أونلاين 100%</h4>
                </div>
                <p className="text-[#212121]">من أي مكان في العالم يمكنك أن تسجل في دوراتنا</p>
              </div>

              <div className="flex flex-col items-start text-right gap-3">
                <div className="flex items-center gap-4">
                  <img src={analytics} alt="level" className="w-6 h-6 object-contain" />
                  <h4 className="text-[#2F5EA0] font-bold text-2xl">المستوى المتقدم</h4>
                </div>
                <p className="text-[#212121] border-r-4 border-gray-100 pr-2">في هذا المستوى تحتاج للمعرفة أسس البرمجة العصبية و السلوكيات</p>
              </div>
            </div>
          </div>
        </section>

        {/* قسم محتويات الكورس */}
        <section ref={sectionsRef} className="pt-20 mb-20">
          <h2 className="text-[#CE9F2B] font-bold text-4xl mb-12 text-center">محتويات الكورس:</h2>
          <div className="w-full max-w-[920px] mx-auto flex flex-col gap-10">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <div key={index} className="w-full">
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div className="py-6 flex flex-col md:flex-row items-baseline gap-4 text-right px-2">
                  <span className="text-[#CE9F2B] text-2xl font-bold min-w-[150px]">الوحدة {num === 1 ? "الأولى" : num === 2 ? "الثانية" : num === 3 ? "الثالثة" : num === 4 ? "الرابعة" : "الخامسة"} :</span>
                  <p className="text-[#2B416A] text-m font-bold">مدخل إلى البرمجة اللغوية العصبية-التعريف العلمي ل NLP-تمرين عملي: التعرف على الخرائط الذهنية .</p>
                </div>
                <div className={`w-full ${num === 5 ? "h-[5px] bg-gray-400" : "h-[1px] bg-gray-300"}`}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <button className="bg-[#2B416A] text-white text-2xl font-bold py-4 px-20 rounded-xl hover:bg-[#1e2e4d] transition-all shadow-lg min-w-[300px] md:min-w-[620px]">اشتراك</button>
          </div>
        </section>
       <section ref={relatedRef} className="pt-20 w-full overflow-visible">
  <div className="max-w-[1200px] mx-auto px-4">
    <h3 className="text-4xl font-bold text-[#CE9F2B] mb-12 mr-2 text-right">
      كورسات ذات صلة
    </h3>
  </div>
  <div className="bg-[#F5F7FA] py-16 w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {videosData.map((video) => (
          <div key={video.id} className="flex flex-col h-full">
            <div className="flex-1">
              <VideoCard video={video} />
            </div>
            <div className="mt-6 w-full px-0">
              <div
                className="flex w-full 
                [&>button]:!w-full 
                [&>button]:!flex-row 
                [&>button]:!flex 
                [&>button]:!justify-between 
                [&>button]:!items-center 
                [&>button]:!px-6"
              >
                <CustomButton
                  text="اشترك الآن"
                  className="!w-full bg-[#2B416A] text-white rounded-xl font-bold hover:bg-[#CE9F2B] transition-all"
                  style={{ direction: "ltr" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
       </section>
          <div className="mt-10 flex justify-start gap-6 pr-2">
       <button className="p-4 bg-[#CE9F2B] rounded-2xl text-[#212121] transition-all shadow-md">
           <ChevronRight size={30} strokeWidth={3} />
        </button>
       <button className="p-4 bg-transparent text-[#6B7280] border-2 border-[#6B7280] rounded-2xl hover:bg-gray-50 transition-all">
         <ChevronLeft size={30} strokeWidth={3} />
       </button>
     </div>
      

      </div>
    </div>
  );
};

export default CourseDetails;