import React from "react";
import PropTypes from "prop-types";

const QualityCards = ({ qualities, icons }) => {
  if (!qualities || !icons || qualities.length !== icons.length) {
    return <p className="error-message">Erreur : Données invalides ou incomplètes</p>;
  }

  const handleImageError = (event) => {
    event.target.src = "/path/to/default/icon.png";
  };

  return (
    <div className="quality-cards">
      {qualities.map((quality, index) => (
        <div key={index} className="quality-card">
          <img
            src={icons[index]}
            alt={`Icône pour ${quality}`}
            onError={handleImageError}
            className="quality-card__icon"
          />
          <h4 className="quality-card__title">{quality}</h4>
        </div>
      ))}
    </div>
  );
};

QualityCards.propTypes = {
  qualities: PropTypes.arrayOf(PropTypes.string).isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QualityCards;

