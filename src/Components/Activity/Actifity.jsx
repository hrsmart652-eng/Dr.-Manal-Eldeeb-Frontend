import React from 'react'
import act from '../../assets/شعار-removebg-preview 2.png'
import Dr from "../../assets/Frame 6.png";
import finger from "../../assets/Finger Pointing Right.png"
import Specialties from '../Specialties/Specialties';
const Actifity = () => {
  return (
    <>
    <div className="flex flex-row-reverse items-center gap-4 mt-16">
<img src={act} alt='شعار الجامعه '/>
<h2 className='text-[#2B416A] font-bold text-[36px]'>جامعة باشن العالمية - كلية التنمية و العلوم الإنسانية </h2>
    </div>
<div className="max-w-8xl mx-auto mt-12 flex flex-col justify-evenly lg:flex-row gap-10 ">

  <img src={Dr} alt="الكلية" className="w-full max-w-[450px] h-auto rounded-lg object-cover" />

 
  <div className="flex flex-col gap-6 lg:w-[440px]">
    
    <p className="text-[#6B7280] text-[18px] font-bold mt-10 leading-relaxed">
      الكلية الأولى في العالم التي صنفت و أعادت ترتيب أولويات العلوم النفسية والتربوية والتنموية بما يفيد في بناء إنسان معاصر محافظ على هويته داعم لغيره بكل سبل الحكمة العالمية وذلك من خلال أقسام ثلاثة : التنمية الذاتية 
      (ليتعلم الدارس أهم علوم العالم في التنمية الشخصية ) 
      والصحة النفسية (حيث مدارسها الرائدة والحديثة والفارقة) 
      وعلوم كامل الدماغ ونقاط القوة 
      (حيث فهم الدماغ وظائفيا وعلاقته بالتعلم السريع والتطوير المهني ونقاط قوة الإنسان )
      لتعمل تلك الأقسام الثلاثة سويا لصناعة إنسان عالمي الملكات والأدوات
    </p>

   <div className="flex flex-row-reverse items-center gap-4 mt-4">
     <img src={finger} alt="أيقونة" className="w-14" />
     <h2 className="text-[#CE9F2B] font-bold text-[18px]">
       تعرّف على نشاطات الكلية
     </h2>
   </div>
   
  </div>
</div>


<Specialties />

    </>
  )
}

export default Actifity