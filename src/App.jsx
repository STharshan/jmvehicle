import BenefitsSection from "./components/BenefitsSection"
import Hero from "./components/Hero"
import ProcessSection from "./components/How-Work"
import Navbar from "./components/Navbar"
import ExpenseControlCenter from "./components/Service"
import FinancialSuccessSection from "./components/Whychooseus"

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <FinancialSuccessSection />
      <ProcessSection />
      <BenefitsSection />
      <ExpenseControlCenter />
    </>
  )
}

export default App
