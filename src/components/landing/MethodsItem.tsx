"use client";

import { Section } from '../layout/Section';
import { Link } from 'react-router-dom';
import Button from '../../ui/button';

export function MethodsItem({ method }) {
  return (
    <article className="card">
      <Link
        to={`/services/${method.short.toLowerCase()}`}
        className="cardTitle"
      >
        {method.short}
      </Link>
      {method.full && (
        <p className="cardText">
          {method.full} В нашем центре сварных соединений мы проводим контроль качества сварных соединений различными методами НК.
        </p>
      )}
      <Button variant="default">Подробнее</Button>
    </article>
  );
}