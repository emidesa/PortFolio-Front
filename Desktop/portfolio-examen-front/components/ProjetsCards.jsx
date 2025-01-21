import { useState } from "react"
import { Button, Card, Modal } from "react-bootstrap"
import "../styles/projets.css"

function ProjetsCards({ projets }) {
  const [showModal, setShowModal] = useState(false)
  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <>
      <Card className="project-card">
        <Card.Img className="project-image" variant="top" src={projets.Image} alt={projets.Titre} />
        <Card.Body className="project-body">
          <Card.Title className="project-title">{projets.Titre}</Card.Title>
          <Button className="project-button" onClick={handleShow}>
            Voir détails
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{projets.Titre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Description:</h5>
          <p>{projets.description}</p>
          <h5>Technologies:</h5>
          <p>{projets.Technologie}</p>
          <h5>Lien GitHub</h5>
          <p>{projets.LienGitFront}</p>
          <p>{projets.LienGitBack}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjetsCards

