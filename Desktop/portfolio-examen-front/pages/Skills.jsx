import { useEffect, useState } from "react";
import SkillsService from "../Services/SkillsService";
import { Card, CardHeader, Container } from "react-bootstrap";
import SkillsCards from "../components/SkillsCards";
import "../Styles/skills.css";

const SoftSkills = () => {
    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        try {
            const response = await SkillsService.getAllSkills();
            console.log(response.data); // Vérifie ici la structure des données
            setSkills(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des compétences", error);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    // Filtrer les compétences par catégorie
    const frontEndSkills = skills.filter(skill => skill.category === "front-end");
    const backEndSkills = skills.filter(skill => skill.category === "back-end");
    const codeSkills = skills.filter(skill => skill.category === "code");
    const designSkills = skills.filter(skill => skill.category === "design");

    return (
        <>
            <body className="body-skills">
                <h1 className="skills-title">Mes softSkills</h1>
                <h1 className="skills-subtitle">Skills</h1>

                <Container className="container-left">
                    <Card>
                        <CardHeader>
                            <div className="card-title">
                                <h1>Développement web</h1>
                            </div>
                        </CardHeader>
                        <div className="Card-icon">
                            <div className="card-category">
                                <p>Front-end</p>
                                {frontEndSkills.length > 0 ? (
                                    frontEndSkills.map(skill => (
                                        <SkillsCards skills={skill} key={skill.idSkills} />
                                    ))
                                ) : (
                                    <p>Aucune compétence trouvée pour cette catégorie</p>
                                )}
                            </div>

                            <div className="card-category">
                                <p>Back-end</p>
                                {backEndSkills.length > 0 ? (
                                    backEndSkills.map(skill => (
                                        <SkillsCards skills={skill} key={skill.idSkills} />
                                    ))
                                ) : (
                                    <p>Aucune compétence trouvée pour cette catégorie</p>
                                )}
                            </div>
                        </div>
                    </Card>
                </Container>

                <Container className="container-right">
                    <Card>
                        <CardHeader>
                            <div className="card-title">
                                <h1>Outils</h1>
                            </div>
                        </CardHeader>
                        <div className="Card-icon">
                            <div className="card-category">
                                <p>Code</p>
                                {codeSkills.length > 0 ? (
                                    codeSkills.map(skill => (
                                        <SkillsCards skills={skill} key={skill.idSkills} />
                                    ))
                                ) : (
                                    <p>Aucune compétence trouvée pour cette catégorie</p>
                                )}
                            </div>

                            <div className="card-category">
                                <p>Design</p>
                                {designSkills.length > 0 ? (
                                    designSkills.map(skill => (
                                        <SkillsCards skills={skill} key={skill.idSkills} />
                                    ))
                                ) : (
                                    <p>Aucune compétence trouvée pour cette catégorie</p>
                                )}
                            </div>
                        </div>
                    </Card>
                </Container>
            </body>
        </>
    );
};

export default SoftSkills;