import React from 'react'
import Courses from '../Courses/Courses'
 import person1 from "../../assets/Ellipse 2.png";
 import person2 from "../../assets/Ellipse 2 (1).png";
 import person3 from "../../assets/Ellipse 2 (2).png";

const opinionsData = [
  {
    id: 1,
    name: "أحمد سامي",
    title: "طالب جامعي - القاهرة",
    comment: "ورشة رائعة جدًا! استفدت كتير من الدروس العملية.",
    image: person1
  },
  {
    id: 2,
    name: "منى خالد",
    title: "مهندسة برمجيات - إسكندرية",
    comment: "الدكتورة منال شرحت كل حاجة ببساطة، حسيت بثقة في التطبيق العملي.",
   image: person2 
  },
  {
    id: 3,
    name: "محمد علي",
    title: "طالب ماجستير - أسيوط",
    comment: "كانت تجربة ممتازة، الورشات مميزة وتفاعلية.",
    image: person3
  }
]

const Opinion = () => {
  return (
    <div className="w-full px-6 py-16" dir="rtl">
      <h2 className='text-[#212121] text-[36px] md:text-[40px] font-bold mb-20 '>
        آراء الطلاب حول الكورسات التدريبية
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {opinionsData.map((opinion, index) => (
          <div
            key={opinion.id}
            className={`
              relative p-8 flex flex-col items-center text-center rounded-2xl transition-transform hover:scale-105
              ${index === 1 
                ? "bg-gradient-to-b from-[#2B416A] to-[#F0EBE5] text-white" 
                : "bg-transparent text-[#212121] border border-[#87A1BD]"}
            `}
          >
            <div className={`
              w-60 h-60 rounded-full overflow-hidden mb-6
              ${index === 1 ? "border-white/20" : "border-[#2F5EA0]/10"}
            `}>
              <img
                src={opinion.image}
                alt={opinion.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-xl mb-1 text-[#2B416A]">
            المتدرب : {opinion.name} 
            </h3>

          <p className="font-bold mt-3  text-[#2B416A]">
          {opinion.title}
           </p>

           
             
             <p className="font-bold leading-relaxed italic text-[#6B7280] mt-4">
            "{opinion.comment}"
             </p>
           
          </div>
        ))}
      </div>

      <Courses />
    </div>
  )
}

export default Opinion