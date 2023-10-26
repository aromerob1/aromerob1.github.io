import Picture from "./assets/personalPicture.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <section id="about" className="text-white mt-4">
        <div className="row">
          <div className="col">
            <img id="picture" className="rounded-5" src={Picture}></img>
          </div>
          <div id="my-description" className="col-10">
            <h2>About Me</h2>
            <p>
              Emerging Web Developer from Universidad de Los Andes, specializing
              in Systems Engineering. Proficient with MERN stack, Python, and
              Java for building scalable solutions. Passionate programmer, quick
              tech adapter, and advocate for knowledge sharing. Eager to
              collaborate and create impactful digital solutions!
            </p>
          </div>
        </div>
        <div id="technologies" className="mt-4">
          <h4>Technologies</h4>
          <i className="devicon-express-original display-6"></i>
          <i className="devicon-react-original-wordmark display-6 ms-4"></i>
          <i className="devicon-css3-plain display-6 ms-4"></i>
          <i className="devicon-git-plain display-6 ms-4"></i>
          <i className="devicon-github-original display-6 ms-4"></i>
          <i className="devicon-html5-plain display-6 ms-4"></i>
          <i className="devicon-java-plain-wordmark display-6 ms-4"></i>
          <i className="devicon-javascript-plain display-6 ms-4"></i>
          <i className="devicon-nodejs-plain-wordmark display-6 ms-4"></i>
          <i className="devicon-nextjs-original display-6 ms-4"></i>
          <i className="devicon-python-plain-wordmark display-6 ms-4"></i>
          <i class="devicon-typescript-plain display-6 ms-4"></i>
          
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
            <h5>Systems Engineering</h5>
            <p>Universidad de los Andes, Bogotá • January 2020 — Present</p>
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
            <h5>Lead Web Development Facilitator</h5>
            <p>
              'Todos a la U' at Universidad de Los Andes, Bogotá • May 2023 —
              August 2023
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
