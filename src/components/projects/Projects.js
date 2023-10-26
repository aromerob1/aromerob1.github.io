import Project from "./Project";
import Pi1 from "./assets/pg1.png";
import "./Projects.css";

function Projects() {
  let projects = [
    {
      title: "Gaming Marketplace",
      image: Pi1,
      url: "https://aromerob1.github.io/gaming-marketplace/",
      technologies: "React;Tailwind CSS;Typescript",
    },
  ];
  return (
    <section id="projects" className="text-white mt-5">
      <h1 className="mb-4">Projects</h1>
      {projects.map((project) => (
        <Project
          image={project.image}
          title={project.title}
          url={project.url}
          technologies={project.technologies.split(";")}
        />
      ))}
    </section>
  );
}

export default Projects;
