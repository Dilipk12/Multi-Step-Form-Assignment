import { useEffect, useState } from "react";

const Mainpage = () => {

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoader(true);
        }, 2000);
    }, [])

    return (
        <div className="flex flex-col items-center justify-center gap-5 w-full h-full sm:h-screen py-10 sm:py-0">
            {
                loader ?
                    <>  
                        {/* Cards content */}
                        <div className="space-y-5">
                            <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold'>Learning paths based on your answers</h1>
                            <p className='text-center text-sm text-gray-500 font-medium'>Choose one to get started. You can switch anytime.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4 py-10">

                            <div className="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-5 border-2 w-64 sm:w-[450px] border-gray-200 rounded-md px-6 py-8">
                                <div className="absolute -top-4 bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold uppercase">Most Popular</div>
                                <p className='font-medium'><span className="font-bold">Foundational Math </span> Build your foundational skills in algebra, geometry, and probability.</p>
                                <img className='w-[180px]' src="/image/machine.jfif" alt="image not found" />
                            </div>
                            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-5 border-2 w-64 sm:w-[450px] border-gray-200 rounded-md px-6 py-8">
                                <p className='font-medium'><span className="font-bold">Mathematical Thinking </span> Build your foundational skills in algebra, geometry, and probability.</p>
                                <img className='w-[180px]' src="/image/machine.jfif" alt="image not found" />
                            </div>
                        </div>
                    </>
                        // Loader content
                    : <div className='h-screen w-full flex flex-col gap-5 items-center justify-center'>
                        <div className="border-8 border-orange-500 border-l-8 border-l-gray-300 animate-spin h-14 w-14 rounded-full"></div>
                        <h1 className="text-center text-sm sm:text-lg font-bold">Finding learning path recommendations for you based on <br /> your responses</h1>
                    </div>
            }

        </div>
    )
}

export default Mainpage