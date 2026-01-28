import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STACK_ICONS_DATA, type StackIconName } from './stackIcons.registry';

type StackIconProps = {
    name: StackIconName;
    width?: number;
    height?: number;
    className?: string;
};

export const StackIcon = ({
    name,
    width = 64,
    height = 64,
    className = "",
}: StackIconProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const icon = STACK_ICONS_DATA[name];

    if (!icon) return null;

    return (
        <div 
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute -top-10 z-10 whitespace-nowrap rounded-md bg-white/10 px-3 py-1 text-sm font-medium text-white shadow-xl backdrop-blur-md border border-white/20"
                    >
                        {/* The Ghost Box Content */}
                        {name}
                        {/* Optional Triangle Arrow */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-white/10 border-r border-b border-white/20" />
                    </motion.div>
                )}
            </AnimatePresence>

            <svg
                width={width}
                height={height}
                viewBox={icon.viewBox}
                xmlns="http://www.w3.org/2000/svg"
                className={`${className} transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
            >
                {icon.paths.map((path, index) => (
                    <path 
                        key={index} 
                        d={path.d} 
                        fill={path.fill || "currentColor"} 
                    />
                ))}
            </svg>
        </div>
    );
};