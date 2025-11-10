import { useEffect, useState } from "react";

interface BootSequenceProps {
  onBootComplete: () => void;
}

const bootMessages = [
  "ANISSANKAR OS v1.0",
  "Copyright (c) 2025 Anissankar Systems",
  "",
  "Checking system memory... OK",
  "Loading kernel modules... OK",
  "Initializing display driver... OK",
  "Starting audio subsystem... OK",
  "Mounting file systems... OK",
  "Loading user profile... OK",
  "",
  "Starting desktop environment...",
  "",
];

export const BootSequence = ({ onBootComplete }: BootSequenceProps) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < bootMessages.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, bootMessages[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onBootComplete, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onBootComplete]);

  return (
    <div className="fixed inset-0 bg-terminal-dark flex items-center justify-center crt-scanlines">
      <div className="w-full max-w-3xl px-8">
        {visibleLines.map((line, index) => (
          <div
            key={index}
            className="text-terminal-green crt-glow retro-text text-lg mb-2 animate-boot-text"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {line || "\u00A0"}
          </div>
        ))}
        {currentIndex < bootMessages.length && (
          <span className="inline-block w-3 h-5 bg-terminal-green animate-cursor-blink ml-1" />
        )}
      </div>
    </div>
  );
};
