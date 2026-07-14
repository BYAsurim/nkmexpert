"use client";

import { landingContent } from '../../landing/content';
import { Section } from '../layout/Section';
import { Link } from 'shadcn/ui';

export function MethodsItem({ method }) {
  return (
    <article className="card">
      <Link
        href={`/services/${method.short.toLowerCase()}`}
        className="cardTitle"
      >
        {method.short}
      </Link>
      {method.full && (
        <p className="cardText">
          {method.full} В нашем центре сварных соединений мы проводим контроль качества сварных соединений различными методами НК.
        </p>
      )}
      <Link
        href={`/services/${method.short.toLowerCase()}`}
        className="button buttonPrimary"
      >
        Подробнее
      </Link>
    </article>
  );
}