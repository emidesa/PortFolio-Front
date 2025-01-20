import { useEffect, useState } from "react";
import ProjetService from "../Services/ProjetService";
import { Container } from "react-bootstrap";
import ProjetsCards from "../components/ProjetsCards.JSX";

const ProjetPage = () => {

    const [Projets, setProjets] = useState([]);

    const fetchProjet = async () => {
        try {
            const response = await ProjetService.getAllProjets();
            console.log(response.data);
            setProjets(response.data);
            
        } catch (error) {
            console.error("Erreur lors de la récupération du projet", error);
        }
    }

    useEffect(() => {
        fetchProjet();
    }, []);

   
    return (
        <Container>
            <h1>Mes projets</h1>
            <h2>Mon Portfolio</h2>

            {/* Vérification si des projets existent */}
            {Projets.length > 0 ? (
                Projets.map(projet => (
                    <ProjetsCards projets={projet} key={projet.idProjet} />
                ))
            ) : (
                <p>Aucun projet trouvé</p>
            )}
        </Container>
    );
};
      
   
 
export default ProjetPage;