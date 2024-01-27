import maeday from "../assets/images/maeday.jpg";
import { Button } from "../components";

const Home = () => {
  
  return (
    <section className={`{darkMode ? "dark" : '' } w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container`} >
      <div className='relative xl:w-3/6 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-3xl font-montserrat text-coral-red mb-[-28px]'>
          Hazuki Okubo
        </p>

        <h1 className='mt-10 font-palanquin text-[60px] max-sm:text-[40px] max-sm:leading-[82px] font-bold'>
          <span className='xl:text-neutral-600 xl:whitespace-nowrap relative z-10 pr-10'>
          Hi, My name's Mae
          </span> 
          <br/>
          <span className="text-coral-red inline-block mt-1">I'm a Full Stack Software Development</span>  
        </h1>

        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-14 sm:max-w-lg'>
          currently based in Tokyo, Japan and Bangkok, Thailand
        </p>
        <Button />
      </div>
      
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary'>
          <img
            src={maeday}
            alt='Maeday'
            width={300}
            height={500}
            className="object-contain z-10 mt-16 rounded-2xl border-dotted border-4 border-sky-500"
          />
        </div> 
    </section>
  )
}

export default Home
