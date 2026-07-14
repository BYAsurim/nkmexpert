import { Container } from '../layout/Container'

export function Header() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="siteHeaderInner">
          <div className="brand">
            <img
              className="brandLogo"
              src="/src/assets/logo.png"
              alt="НКМ-ЭКСПЕРТ"
              loading="eager"
              decoding="async"
            />
            <div className="brandText">
              <div className="brandTitle">Лаборатория неразрушающего контроля</div>
              <div className="brandLegal">ООО "НКМ-ЭКСПЕРТ"</div>
            </div>
          </div>

          <nav className="nav" aria-label="Навигация по странице">
            <a
              className="navLink"
              href="#services"
              aria-label="Перейти к услугам"
            >
              Услуги
            </a>
            <a
              className="navLink"
              href="#certifications"
              aria-label="Перейти к аттестациям"
            >
              Аттестации
            </a>
            <a
              className="navLink"
              href="#geography"
              aria-label="Перейти к географии"
            >
              География
            </a>
            <a
              className="navLink"
              href="#reasons"
              aria-label="Перейти к причинам"
            >
              Причины
            </a>
            <a
              className="navLink"
              href="#contacts"
              aria-label="Перейти к контактам"
            >
              Контакты
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}