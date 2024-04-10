import { GrFormPrevious } from "react-icons/gr";

const ProgressBar = ({ step, onPrev }) => {

    return (
        <>
            <div className="flex items-center justify-center gap-2 md:px-20">
                {
                    step > 1 && <div className='text-2xl cursor-pointer' onClick={onPrev}><GrFormPrevious /></div>
                }
                
                <input className="w-full h-[5px]" max={5} type="range" value={step} onChange={(e)=>{
                    e.target.value = step;
                }} />
            </div>
        </>

    )
}

export default ProgressBar;