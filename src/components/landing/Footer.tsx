import { Container } from '../layout/Container'
import { landingContent } from '../../landing/content'

export function Footer() {
  return (
    <footer className="siteFooter" aria-label="Подвал сайта">
      <Container>
        <div className="siteFooterInner">
          <div className="footerBrand">
            <div className="footerTitle">{landingContent.company.name}</div>
            <div className="footerLegal">{landingContent.company.legal}</div>
          </div>
          <div className="footerContacts">
            <a className="link" href={`tel:${landingContent.contacts.phone}`}>
              {landingContent.contacts.phone}
            </a>
            <span className="footerSep">•</span>
            <a className="link" href={`mailto:${landingContent.contacts.email}`}>
              {landingContent.contacts.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

