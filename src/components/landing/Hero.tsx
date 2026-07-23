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
            <div className="heroPanelTitle">Ключевые параметры</div>
            <div className="heroStats">
              <div className="heroStat">
                <div className="heroStatValue">20+ лет</div>
                <div className="heroStatLabel">Опыт сотрудников</div>
              </div>
              <div className="heroStat">
                <div className="heroStatValue">24 часа</div>
                <div className="heroStatLabel">Выезд и расчет</div>
              </div>
              <div className="heroStat">
                <div className="heroStatValue">В день контроля</div>
                <div className="heroStatLabel">Заключения и отчеты</div>
              </div>
              <div className="heroStat">
                <div className="heroStatValue">По всей РФ</div>
                <div className="heroStatLabel">География работ</div>
              </div>
            </div>
            <div className="heroNote">
              Контроль сварных швов, трубопроводов, металлоконструкций и резервуаров. Сопутствующие
              услуги: механические испытания, стилоскопирование и другие работы по НК.
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
