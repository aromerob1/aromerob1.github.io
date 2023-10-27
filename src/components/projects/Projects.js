import Project from "./Project";
import Pi1 from "./assets/pg1.png";
import Pi2 from "./assets/pg2.png";
import Pi3 from "./assets/pg3.png";
import "./Projects.css";

function Projects() {
  let projects = [
    {
      title: "Gaming Marketplace",
      image: Pi1,
      url: "https://aromerob1.github.io/gaming-marketplace/",
      technologies: "React;Tailwind CSS;Typescript",
    },
    {
      title: "Virtual Memory Management Simulation",
      image: Pi2,
      url: "https://github.com/aromerob1/virtual-memory-management-simulation",
      technologies: "Java",
    },
    {
      title: "Multi-Thread Factory Flow",
      image: Pi3,
      url: "https://github.com/aromerob1/MultiThreadFactoryFlow/tree/main",
      technologies: "Java",
    },
  ];
  return (
    <section id="projects" className="text-white mt-5">
      <h1 className="mb-4">Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-3">
            <Project
              image={project.image}
              title={project.title}
              url={project.url}
              technologies={project.technologies.split(";")}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
