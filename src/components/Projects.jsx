const ProjectsList = ({ photo, description, tools, link }) => {
  return(
    <div className="relative flex flex-col items-center justify-center w-full max-sm:w-full md:w-3/4 lg:w-4/5 xl:w-5/6 p-4 bg-slate-300">
      <img src={photo} alt={description} className="w-full h-auto max-h-72 object-cover rounded-lg mb-4" />
      <h3 className='mt-6 md:mt-10 text-xl font-semibold text-gray-800 mb-2'>{description}</h3>
      <p className='text-lg text-gray-600 mb-2'>{tools}</p>
      <a href={link} className='text-lg text-blue-800 hover:underline'>Repo</a>
    </div>
  )
}
export default ProjectsList
