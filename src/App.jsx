import { Home, AboutMe,Tools, Demo, Blogs, Footer } from "./sections";
import { Navbar,Contact } from "./components";

const App = () => {
  return (
    <main className="relative">

      <Navbar />
      <Contact/>
      
      <section className="lg:padding-r lg:padding-l wide:padding-r padding-b px-10">
        <Home />
      </section>
      <section className="padding">
        <AboutMe />
      </section>
      <section className='padding-x py-10'>
        <Tools />
      </section>
      <section className="padding px-4">
        <Demo />
      </section>
      <section className="padding-x py-20 bg-zinc-300">
        <Blogs />
      </section>
      <section className="bg-stone-900 padding ">
        <Footer />
      </section>
     
    </main>
  )
}

export default App
