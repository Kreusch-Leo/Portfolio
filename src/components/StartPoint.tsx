import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

import Welcome from './Welcome';
import Landing from '../pages/Landing';
import SnowBG from './SnowBG';

const StartPoint = ({ firstRun, onComplete }: { firstRun: boolean, onComplete: () => void }) => {
    // If not firstRun, we start at step 2 
    const [step, setStep] = useState(firstRun ? 1 : 2);

    useEffect(() => {
        if (step === 1) {
            const timer = setTimeout(() => {
                setStep(2);
                onComplete(); //save we completed welcome
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [step, onComplete]);

    return (
        <div className="relative w-screen h-screen bg-black">
            <SnowBG />
            <div className="relative z-5 w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {step === 1 && <Welcome />}
                    {step === 2 && <Landing />}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default StartPoint;