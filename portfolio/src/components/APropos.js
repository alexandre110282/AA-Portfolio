import DropDownMenu from './DropDownMenu.js';
import react from '../assets/React-logo.png'
import javascript from '../assets/JavaScript-logo.png'
import html from '../assets/html-logo.png'
import css from '../assets/CSS3-logo.png'
import sass from '../assets/Sass-logo.png'

function APropos() {
  return (
    <div className="APropos">
      {/* Premier menu déroulant */}
      <DropDownMenu title="Qui-suis-je?">
        <p>Salut ! Je suis un développeur front-end passionné par la création d'expériences utilisateur exceptionnelles et intuitives.<br />
         <br />
         Après avoir terminé ma formation sur OpenClassrooms, je me suis plongé dans le monde du développement web avec une solide expérience dans les langages web modernes comme HTML, CSS et JavaScript.<br />
         <br />
          J'ai également acquis une expertise dans les frameworks populaires tels que React. Mon objectif est de transformer les idées créatives en interfaces web dynamiques et réactives. Toujours avide d'apprendre et de suivre les dernières tendances technologiques, je suis déterminé à contribuer à des projets innovants et à fournir des solutions de qualité qui dépassent les attentes des utilisateurs.</p>
      </DropDownMenu>

      {/* Deuxième menu déroulant */}
      <DropDownMenu title="Atouts">
        <p>Patience, compréhension, réactivité sont les maîtres-mots que j'emplois dans le cadre des réalisations qui peuvent m'être assigné et je déploie mon énergie jusqu'à la satisfaction souhaitée pour les utilisateurs.</p>
      </DropDownMenu>

      {/* Troisième menu déroulant */}
      <DropDownMenu title="Compétences">
       <li> <img src={react} alt="react-logo" /></li>
       <li> <img src={javascript} alt="JS-logo" /></li>
       <li> <img src={html} alt="html-logo" /></li>
       <li> <img src={css} alt="css-logo" /></li>
       <li> <img src={sass} alt="sass-logo" /></li>
      </DropDownMenu>
    </div>
  );
}

export default APropos;