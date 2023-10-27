import "./Projects.css";

function Project({ image, title, url, technologies }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      id="project-card"
      className="card"
      style={{ width: "18rem" }}
      onClick={handleClick}
    >
      <img src={image} className="card-img-top project-image" alt="project" />
      <div className="card-body">
        <div className="title-container">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="mt-3">
          {technologies.map((technology, index) => {
            let margin = "";
            if (index !== 0) {
              margin = "ms-3";
            }
            if (technology === "React") {
              return (
                <i className={`devicon-react-original technology ${margin}`} />
              );
            } else if (technology === "Tailwind CSS") {
              return (
                <i
                  className={`devicon-tailwindcss-plain technology ${margin}`}
                />
              );
            } else if (technology === "Typescript") {
              return (
                <i
                  className={`devicon-typescript-plain technology ${margin}`}
                />
              );
            } else if (technology === "Java") {
              return (
                <i className={`devicon-java-plain technology ${margin}`} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
