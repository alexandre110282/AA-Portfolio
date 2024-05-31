import '../styles/Footer.scss'
import githubLogo from '../assets/github_logo.png';
import instagramLogo from '../assets/instagram_logo.png';

function Footer() {
  return (
    <footer>
      <p>Connectez-vous avec nous :</p>
      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="Logo GitHub" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Logo Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;