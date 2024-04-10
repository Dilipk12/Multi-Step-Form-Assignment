import { useState } from "react"

const Stepfirst = ({ onNext }) => {

  const data = [
    { title: "Student or soon to be enrolled", img: "/image/student.png" },
    { title: "Professional pursuing a career", img: "/image/professional.png" },
    { title: "Parent of a school-age child", img: "/image/parent.png" },
    { title: "Lifelong learner", img: "/image/learner.png" },
    { title: "Teacher", img: "/image/teacher.png" },
    { title: "Other", img: "/image/other.png" }
  ]

  const [toggle, setToggle] = useState(true);

  const handleclick = (e) => {
    setToggle(false)
  }

  const outsiteBtnClick = (e) => {
    if (e.target.type === undefined) {
      setToggle(true)
    }
  }

  return (
    <div className="flex flex-col gap-4" onClick={outsiteBtnClick} >

      <div className="space-y-3 py-3">
        <h1 className='text-center text-xl sm:text-2xl md:text-3xl font-semibold'>Which describes you best?</h1>
        <p className='text-center text-sm sm:text-base'>This will help us personalize your experience</p>
      </div>

      <div className="relative flex gap-2 flex-col justify-center items-center mx-10 sm:mx-20 md:mx-0">
        {
          data.map((val, i) =>
            <button key={i} type="button" onClick={handleclick} className="flex items-center text-left sm:text-center gap-4 border-[1px] focus:border-2 focus:shadow-md focus:shadow-gray-300 border-gray-200 focus:border-orange-200 hover:border-orange-200 text-black font-medium rounded-lg text-sm sm:text-lg px-5 py-[14px] w-full md:w-1/2"><img className="w-7" src={val.img} alt="icon not fount" />{val.title}</button>
          )
        }
      </div>

      <div className="flex justify-center items-center">
        <button type="button" onClick={onNext} className={`text-left border-2 focus:shadow-lg focus:shadow-gray-300 border-gray-200 text-white duration-200 bg-black font-medium rounded-lg text-lg px-14 py-2 disabled:cursor-not-allowed disabled:bg-[#b7b7b7]`} disabled={toggle}>Continue</button>
      </div>

    </div>
  )
}

export default Stepfirst;