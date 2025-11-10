const projects = [
  {
    name: "Retro Portfolio OS",
    description: "An interactive retro computer OS simulation built with React",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    name: "AI Chat Platform",
    description: "Real-time chat application with AI-powered responses",
    tech: ["Node.js", "WebSockets", "OpenAI"],
  },
  {
    name: "E-Commerce Dashboard",
    description: "Full-featured admin panel with analytics and inventory management",
    tech: ["React", "MongoDB", "Express"],
  },
];

export const ProjectsContent = () => {
  return (
    <div className="space-y-4">
      <div className="text-accent retro-text mb-4">
        <span className="animate-cursor-blink">█</span> LOADING_PROJECTS...
      </div>
      {projects.map((project, index) => (
        <div key={index} className="border-2 border-primary/30 p-4 hover:border-primary transition-colors">
          <div className="text-primary crt-glow font-bold mb-2 retro-text">
            [{index + 1}] {project.name}
          </div>
          <p className="text-primary/80 text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/20 text-primary text-xs retro-text pixel-border border-primary/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
