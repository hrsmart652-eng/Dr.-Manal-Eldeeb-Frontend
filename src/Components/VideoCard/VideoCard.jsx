import React from 'react';
import { Repeat, Link2 } from "lucide-react";

const VideoCard = ({ video, image }) => {
  return (
    <div className="bg-[#F0F2ED] rounded-2xl shadow-md p-6 text-right border border-[#87A1BD] flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <a
          href={video.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#212121] rotate-[130deg] transition-transform duration-300 hover:rotate-0 hover:text-[#CE9F2B]"
        >
          <Link2 size={24} />
        </a>
        {video.isShort && (
          <span className="font-bold text-[#212121] text-[18px] px-3 py-1 rounded-full">
            Shorts
          </span>
        )}
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-sm">
        <img
          src={image || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-[190px] object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow mt-6">
        <div className="flex justify-between items-center text-sm">
          <div className="text-[#2B416A] font-bold text-base">
            <span>{video.duration}</span>
          </div>
          <Repeat size={28} className="text-[#87A1BD]" />
        </div>

        <h3 className="my-6 font-bold text-[#212121] text-[18px] leading-relaxed min-h-[54px]">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between text-[#2B416A] text-sm">
          <span className="text-[#212121]">المحاضر: {video.lecturer}</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#212121]">{video.views}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2F5EA0" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;