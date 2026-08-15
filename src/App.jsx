import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Tasks from './components/Tasks'
import Showcase from './components/Showcase'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Tasks />
        <Showcase />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Features />
      </main>
      <Footer />
    </>
  )
}
