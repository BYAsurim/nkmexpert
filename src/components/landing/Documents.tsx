import { landingContent } from '../../landing/content'
import { Section } from '../layout/Section'

export function Documents() {
  return (
    <Section
      id="certifications"
      title="Аттестации и нормативы"
      subtitle="Документы и допуски, подтверждающие выполнение работ по нормативной базе."
    >
      <div className="docGrid">
        {landingContent.documents.map((item) => (
          <div key={item.label} className="docRow">
            <div className="docLabel">{item.label}</div>
            <div className="docValue">{item.value}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

