import NavBar from '../components/NavBar';
import SocialButtons from '../components/Social';


const Landing = () => {
  return (
    <div className="min-h-screen w-screen text-white relative overflow-hidden font-sans selection:bg-blue-500 selection:text-white">

      {/* Navbar */}
        <NavBar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 mt-10 md:mt-20 max-w-7xl mx-auto bg-black/5 backdrop-blur-[2px] border border-white/10 rounded-2xl py-12 md:py-16">
        
        {/* Left Column: Text */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
          <div>
            <h2 className="text-lg md:text-xl font-light tracking-[0.2em] text-gray-200 mb-2">
              H e l l o !
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              I'm Leo
            </h1>
            <p className="text-blue-500 text-lg md:text-xl font-mono tracking-widest">
              S o f t w a r e &nbsp; D e v e l o p e r
            </p>
          </div>

          {/* Buttons / Socials */}
            <SocialButtons />
        </div>

        {/* Right Column: Image */}
<div className="flex-1 mt-12 md:mt-0 relative flex justify-center md:justify-end">
          
          {/* Added -mt-12 and md:-mt-24 to pull the image upward */}
          <div className="relative w-80 h-80 md:w-150 md:h-175 -mr-8 md:-mr-16 -mt-12 md:-mt-32 flex items-end">
            
            <img 
              src='assets/aime.png'
              alt="Leo character" 
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              style={{
                // Adjusted to 80% to keep more of the image visible before the fade
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;