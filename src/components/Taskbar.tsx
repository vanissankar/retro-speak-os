import { useEffect, useState } from "react";
import { WindowType } from "./Desktop";

interface TaskbarProps {
  openWindows: { id: WindowType; isOpen: boolean; isMinimized: boolean }[];
  onWindowClick: (id: WindowType) => void;
}

export const Taskbar = ({ openWindows, onWindowClick }: TaskbarProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-card border-t-2 border-primary flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2">
        <div className="px-4 py-1 bg-primary text-terminal-dark font-bold retro-text cursor-pointer hover:bg-primary/80 transition-colors">
          START
        </div>
        <div className="flex gap-2">
          {openWindows.map((window) => (
            <button
              key={window.id}
              onClick={() => onWindowClick(window.id)}
              className="px-4 py-1 bg-muted text-primary retro-text hover:bg-muted/80 transition-colors pixel-border border-primary/50"
            >
              {window.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="text-primary crt-glow retro-text">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};
