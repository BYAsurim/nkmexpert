"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Method = {
  short: string;
  full?: string;
};

export function MethodCard({ method }: { method: Method }) {
  const slug = method.short.toLowerCase();

  return (
    <Card className="methodCard flex h-full flex-col">
      <CardHeader className="methodCardHeader">
        <CardTitle className="methodCardTitle">
          <Link to={`/services/${slug}`} className="hover:underline">
            {method.short}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="methodCardContent flex-1">
        {method.full && (
          <p>
            {method.full}. В нашем центре сварных соединений выполняем контроль качества по
            регламентированным методикам и прикладным процедурам НК.
          </p>
        )}
      </CardContent>

      <CardFooter className="methodCardFooter mt-auto">
        <Button variant="default" className="methodCardAction">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
}
