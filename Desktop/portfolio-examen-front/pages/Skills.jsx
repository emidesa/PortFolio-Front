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
        
            <body className="body-skills" id="Skills">
                <h1 className="skills-title">Mes softSkills</h1>
                <h1 className="skills-subtitle">Skills</h1>

                <div className="cards-container">
                <Container >
                    <Card className="container-left">
                        <CardHeader className="card-header">
                            <div className="card-title">
                                <p>Développement web</p>
                            </div>
                        </CardHeader>
                        <div className="Card-icon">
                            <div className="card-category">
                                <h5>Front-end</h5>
                                <br/>
                                {frontEndSkills.length > 0 ? (
                                    frontEndSkills.map(skill => (
                                        <SkillsCards skills={skill} key={skill.idSkills} />
                                    ))
                                ) : (
                                    <p>Aucune compétence trouvée pour cette catégorie</p>
                                )}
                            </div>
                            <div className="vertical-line"></div>
                            <div className="card-category">
                                <h5>Back-end</h5>
                                <br/>
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
                        <CardHeader className="card-header">
                            <div className="card-title">
                                <p>Outils de conception</p>
                            </div>
                        </CardHeader>
                        <div className="Card-icon">
                            <div className="card-category">
                                <h5>Code</h5>
                                <br/>
                                {codeSkills.length > 0 ? (
                                    codeSkills.map(skill => (
                                        <SkillsCards skills={skill} key={skill.idSkills} />
                                    ))
                                ) : (
                                    <p>Aucune compétence trouvée pour cette catégorie</p>
                                )}
                            </div>
                            <div className="vertical-line"></div>
                            <div className="card-category">
                                <h5>Design</h5>
                                <br/>
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
                </div>
            </body>
        
    );
};

export default SoftSkills;
