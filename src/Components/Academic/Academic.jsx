import React, { useEffect, useState } from "react";
import { Eye, Star, ChevronLeft } from "lucide-react";
import Dr from "../../assets/Frame 6.png";
import finger from "../../assets/Finger Pointing Right.png"
import Info from "../Info/Info";
const Academic = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            json: () =>
              Promise.resolve([
                {
                  id: 1,
                  title: "قائد مؤثر",
                  image: Dr,
                  views: 120,
                  rating: 4.5,
                  level: "متقدم",
                  price: "2000 ",
                },
                {
                  id: 2,
                  title: "قائد ملهم",
                  image: Dr,
                  views: 95,
                  rating: 4.8,
                  level: "متوسط",
                  price: "1500 ",
                },
                {
                  id: 3,
                  title: "قيادة احترافية",
                  image: Dr,
                  views: 160,
                  rating: 4.6,
                  level: "مبتدئ",
                  price: "1800 ",
                },
                {
                  id: 4,
                  title: "قائد التغيير",
                  image: Dr,
                  views: 200,
                  rating: 4.9,
                  level: "متقدم",
                  price: "2200 ",
                },
              ]),
          });
        }, 700)
      );

      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 text-right font-[Tajawal] mt-24 md:mt-32">
      
      {/* العنوان */}
      <h1 className="text-[40px] font-[700] text-[#2B416A] mb-4">
        أكاديمية قادة التغيير - برامج احترافية لتأهيل القادة
      </h1>

     
      <p className="text-[#6B7280] text-[22px] font-[700] max-w-[850px] ml-auto">
        تقدم أكاديمية قادة التغيير برامج تدريبية متطورة تجمع بين العلم والممارسة،
        مصممة خصيصًا لرواد الأعمال، القادة المؤسسيين، والمتخصصين في التنمية.
        تشمل برامج مدتها من 4 أسابيع إلى 6 أشهر، مع شهادات معتمدة ومخرجات
        عملية قابلة للتطبيق
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
           
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

           
            <div className="flex justify-between px-4 py-3 text-[#6B7280]">
              <div className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2F5EA0" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                <span>{course.views}</span>
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#E53935] stroke-none" />
                <span>{course.rating}</span>
              </div>
            </div>

           
            <div className="px-4 pb-5 flex flex-col gap-2 justify-center align-center">
              <h2 className="text-[#2B416A] font-[700] text-[18px]  text-center">
                {course.title}
              </h2>

              <p className="text-[#6B7280] text-[15px]  text-center">
                لتكون قائد حقيقي في مجتمعك
              </p>

              <p className="text-[#2B416A] font-[600]  text-center">
                المستوى: {course.level}
              </p>

              <p className="text-[#2B416A] font-[600]  text-center">
              <span className="font-bold">$</span> سعر الدورة: {course.price}
              </p>
<div className="flex gap-4 mt-4 justify-center">


  <button
    className="flex items-center justify-center gap-3
               border border-[#6B7280] text-[#6B7280] font-bold 
               px-8 py-3 rounded-lg
               min-w-[100px]
               whitespace-nowrap"
  >
    عرض الدورة
    <ChevronLeft className="w-4 h-4 stroke-[3] text-[#6B7280]" fill="none" />
  </button>

 
  <button
    className="flex items-center justify-center gap-3
               bg-[#CE9F2B] font-bold text-[#2B416A]
               px-8 py-3 rounded-lg
               min-w-[100px]
               whitespace-nowrap"
  >
    سجل الآن
    <ChevronLeft className="w-5 h-5 stroke-[4] text-[#2B416A]" fill="none" />
  </button>

</div>



            </div>
          </div>
        ))}
      </div>
<div className="flex flex-row-reverse items-center gap-4 mt-16">
  <img src={finger} alt="أيقونة" className="w-16" />
  <h2 className="text-[#2F5EA0] font-bold text-[22px]">
    عرض جميع الدورات
  </h2>
</div>

<Info/>
    </div>

    
  );
};

export default Academic;
