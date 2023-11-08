import Project from "./Project";
import Pi1 from "./assets/pg1.png";
import Pi2 from "./assets/pg2.png";
import Pi3 from "./assets/pg3.png";
import Pi4 from "./assets/pg4.png";
import Pi5 from "./assets/pg5.png";
import Pi6 from "./assets/pg6.png";
import Pi7 from "./assets/pg7.png";
import Pi8 from "./assets/pg8.png";


import "./Projects.css";

function Projects() {
  let projects = [
    {
      title: "Gaming Marketplace",
      image: Pi1,
      url: "https://aromerob1.github.io/gaming-marketplace/",
      technologies: "React;Tailwind CSS;Typescript;NPM",
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
    {
      title: "Mini Bitcoin-Mining Simulation",
      image: Pi4,
      url: "https://github.com/aromerob1/caso3_infracomp",
      technologies: "Java",
    },
    {
      title: "Google Dinosaur",
      image: Pi5,
      url: "https://aromerob1.github.io/google-dino-frontend/",
      technologies: "HTML;CSS;Javascript;SQLServer;C#;.NETCORE;Azure;Bootstrap",
    },
    {
      title: "Google Dinosaur API",
      image: Pi6,
      url: "https://github.com/aromerob1/google-dino-backend-api",
      technologies: "SQLServer;C#;.NETCORE;Heroku;Azure;NPM",
    },
    {
      title: "Tasks Center",
      image: Pi7,
      url: "https://aromerob1.github.io/tasksCenter-frontend/",
      technologies: "React;NodeJS;MongoDB;Heroku;NPM;Bootstrap",
    },
    {
      title: "Tasks Center API",
      image: Pi8,
      url: "https://github.com/aromerob1/tasksCenter-api",
      technologies: "React;NodeJS;MongoDB;Heroku;NPM;Bootstrap",
    },
  ];
  return (
    <section id="projects" className="text-white mt-5">
      <h1 className="mb-0 mb-md-4">Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-md-4">
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
