import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../styles/Banner.scss';

function Banner(props) {
  const { t } = useTranslation();

  console.log(t('welcome')); // Devrait afficher "Bienvenue" ou "Welcome"

  return (
    <div className="banner-container">
      <img src={props.image} alt="banner" className="bannerImg" />
      <div className='bannerText'>
        {props.showText && (
          <>
            <h1>{t('welcome')}</h1>
            <p>{t('passion')}</p>
          </>
        )}
      </div>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  showText: PropTypes.bool,
};

export default Banner;