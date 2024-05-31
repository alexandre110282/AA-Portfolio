import DropDownMenu from './DropDownMenu.js';

function APropos() {
  return (
    <div className="APropos">
      
      
      {/* Premier menu déroulant */}
      <DropDownMenu title="Qui-suis-je?">
        Je suis un développeur front-end passionné par la création d'expériences utilisateur exceptionnelles et intuitives. Avec une solide expérience dans les langages web modernes tels que HTML, CSS et JavaScript, ainsi qu'une expertise dans les frameworks populaires comme React et Vue.js, je m'efforce de transformer les concepts créatifs en interfaces web dynamiques et réactives. Toujours avide d'apprendre et de m'adapter aux dernières tendances technologiques, je suis déterminé à contribuer à des projets innovants et à fournir des solutions de qualité qui dépassent les attentes des utilisateurs.
      </DropDownMenu>

      {/* Deuxième menu déroulant */}
      <DropDownMenu title="Atouts">
        Patience, compréhension, réactivité sont les maîtres-mots que j'emplois dans le cadre des réalisations qui peuvent m'être assigné et je déploie mon énergie jusqu'à la satisfaction souhaitée pour les utilisateurs.
      </DropDownMenu>

      {/* Troisième menu déroulant */}
      <DropDownMenu title="Spécialités">
       <li> <img src="/React-logo.png" alt="react-logo" /></li>
       <li> <img src="/JavaScript-logo.png" alt="JS-logo" /></li>
       <li> <img src="/html-logo.png" alt="html-logo" /></li>
       <li> <img src="/CSS3-logo.png" alt="css-logo" /></li>
       <li> <img src="/Sass-logo.png" alt="sass-logo" /></li>
      </DropDownMenu>

      
      
    </div>
  );
}

export default APropos;