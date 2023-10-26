import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white mt-4">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/andr%C3%A9s-felipe-romero-brand-58b126191/"
            target="_blank"
            role="button"
            id="footer-btn"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/aromerob1"
            target="_blank"
            role="button"
            id="footer-btn"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="mailto:andresfeliperom@hotmail.com"
            target="_blank"
            role="button"
            id="footer-btn"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: Andres Felipe Romero Brand
      </div>
    </footer>
  );
}

export default Footer;
