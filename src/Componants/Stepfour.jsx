import { useState } from 'react'

const Stepfour = ({ onNext }) => {

  const [toggle, setToggle] = useState(true);

  const handleclick = () => {
    setToggle(false)
  }

  return (
    <div className='flex flex-col gap-4'>

      <div className="space-y-3 pt-5">
        <h1 className='text-center text-xl sm:text-2xl md:text-3xl font-semibold'>Which describes you best?</h1>
        <p className='text-center text-sm sm:text-base'>This will help us personalize your experience</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 py-10">
        <button onClick={handleclick} className="flex flex-col items-center z-10 justify-center w-56 h-48 border-2 focus:border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 focus:border-orange-200 hover:border-orange-200 rounded-md p-5">
          <img className='px-5' src="/image/arithmetic.jfif" alt="image not found" />
          <h2 className='text-lg font-semibold'>Arithmetic</h2>
          <h1 className='text-xl text-gray-400 font-medium'>Introductory</h1>
        </button>
        <button onClick={handleclick} className="flex flex-col items-center z-10 justify-center w-56 h-48 border-2 focus:border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 focus:border-orange-200 hover:border-orange-200 rounded-md p-5">
          <img className='py-5' src="/image/algebra.jfif" alt="image not found" />
          <h2 className='text-lg font-semibold'>Basic Algebra</h2>
          <h1 className='text-xl text-gray-400 font-medium'>Foundational</h1>
        </button>
        <button onClick={handleclick} className="flex flex-col items-center z-10 justify-center w-56 h-48 border-2 focus:border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 focus:border-orange-200 hover:border-orange-200 rounded-md p-5">
          <img className='py-5' src="/image/interAlgebra.jfif" alt="image not found" />
          <h2 className='text-lg font-semibold'>Intermediate Algebra</h2>
          <h1 className='text-xl text-gray-400 font-medium'>Intermediate</h1>
        </button>
        <button onClick={handleclick} className="flex flex-col items-center z-10 justify-center w-56 h-48 border-2 focus:border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 focus:border-orange-200 hover:border-orange-200 rounded-md p-5">
          <img className='px-5' src="/image/Culculus.jfif" alt="image not found" />
          <h2 className='text-lg font-semibold'>Calculus</h2>
          <h1 className='text-xl text-gray-400 font-medium'>Advanced</h1>
        </button>
      </div>

      <div className="flex justify-center items-center mb-10">
        <button type="button" onClick={onNext} className={`text-left border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 text-white duration-200 bg-black font-medium rounded-lg text-lg px-14 py-2 disabled:cursor-not-allowed disabled:bg-[#b7b7b7]`} disabled={toggle}>Continue</button>
      </div>

    </div>
  )
}

export default Stepfour;