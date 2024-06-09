import React from 'react';
import "../styles/Card.scss";
import { useTranslation } from 'react-i18next';

function Card({ projet }) {
  const { t } = useTranslation();
  const translatedProject = t(`projectsData.${projet.id - 1}`, { returnObjects: true });

  const handleClick = () => {
    window.open(translatedProject.lien_github);
  };

  return (
    <div className='card-content'>
      <div className="card" onClick={handleClick}>
        <img src={translatedProject.image} alt={translatedProject.nom} />
      </div>
      <div className='card-text'>
        <p>{translatedProject.description}</p>
        <p className='card-stack'>{translatedProject.stack}</p>
      </div>
    </div>
  );
}

export default Card;