import { LucideIcon } from "lucide-react";
import { CSSProperties } from "react";

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  style?: CSSProperties;
}

export const DesktopIcon = ({ icon: Icon, label, onClick, style }: DesktopIconProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute flex flex-col items-center gap-2 p-3 rounded hover:bg-primary/10 transition-colors group"
      style={style}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-card pixel-border border-primary/50 group-hover:border-primary group-hover:animate-pulse-glow transition-all">
        <Icon className="w-10 h-10 text-primary crt-glow" />
      </div>
      <span className="text-primary crt-glow retro-text text-sm select-none">
        {label}
      </span>
    </button>
  );
};
