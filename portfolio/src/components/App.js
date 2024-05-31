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
  const isAProposPage = location.pathname === '/a-propos';
  const showText = !isAProposPage;

  const bannerImage = isAProposPage ? BannerApropos : BannerApp;

  return (
    <div className="App">
      <Header />
      <Banner key={location.pathname} image={bannerImage} showText={showText} />

      <Routes>
        <Route path="/" element={<APropos />}  />
        <Route path="/a-propos" element={<CardList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;