import React from 'react'

const Stepthird = ({onNext}) => {
  return (
    <div className='flex flex-col gap-4'>

      <div className="flex flex-wrap items-center justify-center gap-4 py-5 sm:py-14 mx-10 sm:mx-20 md:mx-0">

        <div className="w-full sm:w-[45%] flex items-center justify-center">
          <img className='w-52' src="/image/tarazu.jfif"  alt="image not found" />
        </div>
        
        <div className="w-full sm:w-[45%] flex flex-col items-center sm:items-start gap-3">
          <h1 className='text-xl sm:text-[27px] text-center sm:text-left font-bold'>You're in the right place</h1>
          <p className='text-sm text-center sm:text-left font-medium'>Brillinant gets you hands-on to help improve your professional <br/> skills and Knowledge. You'll interact with concepts and solve <br/>fun problems in math, science, and computer science.</p>
        </div>

      </div>

      <div className="flex justify-center items-center">
        <button type="button" onClick={onNext} className={`text-left border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 text-white duration-200 bg-black font-medium rounded-lg text-lg px-14 py-2`}>Continue</button>
      </div>

    </div>
  )
}

export default Stepthird;