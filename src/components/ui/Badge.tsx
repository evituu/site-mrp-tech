interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function Badge({ children, className = "", light = false }: BadgeProps) {
  const colors = light
    ? "text-[#6A3F91] border border-[#6A3F91]/30 bg-[#6A3F91]/8"
    : "text-[#6DFBCB] border border-[#6DFBCB]/30 bg-[#6DFBCB]/10";
  const dot = light ? "bg-[#6A3F91]" : "bg-[#6DFBCB]";

  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase ${colors} px-3 py-1.5 ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse`} />
      {children}
    </span>
  );
}
