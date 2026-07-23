"use client";

import { useParams } from "react-router-dom";
import { landingContent } from "../../landing/content";
import { MethodCard } from "./MethodCard";

export function MethodsItem() {
  const { method } = useParams<{ method: string }>();
  const methodData = landingContent.methods.find(
    (entry) => entry.short.toLowerCase() === (method ?? "").toLowerCase(),
  );

  if (!methodData) {
    return (
      <div className="servicePage">
        <div className="servicePageInner">Метод не найден.</div>
      </div>
    );
  }

  return (
    <div className="servicePage">
      <div className="servicePageInner">
        <MethodCard method={methodData} />
      </div>
    </div>
  );
}
