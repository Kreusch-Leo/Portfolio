import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import Welcome from "./Welcome";
import Landing from "../pages/Landing";
import SnowBG from "./SnowBG";

const StartPoint = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step !== 1) return;

    // Reduced to 3.5s for better UX (5s feels very long for a user)
    const timer = setTimeout(() => {
      setStep(2);
    }, 3500);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="relative w-screen h-screen  bg-black">
      <SnowBG />
      {/* Foreground pages container */}
      <div className="relative z-5 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 1 && ( <Welcome />)},
          {step === 2 && ( <Landing />)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StartPoint;