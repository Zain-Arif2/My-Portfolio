import React from "react";

const VARIANT_CLASSES = {
  primary:
    "bg-gradient-accent text-[#04120f] font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 border border-transparent",
  secondary:
    "bg-[rgba(255,255,255,0.04)] text-[#f4f4f6] font-medium border border-rgba(255,255,255,0.12) hover:border-[rgba(45,212,191,0.5)] hover:text-[#2dd4bf] hover:bg-[rgba(255,255,255,0.07)] hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md",
  ghost:
    "bg-transparent text-muted font-medium hover:text-[#f4f4f6] hover:bg-[rgba(255,255,255,0.05)] active:bg-[rgba(255,255,255,0.08)]",
  danger:
    "bg-rose-600/90 text-white font-medium hover:bg-rose-500 hover:shadow-lg active:translate-y-0 border border-rose-500/30",
  icon:
    "bg-[rgba(255,255,255,0.04)] text-muted border border-[rgba(255,255,255,0.08)] hover:text-[#2dd4bf] hover:border-[rgba(45,212,191,0.4)] hover:-translate-y-0.5 active:translate-y-0 p-3 rounded-full",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-xs rounded-full",
  md: "px-6 py-3 text-sm rounded-[16px]",
  lg: "px-8 py-3.5 text-base rounded-[16px]",
};

export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) {
  const isIconOnly = variant === "icon";
  const sizeStyle = isIconOnly ? "" : (SIZE_CLASSES[size] ?? SIZE_CLASSES.md);

  const classes = `inline-flex items-center justify-center gap-2 font-body cursor-pointer
    transition-all duration-300 ease-out whitespace-nowrap select-none
    ${VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary}
    ${sizeStyle}
    ${className}`;

  const Tag = as || (href ? "a" : "button");

  return (
    <Tag href={href} className={classes} {...props}>
      {icon && iconPosition === "left" && (
        <span className="text-lg leading-none transition-transform duration-200 group-hover:scale-110">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>
      )}
    </Tag>
  );
}