import { useState } from "react";
import { DesktopIcon } from "./DesktopIcon";
import { Window } from "./Window";
import { Taskbar } from "./Taskbar";
import { VoiceCommand } from "./VoiceCommand";
import { User, Briefcase, Mail, FileText } from "lucide-react";

export type WindowType = "about" | "projects" | "contact" | "resume";

interface WindowState {
  id: WindowType;
  isOpen: boolean;
  isMinimized: boolean;
}

const iconData = [
  { id: "about" as WindowType, icon: User, label: "About Me", x: 50, y: 50 },
  { id: "projects" as WindowType, icon: Briefcase, label: "Projects", x: 50, y: 180 },
  { id: "contact" as WindowType, icon: Mail, label: "Contact", x: 50, y: 310 },
  { id: "resume" as WindowType, icon: FileText, label: "Resume", x: 50, y: 440 },
];

export const Desktop = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: "about", isOpen: false, isMinimized: false },
    { id: "projects", isOpen: false, isMinimized: false },
    { id: "contact", isOpen: false, isMinimized: false },
    { id: "resume", isOpen: false, isMinimized: false },
  ]);

  const openWindow = (id: WindowType) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isOpen: true, isMinimized: false } : w
      )
    );
  };

  const closeWindow = (id: WindowType) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false, isMinimized: false } : w))
    );
  };

  const minimizeWindow = (id: WindowType) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: !w.isMinimized } : w))
    );
  };

  const closeAllWindows = () => {
    setWindows((prev) => prev.map((w) => ({ ...w, isOpen: false, isMinimized: false })));
  };

  return (
    <div className="fixed inset-0 bg-terminal-dark crt-scanlines overflow-hidden">
      {/* Desktop Icons */}
      <div className="relative w-full h-full">
        {iconData.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            onClick={() => openWindow(icon.id)}
            style={{ left: icon.x, top: icon.y }}
          />
        ))}

        {/* Windows */}
        {windows.map(
          (window) =>
            window.isOpen && (
              <Window
                key={window.id}
                id={window.id}
                title={iconData.find((i) => i.id === window.id)?.label || ""}
                isMinimized={window.isMinimized}
                onClose={() => closeWindow(window.id)}
                onMinimize={() => minimizeWindow(window.id)}
              />
            )
        )}
      </div>

      {/* Voice Command */}
      <VoiceCommand onCommand={(cmd) => {
        if (cmd.includes("about")) openWindow("about");
        else if (cmd.includes("projects")) openWindow("projects");
        else if (cmd.includes("contact")) openWindow("contact");
        else if (cmd.includes("resume")) openWindow("resume");
        else if (cmd.includes("close all")) closeAllWindows();
      }} />

      {/* Taskbar */}
      <Taskbar
        openWindows={windows.filter((w) => w.isOpen && !w.isMinimized)}
        onWindowClick={(id) => minimizeWindow(id)}
      />
    </div>
  );
};
