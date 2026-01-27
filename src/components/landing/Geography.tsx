import { landingContent } from '../../landing/content'
import { Section } from '../layout/Section'

export function Geography() {
  return (
    <Section
      id="geography"
      title="География работ и выезд"
      subtitle="Организация работ и выезд на объект заказчика."
    >
      <ul className="list">
        {landingContent.geography.map((item) => (
          <li key={item} className="listItem">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  )
}

