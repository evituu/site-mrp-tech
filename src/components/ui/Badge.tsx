interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#6DFBCB] border border-[#6DFBCB]/30 bg-[#6DFBCB]/10 px-3 py-1.5 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#6DFBCB] animate-pulse" />
      {children}
    </span>
  );
}
