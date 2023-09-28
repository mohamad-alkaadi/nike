import { useState } from 'react'
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from './sections'
import Nav from './components/Nav'

const App = () => {
  const [nav, setNav] = useState(false)

  return(
    <main className="relative">
      <Nav nav={nav} setNav={setNav}/>
      {!nav &&
      <section>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero nav={nav}/>
        </section>
        <section className="padding">
          <PopularProducts/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding padding-x py-10">
          <Services/>
        </section>
        <section className="bg-pale-blue padding">
          <SpecialOffer/>
        </section>
        <section className="padding">
          <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-16 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
      </section>}
    </main>

  )
}

export default App