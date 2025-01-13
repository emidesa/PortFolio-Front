import { useEffect, useState } from "react";
import AproposService from "../Services/AproposService";
import "../styles/aPropos.css";
import QualityCards from "../components/QualityCards";

const AboutMe = () => {
  const [presentation, setPresentation] = useState(null);
  const [icons, setIcons] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await AproposService.getAllPresentation();
      setPresentation(response.data[0]);

      const iconsData = await AproposService.getAllIcons();
      setIcons(iconsData.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setError("Impossible de charger les données. Réessayez plus tard.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Liste des mots à cibler pour le style
  const targetWords = ["Emeline", "React.js", "HTML", "CSS", "Node.js", "MySQL", "nouvelles opportunités"];

  // Fonction pour ajouter un style spécial aux mots ciblés
  const highlightText = (text) => {
    const regex = new RegExp(`\\b(${targetWords.join("|")})\\b`, "gi");
    return text.replace(regex, (match) => `<span class="gradient-text">${match}</span>`);
  };

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!presentation) {
    return <p className="loading-message">Chargement des données...</p>;
  }

  const qualities = presentation.Qualité ? presentation.Qualité.split(", ") : [];
  const qualityIcons = qualities.map((quality, index) => icons[index]);

  return (
    <main className="about">
      <h2 className="about__title">Présentation</h2>
      <h3 className="about__subtitle">About Me</h3>

      <div className="about__content">
        <img
          src={presentation.photo}
          alt="Présentation personnelle"
          className="about__image"
        />
        <div className="about__text-container">
          <QualityCards qualities={qualities} icons={qualityIcons} />
          {/* Injection sécurisée du texte avec mots stylisés */}
          <p
            className="about__description"
            dangerouslySetInnerHTML={{
              __html: highlightText(presentation.description),
            }}
          ></p>
        </div>
      </div>

      <button className="about__contact-button">Contact Me!</button>
    </main>
  );
};

export default AboutMe;
