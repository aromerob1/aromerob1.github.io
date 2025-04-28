import "./Projects.css";

function Project({ image, title, url, technologies }) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      id="project-card"
      className="card mt-4 mt-md-4"
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
            } else if (technology === "NPM") {
              return (
                <i className={`devicon-npm-original-wordmark technology ${margin}`} />
              );
            } else if (technology === "HTML") {
              return (
                <i className={`devicon-html5-plain technology ${margin}`} />
              );
            } else if (technology === "CSS") {
              return (
                <i className={`devicon-css3-plain technology ${margin}`} />
              );
            } else if (technology === "Javascript") {
              return (
                <i className={`devicon-javascript-plain technology ${margin}`} />
              );
            } else if (technology === "SQLServer") {
              return (
                <i className={`devicon-microsoftsqlserver-plain technology ${margin}`} />
              );
            } else if (technology === "C#") {
              return (
                <i className={`devicon-csharp-plain technology ${margin}`} />
              );
            } else if (technology === ".NETCORE") {
              return (
                <i className={`devicon-dotnetcore-plain technology ${margin}`} />
              );
            } else if (technology === "Heroku") {
              return (
                <i className={`devicon-heroku-plain technology ${margin}`} />
              );
            } else if (technology === "Azure") {
              return (
                <i className={`devicon-azure-plain technology ${margin}`} />
              );
            } else if (technology === "Bootstrap") {
              return (
                <i className={`devicon-bootstrap-plain technology ${margin}`} />
              );
            } else if (technology === "NodeJS") {
              return (
                <i className={`devicon-nodejs-plain technology ${margin}`} />
              );
            } else if (technology === "MongoDB") {
              return (
                <i className={`devicon-mongodb-plain technology ${margin}`} />
              );
            } 
            else return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
