import { landingContent } from '../../landing/content'
import { Section } from '../layout/Section'

export function Methods() {
  return (
    <Section
      id="methods"
      title="Услуги / методы неразрушающего контроля"
      subtitle="Контроль качества сварных соединений различными методами НК."
    >
      <div className="cardGrid">
        {landingContent.methods.map((m) => (
          <article key={m.short} className="card">
            <h3 className="cardTitle">{m.short}</h3>
            {m.full && <p className="cardText">{m.full}</p>}
          </article>
        ))}
      </div>
    </Section>
  )
}

