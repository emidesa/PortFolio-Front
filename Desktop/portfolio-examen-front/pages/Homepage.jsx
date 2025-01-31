import React from "react";
import Apropos from "../pages/aPropos";
import '../styles/Homepage.css';
import Skills from "../pages/Skills";
import Parcours from "../pages/Parcours";
import Contact from "../pages/Contact";
import Projet from "../pages/Projets";
import Avatar3D from "../components/Avatar3D";

const Homepage = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage">
      <main className="homepage__main">
        <div className="homepage__container">
          <h1 className="homepage__title">Hi,</h1>
          <h1 className="homepage__title">
            I'm <span className="homepage__name">Emeline</span>,
          </h1>
          <h1 className="homepage__title">Web developer.</h1>
          <p className="homepage__description">
            Fullstack developer passionate about creating beautiful and functional web applications
          </p>
          <button className="homepage__button" onClick={handleScrollToContact}>
            Contact Me!
          </button>
        </div>
        <Avatar3D />
      </main>
      <Apropos />
      <Skills />
      <Parcours />
      <Projet />
      <Contact id="Contact" /> {/* Ajout de l'id ici */}
    </div>
  );
};

export default Homepage;