
import smashCake from "../assets/images/son.png";
import snow from "../assets/images/snow.jpg";

const Blogs = () => {
  return (
    <section id="blog" className="max-container mb-12 pt-28">
    <h3 className="font-palanquin text-center text-4xl font-bold uppercase">
    <span className="text-coral-red"> Maeday </span> Dev
    </h3>
    <p className="m-auto mt-4 max-w-lg text-center info-text"> 
     Coming Soon...
    </p>
    <div className="flex justify-center items-center" >
    <img src={smashCake} alt="smash cake" width={300} />
    <img src={snow} alt="smash cake" width={300} />
    </div>
   
 
  </section>
  )
}

export default Blogs
