export const AboutContent = () => {
  return (
    <div className="space-y-4">
      <div className="text-primary crt-glow">
        <div className="mb-4 text-lg retro-text">
          <span className="text-accent">&gt;</span> SYSTEM_USER: Anissankar
        </div>
        <div className="space-y-2 text-sm leading-relaxed">
          <p>
            <span className="text-accent">$</span> Full-stack developer with a passion for building innovative web experiences.
          </p>
          <p>
            <span className="text-accent">$</span> Specializing in React, TypeScript, and modern web technologies.
          </p>
          <p>
            <span className="text-accent">$</span> Always exploring new tech and pushing creative boundaries.
          </p>
        </div>
      </div>
      
      <div className="border-t-2 border-primary/30 pt-4 mt-4">
        <div className="text-accent retro-text mb-2">SKILLS_LOADED:</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {["React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL"].map((skill) => (
            <div key={skill} className="text-primary">
              <span className="text-accent">►</span> {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
