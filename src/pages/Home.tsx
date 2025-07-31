import Hero from "../components/home/Hero"
import History from "../components/home/History"
import TemperamentsCards from "../components/home/TemperamentsCards"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll mb-[52px] md:h-auto md:overflow-hidden md:mb-0 md:mt-[58px]">
      <Hero />
      <History />
      <TemperamentsCards />
      <Footer />
    </div>
  )
}
