import { Routes, Route, useLocation } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Importez votre fichier de configuration i18n

import Header from './Header';
import CardList from './CardList';
import Error404 from './404';
import APropos from './APropos';
import Banner from './Banner';
import Footer from './Footer';
import BannerApp from '../assets/5Mx7.gif';
import BannerApropos from '../assets/picmix.com_366171.gif';
import '../styles/App.scss';

function App() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  const bannerImage = isProjectsPage ? BannerApropos : BannerApp;
  const showText = !isProjectsPage;

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Header />
        <Banner key={location.pathname} image={bannerImage} showText={showText} />
        <Routes>
          <Route path="/" element={<APropos />} />
          <Route path="/projects" element={<CardList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;