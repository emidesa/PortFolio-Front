import React, { useState } from "react";
import "../Styles/contact.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import MessageService from "../Services/MessageService";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Pour les icônes

const Contact = () => {
  const [formData, setFormData] = useState({
    Nom: "",
    Email: "",
    Contenu: "",
  });

  // Fonction de gestion des changements dans les champs du formulaire
  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status } = await MessageService.sendContact(formData);

      if (status === 200) {
        alert("Message envoyé avec succès");
        setFormData({ Nom: "", Email: "", Contenu: "" }); // Réinitialisation du formulaire
      } else {
        alert("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur");
    }
  };

  return (
    <div className="contact-container">
      <main className="contact-content" id="Contact">
        <h2 className="contact-h2">Get in touch</h2>
        <h3 className="contact-title">Contactez-moi</h3>

        <div className="buttons">
          {/* Bouton Téléphone avec lien tel: */}
          <a href="tel:+33675725777" className="button" style={{ textDecoration: "none", color: "inherit" }}>
            <div>
              <span className="icon">
                <FaPhone size={30} />
              </span>
              <h4>Téléphone</h4>
              <p>Un sms ou appel par ici</p>
            </div>
          </a>

          
          <a href="mailto:emeline.desa@outlook.fr" className="button" style={{ textDecoration: "none", color: "inherit" }}>
            <div>
              <span className="icon">
                <FaEnvelope size={30} />
              </span>
              <h4>Email</h4>
              <p>Un mail par ici</p>
            </div>
          </a>
        
        

        <div className="contact-form">
          <h3 className="form-title">Formulaire de contact</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre nom"
                name="Nom"
                value={formData.Nom}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                name="Email"
                value={formData.Email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Entrez votre message"
                name="Contenu"
                value={formData.Contenu}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              Envoyer
            </Button>
          </Form>
        </div>
        </div>
      </main>

      <footer className="contact-footer">
  <div className="footer-content">
    {/* Section 1 : À propos */}
    <div className="footer-section">
      <h3 className="footer-title">À propos</h3>
      <nav className="footer-links">
        <a href="/Apropos">Qui suis-je ?</a>
        <a href="#">Mes projets</a>
        <a href="#">Contact</a>
      </nav>
    </div>

    {/* Section 2 : Liens utiles */}
    <div className="footer-section">
      <h3 className="footer-title">Liens utiles</h3>
      <nav className="footer-links">
        <a href="#">Mentions légales</a>
        <a href="#">Politique de confidentialité</a>
        <a href="#">FAQ</a>
      </nav>
    </div>

    {/* Section 3 : Réseaux sociaux */}
    <div className="footer-section">
      <h3 className="footer-title">Suivez-moi</h3>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="social-icon">
          <FaGithub size={24} />
        </a>
        <a href="#" className="social-icon">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  </div>

  {/* Section du copyright */}
  <div className="footer-bottom">
    <p className="copyright">
      &copy; {new Date().getFullYear()} Emeline.dev.com. Tous droits réservés.
    </p>
  </div>
</footer>
    </div>
  );
};

export default Contact;