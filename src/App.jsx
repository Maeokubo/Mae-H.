import { Home, AboutMe,Tools, Demo, Blogs, Footer } from "./sections";
import { Navbar,Contact } from "./components";

const App = () => {
  return (
    <main className="relative">

      <Navbar />
      <Contact/>
      
      <section className="lg:padding-r lg:padding-l wide:padding-r padding-b">
        <Home />
      </section>
      <section className="padding">
        <AboutMe />
      </section>
      <section className='padding-x py-10'>
        <Tools />
      </section>
      <section className="padding">
        <Demo />
      </section>
      <section className="padding-x py-10 bg-zinc-300">
        <Blogs />
      </section>
      <section className="bg-stone-900 padding-x padding-t pb-8">
        <Footer />
      </section>
     
    </main>
  )
}

export default App
