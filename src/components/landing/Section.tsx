import { Container } from '../layout/Container'

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="section">
      <Container>{children}</Container>
    </div>
  )
}