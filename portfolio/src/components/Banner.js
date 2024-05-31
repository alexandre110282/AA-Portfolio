import PropTypes from 'prop-types';
import '../styles/Banner.scss';

function Banner(props) {
  return (
    <div className="banner-container">
      <img src={props.image} alt="banner" className="bannerImg" />
      <div className='bannerText'>
        {props.showText && (
        <>
          <p>Bienvenue</p>
          <p>Depuis la découverte du langage informatique, c'en est devenu ma passion</p>
        </>
        )}
      </div>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  showText: PropTypes.bool, // Ajoutez la prop showText comme un booléen facultatif
};

export default Banner;