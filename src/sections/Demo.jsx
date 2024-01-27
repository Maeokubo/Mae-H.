import mountain from "../assets/images/mountain.png";
import ProjectsList from "../components/Projects";
import { projects } from "../constants";


const Demo = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="relative flex flex-1 flex-col">
        <img src={mountain} alt="mountain" className="inset-0 object-cover w-full h-full" />
        <h2 className="absolute font-palanquin capitalize text-4xl md:text-4xl sm:text-7xl lg:max-w-5xl font-bold mt-32 left-2">
          Here are some of the projects I've worked on.
        </h2>
        <div className="absolute bg-slate-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-10 w-full lg:max-w-6xl">
          {projects.map((project, index) => (
            <ProjectsList key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Demo

