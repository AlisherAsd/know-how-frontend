import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "success" | "danger";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-950 text-white shadow-[0_18px_40px_-20px_rgba(15,23,42,0.8)] hover:bg-slate-800",
  secondary:
    "bg-teal-400 text-slate-950 shadow-[0_18px_40px_-20px_rgba(45,212,191,0.8)] hover:bg-teal-300",
  ghost: "bg-white/80 text-slate-900 ring-1 ring-slate-200 hover:bg-white",
  success:
    "bg-emerald-500 text-white shadow-[0_18px_40px_-20px_rgba(16,185,129,0.8)] hover:bg-emerald-400",
  danger:
    "bg-rose-500 text-white shadow-[0_18px_40px_-20px_rgba(244,63,94,0.8)] hover:bg-rose-400",
};

export const AppButton = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}: Props) => {
  return (
    <button
      type={type}
      className={`inline-flex cursor-pointer items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
