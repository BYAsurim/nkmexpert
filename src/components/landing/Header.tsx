import { Container } from '../layout/Container'
import logo from '../../assets/logo.png'

const navItems = [
  { href: '#services', label: 'Методы' },
  { href: '#certifications', label: 'Аттестации' },
  { href: '#geography', label: 'География' },
  { href: '#reasons', label: 'Почему мы' },
  { href: '#contacts', label: 'Контакты' },
] as const

export function Header() {
  return (
    <header className="siteHeader">
      <Container>
        <div className="siteHeaderInner">
          <a className="brand" href="#top" aria-label="Перейти к началу">
            <img
              className="brandLogo"
              src={logo}
              alt="НКМ-ЭКСПЕРТ"
              loading="eager"
              decoding="async"
            />
            <span className="brandText">
              <span className="brandTitle">Лаборатория неразрушающего контроля</span>
              <span className="brandLegal">ООО "НКМ-ЭКСПЕРТ"</span>
            </span>
          </a>

          <nav className="nav" aria-label="Навигация по странице">
            {navItems.map((item) => (
              <a key={item.href} className="navLink" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  )
}

