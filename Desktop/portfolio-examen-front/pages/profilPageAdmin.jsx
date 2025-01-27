import React, { useState, useEffect } from "react"
import { Container, Tabs, Tab, Table, Button, Modal, Form } from "react-bootstrap"
import "../styles/PageProfilAdmin.css"
import ProjetService from "../Services/ProjetService"
import AproposService from "../Services/AproposService"
import SkillsService from "../Services/SkillsService"
import ParcoursService from "../Services/ParcoursService"
import MessageService from "../Services/MessageService"

const PageProfilAdmin = () => {
  const [key, setKey] = useState("parcours")
  const [parcours, setParcours] = useState([])
  const [presentation, setPresentation] = useState([])
  const [skills, setSkills] = useState([])
  const [messages, setMessages] = useState([])
  const [projets, setProjets] = useState([])

  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState("add")
  const [currentItem, setCurrentItem] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const parcoursResponse = await ParcoursService.getAllParcours()
      setParcours(parcoursResponse.data)

      const presentationResponse = await AproposService.getAllPresentation()
      setPresentation(presentationResponse.data)

      const skillsResponse = await SkillsService.getAllSkills()
      setSkills(skillsResponse.data)

      const messageResponse = await MessageService.getAllMessages()
      setMessages(messageResponse.data)

      const projetsResponse = await ProjetService.getAllProjets()
      setProjets(projetsResponse.data)
    } catch (error) {
      console.error("Erreur lors de la récupération des données", error)
    }
  }

  const handleAdd = () => {
    if (key === "parcours" || key === "skills" || key === "projets") {
      setModalMode("add")
      setCurrentItem({})
      setShowModal(true)
    }
  }

  const handleEdit = (item) => {
    if (key === "presentation" || key === "parcours" || key === "skills" || key === "projets") {
      setModalMode("edit")
      setCurrentItem(item)
      setShowModal(true)
    }
  }

  const handleDelete = async (item) => {
    if (key === "messages" || key === "parcours" || key === "skills" || key === "projets") {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
        try {
          switch (key) {
            case "parcours":
              await ParcoursService.deleteParcours(item.idParcours)
              break
            case "skills":
              await SkillsService.deleteSkills(item.idSkills)
              break
            case "messages":
              await MessageService.deleteMessage(item.idMessage)
              break
            case "projets":
              await ProjetService.deleteProjet(item.idProjet)
              break
          }
          fetchData()
        } catch (error) {
          console.error("Erreur lors de la suppression", error)
        }
      }
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(currentItem); 
    try {
      if (modalMode === "add") {
        switch (key) {
          case "parcours":
            await ParcoursService.addParcours(currentItem)
            break
          case "skills":
            await SkillsService.addSkills(currentItem)
            break
          case "projets":
            await ProjetService.addProjet(currentItem)
            break
        }
      } else {
        switch (key) {
          case "presentation":
            await AproposService.updatePresentation(currentItem.idPresentation, currentItem)
            break
          case "parcours":
            await ParcoursService.updateParcours(currentItem.idParcours, currentItem)
            break
          case "skills":
            await SkillsService.updateSkills(currentItem.idSkills, currentItem)
            break
          case "projets":
            await ProjetService.updateProjet(currentItem.idProjet, currentItem)
            break
        }
      }
      setShowModal(false)
      fetchData()
    } catch (error) {
      console.error("Erreur lors de la soumission", error)
    }
  }

  const renderTable = (headers, data, renderRow) => (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {renderRow(item)}
            <td>
              {(key === "presentation" || key === "parcours" || key === "skills" || key === "projets") && (
                <Button variant="info" size="sm" className="mr-2" onClick={() => handleEdit(item)}>
                  Modifier
                </Button>
              )}
              {(key === "messages" || key === "parcours" || key === "skills" || key === "projets") && (
                <Button variant="danger" size="sm" onClick={() => handleDelete(item)}>
                  Supprimer
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )

  const renderForm = () => {
    switch (key) {
      case "presentation":
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Qualité</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.Qualité || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, Qualité: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={currentItem.description || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Photo</Form.Label>
              <Form.Control 
              type="text" 
              value={currentItem.photo || ""}
               onChange={(e) => setCurrentItem({ ...currentItem, Photo: e.target.value })}/>
            </Form.Group>

            <Button type="submit">Enregistrer</Button>
          </Form>
        )
      case "parcours":
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.Titre || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, Titre: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.Date || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, Date: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={currentItem.description || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Entreprise</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.Entreprise || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, Entreprise: e.target.value })}
              />
            </Form.Group>
            <Button type="submit">Enregistrer</Button>
          </Form>
        )
      case "skills":
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.Name || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, Name: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Icône</Form.Label>
              <Form.Control 
              type="text" 
              valut={currentItem.IconeTechno}
              onChange={(e) => setCurrentItem({ ...currentItem, IconeTechno: e.target.value })} />
            </Form.Group>

            <Form.Group>
              <Form.Label>catégory
              </Form.Label>
              <Form.Control
                type="text"
                value={currentItem.category || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}
              />
            </Form.Group>
            <Button type="submit">Enregistrer</Button>
          </Form>
        )
      case "projets":
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.Titre || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, Titre: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={currentItem.description || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Technologie</Form.Label>
              <Form.Control
                as="textarea"
                value={currentItem.Technologie || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, Technologie: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Lien GitHub Front</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.LienGitFront || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, LienGitFront: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Lien GitHub Back</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.LienGitBack || ""}
                onChange={(e) => setCurrentItem({ ...currentItem, LienGitBack: e.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control 
              type="text" 
              value={currentItem.Image || ""}
              onChange={(e) => setCurrentItem({ ...currentItem, Image: e.target.value })} />
            </Form.Group>
            <Button type="submit">Enregistrer</Button>
          </Form>
        )
      default:
        return null
    }
  }

  return (
    <Container className="admin-container">
      <h1 className="admin-title">Administration du Portfolio</h1>
      <Tabs id="admin-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="parcours" title="Parcours">
          <h2>Gestion du Parcours</h2>
          {renderTable(["Titre", "Date", "Description", "Entreprise"], parcours, (item) => (
            <>
              <td>{item.Titre}</td>
              <td>{item.Date}</td>
              <td>{item.Description}</td>
              <td>{item.Entreprise}</td>
            </>
          ))}
        </Tab>
        <Tab eventKey="presentation" title="Présentation">
          <h2>Gestion de la Présentation</h2>
          {renderTable(["Qualités", "Description", "Photo"], presentation, (item) => (
            <>
              <td>{item.Qualité}</td>
              <td>{item.description}</td>
              <td>{item.photo}</td>
            </>
          ))}
        </Tab>
        <Tab eventKey="skills" title="Compétences">
          <h2>Gestion des Compétences</h2>
          {renderTable(["Nom", "Icône", "Catégorie"], skills, (item) => (
            <>
              <td>{item.Name}</td>
              <td>{item.IconeTechno}</td>
              <td>{item.category}</td>
            </>
          ))}
        </Tab>
        <Tab eventKey="messages" title="Messages">
          <h2>Messages Reçus</h2>
          {renderTable(["Nom", "Email", "Contenu"], messages, (item) => (
            <>
              <td>{item.Nom}</td>
              <td>{item.Email}</td>
              <td>{item.Contenu}</td>
            </>
          ))}
        </Tab>
        <Tab eventKey="projets" title="Projets">
          <h2>Gestion des Projets</h2>
          {renderTable(
            ["Titre", "Description", "Technologie", "LienGitFront", "LienGitBack", "Image"],
            projets,
            (item) => (
              <>
                <td>{item.Titre}</td>
                <td>{item.description}</td>
                <td>{item.Technologie}</td>
                <td>{item.LienGitFront}</td>
                <td>{item.LienGitBack}</td>
                <td>{item.Image}</td>
              </>
            ),
          )}
        </Tab>
      </Tabs>
      {(key === "parcours" || key === "skills" || key === "projets") && (
        <Button variant="primary" className="mt-3" onClick={handleAdd}>
          Ajouter un nouvel élément
        </Button>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalMode === "add" ? "Ajouter" : "Modifier"} un élément</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderForm()}</Modal.Body>
      </Modal>
    </Container>
  )
}

export default PageProfilAdmin

