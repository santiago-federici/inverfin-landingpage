import { cn } from "../lib/utils.ts";

interface Props {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function Button(props: Props) {
  const { variant, size, disabled = false, className, children } = props;

  const baseClasses =
    "px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses =
    {
      primary: "bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "bg-secondary text-foreground hover:bg-secondary/80",
      outline:
        "border border-border-foreground text-foreground hover:bg-foreground hover:text-background",
      ghost: "text-foreground hover:bg-muted",
    }[variant as "primary" | "secondary" | "outline" | "ghost"] ||
    "bg-primary text-primary-foreground hover:bg-primary/90";

  const sizeClasses =
    {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    }[size as "small" | "medium" | "large"] || "text-sm";

  const finalClass = cn(baseClasses, variantClasses, sizeClasses, className);

  return (
    <button className={finalClass} disabled={disabled}>
      {children}
    </button>
  );
}
