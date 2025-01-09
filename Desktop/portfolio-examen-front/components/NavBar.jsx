import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/mail.png";

function NavBar() {
  return (
    <Navbar
      style={{ 
        backgroundColor: "#151515",
        width: "120px",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      variant="dark"
      className="flex-column align-items-center"
    >
      {/* Container for logo and web developer with black background */}
      <div
        className="text-center mb-5 py-5"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height:"210px",
          backgroundColor: "black", 
          width: "100%",
        }}
      >
        {/* Logo "ED" */}
        <h1
          className="text-white fw-bold mb-5"
          style={{
            background: "linear-gradient(90deg, #FF6B6B, #8B0000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Rochester, cursive",
          }}
        >
          ED
        </h1>

        {/* Web developer text */}
        <p 
          className="text-white" 
          style={{
            fontFamily: "roboto cursive",
          }}
        >
          Web developer
        </p>
      </div>

      {/* Navigation Links */}
      <Nav
        className="flex-column justify-content-center  gap-5"
        style={{ 
          width: "100%", 
              marginTop: "280px",
              display: "flex"
        }}
      >
        <Nav.Link
              href="#About Me"
              className="text-center position-relative py-2"
              style={{
                color: "white", 
                transition: "background 0.3s ease, -webkit-text-fill-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(90deg, #FF6B6B, #8B0000)";
                e.target.style.WebkitBackgroundClip = "text";
                e.target.style.WebkitTextFillColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
                e.target.style.WebkitTextFillColor = "white";
              }}
            >
              A propos
              <div className="position-absolute " style={{ width: '50%', bottom: '-25px', left: '25%', borderBottom: '2px solid white', fontFamily: "roboto" }}></div>
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              className="text-center position-relative py-2"
              style={{
                color: "white", 
                transition: "background 0.3s ease, -webkit-text-fill-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(90deg, #FF6B6B, #8B0000)";
                e.target.style.WebkitBackgroundClip = "text";
                e.target.style.WebkitTextFillColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
                e.target.style.WebkitTextFillColor = "white";
              }}
            >
              Skills
              <div className="position-absolute" style={{ width: '50%', bottom: '-25px', left: '25%', borderBottom: '2px solid white', fontFamily: "roboto" }}></div>
            </Nav.Link>
            <Nav.Link
              href="#Parcours"
              className="text-center position-relative py-2"
              style={{
                color: "white", 
                transition: "background 0.3s ease, -webkit-text-fill-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(90deg, #FF6B6B, #8B0000)";
                e.target.style.WebkitBackgroundClip = "text";
                e.target.style.WebkitTextFillColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
                e.target.style.WebkitTextFillColor = "white";
              }}
            >
              Parcours
              <div className="position-absolute" style={{ width: '50%', bottom: '-25px', left: '25%', borderBottom: '2px solid white', fontFamily: "roboto" }}></div>
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className="text-center position-relative py-2"
              style={{
                color: "white", 
                transition: "background 0.3s ease, -webkit-text-fill-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(90deg, #FF6B6B, #8B0000)";
                e.target.style.WebkitBackgroundClip = "text";
                e.target.style.WebkitTextFillColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
                e.target.style.WebkitTextFillColor = "white";
              }}
            >
              Projets
              <div className="position-absolute" style={{ width: '50%', bottom: '-25px', left: '25%', borderBottom: '2px solid white', fontFamily: "roboto" }}></div>
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              className="text-center position-relative py-2"
              style={{
                color: "white", 
                transition: "background 0.3s ease, -webkit-text-fill-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(90deg, #FF6B6B, #8B0000)";
                e.target.style.WebkitBackgroundClip = "text";
                e.target.style.WebkitTextFillColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
                e.target.style.WebkitTextFillColor = "white";
              }}
            >
              Contacts
            </Nav.Link>

            <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <a href="https://github.com/emidesa" target="_blank" rel="noopener noreferrer">
          <img
            src={githubIcon}
            alt="GitHub"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/emeline-de-sa/" target="_blank" rel="noopener noreferrer">
          <img
             src={linkedinIcon}
            alt="LinkedIn"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="mailto:Emeline.desa@outlook.fr" target="_blank" rel="noopener noreferrer">
          <img
            src={mailIcon}
            alt="Email"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

