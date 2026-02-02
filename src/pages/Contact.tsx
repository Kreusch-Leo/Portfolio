import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Instagram, MapPin } from 'lucide-react';

import NavBar from '../components/NavBar';
import SnowBG from '../components/SnowBG';

const Contacts = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsLargeScreen(window.innerWidth >= 768);
        checkScreen(); // Check on mount
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <SnowBG />
            <NavBar inMain={false} />

            <main className="flex flex-col items-center w-full pt-10 pb-20 md:pb-0">
                {/* Main Grid Container - Responsive grid and height */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-5 w-[90%] md:w-3/4 min-h-fit md:h-[80vh] p-4 md:p-8 mx-auto black-glass relative z-10">
                    {/* 1. Top Left Box (text + socialmedia) */}
                    <div className="white-glass col-span-1 md:col-span-2 md:row-span-3 w-full h-full p-6 md:p-8 text-white flex flex-col md:flex-row justify-between relative z-20">
                        {/* Left side text content */}
                        <div className="flex flex-col justify-between w-full md:w-2/3 h-full md:pr-4">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-green-50">
                                    Contact
                                </h2>
                                <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
                                    I'm currently open to internship proposals,
                                    freelance projects, or full-time
                                    opportunities. Feel free to reach out!
                                </p>
                            </div>

                            <div className="space-y-4 my-6 md:mb-4">
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="p-2 bg-white/10 rounded-md group-hover:bg-green-400/20 transition-colors">
                                        <Mail
                                            className="text-green-300"
                                            size={20}
                                        />
                                    </div>
                                    <span className="text-sm md:text-lg font-medium break-all">
                                        kreuschleoanc@gmail.com
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-md">
                                        <MapPin
                                            className="text-green-300"
                                            size={20}
                                        />
                                    </div>
                                    <span className="text-sm md:text-lg text-white/70">
                                        Curitiba, Brazil (Remote)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right side Social Media - Vertical on desktop, horizontal/grid on mobile */}
                        <div className="flex flex-row md:flex-col gap-3 w-full md:w-1/3 h-auto md:h-full justify-center md:pl-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
                            <a
                                href="https://www.linkedin.com/in/leonardo-kreusch-a657452b4"
                                target="_blank"
                                className="white-glass flex-1 md:w-full flex items-center justify-center md:justify-start p-3 md:px-4 gap-3 text-white hover:bg-green-400/10 transition-all group"
                            >
                                <Linkedin
                                    size={24}
                                    className="text-green-300"
                                />
                                <span className="font-medium hidden xl:inline">
                                    LinkedIn
                                </span>
                            </a>
                            <a
                                href="https://github.com/Kreusch-Leo/"
                                target="_blank"
                                className="white-glass flex-1 md:w-full flex items-center justify-center md:justify-start p-3 md:px-4 gap-3 text-white hover:bg-green-400/10 transition-all group"
                            >
                                <Github size={24} className="text-green-300" />
                                <span className="font-medium hidden xl:inline">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="https://www.instagram.com/kreusch_leo/"
                                target="_blank"
                                className="white-glass flex-1 md:w-full flex items-center justify-center md:justify-start p-3 md:px-4 gap-3 text-white hover:bg-green-400/10 transition-all group"
                            >
                                <Instagram
                                    size={24}
                                    className="text-green-300"
                                />
                                <span className="font-medium hidden xl:inline">
                                    Instagram
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* 2. Top Right Box (Hidden on mobile to save space) */}
                    <div className="hidden md:block md:row-span-3 w-full h-full"></div>

                    {/* 3. Bottom Layer */}
                    <div className="white-glass col-span-1 md:col-span-3 md:row-span-2 md:row-start-4 relative z-19 flex items-center">
                        <div className="p-6 md:p-10 text-white w-full md:w-2/3 z-30">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-green-50">
                                Open to work :)
                            </h3>
                            <p className="text-white/70 mb-6 md:mb-8 text-lg md:text-xl">
                                <span className="text-green-300 font-bold">
                                    Q1 2026
                                </span>
                            </p>
                            <motion.button
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: '#4ade80',
                                    color: '#000',
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto px-10 py-4 bg-white/10 border-2 border-green-400/50 text-green-300 font-bold rounded-sm transition-colors text-lg backdrop-blur-md"
                            >
                                <Link to="/whoami">More about me</Link>
                            </motion.button>
                        </div>
                    </div>

                    {/* FIXED IMAGE POSITIONING - Scaled and moved for mobile */}
                    <motion.img
                        src="assets/allgreennoback-left.png"
                        alt="Wireframe character"
                        // Responsive positioning moved to className
                        className="absolute w-[60%] md:w-[35%] h-auto contrast-125 brightness-90
                                   z-20 pointer-events-none md:pointer-events-auto drop-shadow-2xl 
                                   will-change-filter bottom-0 -right-[10%] md:bottom-[2%] md:right-0"
                        style={{
                            objectPosition: 'center top',
                            maskImage:
                                'linear-gradient(to bottom, black 80%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, black 80%, transparent 100%)',
                        }}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: isLargeScreen ? 1 : 0,
                        }}
                        whileHover={
                            isLargeScreen
                                ? {
                                      y: -5,
                                  }
                                : {}
                        }
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                    />
                </div>
            </main>
        </div>
    );
};

export default Contacts;
