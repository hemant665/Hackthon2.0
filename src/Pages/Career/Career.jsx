import React from 'react'

import Right_image from '../../assets/right-square.png'


const Career = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-8 pb-10 md:mt-15'>
        <div className='relative w-full max-w-[75rem] mx-auto h-auto p-5 md:p-16 grid md:grid-cols-2 gap-5 bg-[#f3f7fe] rounded-2xl overflow-hidden'>
            <img src={Right_image} alt='right-image' className='absolute -right-24 w-[20rem] -top-48 ' />
            <div>
                <img src="https://studybase.in/wp-content/uploads/2024/03/career.webp" alt="" />
            </div>
            <div className='w-full flex flex-col justify-center items-start gap-5'>
                <h1 className='text-3xl font-bold flex flex-col'>Join the Excitement of Our Rapidly Growing tech company! <span className='text-sky-500'>Apply Today!</span></h1>
                <p className='text-black/60 tracking-wide font-medium'>Do you thrive among brilliant minds who share a profound passion for their work? Are you eager to make a significant impact, knowing your contributions will reach millions? Are you on the top of your game? If your answer to most of these questions is a resounding yes, then you’re in the right place.</p>
                <p className='text-black/60 tracking-wide font-medium'>We offer Competitive-Compensation, Stability, Work-Life Balance, Team Dinners/Offsite, and Professional Development Opportunities. If you’re ready to be part of something big, seize the opportunity and apply today.</p>
            </div>
        </div>
        <div className='w-full max-w-[75rem] mx-auto flex flex-col gap-5'>
            
        </div>
    </div>
  )
}

export default Career