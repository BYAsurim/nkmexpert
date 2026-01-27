import { landingContent } from '../../landing/content'
import { Section } from '../layout/Section'

export function Reasons() {
  return (
    <Section
      id="reasons"
      title="Почему выбирают нас"
      subtitle="Коротко о том, что важно для корпоративных и тендерных процедур."
    >
      <div className="twoCol">
        <ul className="list">
          {landingContent.reasons.map((item) => (
            <li key={item} className="listItem">
              {item}
            </li>
          ))}
        </ul>
        <div className="note">
          <p className="noteTitle">Работа с корпоративными клиентами</p>
          <p className="noteText">
            Предоставляем информацию по аттестациям и нормативной базе для закупочных
            процедур и тендерной документации.
          </p>
        </div>
      </div>
    </Section>
  )
}

