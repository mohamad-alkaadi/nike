import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from './sections'
import Nav from './components/Nav'
const App = () => {
  return(
    <main className="relative">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding ">
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
    </main>
  )
}

export default App