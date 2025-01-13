import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import mailIcon from "../assets/mail.png";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar className="navbar">
      <div className="navbar__logo-container">
        <h1 className="navbar__logo">ED</h1>
        <p className="navbar__subtitle">Web developer</p>
      </div>

      <Nav className="navbar__nav">
        <Nav.Link href="#About Me" onClick={() => navigate('/Apropos')} className="navbar__link">
          A propos
          <div className="navbar__link-underline"></div>
        </Nav.Link>
        <Nav.Link href="#Skills" className="navbar__link">
          Skills
          <div className="navbar__link-underline"></div>
        </Nav.Link>
        <Nav.Link href="#Parcours" className="navbar__link">
          Parcours
          <div className="navbar__link-underline"></div>
        </Nav.Link>
        <Nav.Link href="#Projects" className="navbar__link">
          Projets
          <div className="navbar__link-underline"></div>
        </Nav.Link>
        <Nav.Link href="#Contact" className="navbar__link">
          Contacts
        </Nav.Link>
      </Nav>

      <div className="navbar__social-icons">
        <a href="https://github.com/emidesa" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
          <img src={githubIcon} alt="GitHub" className="navbar__social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/emeline-de-sa/" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
          <img src={linkedinIcon} alt="LinkedIn" className="navbar__social-icon" />
        </a>
        <a href="mailto:Emeline.desa@outlook.fr" target="_blank" rel="noopener noreferrer" className="navbar__social-link">
          <img src={mailIcon} alt="Email" className="navbar__social-icon" />
        </a>
      </div>
    </Navbar>
  );
}

export default NavBar;

