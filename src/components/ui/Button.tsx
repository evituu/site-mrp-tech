import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "dark";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#6DFBCB] text-black border border-[#6DFBCB] px-6 py-3 hover:bg-transparent hover:text-[#6DFBCB]",
    outline:
      "bg-transparent text-white border border-white/30 px-6 py-3 hover:border-[#6DFBCB] hover:text-[#6DFBCB]",
    ghost:
      "bg-transparent text-[#6DFBCB] border border-[#6DFBCB] rounded-full px-5 py-2 text-xs hover:bg-[#6DFBCB] hover:text-black",
    dark:
      "bg-transparent text-[#101014] border border-black/20 px-6 py-3 hover:border-[#6A3F91] hover:text-[#6A3F91]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
