import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import '../styles/Header.scss';

function Header() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToAPropos = () => {
    navigate('/');
  };

  const goToProjects = () => {
    navigate('/projects');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <h1 className='name'> Portfolio Alexandre Abdilla </h1>
      <nav>
        <ul className='nav__list'>
          <li onClick={goToAPropos}>{t('about')}</li>
          <li onClick={goToProjects}>{t('projects')}</li>
        </ul>
      </nav>
      <div className="language-buttons">
        <button onClick={() => changeLanguage('fr')}>FR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </header>
  );
}

export default Header;