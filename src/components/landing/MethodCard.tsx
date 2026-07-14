"use client";

import { Link } from "react-router-dom";

type Method = {
  short: string;
  full?: string;
};

export function MethodCard({ method }: { method: Method }) {
  const slug = method.short.toLowerCase();

  return (
    <article className="card">
      <Link to={`/services/${slug}`} className="cardTitle">
        {method.short}
      </Link>
      {method.full && (
        <p className="cardText">
          {method.full} В нашем центре сварных соединений мы проводим контроль
          качества сварных соединений различными методами НК.
        </p>
      )}
      <button className="button buttonPrimary">Подробнее</button>
    </article>
  );
}