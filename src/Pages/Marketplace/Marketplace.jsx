import React from 'react'
import { partners } from './Partners'
import BookADemo from '../Book_a_demo/BookADemo'

import Iphone from '../../assets/iPhone.webp'
import Bottom_logo from '../../assets/digii_bottom.png'
import Left_logo from '../../assets/left-top.png'
import Right_logo from '../../assets/right-bottom.png'
import Right_image from '../../assets/right-square.png'
import { FaAngleRight } from "react-icons/fa6";
import FAQ from '../FAQ\'s/FAQ'
import { NavLink } from 'react-router-dom'

const Marketplace = () => {
  return (
    <div className='relative w-full mx-auto h-auto pb-10 px-5'>
        <div className='absolute left-0 top-0 mx-auto w-full h-[38rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] bg-[#f4f8fe] overflow-hidden flex justify-center'>
            <img src={Left_logo} alt="left-image" className='absolute top-0 left-0' />
            <img src={Right_image} alt="center-image" className='absolute  md:-bottom-[80%] w-[35rem]' />
            <img src={Right_logo} alt="right-image" className='absolute bottom-0 right-0' />
        </div>
        <div className='relative w-full max-w-[75rem] mx-auto py-16  mb-5 grid sm:grid-cols-2'>
            <div className='w-full h-full flex flex-col justify-start items-start gap-4'>
                <h1 className='max-w-[90%] leading-8 md:leading-12 text-xl md:text-3xl font-bold md:tracking-wide'>Effortlessly integrate existing capabilities or introduce new ones to ensure your institution stays ahead.</h1>
                <NavLink to={'/book'} className='w-max px-7 py-3 rounded bg-black/80 text-white flex items-center gap-2 font-medium cursor-pointer'>Book a Demo <FaAngleRight/></NavLink>
            </div>
            <div className='w-full h-full'>
                <img src="https://studybase.in/wp-content/uploads/2024/03/Marketplace.png" alt="" />
            </div>
        </div>
        <div className='w-full max-w-[75rem] mx-auto flex flex-col items-center gap-4 py-20'>
            <h1 className='text-3xl font-extrabold'>Unleash your <span className='text-sky-500'>institution's potential</span></h1>
            <p className='text-black/50 font-medium tracking-wide'>From plugins to value-added services, easily connect your favorite tools at one place.</p>
            <div className='w-full h-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    partners.map((i, index)=>(
                        <div key={index} className='w-full h-[20rem] bg-[#f3f7fe] rounded-lg hover:bg-white border border-[#f3f7fe] p-5 hover:border-sky-500 hover:drop-shadow-xl transition-all duration-300 flex flex-col justify-between'>
                            <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-2xl font-bold'>{i?.title}</h1>
                            <p className='text-black/50 font-medium max-w-[90%]'>{i?.description}</p>
                            </div>
                            <div className='w-full flex justify-end items-end'>
                            <img src={i?.logo} alt="logo" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='w-full max-w-[75rem] mx-auto py-20'>
                <div className='relative w-full h-[34rem] flex bg-[#337de2] p-10 rounded-3xl justify-center'>
                    <div className='w-full sm:w-1/2 h-full flex flex-col gap-7 justify-center items-start'>
                        <h1 className='w-full sm:w-[70%] text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide'>Already using one of our add-ons? Get onboard Digii School!</h1>
                        <p className='s-full sm:w-[80%] tracking-wide font-medium text-white'>If your institution already benefits from our add-on solutions, it’s time to take your experience to the next level with Digii School. Join to seamlessly integrate your existing tools on the Digii School platform.</p>
                        <NavLink to={'/book'} className='w-max px-7 py-3 rounded text-black/80 bg-white flex items-center gap-2 font-medium cursor-pointer'>Book a Demo <FaAngleRight/></NavLink>
                    </div>
                    <div className='relative w-1/2 h-full hidden sm:flex justify-center items-center'>
                        <div className='w-[85%] h-[100%] rounded-full border-2 border-[#84b0ed] flex items-center justify-center'>
                        <div className='w-[70%] h-[70%] rounded-full border-6 border-[#84b0ed]'/>
                        </div>
                        <img src={Iphone} alt="" className='absolute -bottom-26' />
                    </div>
                    <img src={Left_logo} alt="" className='absolute top-0 left-0' />
                    <img src={Bottom_logo} alt="" className='absolute bottom-0 ' />
                </div>
        </div>
       <div className='w-full h-auto bg-[#f3f7fe] py-20'>
                <div className='w-full  max-w-[75rem] mx-auto sm:h-[25rem] grid sm:grid-cols-2 gap-4 p-1'>
                    <div className='w-full h-full flex flex-col gap-5 justify-center items-start'>
                        <h1 className='text-3xl font-extrabold text-sky-500'>Digii School API</h1>
                        <p className='text-black/50 font-medium tracking-wide w-[95%]'>We offer APIs for developers to build cool apps on top of our infrastructure to support education. You need to register with us before consuming API. We also would like to know what you are planning to build and how it will benefit students and education system. Digii School API’s are in private beta and offered to very limited developers at the moment, send us an email on sales@studybase.in to know more.</p>
                        <NavLink to={'/book'} className='w-max px-7 py-3 rounded bg-black/80 text-white flex items-center gap-2 font-medium cursor-pointer'>Request a trail <FaAngleRight/></NavLink>
                    </div>
                    <div className='w-full h-full overflow-hidden p-2'>
                        <img src="https://studybase.in/wp-content/uploads/2024/03/resources.png" alt="side image" className='w-full h-full object-cover rounded-2xl' />
                    </div>
                </div>
       </div>
       <FAQ/>
        <BookADemo/>
    </div>
  )
}

export default Marketplace



// https://studybase.in/wp-content/uploads/2024/03/Marketplace.png