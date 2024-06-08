import { useNavigate } from 'react-router-dom';
import '../styles/Header.scss';


function Header() {
  const navigate = useNavigate();
  const goToAPropos = () => {
    navigate('/');
  };

  const goToProjects = () => {
    navigate('/projects');
  };

  return (
    <header className="header">
      <h1 className='name'> Portfolio Alexandre Abdilla </h1>
      <nav >
        <ul className='nav__list'>
          <li onClick={goToAPropos}>À Propos</li>
          <li onClick={goToProjects}>Mes Projets</li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;