import Mainpage from './Mainpage';
import Stepfirst from './Stepfirst';
import Stepsecond from './Stepsecond';
import Stepthird from './Stepthird';
import Stepfour from './Stepfour';
import Stepfive from './Stepfive';
import ProgressBar from "./ProgressBar"

import { useState } from 'react';


const MultiStep = () => {

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setStep((prevStep) => prevStep - 1);
    };
    
    return (
        <div className="px-5 md:px-10 pt-10 space-y-3">

            {
                step <= 5 && <ProgressBar step={step} onPrev={handlePrev} />
            }

            {step === 1 && <Stepfirst onNext={handleNext} />}
            {step === 2 && <Stepsecond onNext={handleNext} />}
            {step === 3 && <Stepthird onNext={handleNext} />}
            {step === 4 && <Stepfour onNext={handleNext} />}
            {step === 5 && <Stepfive onNext={handleNext} />}
            {step === 6 && <Mainpage />}

        </div>
    )
}

export default MultiStep;