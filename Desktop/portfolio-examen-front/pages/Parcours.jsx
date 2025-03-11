import { useEffect, useState } from "react";
import ParcoursService from "../Services/ParcoursService";
import ParcoursCard from "../components/ParcoursCards";
import '../styles/parcours.css';

const ParcoursPage = () => {
  const [parcours, setParcours] = useState([]);
  const [filter, setFilter] = useState('tous'); // Valeur initiale 'tous' pour afficher tout

  // Récupération des parcours depuis l'API
  const fetchParcours = async () => { 
    try {
      const response = await ParcoursService.getAllParcours();
      setParcours(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des parcours", error);
    }
  };

  useEffect(() => {
    fetchParcours();
  }, []);

  // Filtrer les parcours en fonction de la catégorie
  const filteredParcours = parcours.filter(item => {
    if (filter === 'tous') return true; 
    return item.categorie.toLowerCase() === filter; 
  });

  return (
    <div className="parcours-page" id="Parcours">
      <h1>Mes Expériences</h1>
      <h2>Mon parcours</h2>
      
      {/* Boutons de filtrage */}
      <div className="filter-buttons">
        <button 
          className={`filter-button ${filter === 'professionnel' ? 'active' : ''}`}
          onClick={() => setFilter('professionnel')}
        >
          Professionnel
        </button>
        <button 
          className={`filter-button ${filter === 'formation' ? 'active' : ''}`}
          onClick={() => setFilter('formation')}
        >
          Formations
        </button>
        <button 
          className={`filter-button ${filter === 'tous' ? 'active' : ''}`}
          onClick={() => setFilter('tous')}
        >
          Tous
        </button>
      </div>

      {/* Contenu des cartes */}
      {parcours.length > 0 ? (
        <div className="cards-container-parcours">
          {filteredParcours.map((item, index) => (
            <ParcoursCard
              key={index}
              title={item.Titre}
              description={item.Description}
              entreprise={item.Entreprise}
              year={item.Date}
            />
          ))}
        </div>
      ) : (
        <p>Chargement des parcours...</p>
      )}
    </div>
  );
}

export default ParcoursPage;
