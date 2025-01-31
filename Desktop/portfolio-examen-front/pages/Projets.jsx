import { useEffect, useState } from "react"
import ProjetService from "../Services/ProjetService"
import "../styles/projets.css"
import ProjetsCards from "../components/ProjetsCards.JSX"

const ProjetPage = () => {
  const [Projets, setProjets] = useState([])

  const fetchProjet = async () => {
    try {
      const response = await ProjetService.getAllProjets()
      setProjets(response.data)
    } catch (error) {
      console.error("Erreur lors de la récupération du projet", error)
    }
  }

  useEffect(() => {
    fetchProjet()
  }, [])

  return (
    <div className="projects-container" id="Projets">
      <h1 className="projects-title">Mes projets</h1>
      <h2 className="portfolio-subtitle">Mon Portfolio</h2>

      <div className="projects-grid">
        {Projets.length > 0 ? (
          Projets.map((projet) => <ProjetsCards projets={projet} key={projet.idProjet} />)
        ) : (
          <p>Aucun projet trouvé</p>
        )}
      </div>
    </div>
  )
}

export default ProjetPage

