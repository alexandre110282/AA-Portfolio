import React from 'react';
import "../styles/Card.scss"

function Card({ projet }) {
  
  const handleClick = () => {
    window.open(projet.lien_github);
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
