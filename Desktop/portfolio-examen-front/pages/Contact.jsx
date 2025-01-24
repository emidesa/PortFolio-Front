import React, { useState } from "react";
import "../Styles/contact.css";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import MessageService from "../Services/MessageService";

const Contact = () => {
  const [formData, setFormData] = useState({
    Nom: "",
    Email: "",
    Contenu: "",
  });

  // Fonction de gestion des changements dans les champs du formulaire
  const handleInputChange = ({ target: { name, value } }) => {
    // Mise à jour de l'état formData en remplaçant la valeur du champ modifié
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
        
                // Réinitialise les champs du formulaire
        setFormData({ Nom: "", Email: "", Contenu: "" });
      } else {
        alert("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur");
    }
  };
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

        <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
              <Form.Control
  type="text"
  placeholder="Entrez votre nom"
  name="Nom"
  value={formData.Nom}
  onChange={handleInputChange}
/>

<Form.Control
  type="email"
  placeholder="Entrez votre email"
  name="Email"
  value={formData.Email}
  onChange={handleInputChange}
/>

<Form.Control
  as="textarea"
  rows={3}
  placeholder="Entrez votre message"
  name="Contenu"
  value={formData.Contenu}
  onChange={handleInputChange}
/>

                <Button variant="primary" type="submit" className="mt-3">
                  Envoyer
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
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
