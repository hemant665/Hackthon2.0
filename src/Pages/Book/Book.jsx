import React from 'react'
import BookADemo from '../Book_a_demo/BookADemo'
import { useNavigate } from 'react-router-dom';


import { FaGlobe } from "react-icons/fa";

const Book = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-auto pb-20'>
        <div className='w-full max-w-[75rem] mx-auto h-max p-10 rounded-2xl  border border-gray-200 shadow-2xl'>
        <BookADemo/>
        </div>
        <div className='w-full bg-[#f3f7fe] mt-16'>
        <div className='w-full max-w-[75rem] h-auto mx-auto py-10 flex flex-col items-center gap-4 '>
                <span className='text-xl p-3 rounded-full bg-sky-500 text-white'><FaGlobe/></span>
                <h1 className='font-bold'>Support</h1>
                <p className='text-sm text-black/50 font-medium'>Find the answers you need and access helpful resources.</p>
                <button onClick={()=>navigate('/support')} className='font-medium cursor-pointer text-sm text-sky-500'>Help & Support</button>
        </div>
        </div>
    </div>
  )
}

export default Book