import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigation from './components/topNavigation/TopNavigation';
import BootStrapCarousel from './components/homePage/BootstrapCarousel';
import Portfolio from './components/portoflioPage/Portfolio';
import Contact from './components/contactPage/Contact';
import About from './components/aboutPage/About';
import Footer from './components/footerComponent/Footer';
import './App.css'; // Import custom CSS for layout adjustments
import Project1 from './components/projects/Project1';
import CoffeeGuy from './components/projects/CoffeeGuy';
import EnitansGame from './components/projects/EnitansGame';
import TwelfthNight from './components/projects/TwelfthNight';
import OneEighty from './components/projects/OneEighty';
import WildShortAnimal from './components/projects/WildShortAnimal';
import ImmersiveMorrocan from './components/projects/ImmersiveMorrocan';
import NiceWork from './components/projects/NiceWorkIfYouCanGetIt';
import MX_DRAG_UK from './components/projects/MIMI_DRAG';
import Fish_Wife from './components/projects/Fish_Wife';
import HitchHikers from './components/projects/HitchHikers';
import MasonryProject from './components/projects/MasonryProject';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <TopNavigation />

        <main className="flex-grow-1">
          <Routes>
            <Route path='/' element={<BootStrapCarousel />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/The Boys' element={<Project1 />} />
            <Route path='/portfolio/Coffee Guy' element={<CoffeeGuy />} />
            <Route path='/portfolio/EnitansGame' element={<EnitansGame />} />
            <Route path='/portfolio/TwelfthNight' element={<TwelfthNight />} />
            <Route path='/portfolio/180' element={<OneEighty />} />
            <Route path='/portfolio/WildAnimal' element={<WildShortAnimal />} />
            <Route path='/portfolio/Immersive: Morrocan Birthday Experience' element={<ImmersiveMorrocan />} />
            <Route path='/portfolio/Nice Work If You Can Get It' element={<NiceWork />} />
            <Route path='/portfolio/Drag Mx Great Britain' element={<MX_DRAG_UK />} />
            <Route path='/portfolio/Fish Wife' element={<Fish_Wife />} />
            <Route path='/portfolio/Immersive: Hitchiker Guide to the Galaxy' element={<HitchHikers />} />
            <Route path='/portfolio/sample' element={<MasonryProject />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
