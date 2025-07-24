import React, { useState } from 'react'
import { faq } from './FaqData'
import { motion } from 'motion/react';

import { ImPlus, ImMinus } from "react-icons/im";


const FAQ = () => {

    const [open, setOpen] = useState(null)



  return (
    <div className='w-full h-auto py-20'>
        <div className='w-full max-w-[50rem] mx-auto flex flex-col gap-5 items-center'>
            <h1 className='text-gray-800 font-extrabold text-3xl'>FAQs</h1>
            <div className='w-full flex flex-col gap-5'>
                {
                    faq.map((i, index)=>(
                        <div onClick={()=> open !== null ? setOpen(null) : setOpen(index)} key={index} className='w-full h-auto border select-none border-gray-300 rounded-lg'>
                            <h1 className='text-lg font-medium tracking-wide p-5 flex justify-between items-center cursor-pointer'>{i?.title}<span>{open == index ? <ImMinus className='text-sky-500'/> : <ImPlus className='text-sky-500'/>}</span></h1>
                            <motion.div
                            initial={{height:0}}
                            animate={{height: open == index ? 'auto' : 0}}
                            transition={{duration:0.3}}
                            className='w-full overflow-hidden'
                            >
                                <div className='w-full p-4 border-t border-gray-300'>
                                <p className='text-black/50 tracking-wide font-medium'>{i?.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default FAQ