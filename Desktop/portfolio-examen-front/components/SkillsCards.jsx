import React from 'react';
import { Card } from 'react-bootstrap';

const SkillsCards = ({ skills }) => {

  return (
    <div className="skills-card">
      <Card style={{ width: '3vw', backgroundColor: 'transparent', border: 'none' }}>
        <Card.Img
          variant="top"
          src={skills.IconeTechno}
          className="skills-image"
        />
      </Card>
      <div className="card-title-container">
        {skills.Name}
      </div>
    </div>
  );
};

export default SkillsCards;
