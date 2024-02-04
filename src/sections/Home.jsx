import maeday from "../assets/images/maeday.jpg";
import { Button } from "../components";

const Home = () => {
  
  return (
    <section id="home" className={`{darkMode ? "dark" : '' } w-full flex xl:flex-row flex-col justify-center gap-10 max-container`} >
      <div className='relative xl:w-3/6 flex flex-col justify-center items-start w-full max-xl:padding-x top-36 h-[650px]'>
        <p className='text-3xl font-montserrat text-yellow mb-[-28px]'>
          Hazuki Okubo
        </p>

        <h1 className='mt-10 font-palanquin text-[60px] max-sm:text-[40px] max-sm:leading-[82px] font-bold'>
          <span className='xl:text-neutral-600 xl:whitespace-nowrap relative z-10 pr-10'>
          Hi, My name's Mae
          </span> 
          <br/>
          <span className="text-yellow inline-block mt-1">I'm a Full Stack Software Development</span>  
        </h1>

        <p className='font-montserrat text-neutral-600 text-lg leading-8 mt-4 mb-14 sm:max-w-lg'>
          currently based in Tokyo, Japan and Bangkok, Thailand
        </p>
        <Button />
      </div>
      
      <div className='relative flex-1 flex justify-center items-center h-[700px] max-xl:py-40 backdrop-contrast-125 bg-white/30'>
          <img src={maeday} alt='maeday photo' width={300} height={500} className="object-contain z-10 mt-16 rounded-xl blur-sm hover:blur-none"/>
        </div> 
    </section>
  )
}

export default Home
