import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export function Card({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>) {
  return (
    <div
      className={`card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}