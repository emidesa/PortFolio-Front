import React from 'react';
import { Card } from 'react-bootstrap';

const SkillsCards = ({ skills }) => {

  return (
    <div className="skills-card">
      <Card style={{ width: '5vw' }}>
        <Card.Img
          variant="top"
          src={skills.IconeTechno}
          className="skills-image"
        />
      </Card>
      <div className="card-title-container">
        <h5>{skills.Name}</h5>
      </div>
    </div>
  );
};

export default SkillsCards;
