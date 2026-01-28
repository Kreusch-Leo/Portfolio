import { Github } from "lucide-react";

type ProjectDescProps = {
    title: string,
    imageUrl: string,
    desc: string,
    githubUrl?: string,
};

const ProjectDesc = ({ title, imageUrl, desc, githubUrl }: ProjectDescProps) => {
  return (
    
    <div className="grid grid-cols-2 grid-rows-1 gap-5 w-full text-white">
      
      {/* Left side (text) */}
      <div className="justify-left flex flex-col space-y-15 p-15">
        <h2 className="text-6xl font-bold uppercase text-center">{title}</h2>
        <p className="text-center line-clamp-3 text-xl">{desc}</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="items-center justify-center flex social">
              <Github size={50} />
            </a>
      </div>

    <div className="flex items-center justify-center w-full black-glass">

      {/* Right side (image) */}
      <img
        src={imageUrl}
        alt={`${title} image`}
        className="w-full object-cover"
        />
        </div>
    </div>
  );
};

export default ProjectDesc;
