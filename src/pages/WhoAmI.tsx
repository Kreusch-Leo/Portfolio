import React from "react"; 
import { useRef, useEffect } from "react";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

import NavBar from "../components/NavBar.tsx";
import SnowBG from "../components/SnowBG.tsx";
import TiltCard from "../components/TiltCard.tsx";

// --- Types ---
type StepType = "education" | "work" | "volunteer";

interface Step {
    id: number;
    title: string;
    type: StepType;
    date: string;
    imageUrl: string;
    description?: string;
}

const WhoAmI: React.FC = () => {
    
    const [trajectory, setTrajectory] = React.useState<Step[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
      // Use the full path relative to the public folder
      fetch(`${import.meta.env.BASE_URL}docs/trajectory.json`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          setTrajectory(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Could not load the JSON file:", err);
          setLoading(false);
        });
    }, []);
    
    if (loading) return <div className="text-white">Loading projects...</div>;

    return (
        <main className="bg-[#0a0f0c] min-h-screen">
            <SnowBG />
            
            {/* 1. Fixed Navigation */}
            <div className="fixed top-0 left-0 w-full z-50">
                <NavBar inMain={false} />
            </div>

            {/* 2. Page Header */}
            <header className="relative pt-32 pb-10 flex flex-col items-center justify-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-green-500 tracking-tighter uppercase italic">
                        Who Am I?
                    </h1>
                    <div className="mt-4 h-1 w-24 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                </motion.div>
            </header>

            {/* 3. Timeline Section */}
            <div className="relative overflow-hidden">
                {/* Central Vertical Line */}
                <div className="fixed left-1/2 -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-transparent via-green-500/20 to-transparent top-0 z-0" />
                <div className="w-full max-w-3/4 mx-auto z-10 flex flex-col gap-32 py-[20vh]">
                    {trajectory.map((step, index) => (
                        <WhoAmIItem key={step.id} step={step} index={index} />
                    ))}
                </div>
            
            </div>
                
        </main>
    );
};

const WhoAmIItem: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Spring physics for smoother transitions
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    
    const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const scale = useSpring(rawScale, springConfig);

    const rawOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const opacity = useSpring(rawOpacity, springConfig);

    const blurValue = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 10]);
    const filter = useTransform(blurValue, (v) => `blur(${v/3}px)`);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity, filter }}
            className={`flex items-center w-full relative z-10 ${isEven ? "flex-row" : "flex-row-reverse"}`}
        >
            {/* IMAGE SIDE */}
            <div className="flex-1 flex justify-center px-4 md:px-12">
                <TiltCard src={step.imageUrl} alt={step.title} />
            </div>

            {/* CENTER NODE */}
            <div className="relative shrink-0 z-20 flex items-center justify-center w-12 md:w-24">
                <div className="w-16 h-16 rounded-full bg-[#0a0f0c] border-2 border-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    {step.type === "education" && <GraduationCap className="w-7 h-7 text-green-400" />}
                    {step.type === "work" && <Briefcase className="w-7 h-7 text-green-400" />}
                    {step.type === "volunteer" && <Heart className="w-7 h-7 text-green-400" />}
                </div>
                {/* Horizontal Connector Line */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-12 md:w-24 h-0.5 bg-green-500/30 -z-10 ${isEven ? "left-full" : "right-full"}`} />
            </div>

            {/* CONTENT SIDE */}
            <div className="flex-1 px-4 md:px-12 text-left">
                <div className="bg-green-950/10 backdrop-blur-md border border-green-500/20 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-green-400 mb-2">{step.title}</h2>
                    <h3 className="text-green-300 italic mb-4">{step.date}</h3>
                    <p className="text-green-100/70 leading-relaxed font-light">
                        {step.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default WhoAmI;