import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Card.js';
import '../styles/CardList.scss';

function CardList() {
  const { t } = useTranslation();
  const projects = t('projectsData', { returnObjects: true });

  return (
    <div className="projet-list">
      {projects.map((projet, index) => (
        <Card key={index} projet={projet} />
      ))}
    </div>
  );
}

export default CardList;