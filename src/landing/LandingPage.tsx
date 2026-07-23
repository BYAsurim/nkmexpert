import { Contacts } from '../components/landing/Contacts'
import { Documents } from '../components/landing/Documents'
import { Footer } from '../components/landing/Footer'
import { Geography } from '../components/landing/Geography'
import { Header } from '../components/landing/Header'
import { Hero } from '../components/landing/Hero'
import { MatrixRain } from '../components/landing/MatrixRain'
import { Methods } from '../components/landing/Methods'
import { Reasons } from '../components/landing/Reasons'

export function LandingPage() {
  return (
    <div className="page">
      <MatrixRain />
      <div className="pageContent">
        <Header />
        <main className="main" aria-label="РћСЃРЅРѕРІРЅРѕР№ РєРѕРЅС‚РµРЅС‚">
          <Hero />
          <Methods />
          <Documents />
          <Geography />
          <Reasons />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  )
}
