import React from "react";
import "../Styles/contact.css";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact-container">
      <main className="contact-content">
        <h2 className="contact-h2">Get in touch</h2>
        <h3 className="contact-title">Contactez-moi</h3>
        <Container className="button-form">
        <div className="buttons">
          <div className="button">
            <span className="icon">📞</span>
            <h4>Téléphone</h4>
            <p>Un sms ou appel par ici </p>
          </div>
          <div className="button">
            <span className="icon">📧</span>
            <h4>Email</h4>
            <p>Un mail par ici </p>
          </div>
        </div>

        <form className="contact-form">
          <h3 className="form-title">Un message pour en savoir plus ?</h3>
          <label>Email :</label>
          <input type="email" placeholder="Votre email" />
          <label>Name :</label>
          <input type="text" placeholder="Votre nom" />
          <label>Message :</label>
          <textarea placeholder="Votre message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
        </Container>
      </main>

      <footer className="contact-footer">
        <p>By Emeline</p>
        <nav>
          <a href="#">About Me</a>
          <a href="#">Portfolio</a>
        </nav>
        <p>&copy; Emeline.dev.com. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Contact;
