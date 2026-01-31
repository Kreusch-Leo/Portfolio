import { motion } from 'motion/react';
import NavBar from '../components/NavBar';
import SocialButtons from '../components/Social';

const Landing = () => {
  return (
    // Changed w-screen to w-full and added overflow-x-hidden to prevent horizontal scroll
    <div className="min-h-screen w-full text-white relative overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">

      {/* Navbar */}
      <NavBar inMain={true} />

      {/* Main Content */}
      {/* Adjusted padding and margins for mobile (px-4, mt-6) */}
      <main className="relative z-5 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 mt-6 lg:mt-20 max-w-7xl mx-auto bg-black/5 backdrop-blur-[2px] border border-white/10 rounded-2xl py-8 lg:py-16">
        
        {/* Left Column: Text */}
        <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left z-10">
          <div>
            <h2 className="text-base lg:text-xl font-light tracking-[0.2em] text-gray-200 mb-2">
              H e l l o !
            </h2>
            {/* Reduced mobile text size from 6xl to 4xl/5xl to prevent line breaks */}
            <h1 className="text-5xl lg:text-8xl font-bold text-white mb-4">
              I'm Leo
            </h1>
            <p className="text-blue-500 text-base lg:text-xl font-mono tracking-widest">
              S o f t w a r e &nbsp; D e v e l o p e r
            </p>
          </div>

          {/* Buttons / Socials */}
          <div className="flex justify-center lg:justify-start">
            <SocialButtons />
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 mt-8 lg:mt-0 relative flex justify-center lg:justify-end w-full">
          {/* Removed negative margins on mobile (mr-0, mt-0) 
              Ensured width is responsive (w-full max-w-[320px] on mobile)
          */}
          <div className="relative w-80 h-80 lg:w-150 lg:h-175 -mr-8 lg:-mr-16 mt-12 lg:-mt-32 flex items-end">
            
            <motion.img 
              src='assets/allgreennoback.png'
              alt="Leo character" 
              className="w-full h-full object-contain lg:object-cover contrast-125 brightness-90 scale-110 origin-bottom"
              style={{
                objectPosition: '50% 25%', 
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)'
              }}
              initial={{
                filter: "saturate(25%) brightness(0.9)"
              }}
              whileHover={{ 
                filter: "saturate(50%) brightness(1.1)"
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;