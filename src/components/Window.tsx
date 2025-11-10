import { useState, useRef, useEffect } from "react";
import { X, Minus } from "lucide-react";
import { WindowType } from "./Desktop";
import { AboutContent } from "./windows/AboutContent";
import { ProjectsContent } from "./windows/ProjectsContent";
import { ContactContent } from "./windows/ContactContent";
import { ResumeContent } from "./windows/ResumeContent";

interface WindowProps {
  id: WindowType;
  title: string;
  isMinimized: boolean;
  onClose: () => void;
  onMinimize: () => void;
}

export const Window = ({ id, title, isMinimized, onClose, onMinimize }: WindowProps) => {
  const [position, setPosition] = useState({ x: 100 + Math.random() * 200, y: 100 + Math.random() * 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (isMinimized) return null;

  const renderContent = () => {
    switch (id) {
      case "about":
        return <AboutContent />;
      case "projects":
        return <ProjectsContent />;
      case "contact":
        return <ContactContent />;
      case "resume":
        return <ResumeContent />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={windowRef}
      className="fixed w-[600px] max-w-[90vw] window-chrome animate-slide-up"
      style={{
        left: position.x,
        top: position.y,
        zIndex: 50,
      }}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-3 py-2 bg-primary cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="text-terminal-dark font-bold retro-text">{title}</span>
        <div className="flex gap-2">
          <button
            onClick={onMinimize}
            className="w-6 h-6 flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors"
          >
            <Minus className="w-4 h-4 text-terminal-dark" />
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center bg-destructive hover:bg-destructive/80 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-card p-6 max-h-[60vh] overflow-y-auto border-t-2 border-primary/30">
        {renderContent()}
      </div>
    </div>
  );
};
