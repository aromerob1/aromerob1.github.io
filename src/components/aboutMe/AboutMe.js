import Picture from "./assets/personalPicture.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <section id="about" className="text-white mt-4">
        <div className="row">
          <div className="col">
            <img
              id="picture"
              className="rounded-5 img-fuid"
              alt="personal"
              src={Picture}
            ></img>
          </div>
          <div id="my-description" className="col-12 col-md-10 mt-3 mt-md-0">
            <h2>About Me</h2>
            <p>
            Full-stack developer with over 3 years of experience building responsive web applications and cloud-native microservices using JavaScript/TypeScript (React, Astro, Next.js, Angular), Node.js frameworks (Express, NestJS), Python (Flask), Spring Boot, .NET and SQL/NoSQL databases (MySQL, PostgreSQL, MongoDB). Skilled in CI/CD pipelines (Docker, Jenkins, GitHub Actions), AWS & GCP deployments, GraphQL, SEO optimization and real-time systems (WebSockets).
            </p>
          </div>
        </div>
        <div id="technologies" className="mt-4">
          <h4>Technologies</h4>
          <div className="d-flex flex-wrap">
            <i className="devicon-express-original display-6 me-4"></i>
            <i className="devicon-react-original-wordmark display-6 me-4"></i>
            <i className="devicon-css3-plain display-6 me-4"></i>
            <i className="devicon-git-plain display-6 me-4"></i>
            <i className="devicon-github-original display-6 me-4"></i>
            <i className="devicon-html5-plain display-6 me-4"></i>
            <i className="devicon-java-plain-wordmark display-6 me-4"></i>
            <i className="devicon-javascript-plain display-6 me-4"></i>
            <i className="devicon-nodejs-plain-wordmark display-6 me-4"></i>
            <i className="devicon-nextjs-original display-6 me-4"></i>
            <i className="devicon-python-plain-wordmark display-6 me-4"></i>
            <i class="devicon-typescript-plain display-6 me-4"></i>
            <i class="devicon-csharp-plain-wordmark display-6 me-4"></i>
            <i class="devicon-dotnetcore-plain display-6 me-4"></i>
            <i class="devicon-mongodb-plain-wordmark display-6 me-4"></i>
            <i class="devicon-microsoftsqlserver-plain-wordmark display-6 me-4"></i>
          </div>
        </div>
      </section>
      <section className="bg-dark text-white mt-5">
        <div className="row">
          <div className="col">
            <h3 className="me-4 mb-0">
              Education <hr className="underline" />
            </h3>
          </div>
          <div className="mb-0 col-10">
            <h5>Computer and Systems Engineering</h5>
            <p>Universidad de los Andes, Bogotá • January 2020 — May 2025</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="me-4 mb-0">
              Experience <hr className="underline" />
            </h3>
          </div>

          <div className="mb-0 col-10">
          <div className="mb-4">
              <h5>Full Stack Developer</h5>
              <p>Keep Calm Services, Miami - United States • January 2025 — Present</p>
            </div>
          <div className="mb-4">
              <h5>Junior Full Stack Developer</h5>
              <p>Mas Alcance, Medellin - Colombia • November 2023 — October 2024</p>
            </div>
            <div className="mb-4">
              <h5>Web Development Teaching Assistant</h5>
              <p>Universidad de Los Andes, Bogotá - Colombia • May 2023 — August 2023</p>
            </div>
            <div className="mb-4">
              <h5>Junior Full Stack Developer</h5>
              <p>Autoservicio La Quinta, Barrancabermeja - Colombia • January 2022 — December 2022</p>
            </div>
            <div className="mb-4">
              <h5>
                Teaching Assistant for Data Structures and Algorithms Course
              </h5>
              <p>Universidad de Los Andes, Bogotá - Colombia • January 2021 — May 2021</p>
            </div>
          </div> 
        </div>
      </section>
    </>
  );
}

export default AboutMe;
