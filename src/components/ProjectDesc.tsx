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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full text-white items-center">
            {/* Text Content */}
            <div className="flex flex-col space-y-8 p-4 md:p-8 order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-center">
                    {title}
                </h2>

                <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
                    {desc}
                </p>

                {/* Tech Stacks */}
                {stacks && stacks.length > 0 && (
                    <section className="flex flex-wrap gap-4 justify-center items-center">
                        {stacks.map((stack, index) => (
                            <StackIcon
                                key={`${stack}-${index}`}
                                name={stack}
                                width={50}
                                height={50}
                                className="hover:scale-110 transition-transform"
                            />
                        ))}
                    </section>
                )}

                {/* GitHub Link - Only renders if url exists */}
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="items-center justify-center flex social"
                    >
                        <Github size={50} />
                    </a>
                )}
            </div>

            {/* Image Preview */}
            <div className="w-full flex justify-center order-1 lg:order-2">
                <div className="black-glass overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                    <TiltCard
                        src={imageUrl}
                        alt={`${title} project preview`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectDesc;
