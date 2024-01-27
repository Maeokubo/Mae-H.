const AboutMe = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12" >
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">About Me</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          I started my coding journey almost exactly a year ago and still exploring other technologies and frameworks that catch my interest. 
          As a Junior developer, I possess a versatile skill set that empowers me to proficiently navigate both the frontend and backend domains of web development.
          So I'm so thankful to be able to do both with the foundation I built during bootcamp{' '}
          <a href="https://www.techupth.com/" target="_blank" className="text-indigo-600 underline hover:text-indigo-800 focus:text-indigo-800">
            TechUp Thailand
          </a>.
          If you're looking for a developer to add to your team, I'd love to hear from you!    
        </p>
      </div>
    </section>
  )
}

export default AboutMe
