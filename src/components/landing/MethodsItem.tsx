"use client";

import { useParams, Link } from "react-router-dom";
import { landingContent } from "../../landing/content";
import Button from "@/components/ui/button";

export function MethodsItem() {
  const { method } = useParams<{ method: string }>();
  const methodData = landingContent.methods.find(
    (m) => m.short.toLowerCase() === (method ?? "").toLowerCase(),
  );

  if (!methodData) {
    return <div>Метод не найден.</div>;
  }

  return (
    <article className="card">
      <Link
        to={`/services/${methodData.short.toLowerCase()}`}
        className="cardTitle"
      >
        {methodData.short}
      </Link>
      {methodData.full && (
        <p className="cardText">
          {methodData.full} В нашем центре сварных соединений мы проводим
          контроль качества сварных соединений различными методами НК.
        </p>
      )}
      <Button variant="default">Подробнее</Button>
    </article>
  );
}