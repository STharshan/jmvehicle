import BenefitsSection from "./components/BenefitsSection"
import Hero from "./components/Hero"
import ProcessSection from "./components/How-Work"
import { StickyScroll } from "./components/Navbar"
import FinancialSuccessSection from "./components/Whychooseus"

function App() {
  
  return (
    <>

      <Hero />
      {/* <StickyScroll /> */}
      <FinancialSuccessSection />
      <ProcessSection />
      <BenefitsSection />
    </>
  )
}

export default App
