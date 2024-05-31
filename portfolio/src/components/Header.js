import { useNavigate } from 'react-router-dom';
import '../styles/Header.scss';


function Header() {
  const navigate = useNavigate();

  // Fonction pour naviguer vers la page À Propos lorsque le mot est cliqué
  const goToAPropos = () => {
    navigate('/');
  };

  // Fonction pour naviguer vers la page principale lorsque "Accueil" est cliqué
  const goToAccueil = () => {
    navigate('/a-propos');
  };

  return (
    <header className="header">
      <h1 className='name'> Portfolio Abdilla Alexandre </h1>
      <nav >
        <ul className='nav__list'>
          <li onClick={goToAPropos}>À Propos</li>
          <li onClick={goToAccueil}>Mes Projets</li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;