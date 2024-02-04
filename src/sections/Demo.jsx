import mountain from "../assets/images/mountain.png";
import ProjectsList from "../components/Projects";
import { projects } from "../constants";


const Demo = () => {
  return (
    <section id="demo" className="max-container pt-12">
      <div className="relative w-full ml-4 pt-16 ">
        <img src={mountain} alt="mountain" className="block w-full xl:hidden"/>
        <p className="absolute text-8xl font-palanquin sm:text-left xl:text-4xl md:text-6xl sm:text-8xl top-0 pt-16">Here are some of the projects I've worked on.</p>
      </div>
      <div className="grid gap-2 mt-2 justify-center items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-2 lg:max-w-9xl">
          {projects.map((project, index) => (
            <ProjectsList key={index} {...project} />
          ))}
        </div>
    </section>
  );
}

export default Demo

