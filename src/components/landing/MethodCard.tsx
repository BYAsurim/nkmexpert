"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { Link } from "react-router-dom";

type Method = {
  short: string;
  full?: string;
};

export function MethodCard({ method }: { method: Method }) {
  const slug = method.short.toLowerCase();

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="p-4">
        <CardTitle className="text-xl">
          <Link to={`/services/${slug}`} className="hover:underline">
            {method.short}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4 py-2 flex-1">
        {method.full && (
          <p className="text-muted-foreground text-sm">
            {method.full} В нашем центре сварных соединений мы проводим контроль
            качества сварных соединений различными методами НК.
          </p>
        )}
      </CardContent>

      <CardFooter className="p-4 flex justify-end">
        <Button
          variant="default"
          onClick={() => {
            // небольшая визуальная подсказка
          }}
        >
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
}