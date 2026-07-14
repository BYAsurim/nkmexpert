import type { PropsWithChildren, ReactNode } from 'react'
import { Container } from './Container'

type Props = PropsWithChildren<{
  id?: string
  title?: ReactNode
  subtitle?: ReactNode
}>

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section">
      <Container>
        {(title ?? subtitle) && (
          <header className="sectionHeader">
            {title && <h2 className="sectionTitle">{title}</h2>}
            {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}

