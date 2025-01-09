import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar
      style={{ 
        backgroundColor: "#151515",
        width: "250px",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      variant="dark"
      className="flex-column align-items-center p-4"
    >
      {/* Container for logo and web developer with black background */}
      <div
        className="text-center mb-5 py-3"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "black", 
          width: "100%",
        }}
      >
        {/* Logo "ED" */}
        <h1
          className="text-white fw-bold mb-4"
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
            fontFamily: "Rochester, cursive",
          }}
        >
          Web developer
        </p>
      </div>

      {/* Navigation Links */}
      <Nav
        className="flex-column justify-content-center align-items-center my-5 gap-4"
        style={{ width: "100%", marginTop: "150px" }}
      >
        <Nav.Link
          href="#About Me"
          className="text-white py-2 border-bottom border-light text-center"
        >
          A propos
        </Nav.Link>
        <Nav.Link
          href="#Skills"
          className="text-white py-2 border-bottom border-light text-center"
        >
          Skills
        </Nav.Link>
        <Nav.Link
          href="#Parcours"
          className="text-white py-2 border-bottom border-light text-center"
        >
          Parcours
        </Nav.Link>
        <Nav.Link
          href="#Projects"
          className="text-white py-2 border-bottom border-light text-center"
        >
          Projets
        </Nav.Link>
        <Nav.Link
          href="#Contact"
          className="text-white py-2 text-center"
        >
          Contacts
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

