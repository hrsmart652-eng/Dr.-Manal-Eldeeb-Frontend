import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Opinion from '../Opinion/Opinion';
import VideoCard from '../VideoCard/VideoCard'; 
import myCustomImg from '../../assets/Frame 15.png'
import Arr from '../Home/Arr';

const videosData = [
  {
    id: 1,
    youtubeId: "e21SWXXrqsM",
    youtubeUrl: "https://youtu.be/e21SWXXrqsM?si=mr88W3JsOy669fnb",
    title: "ازاى اوظف الطاقة لتقليل وزنى",
    lecturer: "منال الديب",
    duration: "2:15",
    views: 1520,
    isShort: true
  },
  {
    id: 2,
    youtubeId: "Su6nNSUJScw",
    youtubeUrl: "https://youtu.be/Su6nNSUJScw?si=foVRBFD_n9vP5KhL",
    title: "كيفية تحويل الطاقه السلبية إلي طاقة إيجابية ",
    lecturer: "منال الديب",
    duration: "08:20",
    views: 980,
    isShort: true
  },
  {
    id: 3,
    youtubeId: "1Cs1xVqg49Y",
    youtubeUrl: "https://youtu.be/1Cs1xVqg49Y?si=eu49OngGhNhfAcH3",
    title: "التخلص من السمنة والدهون الذائدة بالتنفس السليم",
    lecturer: "منال الديب",
    duration: "15:10",
    views: 2100,
    isShort: true
  }
]

const Work = () => {
  return (
    <div className="w-full px-6 py-10" dir="rtl">
      <h2 className="text-[#212121] font-bold text-[30px] text-right">
        ورشات عمل متنوعة
      </h2>
      <p className="text-[#6B7280] font-bold mt-2 text-right">
        أبرز ورشات العمل المسجلة التي قامت الدكتورة منال بتقديمها و نشرها.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {videosData.map(video => (
          <VideoCard 
            key={video.id} 
            video={video} 
            image={myCustomImg}
          />
        ))}
      </div>
      <Arr/>
      <Opinion />
    </div>
  )
}

export default Work;