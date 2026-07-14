import { Button as ShadcnButton } from "shadcn/ui/button";

export function Button({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>) {
  return (
    <ShadcnButton
      className={`button ${className}`}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}