// src/components/ParcoursCard.js

import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap"; // Importer Card et Button depuis react-bootstrap

const ParcoursCard = ({ title, description, year, entreprise }) => {
  return (
    <Card className="parcours-card text-center">
      <Card.Header>{title}</Card.Header> {/* Afficher l'année dans l'en-tête */}
      <Card.Body>
        <Card.Title></Card.Title> {/* Afficher le titre */}
        <Card.Text>{description}</Card.Text> {/* Afficher la description */}
        <Card.Text><strong>{entreprise}</strong></Card.Text> {/* Afficher l'entreprise */}
      </Card.Body>
      <Card.Footer className="text-muted">{year}</Card.Footer> {/* Footer avec texte en petit */}
    </Card>
  );
};

ParcoursCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  entreprise: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default ParcoursCard;
