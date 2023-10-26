import "./Hero.css";

function Hero() {
  return (
    <section
      id="hero"
      className="text-center d-flex align-items-center justify-content-center flex-column"
    >
      <div className="container">
        <h1>I'm Andres Felipe Romero.</h1>
        <div id="hero-icons">
          <a href="https://github.com/aromerob1" target="_blank">
            <i className="bi bi-github me-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9s-felipe-romero-brand-58b126191/"
            target="_blank"
          >
            <i className="bi bi-linkedin me-2"></i>
          </a>
          <a href="mailto:andresfeliperom@hotmail.com" target="_blank">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
        <div id="hero-resume-button" className="mt-3">
          <a
            href="/resume.pdf"
            type="button"
            className="btn btn-lg"
            target="_blank"
          >
            Resume <i class="bi bi-file-earmark-arrow-down-fill"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
