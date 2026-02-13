
import Shared from '../Shared/Shared';
import { ChevronDown } from 'lucide-react';
import courseImg from '../../assets/Frame 10.png';
import CustomButton from '../CustomButton';
import { useNavigate } from 'react-router-dom';
import Arrow from './Arrow';
const coursesData = [
  { id: 1, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200 جنيه", image: courseImg },
  { id: 2, title: "كورس تطوير الذات", trainer: "د. منال الديب", level: "مبتدئ", duration: "6 أسابيع", price: "900 جنيه", image: courseImg },
  { id: 3, title: "كورس مهارات التواصل", trainer: "د. منال الديب", level: "متقدم", duration: "10 أسابيع", price:"1500", image: courseImg },
  { id: 4, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200 ", image: courseImg },
  { id: 5, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200 ", image: courseImg },
  { id: 6, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200", image: courseImg },
  { id: 7, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200 ", image: courseImg },
  { id: 8, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200 ", image: courseImg },
  { id: 9, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200 ", image: courseImg },
  { id: 10, title: "كورس القيادة الفعالة", trainer: "د. منال الديب", level: "متوسط", duration: "8 أسابيع", price: "1200", image: courseImg },
];

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col shadow-md overflow-hidden w-full max-w-[640px] h-[500px] mx-auto rounded-2xl p-6 border border-[#87A1BD] bg-[#F0F2ED]">
      <div className="flex flex-row-reverse justify-between items-center h-[80%] gap-4 ">
        <div className="flex flex-col text-right w-1/2 pr-2">
          <h3 className="text-xl font-bold text-[#2B416A] mb-4 leading-tight">
            {course.title}
          </h3>
          <div className="space-y-2 text-[#6B7280] font-bold">
            <p><span className="font-bold">المدرب:</span> {course.trainer}</p>
            <p><span className="font-bold">المستوى:</span> {course.level}</p>
            <p><span className="font-bold">مدة الكورس:</span> {course.duration}</p>
            <p><span className="font-bold">سعر الكورس:</span> {course.price}</p>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center p-2 ">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-[400px] h-full object-cover rounded-2xl shadow-sm  border border-[#6B7280]" 
          />
        </div>
      </div>

      <div className="flex flex-row-reverse gap-4 mt-auto pt-6 border-t border-gray-50">
        <CustomButton 
          text="اشترك الآن" 
          type="primary" 
          className="flex-1 !min-w-0 !gap-2 justify-center py-4" 
          onClick={() => navigate('/payment', { state: { course } })}
        />
        <CustomButton 
          text="التفاصيل" 
          type="secondary" 
          className="flex-1 !min-w-0 !gap-2 justify-center py-4 text-[#6B7280]" 
          onClick={() => navigate(`/course-details/${course.id}`)}
        />
      </div>
    </div>
  );
};

const Course = () => {
  
  return (
    <div className=" min-h-screen pb-16">
      <Shared />
      <div className="flex flex-row-reverse items-center justify-center gap-8 md:gap-16 mt-12 px-6">
        <h3 className="font-bold text-[32px] text-[#CE9F2B]">البحث حسب</h3>
        {["موضوع الكورس", "مستوى الكورس", "نوع الكورس"].map((item) => (
          <div key={item} className="flex flex-row-reverse items-center gap-2 cursor-pointer group  border border-[#6B7280] rounded py-2 px-4">
            <p className="text-[#2B416A] transition-colors font-bold text-[22px]">{item}</p>
            <ChevronDown size={26} className="text-[#87A1BD] font-bold" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-20 mt-14 max-w-[1500px] mx-auto">
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
  <Arrow />
    </div>
  );
};

export default Course;