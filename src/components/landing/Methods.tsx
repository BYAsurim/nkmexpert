"use client";

import { landingContent } from "../../landing/content";
import { Section } from "../layout/Section";
import { Helmet } from "react-helmet-async";
import { MethodCard } from "./MethodCard";

export function Methods() {
  return (
    <Section
      id="services"
      title="Услуги / методы неразрушающего контроля"
      subtitle="Контроль качества сварных соединений различными методами НК."
    >
      <Helmet>
        <title>Услуги / методы неразрушающего контроля</title>
        <meta
          name="description"
          content="Контроль качества сварных соединений различными методами НК."
        />
      </Helmet>

      <div className="cardGrid">
        {landingContent.methods.map((m) => (
          <MethodCard key={m.short} method={m} />
        ))}
      </div>
    </Section>
  );
}