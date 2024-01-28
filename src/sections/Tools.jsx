import { iconsImages } from "../constants"

const Tools = () => {
  return (
    <section className="max-container flex justify-center flex-wrap">
     <div className="mt-12 grid lg:grid-cols-4 mdgrid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        <h3 className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-2xl leading-8 sm:max-w-lg">
          Tools and technologies I've been working with recently
        </h3>
        <div className=" lg:max-w-md mt-2 font-montserrat text-slate-gray sm:max-w-md flex flex-flow-col ">
          {iconsImages.map((tool, index) => (
            <img src={tool.icon} alt={tool.alt} key={index} width={70} className="px-4 py-7 "/>
          ))}
        </div>
      </div>
  </section>
  )
}

export default Tools
