import React from 'react'
import { Link } from 'react-router-dom'
import { booksData } from './booksData'

const BooksGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 min-h-[300px] min-w-[260px]" dir="rtl">
      {booksData.map((book) => (
        <div 
          key={book.id} 
          className="group relative bg-gradient-to-b from-[#CE9F2BCC] from-[40%] to-white to-[60%] rounded-[10px] p-6 flex flex-col items-center text-center border border-gray-100 hover:transition-all duration-300 min-h-[300px] min-w-[260px]"
        >
          <Link to={`/book-details/${book.id}`} className="w-full cursor-pointer">
            <div className="w-full h-64 mb-6 overflow-hidden rounded-xl">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            <h3 className="font-bold text-[22px] text-[#2B416A] mb-6 min-h-[60px] flex items-center justify-center leading-tight hover:text-[#CE9F2B] transition-colors">
              {book.title}
            </h3>
          </Link>
          <a
            href={book.downloadLink}
            className="mt-auto w-full flex items-center justify-evenly bg-[#CE9F2B] text-black font-black text-xl py-4 rounded-xl hover:bg-[#b88e26] transition-all shadow-lg"
          >
            <span className='text-[#2B416A] font-bold'>تنزيل</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="black" 
              stroke="#CE9F2B" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
              <path d="M12 10v6"/>
              <path d="m15 13-3 3-3-3"/>
            </svg>
          </a>
        </div>
      ))}
    </div>
  )
}

export default BooksGrid