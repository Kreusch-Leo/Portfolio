import { Github, Linkedin, Instagram} from 'lucide-react';

const SocialButtons = () => {
    return (
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <button className="group flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-blue-900/20">
              <span>Download CV</span>
            </button>

            <a href="https://github.com/Kreusch-Leo/Portfolio" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-full transition-all duration-300 hover:text-blue-400">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/leonardo-kreusch-a657452b4" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-full transition-all duration-300 hover:text-blue-400">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/kreusch_leo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-full transition-all duration-300 hover:text-blue-400">
              <Instagram size={20} />
            </a>
          </div>
    )
}

export default SocialButtons;