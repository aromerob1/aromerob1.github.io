function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container">
        <a class="navbar-brand" href="#">{"{AndresRomero}"}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="/resume.pdf" target="_blank">
              Resume <i class="bi bi-file-earmark-arrow-down-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
