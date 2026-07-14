import { Container } from '../layout/Container'

export function Footer() {
  return (
    <footer className="siteFooter" aria-label="Подвал сайта">
      <Container>
        <div className="siteFooterInner">
          <div className="footerTitle">НКМ-ЭКСПЕРТ</div>
          <div className="footerLegal">ООО "НКМ-ЭКСПЕРТ"</div>
          <div className="footerContacts">
            <a
              className="link"
              href="tel:+79819090638"
              aria-label="Перейти к телефону"
            >
              +7 981 909-06-38
            </a>
            <span className="footerSep">•</span>
            <a
              className="link"
              href="mailto:nkm-epxert@rambler.ru"
              aria-label="Перейти к почте"
            >
              nkm-epxert@rambler.ru
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}