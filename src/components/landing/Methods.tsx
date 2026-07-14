"use client";

import { landingContent } from '../../landing/content';
import { Section } from '../layout/Section';
import { Link } from 'shadcn/ui';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

export function Methods() {
  return (
    <Section
      id="services"
      title="Услуги / методы неразрушающего контроля"
      subtitle="Контроль качества сварных соединений различными методами НК."
    >
      <Helmet>
        <title>Услуги / методы неразрушающего контроля</title>
        <meta name="description" content="Контроль качества сварных соединений различными методами НК." />
      </Helmet>
      <div className="cardGrid">
        {landingContent.methods.map((m) => (
          <article key={m.short} className="card">
            <Link
              href={`/services/${m.short.toLowerCase()}`}
              className="cardTitle"
            >
              {m.short}
            </Link>
            {m.full && (
              <p className="cardText">
                {m.full} В нашем центре сварных соединений мы проводим контроль качества сварных соединений различными методами НК.
              </p>
            )}
            <Link
              href={`/services/${m.short.toLowerCase()}`}
              className="button buttonPrimary"
            >
              Подробнее
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}