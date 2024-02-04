const ProjectsList = ({ photo, description, tools, link, linkWeb }) => {
  return(
    <div className="m-auto mt-24 flex flex-col items-center justify-center w-full max-sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/4 p-2 bg-slate-300 hover:bg-gray-100 rounded-xl ">
      <a href={linkWeb} target="_blank" >
        <img src={photo} alt={photo} className=" w-full h-auto max-h-72 object-cover rounded-lg mb-6 shadow-lg hover:shadow-cyan-500/50 " />
      </a>
      <h3 className='md:mt-2 text-sm tracking-wide text-neutral-950 mb-3 px-4 font-palanquin'>{description}</h3>
      <p className='text-lg text-gray-600 mb-4'>{tools}</p>
      <a href={link} target="_blank" className="text-lg p-2 rounded-md text-blue-950 uppercase font-semibold shadow-lg hover:underline hover:shadow-cyan-500/50"> Github </a>
    </div>
  )
}
export default ProjectsList
