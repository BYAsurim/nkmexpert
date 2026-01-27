import { Contacts } from '../components/landing/Contacts'
import { Documents } from '../components/landing/Documents'
import { Footer } from '../components/landing/Footer'
import { Geography } from '../components/landing/Geography'
import { Header } from '../components/landing/Header'
import { Hero } from '../components/landing/Hero'
import { Methods } from '../components/landing/Methods'
import { Reasons } from '../components/landing/Reasons'

export function LandingPage() {
  return (
    <div className="page">
      <Header />
      <main className="main" aria-label="Основной контент">
        <Hero />
        <Methods />
        <Documents />
        <Geography />
        <Reasons />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

