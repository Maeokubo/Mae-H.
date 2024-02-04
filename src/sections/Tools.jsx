import { iconsImages } from "../constants"

const Tools = () => {
  return (
    <section className="max-container flex justify-center -pt-8">
        <h3 className="lg:max-w-lg mt-2 ml-4 font-montserrat text-neutral-950 text-4xl leading-12 sm:max-w-lg">
          Tools and technologies I've been working with recently
        </h3>
        <div className=" lg:max-w-md mt-2 sm:max-w-md flex flex-wrap">
          {iconsImages.map((tool, index) => (
            <img src={tool.icon} alt={tool.alt} key={index} width={50} className="px-2 py-8 max-w-xs sm:max-w-xs"/>
          ))}
        </div>
  </section>
  )
}

export default Tools
