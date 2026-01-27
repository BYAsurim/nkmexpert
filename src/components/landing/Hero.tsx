import { Container } from '../layout/Container'
import { landingContent } from '../../landing/content'

export function Hero() {
  return (
    <section id="top" className="hero">
      <Container>
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="kicker">{landingContent.company.legal}</p>
            <h1 className="heroTitle">{landingContent.company.name}</h1>
            <p className="heroLead">{landingContent.hero.title}</p>
            <p className="heroMeta">{landingContent.hero.methodsInline}</p>

            <div className="heroActions">
              <a className="button buttonPrimary" href="#contacts">
                Оставить заявку
              </a>
              <a className="button buttonGhost" href={`tel:${landingContent.contacts.phone}`}>
                {landingContent.contacts.phone}
              </a>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Ключевая информация">
            <dl className="kvList">
              <div className="kvItem">
                <dt className="kvKey">Методы НК</dt>
                <dd className="kvVal">{landingContent.methods.map((m) => m.short).join(', ')}</dd>
              </div>
              <div className="kvItem">
                <dt className="kvKey">Нормативы</dt>
                <dd className="kvVal">ГОСТ, РД</dd>
              </div>
              <div className="kvItem">
                <dt className="kvKey">География</dt>
                <dd className="kvVal">РФ, Москва, выезд</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  )
}

