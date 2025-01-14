import React from "react";
import Apropos from "../pages/aPropos";
import '../styles/Homepage.css';

const Homepage = () => {
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
          <button className="homepage__button">
            Contact Me!
          </button>
        </div>
      </main>
      <Apropos />
    </div>
  );
};

export default Homepage;

