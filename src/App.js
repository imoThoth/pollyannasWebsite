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
import EnitansGame from './components/projects/EnitansGame';
import TwelfthNight from './components/projects/TwelfthNight';
import OneEighty from './components/projects/OneEighty';
import WildShortAnimal from './components/projects/WildShortAnimal';
import ImmersiveMorrocan from './components/projects/ImmersiveMorrocan';
import NiceWork from './components/projects/NiceWorkIfYouCanGetIt';
import MX_DRAG_UK from './components/projects/MIMI_DRAG';
import Fish_Wife from './components/projects/Fish_Wife';
import HitchHikers from './components/projects/HitchHikers';
import EmptyChairOliverTwist from './components/projects/EmptyChairOliverTwist';
import FiveYears from './components/projects/FiveYears';
import GlastonburyLondonPride from './components/projects/GlastonburyLondonPride';
import HappyDeathDay from './components/projects/HappyDeathDay';
import LatitudeGlastonbury from './components/projects/LatitudeGlastonbury';
import LegallyBlonde from './components/projects/LegallyBlonde';
import LightningThief from './components/projects/LightningThief';
import Macbeth from './components/projects/Macbeth';
import ParkAndReed from './components/projects/ParkAndReed';
import Pippin from './components/projects/Pippin';
import RomeoJuliet from './components/projects/RomeoJuliet';
import Scratch from './components/projects/Scratch';
import SinkThePinkFarewellBall from './components/projects/SinkThePinkFarewellBall';
import SnowQueen from './components/projects/SnowQueen';
import TamingOfTheShrew from './components/projects/TamingOfTheShrew';
import TyrantsKiss from './components/projects/TyrantsKiss';
import SundayInThePark from './components/projects/SundayInThePark';
import SherlockHolmesInvisibleThing from './components/projects/SherlockHolmesInvisibleThing';
import ScenicPaintingII from './components/projects/ScenicPaintingII';
import ScenicPainting from './components/projects/ScenicPainting';
import PropMaking from './components/projects/PropMaking';





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
            <Route path='/portfolio/Enitans Game' element={<EnitansGame />} />
            <Route path='/portfolio/Twelfth Night' element={<TwelfthNight />} />
            <Route path='/portfolio/One Hundred and Eighty' element={<OneEighty />} />
            <Route path='/portfolio/Wild Animal' element={<WildShortAnimal />} />
            <Route path='/portfolio/Immersive 70s Marrakesh' element={<ImmersiveMorrocan />} />
            <Route path='/portfolio/Nice Work If You Can Get It' element={<NiceWork />} />
            <Route path='/portfolio/Drag Mx Great Britain' element={<MX_DRAG_UK />} />
            <Route path='/portfolio/Fish Wife' element={<Fish_Wife />} />
            <Route path='/portfolio/Immersive Hitchhikers Guide to The Galaxy' element={<HitchHikers />} />
            <Route path='/portfolio/Romeo and Juliet, Dreaming in English, Maid Marian' element={<RomeoJuliet />} />
            <Route path='/portfolio/Scratch' element={<Scratch />} />
            <Route path='/portfolio/The Lightning Thief (UK Premier)' element={<LightningThief />} />
            <Route path='/portfolio/Latitude, Mighty Hoopla and Glastonbury Festivals' element={<LatitudeGlastonbury />} />
            <Route path='/portfolio/Sunday in The Park with George' element={<SundayInThePark />} />
            <Route path='/portfolio/5 Years' element={<FiveYears />} />
            <Route path='/portfolio/Pippin' element={<Pippin />} />
            <Route path='/portfolio/Happy Death Day' element={<HappyDeathDay />} />
            <Route path='/portfolio/Glastonbury Festival and London Pride' element={<GlastonburyLondonPride />} />
            <Route path='/portfolio/Sink The Pink Farewell Ball' element={<SinkThePinkFarewellBall />} />
            <Route path='/portfolio/Legally Blonde' element={<LegallyBlonde />} />
            <Route path='/portfolio/Snow Queen' element={<SnowQueen />} />
            <Route path='/portfolio/Park and Reed' element={<ParkAndReed />} />
            <Route path='/portfolio/Taming of the Shrew' element={<TamingOfTheShrew />} />
            <Route path='/portfolio/The Empty Chair and Oliver Twist' element={<EmptyChairOliverTwist />} />
            <Route path='/portfolio/Sherlock Holmes and the Invisible Thing' element={<SherlockHolmesInvisibleThing />} />
            <Route path='/portfolio/The Tyrants Kiss' element={<TyrantsKiss />} />
            <Route path='/portfolio/Macbeth' element={<Macbeth />} />
            <Route path='/portfolio/Prop Making' element={<PropMaking />} />
            <Route path='/portfolio/Scenic Painting' element={<ScenicPainting />} />
            <Route path='/portfolio/Scenic Painting II' element={<ScenicPaintingII />} />
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
