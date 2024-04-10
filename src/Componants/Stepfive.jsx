import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";

const Stepfive = ({onNext}) => {

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 py-5">
        <div className="w-full sm:w-1/2 flex items-center justify-center sm:py-16">
          <img className='w-56' src="/image/fanny.jfif"  alt="image not found" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-3">
          <h1 className='text-[27px] font-bold'>You're on your way!</h1>
          <div className="flex text-3xl text-orange-400 pt-2">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
          </div>
          <p className='text-sm text-center sm:text-left font-medium italic'>"Through its engaging and well structured courses. Brilliant has taught me <br/> mathematical concepts that I previously struggled to understand. I now feel <br/> confident approaching both technical job interviews and real world problem <br/> solving situations."</p>
          <h1 className='text-sm font-medium italic'>- jacob S.</h1>
        </div>
      </div>

      <div className="flex justify-center items-center pb-8">
        <button type="button" onClick={onNext} className={`text-left border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 text-white duration-200 bg-black font-medium rounded-lg text-lg px-14 py-2`}>Continue</button>
      </div>

    </div>
  )
}

export default Stepfive;