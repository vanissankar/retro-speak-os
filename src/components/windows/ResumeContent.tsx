export const ResumeContent = () => {
  return (
    <div className="space-y-4">
      <div className="text-accent retro-text mb-4">
        <span className="animate-cursor-blink">█</span> RESUME.TXT
      </div>
      
      <div className="space-y-4 text-primary text-sm">
        <section>
          <div className="text-accent retro-text mb-2">== EXPERIENCE ==</div>
          <div className="space-y-2 pl-4">
            <div>
              <div className="font-bold">Senior Developer @ Tech Corp</div>
              <div className="text-primary/70">2022 - Present</div>
              <div className="text-xs mt-1">Leading full-stack development projects</div>
            </div>
            <div>
              <div className="font-bold">Full Stack Developer @ StartupXYZ</div>
              <div className="text-primary/70">2020 - 2022</div>
              <div className="text-xs mt-1">Built scalable web applications</div>
            </div>
          </div>
        </section>

        <section className="border-t-2 border-primary/30 pt-4">
          <div className="text-accent retro-text mb-2">== EDUCATION ==</div>
          <div className="pl-4">
            <div className="font-bold">BS in Computer Science</div>
            <div className="text-primary/70">University of Technology, 2020</div>
          </div>
        </section>

        <section className="border-t-2 border-primary/30 pt-4">
          <div className="text-accent retro-text mb-2">== CERTIFICATIONS ==</div>
          <div className="pl-4 space-y-1">
            <div><span className="text-accent">►</span> AWS Certified Developer</div>
            <div><span className="text-accent">►</span> React Advanced Certification</div>
            <div><span className="text-accent">►</span> Full Stack Web Development</div>
          </div>
        </section>

        <button className="w-full mt-6 bg-accent text-terminal-dark font-bold py-2 retro-text hover:bg-accent/80 transition-colors pixel-border border-2 border-accent">
          [DOWNLOAD_RESUME.PDF]
        </button>
      </div>
    </div>
  );
};
