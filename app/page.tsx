import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Story from "./components/Story"
import GameplayShowcase from "./components/GameplayShowcase"
import Roadmap from "./components/Roadmap"
import Team from "./components/Team"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Story />
      <GameplayShowcase />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </main>
  )
}

