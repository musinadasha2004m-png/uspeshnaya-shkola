import Header from '../components/Header'
import Hero from '../components/Hero'
import Directions from '../components/Directions'
import Community from '../components/Community'
import Trust from '../components/Trust'
import Process from '../components/Process'
import Promo from '../components/Promo'
import Testimonials from '../components/Testimonials'
import ParentReviews from '../components/ParentReviews'
import FaqForm from '../components/FaqForm'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />
      <Hero />
      <Directions />
      <Community />
      <Trust />
      <Process />
      <Promo />
      <Testimonials />
      <ParentReviews />
      <FaqForm />
    </div>
  )
}
