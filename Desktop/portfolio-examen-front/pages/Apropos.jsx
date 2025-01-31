import { useEffect, useState } from "react";
import AproposService from "../Services/AproposService";
import "../styles/aPropos.css";
import QualityCards from "../components/QualityCards";

const AboutMe = () => {
  const [presentation, setPresentation] = useState(null);
  const [icons, setIcons] = useState([]);
  const [error, setError] = useState(null);
  const targetWords = ["Emeline", "React.js", "HTML", "CSS", "Node.js", "MySQL", "nouvelles opportunités"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AproposService.getAllPresentation();
        setPresentation(response.data[0]);

        const iconsData = await AproposService.getAllIcons();
        setIcons(iconsData.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError("Impossible de charger les données. Réessayez plus tard.");
      }
    };
    fetchData();
  }, []);

  const highlightText = (text) => {
    const regex = new RegExp(`\\b(${targetWords.join("|")})\\b`, "gi");
    return text.split(regex).map((part, i) =>
      targetWords.includes(part) ? (
        <span key={i} className="gradient-text">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!presentation) {
    return <p className="loading-message">Chargement des données...</p>;
  }

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const qualities = presentation.Qualité ? presentation.Qualité.split(", ") : [];
  const qualityIcons = qualities.map((_, index) => icons[index]);

  return (
    <main className="about" id="About Me">
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
          {/* Remplace dangerouslySetInnerHTML par JSX */}
          <p className="about__description">
            {highlightText(presentation.description)}
          </p>
        </div>
      </div>

      <button className="about__contact-button" onClick={handleScrollToContact}>Contact Me! </button>
    </main>
  );
};

export default AboutMe;
