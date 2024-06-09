import React from 'react';
import DropDownMenu from './DropDownMenu'; // Assurez-vous que le chemin est correct
import react from '../assets/React-logo.png';
import javascript from '../assets/JavaScript-logo.png';
import html from '../assets/html-logo.png';
import css from '../assets/CSS3-logo.png';
import sass from '../assets/Sass-logo.png';
import { useTranslation } from 'react-i18next';

function APropos() {
  const { t } = useTranslation();

  return (
    <div className="APropos">
      {/* Premier menu déroulant */}
      <DropDownMenu title={t('title1')}>
        <div dangerouslySetInnerHTML={{ __html: t('description1') }} />
      </DropDownMenu>

      {/* Deuxième menu déroulant */}
      <DropDownMenu title={t('title2')}>
        <div dangerouslySetInnerHTML={{ __html: t('description2') }} />
      </DropDownMenu>

      {/* Troisième menu déroulant */}
      <DropDownMenu title={t('title3')}>
        <ul>
          <li><img src={react} alt="react-logo" /></li>
          <li><img src={javascript} alt="JS-logo" /></li>
          <li><img src={html} alt="html-logo" /></li>
          <li><img src={css} alt="css-logo" /></li>
          <li><img src={sass} alt="sass-logo" /></li>
        </ul>
      </DropDownMenu>
    </div>
  );
}

export default APropos;