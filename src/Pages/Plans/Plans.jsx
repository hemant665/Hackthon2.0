import React from 'react'
import { pricingPlans, additionalFeatures } from './PlansData'


import Right_image from '../../assets/right-square.png'
import Left_image from '../../assets/left-square.png'
import DigiiTeam from '../../assets/DigiischoolTeam.jpg'
import { FaCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Plans = () => {
  return (
    <div className='relative w-full h-auto bg-[#f1f2f3] py-20 overflow-hidden'>
        <img src={Left_image} alt="left-image" className='absolute -top-32 left-0 w-[20rem]' />
        <img src={Right_image} alt="left-image" className='absolute -top-[25rem] -right-44 ' />
        <div className='w-full max-w-[75rem] mx-auto flex flex-col gap-14 items-center'>
            <div className='w-full flex flex-col items-center gap-4 p-4'>
                <h1 className='text-3xl font-extrabold tracking-wide'>Excellence made affordable</h1>
                <p className='text-sm text-black/50 font-medium'>Tailored pricing options designed to fit every need and budget.</p>
            </div>
            <div className='w-full h-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    pricingPlans.map((i, index)=>(
                        <div key={index} className=' relative p-6 bg-white rounded-2xl flex flex-col gap-4 shadow-md'>
                            <h1 className={`w-max p-1 px-4 text-5xl border-6 ${i?.color } rounded-md font-extrabold `}>{i?.badge}</h1>
                            <h2 className='text-3xl text-black/70 font-bold'>{i?.name}</h2>
                            <p className='text-sm tracking-wider font-medium text-black/60'>{i?.description}</p>
                            <NavLink to='/book' className='text-white py-2 font-semibold rounded duration-300 flex items-center justify-center cursor-pointer hover:bg-black/80 bg-sky-500'>Request Demo </NavLink>
                            <div className='w-full h-full flex flex-col gap-3 bg-[#f3f7fe] p-2 rounded-xl'>
                                <h1 className='font-bold text-lg tracking-wide'>{i?.heading}</h1>
                                {
                                    i?.features.map((item,index)=>(
                                        <h1 key={index} className={`w-full text-sm flex justify-start  items-center ${(i?.name == 'Standard' && index == 0) ? 'text-[#d15d1f] font-bold' : 'font-medium'} ${(index == 0 && i?.name == 'Premium') ? 'text-[#337de2] font-bold' : 'font-medium'} gap-2 `}><FaCheck className={i?.color}/> {item}</h1>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full h-auto bg-white p-5 rounded-2xl flex flex-col gap-8 shadow-md'>
                <div className='w-full flex justify-start items-center gap-2'>
                    <img src="https://studybase.in/wp-content/uploads/2024/03/Platform-Features.png" alt="logo-image" />
                    <h1 className='text-3xl font-bold'>Platform Features</h1>
                    <button className='ml-2 rounded-full text-sky-500 py-1 px-4 font-semibold bg-[#f1f2f3]'>included in all plans</button>
                </div>
                <div className='w-full h-auto grid md:grid-cols-3 gap-4 px-2'>
                    {
                        additionalFeatures.map((item, index)=>(
                            <div key={index} className='bg-[#f3f7fe] p-2 rounded-xl flex flex-col gap-3'>
                                <h1 className='text-sm font-medium text-black/80'>{item?.title}</h1>
                                {
                                    item?.features.map((a, index)=>(
                                        <h1 key={index} className='w-full flex justify-start tracking-wide items-center gap-2 text-sm font-medium text-black/80'><FaCheck className='text-sky-500'/>{a}</h1>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='p-14 w-full h-auto grid sm:grid-cols-2 gap-4 bg-white rounded-2xl drop-shadow-xl'>
                    <div className='w-full flex flex-col gap-10 justify-center'>
                        <h1 className='w-[90%] font-bold text-4xl'>Need more personalized plan?</h1>
                        <p className='w-[85%] font-medium text-black/60'>Get customized plan based on your needs and features that will cater your needs best and in more efficient manner to boost productivity of your institute.</p>
                        <NavLink to='/contact' className='font-medium w-max bg-black/90 hover:bg-sky-500 text-white flex justify-between items-center gap-2 duration-300 px-7 py-3 rounded'>Contact Us <FaAngleRight/></NavLink>
                    </div>
                    <div className='w-full '>
                        <img src={DigiiTeam} alt={DigiiTeam} />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Plans