import { useEffect, useState } from "react";
import ProjetService from "../Services/ProjetService";
import { Container } from "react-bootstrap";

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

    return <>
    <Container>
        <h1>Mes projets</h1>
        <h2>Mon Portfolio</h2>
        {Projets.map(projet => (
            <div key={projet.idProjet}>
                <h2>{projet.Titre}</h2>
                <p>{projet.description}</p>
                <p>{projet.Technologie}</p>
                <img src="capture escape portfolio.png" alt="Mon image de projet" />

            </div>
        ))} 
      
    </Container>
    </>;
}
 
export default ProjetPage;