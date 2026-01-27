import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="relative z-10 flex justify-between items-center px-8 py-6 md:px-16">
        <div className="text-xl font-mono font-bold tracking-tight">
          <span className="text-blue-500">{`{`}</span>
          <span className="text-white">Kreusch-Leo</span>
          <span className="text-blue-500">{`}`}</span>
        </div>
        
        <ul className="hidden md:flex gap-8 text-gray-300 text-lg font-medium">
          <li className="hover:text-white cursor-pointer transition-colors bg-black/10 p-3 backdrop-blur-[2px] rounded-2xl border border-white/10"><Link to="/whoami">About</Link></li>
          <li className="hover:text-white cursor-pointer transition-colors bg-black/10 p-3 backdrop-blur-[2px] rounded-2xl border border-white/10"><Link to="/projects">Projects</Link></li>
          <li className="hover:text-white cursor-pointer transition-colors bg-black/10 p-3 backdrop-blur-[2px] rounded-2xl border border-white/10"><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    );
}

export default NavBar; 