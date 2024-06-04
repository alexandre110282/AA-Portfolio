import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Card.scss"

function Card({ projet }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open(projet.lien_github); // Redirige vers l'URL GitHub du projet
  };

  return (
    <>
    <div className='card-content'>
    <div className="card" onClick={handleClick}>
      <img src={projet.image} alt={projet.nom} />
    </div>
    
    <div className='card-text'>
    <p>{projet.description}</p>
    <p className='card-stack'>{projet.stack}</p>
    </div>
    </div>
    </>
  );
}

export default Card;
