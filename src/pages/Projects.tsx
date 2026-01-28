import { useEffect, useState } from "react";
import GlassPlate from "../components/GlassPlate";
import ProjectDesc from "../components/ProjectDesc";
import SnowBG from "../components/SnowBG";
import NavBar from "../components/NavBar";

interface Project {
  title: string;
  imageUrl: string;
  desc: string;
  githubUrl?: string;
  version?: string;
  stacks?: string[];
}

const Projects = () => {
  // Initialize as an empty array of type Project
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // Use the full path relative to the public folder
  fetch(`${import.meta.env.BASE_URL}docs/projects.json`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      setProjects(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Could not load the JSON file:", err);
      setLoading(false);
    });
}, []);

  if (loading) return <div className="text-white">Loading projects...</div>;

  return (
    <main>
      <NavBar inMain={false}></NavBar>
      <SnowBG />
    <div className="flex flex-col flex-wrap justify-center items-center gap-6 p-6 bg-black w-full min-h-screen">
      {projects.map((project, index) => (
        <GlassPlate key={index}>
          <ProjectDesc 
            title={project.title} 
            imageUrl={project.imageUrl} 
            desc={project.desc} 
            githubUrl={project.githubUrl || ""}
            stacks={project.stacks || []}
          />
        </GlassPlate>
      ))}
    </div>
    </main>
  );
};

export default Projects;