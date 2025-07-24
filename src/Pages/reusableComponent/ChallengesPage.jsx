import React from 'react'
import Challenges from './Challenges'
import { Data } from './Data'


const ChallengesPage = () => {
  return (
    <div className='w-full h-auto mt-15'>
        <div className='w-full max-w-[75rem] mx-auto h-auto flex flex-col gap-10 py-20 px-5'>
            <h1 className='w-full text-3xl font-bold'><span className='text-sky-500'>Solution</span> tailored to your unique needs and challenges</h1>
            {
              Data.map((item, index)=>(
                <Challenges key={index} data={item} index={index}/>
              ))
            }
        </div>
    </div>
  )
}

export default ChallengesPage