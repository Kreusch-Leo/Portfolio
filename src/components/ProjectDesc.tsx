import { Github } from 'lucide-react';
import { StackIcon } from '../components/icons/StackIcons';
import type { StackIconName } from '../components/icons/stackIcons.registry';
import TiltCard from './TiltCard';

type ProjectDescProps = {
    title: string;
    imageUrl: string;
    desc: string;
    githubUrl?: string;
    stacks?: StackIconName[];
};

const ProjectDesc = ({
    title,
    imageUrl,
    desc,
    githubUrl,
    stacks,
}: ProjectDescProps) => {
    return (
        /* Use flex-col for mobile to control order, lg:grid for desktop */
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 w-full text-white items-center py-4">
            
            {/* 1. IMAGE PREVIEW (Order 1 on Mobile, Right side on Desktop) */}
            <div className="w-full flex justify-center order-1 lg:order-2 px-2">
                <div className="black-glass overflow-hidden rounded-xl border border-white/10 shadow-2xl w-full max-w-[500px] lg:max-w-none">
                    <TiltCard
                        src={imageUrl}
                        alt={`${title} project preview`}
                    />
                </div>
            </div>

            {/* 2. TEXT & ICONS CONTAINER (Order 2 on Mobile, Left side on Desktop) */}
            <div className="flex flex-col space-y-6 md:space-y-8 p-2 md:p-8 order-2 lg:order-1 w-full">
                
                {/* TECH STACKS (Ordered to appear after Image on Mobile, but stays in flow on Desktop) */}
                {stacks && stacks.length > 0 && (
                    <section className="flex flex-wrap gap-4 justify-center items-center order-1 lg:order-3">
                        {stacks.map((stack, index) => (
                            <StackIcon
                                key={`${stack}-${index}`}
                                name={stack}
                                width={45} // Slightly smaller for better mobile fit
                                height={45}
                                className="hover:scale-110 transition-transform"
                            />
                        ))}
                    </section>
                )}

                {/* TITLE (Order 2 on Mobile) */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-center order-2 lg:order-1 leading-tight px-2">
                    {title}
                </h2>

                {/* DESCRIPTION (Order 3 on Mobile) */}
                <p className="text-base md:text-xl text-gray-300 text-center leading-relaxed order-3 lg:order-2 px-2">
                    {desc}
                </p>

                {/* GITHUB LINK (Order 4 on Mobile) */}
                {githubUrl && (
                    <div className="flex justify-center items-center order-4 lg:order-4 min-w-full">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social hover:text-green-400 transition-colors min-w-full justify-center flex items-center"
                        >
                            <Github size={40} />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDesc;