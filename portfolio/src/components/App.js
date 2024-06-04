import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header.js';
import CardList from './CardList';
import Error404 from './404.js';
import APropos from './APropos';
import Banner from './Banner.js';
import Footer from './Footer.js';
import BannerApp from '../assets/5Mx7.gif';
import BannerApropos from '../assets/picmix.com_366171.gif';
import '../styles/App.scss'

function App() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/AA-Portfolio/projects';
  const bannerImage = isProjectsPage ? BannerApropos : BannerApp;
  const showText = !isProjectsPage;

  return (
    <div className="App">
      <Header />
      <Banner key={location.pathname} image={bannerImage} showText={showText} />

      <Routes>
        <Route path="/AA-Portfolio" element={<APropos />}  />
        <Route path="/AA-Portfolio/projects" element={<CardList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;