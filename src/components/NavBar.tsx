import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ inMain }: { inMain: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', path: '/whoami' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contacts', path: '/contacts' },
    ];

    return (
        <nav className="relative z-50 flex justify-between items-center px-8 py-6 md:px-16">
            {/* Logo */}
            <div className="text-xl font-mono font-bold tracking-tight">
                <span className="text-blue-500">{`{`}</span>
                <span className="text-white">Kreusch-Leo</span>
                <span className="text-blue-500">{`}`}</span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-gray-300 text-lg font-medium">
                {!inMain && (
                    <li className="hover:text-white cursor-pointer">
                        <Link to="/">Return</Link>
                    </li>
                )}
                {navLinks.map((link) => (
                    <li key={link.path} className="hover:text-white cursor-pointer">
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden text-white focus:outline-none z-50"
                aria-label="Toggle Menu"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>

            {/* Mobile Overlay */}
            <div className={`
                fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-40
                ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden
            `}>
                <ul className="flex flex-col gap-8 text-center text-2xl text-gray-300">
                    {!inMain && (
                        <li onClick={toggleMenu} className="hover:text-white">
                            <Link to="/">Return</Link>
                        </li>
                    )}
                    {navLinks.map((link) => (
                        <li key={link.path} onClick={toggleMenu} className="hover:text-white">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;