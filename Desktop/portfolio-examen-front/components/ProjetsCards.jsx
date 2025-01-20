import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

function ProjetsCards({ projets }) {
  const [showModal, setShowModal] = useState(false);

  // Fonction pour ouvrir le modal
  const handleShow = () => setShowModal(true);

  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={projets.Image} alt={projets.Titre} />
        <Card.Body>
          <Card.Title>{projets.Titre}</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            Voir détails
          </Button>
        </Card.Body>
      </Card>

      {/* Modal pour afficher les détails du projet */}
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
  );
}

export default ProjetsCards;
