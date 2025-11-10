import { useState } from "react";
import { toast } from "sonner";

export const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast. Backend can be added later with Lovable Cloud
    toast.success("MESSAGE_SENT: Your message has been transmitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-4">
      <div className="text-accent retro-text mb-4">
        <span className="animate-cursor-blink">█</span> CONTACT_INTERFACE
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-primary text-sm retro-text block mb-2">
            <span className="text-accent">&gt;</span> NAME:
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-input border-2 border-primary/50 focus:border-primary text-primary px-3 py-2 retro-text outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-primary text-sm retro-text block mb-2">
            <span className="text-accent">&gt;</span> EMAIL:
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-input border-2 border-primary/50 focus:border-primary text-primary px-3 py-2 retro-text outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-primary text-sm retro-text block mb-2">
            <span className="text-accent">&gt;</span> MESSAGE:
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full bg-input border-2 border-primary/50 focus:border-primary text-primary px-3 py-2 retro-text outline-none resize-none transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-terminal-dark font-bold py-2 retro-text hover:bg-primary/80 transition-colors pixel-border border-2 border-primary"
        >
          [TRANSMIT_MESSAGE]
        </button>
      </form>
    </div>
  );
};
