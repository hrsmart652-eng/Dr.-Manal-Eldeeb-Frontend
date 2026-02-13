
import React, { useEffect, useState } from 'react';
import cer from '../../assets/Diploma.png';
import vis from '../../assets/Students.png';
import stu from '../../assets/Student Male.png';
import Actifity from '../Activity/Actifity';

const Info = () => {
  const [stats, setStats] = useState({
    students: 0,
    visitors: 0,
    graduates: 0,
  });

  useEffect(() => {
    const fakeAPI = {
      students: 320,
      visitors: 8500,
      graduates: 1200,
    };

    setStats(fakeAPI);
  }, []);

  return (
    <>
    <div className="flex justify-evenly items-center mt-10 py-8 flex-wrap">
      
     
      <div className="flex flex-col items-center px-4">
        <h3 className="text-[#4A90E2] font-bold text-lg mb-1">عدد الطلاب</h3>
        <img src={stu} alt="طلاب" className="mb-2" />
        <span className="text-[#2F5EA0] font-bold text-xl">{stats.students}</span>
      </div>

   
      <div className="w-px h-20 bg-[#212121]"></div>

      
      <div className="flex flex-col items-center px-4">
        <h3 className="text-[#4A90E2] font-bold text-lg mb-1">عدد الزوار</h3>
        <img src={vis} alt="زوار" className="mb-2" />
        <span className="text-[#2F5EA0] font-bold text-xl">{stats.visitors}</span>
      </div>

      <div className="w-px h-20 bg-[#212121]"></div>

    
      <div className="flex flex-col items-center px-4">
        <h3 className="text-[#4A90E2] font-bold text-lg mb-1">عدد الخريجين</h3>
        <img src={cer} alt="خريجين" className="mb-2" />
        <span className="text-[#2F5EA0] font-bold text-xl">{stats.graduates}</span>
      </div>


    </div>
    <Actifity />
    </>
  );
};

export default Info;
