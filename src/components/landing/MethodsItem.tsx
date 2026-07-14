"use client";

import { useParams } from "react-router-dom";
import { landingContent } from "../../landing/content";
import { MethodCard } from "./MethodCard";

export function MethodsItem() {
  const { method } = useParams<{ method: string }>();
  const methodData = landingContent.methods.find(
    (m) => m.short.toLowerCase() === (method ?? "").toLowerCase(),
  );

  if (!methodData) {
    return <div className="text-center py-8 text-muted-foreground">Метод не найден.</div>;
  }

  return (
    <div className="py-8">
      <MethodCard method={methodData} />
    </div>
  );
}