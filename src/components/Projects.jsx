const ProjectsList = ({ photo, description, tools, link, linkWeb }) => {
  return(
    <div className="relative flex flex-col items-center justify-center w-full max-sm:w-full md:w-3/4 lg:w-4/5 xl:w-5/6 p-4 bg-slate-300 rounded-xl ">
      <a href={linkWeb} target="_blank" >
        <img src={photo} alt={description} className="w-full h-auto max-h-72 object-cover rounded-lg mb-6 shadow-lg hover:shadow-cyan-500/50 " />
      </a>
      <h3 className='mt-3 md:mt-6 text-xl font-semibold text-gray-800 mb-2'>{description}</h3>
      <p className='text-lg text-gray-600 mb-2'>{tools}</p>
      <a href={link} target="_blank" className="text-lg text-blue-800 shadow-lg hover:underline hover:shadow-cyan-500/50"> Repo </a>
    </div>
  )
}
export default ProjectsList
