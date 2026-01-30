import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Instagram, MapPin } from 'lucide-react';

import NavBar from '../components/NavBar';
import SnowBG from '../components/SnowBG';

const Contacts = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <SnowBG />
            <NavBar inMain={false} />

            <main className="flex flex-col items-center w-full pt-10">
                {/* Main Grid Container*/}
                <div className="grid grid-cols-3 grid-rows-5 gap-5 w-3/4 h-[80vh] p-8 mx-auto black-glass relative z-10">
                    {/* 1. Top Left Box 2 columns (text + socialmedia)*/}
                    <div className="white-glass col-span-2 row-span-3 w-full h-full p-8 text-white flex flex-row justify-between relative z-20">
                        {/* Left side text content */}
                        <div className="flex flex-col justify-between w-2/3 h-full pr-4">
                            <div>
                                <h2 className="text-7xl font-bold tracking-tighter text-green-50">
                                    Contact
                                </h2>
                                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                                    I'm currently open to intership proposals,
                                    freelance projects, or full-time
                                    opportunities. Whether you have a question,
                                    a project idea, or just want to connect,
                                    feel free to reach out! I look forward to
                                    hearing from you.
                                </p>
                            </div>

                            <div className="space-y-4 mb-4">
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="p-2 bg-white/10 rounded-md group-hover:bg-green-400/20 transition-colors">
                                        <Mail
                                            className="text-green-300"
                                            size={20}
                                        />
                                    </div>
                                    <span className="text-lg font-medium">
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
                                    <span className="text-lg text-white/70">
                                        Curitiba, Brazil (Remote)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right side Social Media (Moved here) */}
                        <div className="flex flex-col gap-3 w-1/3 h-full justify-center pl-4 border-l border-white/10">
                            <a
                                href="https://www.linkedin.com/in/leonardo-kreusch-a657452b4"
                                target="_blank"
                                className="white-glass flex-1 w-full flex items-center justify-start px-4 gap-3 text-white hover:bg-green-400/10 hover:border-green-400/30 transition-all group"
                            >
                                <Linkedin
                                    size={24}
                                    className="text-green-300 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-medium hidden xl:inline">
                                    LinkedIn
                                </span>
                            </a>
                            <a
                                href="https://github.com/Kreusch-Leo/"
                                target="_blank"
                                className="white-glass flex-1 w-full flex items-center justify-start px-4 gap-3 text-white hover:bg-green-400/10 hover:border-green-400/30 transition-all group"
                            >
                                <Github
                                    size={24}
                                    className="text-green-300 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-medium hidden xl:inline">
                                    GitHub
                                </span>
                            </a>
                            <a
                                href="https://www.instagram.com/kreusch_leo/"
                                target="_blank"
                                className="white-glass flex-1 w-full flex items-center justify-start px-4 gap-3 text-white hover:bg-green-400/10 hover:border-green-400/30 transition-all group"
                            >
                                <Instagram
                                    size={24}
                                    className="text-green-300 group-hover:scale-110 transition-transform"
                                />
                                <span className="font-medium hidden xl:inline">
                                    Instagram
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* 2. Top Right Box (Empty placeholder) */}
                    <div className=" row-span-3 w-full h-full">
                        {/* This must be empty*/}
                    </div>

                    {/* 3. Bottom Layer */}
                    <div className="white-glass col-span-3 row-span-2 row-start-4 relative z-20 flex items-center">
                        <div className="p-10 text-white w-2/3 z-30">
                            <h3 className="text-3xl font-bold mb-2 text-green-50">
                                Open to work :)
                            </h3>
                            <p className="text-white/70 mb-8 text-xl">
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
                                className="px-10 py-4 bg-white/10 border-2 border-green-400/50 text-green-300 font-bold rounded-sm transition-colors text-lg backdrop-blur-md"
                            >
                                <Link to="/whoami">More about me</Link>
                            </motion.button>
                        </div>
                    </div>

                    {/* FIXED IMAGE POSITIONING */}
                    <motion.img
                        src="assets/allgreennoback-left.png"
                        alt="Wireframe character"
                        className="absolute w-[35%] h-auto contrast-125 brightness-90
               z-30 pointer-events-auto cursor-pointer drop-shadow-2xl 
               will-change-filter"
                        style={{
                            bottom: '2%',
                            right: '0%',
                            objectPosition: 'center top',
                            maskImage:
                                'linear-gradient(to bottom, black 80%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, black 80%, transparent 100%)',
                        }}
                        initial={{
                            y: 20,
                            filter: 'saturate(50%) brightness(0.9)',
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        whileHover={{
                            filter: 'saturate(100%) brightness(1.1)',
                            y: -5,
                        }}
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
